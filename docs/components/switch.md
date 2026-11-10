# Switch

Turns a single setting on or off. The change applies right away: no Save button.

## Switched

`off` · `on`. The label names the thing being turned on ("Email notifications"), never an instruction.

## States

`default` · `hover` · `disabled` · `invalid`. From the Figma panel you can also add:

- `show-focus-ring` — keyboard focus
- `show-icon` — a check or cross inside the thumb
- `show-spinner` — loading, while the change saves

## Sizes

| Size | Track | Use |
|---|---|---|
| `sm` | 28 × 16 | Dense tables |
| `md` | 36 × 20 | **Default**, settings lists |
| `lg` | 44 × 24 | Touch screens |

## Figma properties

`switched`, `state`, `size`, `show-icon`, `show-spinner`, `show-focus-ring`.

## Code

```html
<label class="flex items-center justify-between gap-4 py-3">
  <span class="text-body-md text-text-primary">Email notifications</span>
  <button type="button" role="switch" aria-checked="true"
    class="group relative inline-flex items-center w-9 h-5 p-0.5 rounded-full shrink-0
           bg-action-neutral-subtle-pressed aria-checked:bg-action-primary-default
           hover:bg-border-strong aria-checked:hover:bg-action-primary-hover
           transition-colors duration-(--duration-fast) ease-standard
           disabled:opacity-(--opacity-disabled) focus-visible:outline-none focus-visible:shadow-focus-ring">
    <span class="size-icon-sm rounded-full bg-icon-on-action shadow-xs
                 transition-transform duration-(--duration-fast) ease-standard group-aria-checked:translate-x-4"></span>
  </button>
</label>
```

Toggle `aria-checked` between `true` and `false` with JavaScript on click.

## Do

- Apply the change immediately; a switch needs no Save.
- Label the state being enabled: "Email notifications", not "Enable email".
- Label on the left, switch on the right in a settings row.
- Show the loading state while the change is in flight.

## Don't

- A switch inside a form that needs submitting: use Checkbox.
- Two switches for one either-or choice: use Radio.
- On and Off text beside the track; the position already says it.
- A switch for a destructive action without confirming.
