# Button

Triggers an action. One primary action (solid) per screen or modal.

## Variants

| Variant | Use |
|---|---|
| `solid` | Primary action |
| `outline` | Secondary action |
| `ghost` | No fill; tables and toolbars |
| `link` | Inline navigation look |
| `danger` | Delete, discard |
| `success` | Confirm |
| `warning` | Needs attention |

## Sizes

| Size | Height | Text |
|---|---|---|
| `sm` | 32 (`control-sm`) | `body-sm` — dense desktop only |
| `md` | 40 (`control-md`) | `body-md` — **default** |
| `lg` | 48 (`control-lg`) | `body-lg` — touch |

## States

`default` · `hover` · `pressed` · `disabled`. Any state can show the focus ring.

## Figma properties

`variant`, `size`, `state`, `label`, `show-leading-icon` + `leading-icon`, `show-trailing-icon` + `trailing-icon`, `show-focus-ring`, `show-spinner` (loading).

## Code

```html
<!-- solid · md -->
<button type="button"
  class="inline-flex items-center justify-center gap-2 h-control-md px-4 rounded-control
         bg-action-primary-default hover:bg-action-primary-hover active:bg-action-primary-pressed
         text-text-on-action text-body-md font-semibold
         disabled:bg-action-disabled disabled:text-text-disabled
         focus-visible:outline-none focus-visible:shadow-focus-ring">
  Save changes
</button>

<!-- outline · md -->
<button type="button"
  class="inline-flex items-center justify-center gap-2 h-control-md px-4 rounded-control
         border border-border-brand text-text-brand hover:bg-action-primary-subtle
         text-body-md font-semibold focus-visible:outline-none focus-visible:shadow-focus-ring">
  Cancel
</button>

<!-- danger · sm -->
<button type="button"
  class="inline-flex items-center justify-center h-control-sm px-3 rounded-control
         bg-action-danger-default hover:bg-action-danger-hover text-text-on-action text-body-sm font-semibold">
  Delete
</button>
```

## Icon button

Square button with only an icon. Same variants except `link`; same sizes (32, 40, 48 square).

```html
<button type="button" aria-label="Close"
  class="inline-flex items-center justify-center size-control-md rounded-control
         text-icon-secondary hover:bg-action-neutral-subtle focus-visible:outline-none focus-visible:shadow-focus-ring">
  <svg class="size-icon-md" aria-hidden="true">…</svg>
</button>
```

## Accessibility

- Use `<button>` for actions and `<a>` for navigation.
- An icon button always needs `aria-label`.
- While loading, keep the width, set `aria-busy="true"` and disable repeat clicks.

## Do

- One primary action (solid) per screen or modal.
- Lead with the verb: "Save changes", not "Changes".
- `danger` for destructive actions only.
- `sm` for dense desktop only; `md` or `lg` on mobile.

## Don't

- Two solid buttons competing in the same row.
- A button that only navigates: that is a link.
- Override the token color to make it stand out.
- An icon button with no `aria-label`.
