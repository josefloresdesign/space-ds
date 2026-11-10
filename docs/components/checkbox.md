# Checkbox

Selects one or more options from a set. When the options are exclusive, use [Radio](radio.md).

## Checked

`off` · `on` · `mixed`. Mixed (indeterminate) shows a minus: a parent standing over a partly selected group. The user never picks it; clicking it selects everything.

## States

`default` · `hover` · `disabled` · `error`, with an optional focus ring.

## Sizes

`sm` 16 · `md` 20 (**default**) · `lg` 24. The label scales with the box so they stay aligned.

## Label and description

The description is the line that saves a checkbox from needing a tooltip. Add it when the result of checking the box isn't obvious.

## Figma properties

`checked`, `state`, `size`, `show-label` + `label`, `show-description` + `description`, `show-focus-ring`.

## Code

```html
<label class="inline-flex items-start gap-2 cursor-pointer">
  <input type="checkbox"
    class="mt-0.5 size-5 rounded-sm border border-border-strong accent-[var(--color-action-primary-default)]
           focus-visible:outline-none focus-visible:shadow-focus-ring">
  <span>
    <span class="block text-body-md text-text-primary">Send me product updates</span>
    <span class="block text-body-sm text-text-secondary">About one email a month.</span>
  </span>
</label>
```

## Do

- Use a checkbox when the options are independent; use Radio when they are exclusive.
- Write the label as a positive statement: "Send me updates", not "Do not send".
- Use mixed only on a parent that controls a group.
- Put the error message on the group, not on every box.

## Don't

- One checkbox to choose between two things: that is a Switch.
- A label whose meaning flips when checked.
- Mixed as a state the user can select.
- Hide the label without an accessible name in code.
