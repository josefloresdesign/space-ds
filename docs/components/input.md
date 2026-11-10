# Input

Single-line form field. For multi-line entry use [Text area](text-area.md).

## Anatomy

Label (with optional `required` or `optional` suffix and a help tooltip) · box (optional leading and trailing icons) · help text. The label and help text are optional.

## States

| State | Meaning |
|---|---|
| `placeholder` | Empty, at rest |
| `hover` | Pointer over |
| `focus` | Ready for input |
| `writing` | Receiving text |
| `write-down` | Filled, unfocused |
| `disabled` | Not editable |

**Validation** is a separate axis, `default` or `error`. Any state can be in error except `disabled`.

## Sizes

`sm` 32 · `md` 40 (**default**) · `lg` 48. They match Button, so a field and a button line up in the same row.

## Figma properties

`state`, `validation`, `size`, `label`, `helptext`, `left-icon`, `right-icon`, `tooltip`, `required`, `optional`.

## Code

```html
<div class="flex flex-col gap-1">
  <label for="email" class="text-body-sm font-semibold text-text-primary">
    Email <span class="font-regular text-text-tertiary">(optional)</span>
  </label>
  <input id="email" type="email" placeholder="you@example.com" aria-describedby="email-help"
    class="h-control-md px-3 rounded-control bg-bg-surface border border-border-default
           text-body-md text-text-primary placeholder:text-text-tertiary
           hover:border-border-strong focus:outline-none focus:border-border-focus focus:shadow-focus-ring
           disabled:bg-action-disabled disabled:text-text-disabled">
  <p id="email-help" class="text-body-sm text-text-secondary">We'll never share it.</p>
</div>

<!-- error -->
<input aria-invalid="true" aria-describedby="code-error"
  class="h-control-md px-3 rounded-control bg-bg-surface border border-border-danger text-body-md">
<p id="code-error" class="text-body-sm text-text-danger">Enter the 6-digit code from the email.</p>
```

## Accessibility

- Every field has a visible `<label>`; the placeholder is never the label.
- Link help and error text with `aria-describedby`; mark errors with `aria-invalid="true"`.

## Do

- Mark what is optional, not what is required, when most fields are required.
- Help text explains the format before the error, not after.
- The error message says how to fix it, not just what is wrong.
- `md` or `lg` on mobile: `sm` falls below the minimum touch target.

## Don't

- Use the placeholder as the label: it disappears on typing.
- Use `disabled` to show a read-only value.
- Validate on every keystroke: validate on blur.
- Turn on `required` and `optional` at the same time.
