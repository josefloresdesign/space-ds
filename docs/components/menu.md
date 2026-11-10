# Menu

A floating list of actions. Built from `menu-label`, `list-item` and `menu-divider` instances in auto layout: add, remove or hide rows right on the instance.

## Parts

| Part | Use |
|---|---|
| `menu` | The surface: `bg-surface-raised`, `border-subtle`, `elevation-overlay` |
| `menu-label` | Names a group of rows. Not interactive |
| `list-item` | One row: an action |
| `menu-divider` | Separates groups |

## List item

States `default` · `hover` · `clicked` (pressed, not a persistent selection) · `disabled`. Variant `default` or `danger` for destructive actions like Delete. Optional left icon and a right chevron (`right-icon`) for submenus.

## Sizes

Row heights `sm` 32 (dense, `body-sm`) · `md` 40 (**default**) · `lg` 48 (touch). Keep one size per menu.

## Figma properties

- menu: `size`
- list-item: `state`, `size`, `variant`, `label`, `left-icon`, `right-icon`
- menu-label: `size`, `label`

## Code

```html
<div role="menu" aria-label="File actions"
  class="w-60 p-1 flex flex-col gap-1 rounded-overlay bg-bg-surface-raised border border-border-subtle shadow-elevation-overlay">
  <p class="px-4 pt-2 pb-1 text-body-sm font-semibold text-text-tertiary">Actions</p>
  <button role="menuitem" class="flex items-center gap-2 h-control-md px-4 rounded-control text-body-md text-text-secondary hover:bg-action-neutral-subtle hover:text-text-primary">
    <svg class="size-icon-sm" aria-hidden="true">…</svg> Duplicate
  </button>
  <button role="menuitem" class="flex items-center gap-2 h-control-md px-4 rounded-control text-body-md text-text-secondary hover:bg-action-neutral-subtle hover:text-text-primary">
    <svg class="size-icon-sm" aria-hidden="true">…</svg> Rename
  </button>
  <hr role="separator" class="my-1 border-border-subtle">
  <button role="menuitem" aria-disabled="true" class="flex items-center gap-2 h-control-md px-4 rounded-control text-body-md text-text-disabled cursor-not-allowed">
    Archive
  </button>
  <button role="menuitem" class="flex items-center gap-2 h-control-md px-4 rounded-control text-body-md text-text-danger hover:bg-action-danger-subtle">
    Delete
  </button>
</div>
```

## Accessibility

- Open with Enter, Space or Arrow Down; move with the arrow keys; close with Escape and return focus to the trigger.
- The trigger gets `aria-haspopup="menu"` and `aria-expanded`.

## Do

- Start each row with a verb: Duplicate, Rename, Delete.
- Group related rows and separate the destructive one.
- Keep the menu to one level where you can.
- Close on selection, on Escape and on a click outside.

## Don't

- A menu as the main navigation of a screen.
- More than about seven rows without grouping.
- Rows that only describe state instead of doing something.
- Nest a submenu inside a submenu.
