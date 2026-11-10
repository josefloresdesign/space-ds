# Tooltip

Short explanation shown on hover or keyboard focus. It can grow from a single line into a small panel for product tours.

## Placement

Twelve positions: top, bottom, left and right, each aligned at start, center or end. Pick the one that stays on screen and doesn't cover what it explains. `bottom-center` is the usual choice.

## Content

Start with a single line. Add a title, close button, scroll or footer (step dots and a "Next" link) only when you need them.

## Companion parts

- `dot-tooltip` — a small dot that marks something with an explanation (`default` · `default-hover` · `select` · `select-hover`).
- `link-tooltip` — the inline action in the footer (`default` · `hover`).

## Figma properties

tooltip: `direction`, `header`, `title`, `footer`, `icon-close`, `link`, `scroll`.

## Code

```html
<span class="relative inline-flex group">
  <button type="button" aria-describedby="tip-export" class="h-control-md px-3 rounded-control">Export</button>
  <span role="tooltip" id="tip-export"
    class="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 z-(--z-tooltip) w-max max-w-80
           px-3 py-2 rounded-overlay bg-bg-surface-raised border border-border-subtle shadow-elevation-overlay
           text-body-sm text-text-secondary opacity-0 transition-opacity duration-(--duration-fast)
           group-hover:opacity-100 group-focus-within:opacity-100">
    Download the table as CSV
  </span>
</span>
```

## Do

- Open on hover and on keyboard focus, not on click only.
- Keep it to one or two lines unless it is a product tour.
- Explain the control; do not repeat its label.
- Leave a small gap between the arrow and the trigger.

## Don't

- An action only reachable inside a tooltip.
- Information the user needs to complete a task.
- A tooltip on a disabled control that cannot be focused.
- Cover the element the tooltip describes.
