# Radius, shadow and effects

## Radius

| Token | px | Tailwind |
|---|---|---|
| `--radius-none` · `xs` · `sm` · `md` · `lg` · `xl` · `2xl` · `3xl` · `4xl` | 0 · 2 · 4 · 6 · 8 · 12 · 16 · 24 · 32 | `rounded-lg` |
| `--radius-full` | pill / circle | `rounded-full` |

Use the **semantic** radius in components:

| Token | Value | Use |
|---|---|---|
| `--radius-control` | 8 | Buttons, inputs, tabs, menu rows |
| `--radius-badge` | 4 | Badges, small tags |
| `--radius-card` | 12 | Cards |
| `--radius-overlay` | 8 | Menus, popovers, tooltips |
| `--radius-dialog` | 16 | Dialogs |
| `--radius-pill` | full | Chips, switches, avatars |

## Shadow and elevation

Shadows go from very soft to strong: `shadow-2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, plus `shadow-inset-xs` for sunken fields.

In components, use the **elevation** levels. They say how high something sits above the page:

| Level | Tailwind | Use |
|---|---|---|
| raised | `shadow-elevation-raised` | Cards |
| sticky | `shadow-elevation-sticky` | Sticky headers and bars |
| overlay | `shadow-elevation-overlay` | Menus, popovers, tooltips |
| dialog | `shadow-elevation-dialog` | Dialogs, drawers |

Pair each level with its surface: `bg-bg-surface-raised` for raised and overlay. In dark mode the surface gets lighter instead of relying on the shadow.

## Focus ring

`shadow-focus-ring` draws a 2px gap and a 2px ring in `border-focus`. Every interactive element shows it on keyboard focus:

```html
<button class="focus-visible:outline-none focus-visible:shadow-focus-ring">…</button>
```

## Opacity

`--opacity-0` … `--opacity-100`. Two special cases:

- `--opacity-disabled` (0.4): only for images or custom content. Regular UI uses the disabled colors (`text-disabled`, `action-disabled`).
- `--opacity-hover-overlay` (0.1): a tint laid over custom content on hover.

## Blur

`blur-xs` (4) · `sm` (8) · `md` (12) · `lg` (16) · `xl` (24) · `2xl` (40) · `3xl` (64), for backdrops and glass effects.
