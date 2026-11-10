# Motion, z-index and layout

## Motion

Smaller things move faster. Most transitions take 150 to 300ms.

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 75ms | Color, opacity on hover |
| `--duration-fast` | 150ms | Small controls (switch thumb, checkbox) |
| `--duration-base` | 200ms | Default |
| `--duration-slow` | 300ms | Menus, popovers |
| `--duration-slower` | 500ms | Dialogs, page-level |

| Easing | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Moves within the screen |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Things appearing (slows down at the end) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Things leaving (speeds up) |

```html
<div class="transition-colors duration-(--duration-base) ease-standard">…</div>
```

Respect `prefers-reduced-motion`: drop movement, keep fades.

## Z-index

| Token | Value |
|---|---|
| `--z-base` | 0 |
| `--z-raised` | 10 |
| `--z-dropdown` | 1000 |
| `--z-sticky` | 1100 |
| `--z-overlay` | 1300 |
| `--z-modal` | 1400 |
| `--z-popover` | 1500 |
| `--z-toast` | 1600 |
| `--z-tooltip` | 1700 |

Use the token, never a magic number: `z-(--z-modal)`.

## Breakpoints

Mobile-first, the same as Tailwind: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

## Layout grid

These tokens change on their own at each breakpoint, just like the layout modes in Figma:

| Token | base | md | lg | xl | 2xl |
|---|---|---|---|---|---|
| `--grid-columns` | 4 | 8 | 12 | 12 | 12 |
| `--grid-gutter` | 16 | 24 | 24 | 24 | 32 |
| `--grid-margin` | 16 | 32 | 40 | 64 | 80 |
| `--section-gap` | 48 | 64 | 64 | 80 | 96 |
| `--stack-gap` | 16 | 24 | 24 | 32 | 32 |

`--container-max-width` follows the breakpoint (640 at `sm`, 768 at `md`…), and `--card-min-width` goes from 156 to 260.

```html
<main class="mx-auto max-w-(--container-max-width) px-(--grid-margin)">
  <div class="grid grid-cols-(--grid-columns) gap-(--grid-gutter)">…</div>
</main>
```

To show or hide by device, use Tailwind: `hidden md:block` (desktop only), `md:hidden` (mobile only).
