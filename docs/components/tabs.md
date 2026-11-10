# Tabs

Switches between views of the same content. Two components: `tab` (one tab) and `nav-tabs` (the row).

## Type

| Type | Look | Use |
|---|---|---|
| `fixed` | Underline on a 1px baseline | Full-width bar |
| `floating` | Segmented control: the selected tab is raised on a sunken track | Short switcher in a card or navbar |

## Width (nav-tabs)

`fill` (**default**) stretches the tabs across the row; `hug` fits them to their labels.

## States

`default` · `hover` · `select` (current tab) · `select-hover` · `disabled`.

## Sizes and counter

`sm` 32 · `md` 40 (**default**) · `lg` 48. Turn on the counter to show a number next to the label. Labels hug their text, so long names never wrap.

## Figma properties

- tab: `type`, `state`, `size`, `label`, `icon`, `show-counter` + `counter`
- nav-tabs: `type`, `width`

## Code

```html
<!-- fixed · hug -->
<div role="tablist" aria-label="Project" class="flex border-b border-border-subtle">
  <button role="tab" aria-selected="true" aria-controls="p-overview" id="t-overview"
    class="inline-flex items-center gap-1 h-control-md px-3 -mb-px border-b-2 border-action-primary-default
           text-body-md text-text-brand focus-visible:outline-none focus-visible:shadow-focus-ring">
    Overview
  </button>
  <button role="tab" aria-selected="false" aria-controls="p-files" id="t-files" tabindex="-1"
    class="inline-flex items-center gap-1 h-control-md px-3 text-body-md text-text-secondary hover:text-text-primary">
    Files
    <span class="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-action-neutral-subtle text-body-sm font-semibold">3</span>
  </button>
</div>

<!-- floating · fill -->
<div role="tablist" class="flex gap-1 p-1 rounded-overlay bg-bg-surface-sunken">
  <button role="tab" aria-selected="true" class="flex-1 h-control-md rounded-control bg-bg-surface shadow-xs text-body-md text-text-brand">Monthly</button>
  <button role="tab" aria-selected="false" tabindex="-1" class="flex-1 h-control-md rounded-control text-body-md text-text-secondary hover:bg-action-neutral-subtle">Yearly</button>
</div>
```

## Accessibility

- Arrow keys move between tabs; only the selected tab is in the tab order (`tabindex="-1"` on the rest).
- Each panel gets `role="tabpanel"` and `aria-labelledby` pointing to its tab.

## Overflow

With more tabs than fit: on mobile, scroll horizontally and let the last tab show cut off; on desktop, keep the first tabs and move the rest into a "More" menu.

## Do

- Always keep one tab selected.
- Two to five tabs.
- One or two words per tab, in parallel wording.
- Keep the content in place; only the panel below changes.

## Don't

- Tabs for steps in a sequence: use a stepper.
- Tabs that navigate to another page: use links.
- Hide something the user must see inside an unselected tab.
- A tab list that scrolls sideways on desktop.
