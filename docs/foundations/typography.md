# Typography

One family, **IBM Plex Sans**, in three weights: regular 400, semibold 600 and bold 700, plus italic.

## Type ramp

Each size comes paired with its line height (and letter spacing for headings). In Tailwind, `text-body-md` sets both, so you never add `leading-*` by hand.

| Role | Size | Line height | Use |
|---|---|---|---|
| `display` | 128 | 1.2 | Hero numbers, posters |
| `heading-xxl` | 96 | 1.2 | Landing hero |
| `heading-xl` | 72 | 1.2 | Landing hero |
| `heading-lg` | 60 | 1.2 | Page hero |
| `heading-md` | 48 | 1.2 | Section hero |
| `heading-sm` | 36 | 1.2 | Page title |
| `heading-xs` | 30 | 1.35 | Page title, dense |
| `title-md` | 24 | 1.35 | Section title |
| `title-sm` | 20 | 1.35 | Card and dialog title |
| `body-xl` | 18 | 1.5 | Lead paragraph |
| `body-lg` | 16 | 1.5 | Long reading |
| `body-md` | 14 | 1.5 | Default UI text |
| `body-sm` | 12 | 1.5 | Secondary text, small controls |
| `caption` | 10 | 1.5 | Labels, metadata (+2.5% tracking) |

Headings from `heading-md` up use −2.5% letter spacing.

## Styles in Figma

Text styles are named `{role}/{weight}`, for example `body-md/regular` or `title-sm/semibold`. In code that is `text-body-md font-regular` or `text-title-sm font-semibold`.

```html
<h1 class="font-sans text-heading-sm font-bold text-text-primary">Settings</h1>
<p class="text-body-md text-text-secondary">Manage how you get notified.</p>
<span class="text-caption font-semibold text-text-tertiary uppercase">New</span>
```

## Rules

- `body-md` is the default for UI; `body-lg` for long reading.
- One `heading-*` per page section; do not skip levels in the HTML (`h1` → `h2` → `h3`).
- Use weights for hierarchy before using size.
- Never set a font size outside the ramp.
