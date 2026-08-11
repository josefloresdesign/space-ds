# Space Design System (Space DS)

Welcome to the official documentation for Space DS, a tokenized design system built on top of Tailwind CSS v4. This repository contains the core design foundations and CSS configurations ready to be consumed in your web applications.

---

## Prerequisites

Space DS leverages the native CSS-First engine of Tailwind CSS v4. 
Ensure your project uses a compatible build pipeline (such as Vite, Next.js, PostCSS, or the Tailwind CSS v4 CLI).

---

## CSS Installation & Integration

To integrate Space DS into your codebase:

1. Clone or copy the CSS configuration files from this repository into your styles directory.
2. In your main CSS entrypoint (e.g., `global.css` or `main.css`), import the default font and Tailwind CSS v4:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap');
@import "tailwindcss";

@theme {
  /* Surface / Neutral Colors */
  --color-surface-50: #ffffff;
  --color-surface-100: #f7f9fd;
  --color-surface-200: #ecedee;
  --color-surface-300: #cbcfd2;
  --color-surface-400: #a7aeb4;
  --color-surface-500: #8e979f;
  --color-surface-600: #6b767f;
  --color-surface-700: #4f575e;
  --color-surface-800: #33383d;
  --color-surface-900: #202327;

  /* Primary Brand Colors */
  --color-primary-50: #f8f5ff;
  --color-primary-100: #b99cfc;
  --color-primary-200: #7d49f8;
  --color-primary-300: #6528f7;
  --color-primary-400: #501bce;

  /* Secondary Brand Colors */
  --color-secondary-50: #e8f1fc;
  --color-secondary-100: #77a9ee;
  --color-secondary-200: #1b6ddf;
  --color-secondary-300: #1450a3;
  --color-secondary-400: #114388;

  /* Status Colors */
  --color-success-50: #f6fefb;
  --color-success-100: #1bc590;
  --color-success-200: #12825f;
  --color-success-300: #0e674b;
  --color-success-400: #0a4834;

  --color-warning-50: #fffdfa;
  --color-warning-100: #f9dbb5;
  --color-warning-200: #f2ab53;
  --color-warning-300: #ee9322;
  --color-warning-400: #a6620d;

  --color-dark-50: #121212;
  --color-dark-100: #161616;
  --color-dark-200: #1a1a1a;
  --color-dark-300: #1c1c1c;
  --color-dark-400: #1e1e1e;

  --color-danger-50: #fbeaea;
  --color-danger-100: #e16b6b;
  --color-danger-200: #c92929;
  --color-danger-300: #a92323;
  --color-danger-400: #6e1717;

  /* Alpha / Opacity Colors */
  --color-opacity-primary: rgba(125, 73, 248, 0.15);
  --color-opacity-secondary: rgba(28, 111, 227, 0.15);
  --color-opacity-danger: rgba(201, 41, 41, 0.15);
  --color-opacity-success: rgba(18, 130, 95, 0.15);
  --color-opacity-warning: rgba(242, 171, 83, 0.15);
  --color-opacity-modal: rgba(18, 18, 18, 0.92);

  /* Typography Family */
  --font-space-ds: 'IBM Plex Sans', sans-serif;

  /* Typography Scale (Font Size + Line Height paired) */
  --text-caption: 0.625rem;
  --text-caption--line-height: 0.875rem;

  --text-body-sm: 0.75rem;
  --text-body-sm--line-height: 1.125rem;

  --text-body-md: 0.875rem;
  --text-body-md--line-height: 1.25rem;

  --text-body-lg: 1rem;
  --text-body-lg--line-height: 1.5rem;

  --text-body-xl: 1.125rem;
  --text-body-xl--line-height: 1.75rem;

  --text-title-lg: 1.25rem;
  --text-title-lg--line-height: 1.875rem;

  --text-title-xl: 1.5rem;
  --text-title-xl--line-height: 2.125rem;

  --text-heading-md: 2.125rem;
  --text-heading-md--line-height: 3rem;

  --text-heading-lg: 3rem;
  --text-heading-lg--line-height: 4rem;

  --text-heading-xl: 3.75rem;
  --text-heading-xl--line-height: 4.875rem;
}
```

---

## Developer Usage Guide

### 1. Typography & Automatic Line-Heights
Each typography size token automatically applies its corresponding pre-calculated line-height. You do not need to append separate `leading-*` utility classes.

```html
<!-- Applies font-family, 16px font-size, and 24px line-height automatically -->
<p class="font-space-ds text-body-lg text-surface-800">
  This paragraph uses the core design system typography scale.
</p>

<!-- Heading with 34px font-size and 48px line-height -->
<h2 class="font-space-ds text-heading-md text-primary-300">
  Section Title
</h2>
```

### 2. Color Palette Utilities
All colors declared under `--color-*` automatically generate standard Tailwind utility classes for backgrounds (`bg-*`), text color (`text-*`), borders (`border-*`), and more.

```html
<!-- Primary Button -->
<button class="bg-primary-300 hover:bg-primary-400 text-surface-50 px-4 py-2 rounded-lg transition-colors">
  Save Changes
</button>

<!-- Modals / Backdrop Overlays -->
<div class="bg-opacity-modal fixed inset-0 flex items-center justify-center">
  <!-- Modal Content -->
</div>
```

---

## Spacing

Space DS inherits Tailwind CSS's default spacing scale where `1` unit equals `0.25rem` (`4px`). All padding, margin, gap, and dimension utilities map directly to this convention to ensure consistency between Figma designs and frontend code.

```html
<!-- Padding of 16px (1rem) and gap of 8px (0.5rem) -->
<div class="p-4 gap-2 flex flex-col">
  <!-- Content -->
</div>
```

---

## Responsive Breakpoints

Space DS relies on Tailwind CSS's default mobile-first breakpoint system for responsive layout frames:

* `sm`: `640px` (Mobile / Large phones)
* `md`: `768px` (Tablets)
* `lg`: `1024px` (Laptops / Small desktops)
* `xl`: `1280px` (Desktops)
* `2xl`: `1536px` (Large displays)

```html
<!-- Full width on mobile, 2 columns on tablet, 3 columns on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards -->
</div>
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
