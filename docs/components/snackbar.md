# Snackbar

Brief confirmation of an action that dismisses itself. One at a time, at the bottom of the viewport.

## Status

| Status | Use |
|---|---|
| `neutral` | **Default.** Confirms something happened without calling it good or bad. Dark on a light UI and light on a dark one |
| `info` | Neutral information |
| `success` | A positive result |
| `warning` | Needs attention |
| `danger` | Something failed |

Use the colors only when they carry meaning, never as decoration.

## Anatomy

A message, with an optional action (Undo, Retry) and an optional close button.

## Figma properties

`status`, `message`, `icon`, `action`, `right-actions`.

## Code

```html
<div role="status" aria-live="polite"
  class="fixed bottom-6 left-1/2 -translate-x-1/2 z-(--z-toast) flex items-center gap-4 min-h-control-md px-4 py-2
         rounded-control bg-bg-inverse text-text-inverse shadow-elevation-overlay text-body-md">
  <span>Message archived</span>
  <button type="button" class="font-semibold text-text-inverse underline-offset-2 hover:underline">Undo</button>
</div>
```

Use `role="alert"` instead of `status` only for errors.

## Do

- One snackbar at a time, bottom of the viewport.
- Keep it to one line.
- Pair a destructive action with Undo.
- Give it at least five seconds, longer when there is an action.

## Don't

- A message that must be read or acted on: it vanishes. Use a banner.
- An error the user has to fix: put it next to the field.
- Two actions in one snackbar.
- Cover the control the user just pressed.
