// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const BASE = '/space-ds';

// Rewrites links between Markdown docs (e.g. "../tokens.md", "button.md")
// into site URLs ("/space-ds/docs/tokens"), so the repo docs work as pages.
function remarkDocLinks() {
  const walk = (node, file) => {
    if (node.type === 'link' && typeof node.url === 'string' && /\.md(#.*)?$/.test(node.url) && !/^https?:/.test(node.url)) {
      const [path, hash = ''] = node.url.split('#');
      const fromDir = (file.history[0] || '').split('/docs/')[1]?.split('/').slice(0, -1) || [];
      const parts = [...fromDir];
      for (const seg of path.split('/')) {
        if (seg === '..') parts.pop();
        else if (seg !== '.') parts.push(seg);
      }
      let slug = parts.join('/').replace(/\.md$/, '').toLowerCase();
      if (slug === 'readme') slug = '';
      node.url = `${BASE}/docs/${slug}${hash ? '#' + hash : ''}`;
    }
    (node.children || []).forEach(c => walk(c, file));
  };
  return (tree, file) => walk(tree, file);
}

export default defineConfig({
  site: 'https://josefloresdesign.github.io',
  base: BASE,
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
  markdown: {
    remarkPlugins: [remarkDocLinks],
    shikiConfig: { theme: 'github-dark-default' },
  },
});
