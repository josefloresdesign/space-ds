# Space Design System (Space DS)

Open source design system. The bridge between design and development: the same token names in Figma and in code, for plain CSS and Tailwind CSS v4, in light and dark mode.

- **Figma**: [Space Design System](https://www.figma.com/design/P5KYJrEA2XqhVvwvI0IFgZ/Space-Design-System) (source of truth)
- **Code**: this repository

---

## What's inside

| File | Use it for |
|---|---|
| `css/styles.css` · `css/styles.min.css` | Plain CSS variables, no build step |
| `tailwind/theme.css` · `tailwind/theme.min.css` | Tailwind CSS v4 theme (`@theme`) |
| `tailwind/output.css` · `tailwind/output.min.css` | Precompiled Tailwind with the theme |
| `tokens/tokens.json` | All tokens in [DTCG](https://www.designtokens.org/) format (React, Style Dictionary, other tools) |

Every file is generated from the Figma variables. Do not edit them by hand.

---

## Quick start

### Plain CSS

```html
<link rel="stylesheet" href="css/styles.min.css">
```

```css
.card {
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-elevation-raised);
  padding: var(--space-4);
}
```

### Tailwind CSS v4

```css
/* your main CSS file */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap');
@import "tailwindcss";
@import "./space-ds/tailwind/theme.css";
```

```html
<button class="h-control-md px-4 rounded-control bg-action-primary-default hover:bg-action-primary-hover text-text-on-action text-body-md font-semibold">
  Save changes
</button>
```

---

## Tokens

Names match Figma: `primary/500` in Figma is `--color-primary-500` in code.

| Group | Examples | Tailwind |
|---|---|---|
| Color, primitives | `--color-primary-500`, `--color-surface-900`, `--color-alpha-black-10` | `bg-primary-500` |
| Color, semantic | `--color-bg-surface`, `--color-text-primary`, `--color-border-subtle`, `--color-action-primary-default` | `bg-bg-surface`, `text-text-primary` |
| Typography | `--text-body-md` (size + line-height), `--font-weight-semibold` | `text-body-md font-semibold` |
| Space | `--space-4` = 16px, half steps `--space-0_5` … | `p-4`, `p-0.5` (Tailwind default scale) |
| Size | `--size-control-md` (40), `--size-icon-sm` (16), `--size-avatar-lg` | `h-control-md`, `size-icon-sm` |
| Radius | `--radius-control`, `--radius-card`, `--radius-full` | `rounded-control` |
| Shadow & elevation | `--shadow-sm`, `--shadow-elevation-overlay`, `--shadow-focus-ring` | `shadow-elevation-overlay` |
| Motion | `--duration-base`, `--ease-standard` | `ease-standard` |
| Others | `--opacity-disabled`, `--z-modal`, `--blur-md`, `--focus-ring-width` | `blur-md` |
| Layout (responsive) | `--grid-columns`, `--grid-gutter`, `--container-max-width`, `--section-gap` | `gap-(--grid-gutter)` |

Use **semantic** colors in components (`bg-bg-surface`, `text-text-primary`, `bg-action-*`). Primitives are the palette behind them.

### Dark mode

Semantic colors switch automatically with the system preference. To force a mode, set it on `<html>`:

```html
<html data-theme="dark">   <!-- or data-theme="light" -->
```

Components need no `dark:` classes: the tokens change, the classes stay the same.

### Breakpoints

Mobile-first, same as Tailwind: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

---

## Updating tokens from Figma

1. Export the variables and styles from Figma into `tokens/figma/variables.json` and `tokens/figma/styles.json`.
2. Run the build:

```bash
npm install
npm run build
```

This regenerates every file listed above.

---

## License

MIT, see [LICENSE](./LICENSE).
