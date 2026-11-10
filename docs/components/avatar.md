# Avatar

Represents a person or an entity.

## Types

In order of preference: `image` (the photo, cropped to fill the circle) → `initials` (two letters) → `icon` (no data at all). Never leave an empty circle.

## Sizes

| Size | px | Use |
|---|---|---|
| `sm` | 24 | Dense lists, table rows |
| `md` | 32 | **Default** |
| `lg` | 40 | Cards, comments |
| `xl` | 56 | Profile headers |

## Ring and status

- **Ring**: marks selection or an active call.
- **Status dot**: shows someone is online. Both sit outside the circle, so neither crops the photo.

## Figma properties

`type`, `size`, `initials`, `ring`, `status`.

## Code

```html
<!-- image · md -->
<img src="ana.jpg" alt="Ana Torres" class="size-avatar-md rounded-full object-cover">

<!-- initials · lg -->
<span class="inline-flex items-center justify-center size-avatar-lg rounded-full
             bg-action-primary-default text-text-on-action text-body-sm font-semibold" aria-label="José Flores">JF</span>

<!-- with status -->
<span class="relative inline-block">
  <img src="ana.jpg" alt="Ana Torres" class="size-avatar-md rounded-full object-cover">
  <span class="absolute bottom-0 right-0 size-2.5 rounded-full bg-action-success-default ring-2 ring-bg-surface" aria-label="Online"></span>
</span>
```

## Do

- Prefer a photo, then initials, then the icon.
- Two characters maximum in the initials.
- Keep one size across a whole list.
- Give the image an `alt` that names the person.

## Don't

- An empty circle when you have a name to use for initials.
- A diameter outside the size scale.
- The ring to mean "unread": that is a badge.
- Text or a number inside the status dot.
