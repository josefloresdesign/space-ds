# Space and sizing

## Space

A 4px base scale with 34 steps from 0 to 384px. Half steps (`0_5`, `1_5`, `2_5`, `3_5`) are for tight spots such as badges and icon gaps.

| Token | px | Tailwind |
|---|---|---|
| `--space-1` | 4 | `p-1`, `gap-1` |
| `--space-2` | 8 | `p-2` |
| `--space-3` | 12 | `p-3` |
| `--space-4` | 16 | `p-4` |
| `--space-6` | 24 | `p-6` |
| `--space-8` | 32 | `p-8` |
| `--space-12` | 48 | `p-12` |
| `--space-16` | 64 | `p-16` |

The scale matches Tailwind's default spacing, so `p-4` is `--space-4`. Figma writes half steps with `_` (`space-0_5`); Tailwind uses `.` (`p-0.5`).

**Rule:** small gaps group related things; bigger gaps separate them. Spacing inside a component is smaller than spacing between components.

| Situation | Typical space |
|---|---|
| Icon ↔ label | 4–8 |
| Inside controls (padding) | 8–16 |
| Between related items | 8–16 |
| Cards and panels (padding) | 16–24 |
| Between components | 24–32 |
| Between sections | 48–96 |

## Sizing

Fixed sizes that components share, so they line up in a row.

| Token | px | Tailwind | Use |
|---|---|---|---|
| `--size-control-sm` | 32 | `h-control-sm` | Small buttons, inputs, tabs, menu rows |
| `--size-control-md` | 40 | `h-control-md` | Default control height |
| `--size-control-lg` | 48 | `h-control-lg` | Touch-first controls |
| `--size-touch-target` | 44 | `min-h-touch-target` | Minimum tap area (WCAG 2.5.5) |
| `--size-icon-xs` … `xl` | 12 · 16 · 20 · 24 · 32 | `size-icon-sm` | Icons |
| `--size-avatar-sm` … `xl` | 24 · 32 · 40 · 56 | `size-avatar-md` | Avatars |
| `--size-chip-sm` · `md` | 24 · 32 | `h-chip-md` | Chips |

```html
<button class="h-control-md px-4 inline-flex items-center gap-2">
  <svg class="size-icon-sm" aria-hidden="true">…</svg>
  Save
</button>
```

Keep controls in the same row at the same height.
