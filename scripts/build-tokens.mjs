// Space DS · build de tokens
// Lee el export de Figma (tokens/figma/*.json) y genera:
//   tokens/tokens.json        → formato DTCG (W3C), para React u otras herramientas
//   css/styles.css (+ .min)   → variables CSS puras, light + dark
//   tailwind/theme.css (+ .min) → @theme para Tailwind v4, mismos nombres
// Uso: node scripts/build-tokens.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = p => JSON.parse(readFileSync(new URL(p, root), 'utf8'));
const write = (p, s) => { writeFileSync(new URL(p, root), s); console.log('✓', p); };

const V = read('tokens/figma/variables.json');
const S = read('tokens/figma/styles.json');

// ── helpers ─────────────────────────────────────────────────────────
const rem = px => (px === 0 ? '0' : `${+(px / 16).toFixed(4)}rem`);
const slug = name => name.replace(/\//g, '-');
const shadeOrder = (a, b) => {
  const [pa, sa] = a.name.split('/'), [pb, sb] = b.name.split('/');
  if (pa !== pb || !/^\d+$/.test(sa ?? '') || !/^\d+$/.test(sb ?? '')) return 0;
  return +sa - +sb;
};
const items = col => {
  const list = V[col].items.map(([name, type, values]) => ({ name, type, values, modes: V[col].modes }));
  if (col !== 'primitives') return list;
  // agrupa por paleta (en el orden en que aparece cada una) y ordena los tonos 50→900
  const palettes = [...new Set(list.map(it => it.name.split('/')[0]))];
  return palettes.flatMap(p => list.filter(it => it.name.split('/')[0] === p).sort(shadeOrder));
};
const lookup = {}; // nombre Figma → nombre de variable CSS (para resolver alias)

// nombre CSS por colección
const cssName = {
  primitives: n => `--color-${slug(n)}`,
  theme: n => `--color-${slug(n)}`,
  space: n => `--${n}`,
  size: n => `--size-${n}`,
  radius: n => `--${n}`,
  border: n => (n.startsWith('focus') ? `--${n}` : `--border-width-${n.replace('border-', '')}`),
  opacity: n => `--${n}`,
  effects: n => `--${n}`,
  motion: n => `--${n}`,
  'z-index': n => `--${n}`,
  breakpoints: n => `--breakpoint-${n}`,
  typography: n => `--${slug(n).replace('font-size-', 'text-').replace('font-family', 'font-space-ds')}`,
  layout: n => `--${slug(n)}`,
};
for (const col of Object.keys(V)) for (const it of items(col)) lookup[it.name] = cssName[col](it.name);

// valor CSS de un token
function value(col, type, raw) {
  if (typeof raw === 'string' && raw.startsWith('{')) return `var(${lookup[raw.slice(1, -1)]})`;
  if (type === 'C') return raw;
  if (col === 'opacity') return `${raw / 100}`;
  if (col === 'motion') return type === 'T' ? `${Math.round(raw * 1000)}ms` : `cubic-bezier(${raw.join(', ')})`;
  if (col === 'z-index' || col === 'border' || col === 'effects') return col === 'z-index' ? `${raw}` : `${raw}px`;
  if (col === 'radius' && raw === 9999) return '9999px';
  if (col === 'typography') return typeof raw === 'number' ? (Math.abs(raw) < 2 ? (raw < 1 && raw !== 0 && Math.abs(raw) <= 0.1 ? `${raw}em` : `${raw}`) : rem(raw)) : raw;
  return rem(raw);
}

// ── colecciones a listas [nombre, valor] ────────────────────────────
const base = [];   // valores en :root
const dark = [];   // overrides de modo oscuro
const media = {};  // overrides responsivos (layout)

for (const col of ['primitives', 'theme', 'space', 'size', 'radius', 'border', 'opacity', 'effects', 'motion', 'z-index', 'breakpoints']) {
  for (const it of items(col)) {
    base.push([lookup[it.name], value(col, it.type, it.values[0])]);
    if (col === 'theme' && it.values[1] !== it.values[0]) dark.push([lookup[it.name], value(col, it.type, it.values[1])]);
  }
}

// tipografía: familia, pesos, leading, tracking, y tamaños con su line-height
base.push(['--font-space-ds', `"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif`]);
base.push(['--font-sans', 'var(--font-space-ds)']);
for (const [k, w] of Object.entries(S.textWeights)) base.push([`--font-weight-${k}`, `${w}`]);
for (const it of items('typography')) {
  if (it.name.startsWith('leading/')) base.push([`--leading-${it.name.split('/')[1]}`, `${it.values[0]}`]);
  if (it.name.startsWith('tracking/')) base.push([`--tracking-${it.name.split('/')[1]}`, `${it.values[0]}em`]);
}
for (const [role, size, lh, ls] of S.text) {
  base.push([`--text-${role}`, rem(size)]);
  base.push([`--text-${role}--line-height`, `${lh}`]);
  if (ls) base.push([`--text-${role}--letter-spacing`, `${ls}em`]);
}

// sombras desde los effect styles (usan los colores semánticos → cambian solas en dark)
for (const [name, layers] of S.effects) {
  const css = layers.map(([kind, x, y, blur, spread, color]) =>
    `${kind === 'inset' ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px var(${lookup[color]})`).join(', ');
  const n = name === 'focus/ring' ? '--shadow-focus-ring' : `--shadow-${slug(name).replace('shadow-', '')}`;
  base.push([n, css]);
}

// layout responsivo: base en :root, cambios por breakpoint
const bpPx = Object.fromEntries(items('breakpoints').map(it => [it.name, it.values[0]]));
for (const it of items('layout')) {
  if (it.type === 'B') continue; // show/desktop y show/mobile: usar sm:/md: de Tailwind
  const name = lookup[it.name];
  const vals = it.values.map(v => value(it.name === 'grid/columns' ? 'z-index' : 'layout', it.type, v));
  base.push([name, vals[0]]);
  it.modes.forEach((m, i) => {
    if (i === 0 || vals[i] === vals[i - 1]) return; // solo se escribe cuando cambia respecto al breakpoint anterior
    (media[m] ||= []).push([name, vals[i]]);
  });
}

// ── salida CSS ──────────────────────────────────────────────────────
const block = (sel, list, indent = '  ') => `${sel} {\n${list.map(([k, v]) => `${indent}${k}: ${v};`).join('\n')}\n}`;
const darkCss = [
  block('[data-theme="dark"]', dark),
  `@media (prefers-color-scheme: dark) {\n${block('  :root:not([data-theme="light"])', dark, '    ').replace(/\n}$/, '\n  }')}\n}`,
].join('\n\n');
const mediaCss = V.layout.modes.filter(m => media[m]).map(m => [m, media[m]]).map(([m, list]) =>
  `@media (min-width: ${rem(bpPx[m])}) {\n${block('  :root', list, '    ').replace(/\n}$/, '\n  }')}\n}`).join('\n\n');

const header = `/* Space DS · generado desde Figma con scripts/build-tokens.mjs. No editar a mano. */`;
const font = `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap');`;

const minify = css => css
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{};,>])\s*/g, '$1')
  .replace(/:\s+/g, ':')
  .replace(/;}/g, '}')
  .trim();

