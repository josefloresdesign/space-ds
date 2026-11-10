# Space DS · instructions for AI assistants

This repo holds the code side of Space DS. Figma (`P5KYJrEA2XqhVvwvI0IFgZ`) is the source of truth; if code and Figma disagree, Figma wins.

## When building UI with Space DS

- Style only with tokens. No hex colors, no magic px values.
- Use semantic colors in components (`bg-bg-surface`, `text-text-primary`, `border-border-subtle`, `bg-action-primary-default`). Primitives (`bg-primary-500`) only when defining something new.
- Do not add `dark:` classes: semantic tokens switch on their own. Force a mode with `<html data-theme="dark">`.
- Controls use `h-control-sm|md|lg` (32/40/48; md is the default) and `rounded-control`.
- Text uses the ramp: `text-body-md` (default UI), `text-body-sm`, `text-title-sm`, `text-heading-sm`… Line height comes with the size; do not add `leading-*`.
- Every interactive element shows `focus-visible:shadow-focus-ring` on keyboard focus.
- Meet WCAG AA: contrast, visible focus, roles and aria, keyboard navigation.
- Name components, props and variants exactly as in Figma (see `docs/components/*.md`).
- Before writing a component, read its doc in `docs/components/`.

## Working on this repo

- `css/`, `tailwind/theme*.css`, `tokens/tokens.json` and `docs/tokens.md` are **generated**. Never edit them by hand.
- To change tokens: update `tokens/figma/variables.json` / `styles.json` (exported from Figma), then run `npm run build`.
- The build script is `scripts/build-tokens.mjs` (Node, no dependencies). Tailwind CLI compiles `tailwind/output*.css`.
- Docs are in English. Keep them short and free of jargon.
