# Chip

Compact element for filters, tags and entered values. Use chips in groups; a lone chip reads as a button.

## Variants

| Variant | Use |
|---|---|
| `outline` | Most chips; unselected filters |
| `subtle` | On colored backgrounds |
| `solid` | Selected |

**Filter group** — the main use: outline for available filters, solid with a leading checkmark for applied ones.

## States and sizes

States `default` · `hover` · `pressed` · `disabled`, with an optional focus ring. Sizes `sm` 24 (dense filter bars, tables) · `md` 32 (**default**).

## Slots

An optional leading icon (swap it for an Avatar to show a person) and an optional dismiss button.

## Figma properties

`variant`, `state`, `size`, `label`, `leading-icon`, `dismiss`, `show-focus-ring`.

## Code

```html
<div role="group" aria-label="Filters" class="flex flex-wrap gap-2">
  <!-- applied -->
  <button type="button" aria-pressed="true"
    class="inline-flex items-center gap-1 h-chip-md px-3 rounded-full bg-action-primary-default
           text-text-on-action text-body-sm font-semibold focus-visible:outline-none focus-visible:shadow-focus-ring">
    <svg class="size-icon-sm" aria-hidden="true">…</svg> In stock
  </button>
  <!-- available -->
  <button type="button" aria-pressed="false"
    class="inline-flex items-center h-chip-md px-3 rounded-full border border-border-default bg-bg-surface
           text-text-primary text-body-sm hover:bg-action-neutral-hover focus-visible:outline-none focus-visible:shadow-focus-ring">
    On sale
  </button>
</div>
```

## Do

- Use chips in groups.
- One or two words per chip, never a sentence.
- Show dismiss only where removing is actually possible.
- Keep one variant per group, except the selected ones.

## Don't

- A chip as the primary action of a screen: use Button.
- Mix a removable chip into a row of filter chips.
- Both the checkmark and dismiss on an unselected chip.
- Chips as navigation: use Tabs.
