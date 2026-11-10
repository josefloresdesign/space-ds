# Color

Two layers: **primitives** (the palette) and **semantic** tokens (what a color is *for*). Components use semantic tokens only, which is why they follow light and dark mode with no extra work.

## Primitives

Seven palettes, each `50 → 900`:

| Palette | Role | Base |
|---|---|---|
| `primary` | Brand violet | `--color-primary-500` `#7d49f8` |
| `secondary` | Info / links blue | `--color-secondary-500` `#1b6ddf` |
| `success` | Positive | `--color-success-600` |
| `warning` | Attention | `--color-warning-400` |
| `danger` | Destructive, errors | `--color-danger-500` |
| `surface` | Light neutrals | `--color-surface-50` white → `900` |
| `neutral-dark` | Dark-mode neutrals | `--color-neutral-dark-900` |

Plus **alpha** colors for tints and overlays: `--color-alpha-primary-10/20/30`, `--color-alpha-black-5…80`, `--color-alpha-white-5…20`.

## Semantic tokens

| Group | Use for | Examples |
|---|---|---|
| `bg-*` | Page and surfaces | `bg-canvas`, `bg-surface`, `bg-surface-raised`, `bg-surface-sunken`, `bg-brand-subtle`, `bg-danger-subtle`, `bg-overlay` |
| `text-*` | Text | `text-primary`, `text-secondary`, `text-tertiary`, `text-disabled`, `text-brand`, `text-link`, `text-danger`, `text-on-action` |
| `icon-*` | Icons | `icon-primary`, `icon-secondary`, `icon-brand`, `icon-on-action` |
| `border-*` | Borders and dividers | `border-default`, `border-subtle`, `border-strong`, `border-focus`, `border-danger` |
| `action-*` | Interactive fills, by state | `action-primary-default/hover/pressed/subtle`, `action-neutral-*`, `action-danger-*`, `action-disabled` |
| `shadow-*` | Shadow color | `shadow-subtle`, `shadow-default`, `shadow-strong` |

In code every semantic token is prefixed with `--color-`: `--color-bg-surface`, `--color-text-primary`. In Tailwind that gives `bg-bg-surface`, `text-text-primary`, `border-border-subtle`, `bg-action-primary-default`.

## Dark mode

Semantic tokens switch automatically with the user's system setting. To force a mode, set it on `<html>`:

```html
<html data-theme="dark">
```

## Rules

- Use semantic tokens in components; primitives only to define new semantic tokens.
- Never write a hex value in a component.
- Text on `action-*` fills uses `text-on-action` (or `text-on-warning` on warning).
- Body text must meet WCAG AA contrast (4.5:1). `text-primary` and `text-secondary` do on every `bg-*` surface.

```html
<div class="bg-bg-surface text-text-primary border border-border-subtle">
  <p class="text-text-secondary">Supporting text</p>
  <a class="text-text-link" href="#">Link</a>
</div>
```

Full list with values: [tokens.md](../tokens.md).
