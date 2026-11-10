# Radio

Selects exactly one option from a set.

## Never alone

Always use two or more, with one selected by default or an explicit "None". A single radio cannot be unselected, so it is a trap: use Checkbox or Switch instead.

## Selected

`off` · `on`. There is no indeterminate state: for partial selection, use Checkbox.

## States and sizes

The same as [Checkbox](checkbox.md): `default` · `hover` · `disabled` · `error` with an optional focus ring, and sizes `sm` 16 · `md` 20 (**default**) · `lg` 24.

## Figma properties

`selected`, `state`, `size`, `show-label` + `label`, `show-description` + `description`, `show-focus-ring`.

## Code

```html
<fieldset class="flex flex-col gap-3">
  <legend class="text-body-sm font-semibold text-text-primary mb-1">Delivery</legend>
  <label class="inline-flex items-start gap-2">
    <input type="radio" name="delivery" value="standard" checked
      class="mt-0.5 size-5 accent-[var(--color-action-primary-default)] focus-visible:shadow-focus-ring">
    <span>
      <span class="block text-body-md text-text-primary">Standard</span>
      <span class="block text-body-sm text-text-secondary">3–5 business days, free.</span>
    </span>
  </label>
  <label class="inline-flex items-start gap-2">
    <input type="radio" name="delivery" value="express"
      class="mt-0.5 size-5 accent-[var(--color-action-primary-default)] focus-visible:shadow-focus-ring">
    <span class="text-body-md text-text-primary">Express</span>
  </label>
</fieldset>
```

## Do

- Preselect the safest option, or add an explicit "None".
- Stack vertically: a column is far easier to scan than a row.
- Keep the options mutually exclusive and parallel in wording.
- Five options or fewer; past that, use a select.

## Don't

- A lone radio: the user can never undo the choice.
- Radio for independent options: that is Checkbox.
- Options that overlap in meaning.
- Submit the form the moment a radio is picked.
