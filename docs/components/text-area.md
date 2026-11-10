# Text area

Multi-line form field. Same states and validation as [Input](input.md), so every field in a form feels the same.

## States

`placeholder` · `hover` · `focus` · `writing` · `write-down` · `disabled`, plus validation `default` or `error` (never `disabled` + `error`).

## Height

One size. It starts at three rows and grows with the text. Text starts at the top, never vertically centred.

## Counter and resize

- **Counter**: show it when there is a character limit. It sits bottom right, next to the help text, and turns red past the limit.
- **Grabber** (resize handle): only when the field does not grow on its own.

## Figma properties

`state`, `validation`, `show-label` + `label`, `required`, `optional`, `tooltip`, `value`, `show-helptext` + `helptext`, `show-counter` + `counter`, `show-grabber`.

## Code

```html
<div class="flex flex-col gap-1">
  <label for="msg" class="text-body-sm font-semibold text-text-primary">Message</label>
  <textarea id="msg" rows="3" maxlength="280" aria-describedby="msg-help"
    class="min-h-24 field-sizing-content resize-none px-3 py-2 rounded-control bg-bg-surface
           border border-border-default text-body-md text-text-primary placeholder:text-text-tertiary
           focus:outline-none focus:border-border-focus focus:shadow-focus-ring"></textarea>
  <div class="flex justify-between text-body-sm text-text-secondary">
    <p id="msg-help">Tell us what happened.</p>
    <span>0/280</span>
  </div>
</div>
```

## Do

- Use it when the answer may run past one line; for one line use Input.
- Let it grow. A tiny box with a scrollbar hides the user's own words.
- Say the limit in the help text before they hit it.
- Size the field to the answer you expect: a long box invites a long answer.

## Don't

- Depend on the grabber: vertical resize does not work on iOS.
- Use a text area for a name, a code or a date.
- Cut the text at the limit without telling the user.
- Show a counter when the limit is so high nobody will reach it.