// CSS puro
const plain = [header, font, block(':root', base), darkCss, mediaCss].join('\n\n') + '\n';
write('css/styles.css', plain);
write('css/styles.min.css', minify(plain) + '\n');

// Tailwind v4: los tokens con namespace de Tailwind van en @theme (generan utilidades),
// el resto en :root. Los tamaños (control, icon, avatar…) se exponen también como spacing: h-control-md.
const twNamespaces = /^--(color|text|font|font-weight|leading|tracking|radius|shadow|blur|ease|breakpoint)-/;
const theme = base.filter(([k]) => twNamespaces.test(k) || k === '--font-sans');
const rest = base.filter(([k]) => !theme.find(([t]) => t === k));
const sizeAsSpacing = items('size').map(it => [`--spacing-${it.name}`, `var(${lookup[it.name]})`]);
const tw = [
  header,
  block('@theme', theme),
  block('@theme inline', sizeAsSpacing),
  block(':root', rest),
  darkCss,
  mediaCss,
].join('\n\n') + '\n';
write('tailwind/theme.css', tw);
write('tailwind/theme.min.css', minify(tw) + '\n');

// ── DTCG (tokens.json) ──────────────────────────────────────────────
const dtcgType = { C: 'color', F: 'number', S: 'string', B: 'boolean', T: 'duration', E: 'cubicBezier' };
const path = (col, name) => [col, ...name.split('/')];
const refPath = name => { for (const col of Object.keys(V)) if (V[col].items.some(([n]) => n === name)) return path(col, name).join('.'); };
const tokenValue = (it, raw) => (typeof raw === 'string' && raw.startsWith('{') ? `{${refPath(raw.slice(1, -1))}}` : raw);
const tokens = { $description: 'Space DS tokens, exported from Figma (P5KYJrEA2XqhVvwvI0IFgZ).' };
const set = (obj, keys, val) => { const last = keys.pop(); let o = obj; for (const k of keys) o = o[k] ||= {}; o[last] = val; };
for (const col of Object.keys(V)) for (const it of items(col)) {
  const leaf = { $type: dtcgType[it.type] };
  if (it.modes.length === 1) leaf.$value = tokenValue(it, it.values[0]);
  else { leaf.$value = tokenValue(it, it.values[0]); leaf.$extensions = { 'space-ds.modes': Object.fromEntries(it.modes.map((m, i) => [m, tokenValue(it, it.values[i])])) }; }
  if (it.type === 'T') leaf.$value = `${Math.round(it.values[0] * 1000)}ms`;
  set(tokens, path(col, it.name), leaf);
}
tokens.textStyles = Object.fromEntries(S.text.map(([role, size, lh, ls]) => [role, { $type: 'typography', $value: { fontFamily: '{typography.font.family}', fontSize: `${size}px`, lineHeight: lh, letterSpacing: `${ls}em` } }]));
tokens.shadows = Object.fromEntries(S.effects.map(([name, layers]) => [slug(name), { $type: 'shadow', $value: layers.map(([kind, x, y, blur, spread, color]) => ({ inset: kind === 'inset', offsetX: `${x}px`, offsetY: `${y}px`, blur: `${blur}px`, spread: `${spread}px`, color: `{${refPath(color)}}` })) }]));
write('tokens/tokens.json', JSON.stringify(tokens, null, 2) + '\n');

console.log(`\n${base.length} variables · ${dark.length} con modo oscuro · ${Object.values(media).flat().length} responsivas`);
