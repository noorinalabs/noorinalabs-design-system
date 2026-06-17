# Global Styles & Utilities

The design system ships global CSS that provides utility classes, component patterns, animations, and state styles. These are loaded automatically when you import the stylesheet.

## Loading Styles

```tsx
// Import once in your app entry point
import '@noorinalabs/design-system/styles.css'
```

This single import loads:
1. **Design tokens** — all CSS custom properties (colors, typography, spacing, etc.)
2. **Tailwind CSS** — the utility framework
3. **Utility classes** — text helpers, layout, links, Arabic/RTL support
4. **Component classes** — tables, cards, badges, buttons, forms, pagination
5. **Animations** — skeleton loading shimmer
6. **State patterns** — loading, empty, and error page styles
7. **Compiled component-utilities layer** — the Tailwind utility classes the React
   components depend on (Dialog positioning/overlay, focus rings, surface colors, …)

---

## Component-Utilities Layer (no more `@source inline` mirrors)

The React components (Dialog, DropdownMenu, Select, Toast, Tooltip, …) express
their structural contract — positioning, sizing, overlay, focus ring, surface
colors — as Tailwind utility classes in their `className` strings (e.g. the
Dialog overlay's `fixed inset-0 z-50 bg-black/80` and content's
`fixed start-1/2 top-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2`).

Those utilities only exist once a Tailwind build *scans the component source and
emits them*. A consuming app's Tailwind build skips `node_modules`, so it never
generates them — which is why apps previously had to hand-mirror the class list
with `@source inline(...)` in their own theme CSS (fragile: it silently drifts
whenever a component's classes change).

**This is no longer necessary.** The design system now runs a Tailwind utility
pass over its own components at build time and ships the result inside
`dist/styles.css` (in the `utilities` cascade layer, with color utilities wired
to the runtime `--color-*` tokens). Importing the stylesheet is enough:

```tsx
import '@noorinalabs/design-system/styles.css'
```

**Consumers can — and should — delete their DS-component `@source inline(...)`
mirrors.** For example, a block like the following in your `theme.css` can be
removed:

```css
/* DELETE — now shipped compiled in @noorinalabs/design-system/styles.css */
@source inline("fixed inset-0 z-50 bg-black/80");
@source inline("fixed start-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg rounded-lg");
/* …and the rest of the mirrored Dialog/menu/overlay class lists… */
```

Your own app's `@source` globs for *your own* markup stay as-is — only the
mirrors that duplicated **design-system component** classes are redundant.

> Note: the shipped layer covers the utilities the components actually use. The
> open/close keyframe utilities (`animate-in`, `fade-*`, `zoom-*`) require the
> `tailwindcss-animate` plugin and are not part of this layer; they are also not
> required for the components to render correctly positioned and styled.

---

## Utility Classes

### Text Helpers

| Class | Description |
|-------|-------------|
| `.error-text` | Destructive/error colored text |
| `.muted-text` | Muted foreground text |
| `.small-muted` | Small muted text (`--text-sm`) |
| `.mono` | Monospace font at small size |

### Status Text

| Class | Description |
|-------|-------------|
| `.text-success` | Success color |
| `.text-danger` | Destructive color |
| `.text-warning` | Warning color |
| `.text-active` | Success + semibold (active status) |
| `.text-suspended` | Destructive + semibold (suspended status) |

### Layout

| Class | Description |
|-------|-------------|
| `.flex-row` | `display: flex; gap: 8px; align-items: center` |
| `.flex-row-wrap` | `display: flex; gap: 16px; flex-wrap: wrap` |
| `.grid-2col` | Two-column grid with 16px gap |
| `.section` | Top margin (24px) |
| `.section-mb` | Bottom margin (32px) |

### Page Heading

```html
<h1 class="page-heading">Narrator Database</h1>
```

Uses the serif heading font with a primary-colored bottom border — the standard page title style.

### Links

| Class | Description |
|-------|-------------|
| `.link-primary` | Primary-colored link, underline on hover |
| `.link-muted` | Muted link, turns primary on hover |

---

## Arabic & RTL Utilities

| Class | Description |
|-------|-------------|
| `.text-rtl` | Sets `direction: rtl`, right-aligned, Arabic font |
| `.text-arabic-block` | RTL block with card background, Arabic font, generous line height |
| `.text-english-block` | LTR block with card background, relaxed line height |

### Example

```html
<div class="text-arabic-block">
  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
</div>
```

---

## Islamic Geometric Accents

CSS-only decorative elements for section dividers.

### Geometric Divider

```html
<div class="geo-divider">
  <span class="geo-divider-diamond"></span>
</div>
```

A horizontal line with a diamond accent in the center — uses the primary color.

### Geometric Borders

| Class | Description |
|-------|-------------|
| `.geo-border-top` | Repeating dash pattern as a top border |
| `.geo-border-bottom` | Repeating dash pattern as a bottom border |

---

## Component CSS Classes

These are plain CSS classes for when you need the styling without React components. The React components (Button, Card, etc.) are preferred when using React.

### Data Tables

```html
<table class="data-table">
  <thead><tr><th>Name</th><th>Count</th></tr></thead>
  <tbody>
    <tr class="clickable-row"><td>Abu Hurayrah</td><td>5,374</td></tr>
  </tbody>
</table>
```

Add `.data-table-compact` for reduced padding. Rows with `.clickable-row` get a pointer cursor and hover highlight.

### Stat Cards

```html
<div class="stat-card">
  <div class="stat-card-label">Total Narrators</div>
  <div class="stat-card-value">12,450</div>
</div>
```

### CSS Badges

```html
<span class="badge badge-sahih">Sahih</span>
<span class="badge badge-sunni">Sunni</span>
<span class="badge badge-topic">Fiqh</span>
```

Domain variants: `.badge-sunni`, `.badge-shia`, `.badge-sahih`, `.badge-other-grade`, `.badge-topic`, `.badge-approved`, `.badge-rejected`, `.badge-pending`, `.badge-narrator`, `.badge-hadith`, `.badge-collection`.

### CSS Buttons

| Class | Description |
|-------|-------------|
| `.btn` | Default secondary button |
| `.btn-sm` | Small secondary button |
| `.btn-primary` | Primary action button |
| `.btn-danger` | Destructive outline button |
| `.btn-action` | Tiny action button base |

### Forms

| Class | Description |
|-------|-------------|
| `.form-input` | Styled text input |
| `.form-input-block` | Full-width input |
| `.form-input-sm` | Small (80px) input |

---

## Animations

### Skeleton Loading

```html
<div class="skeleton skeleton-heading"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-row"></div>
```

| Class | Height | Purpose |
|-------|--------|---------|
| `.skeleton` | — | Base class (shimmer animation) |
| `.skeleton-text` | 1em | Body text placeholder |
| `.skeleton-heading` | 1.5em (40% width) | Heading placeholder |
| `.skeleton-row` | 2.5rem | Table/list row placeholder |

Automatically disables animation when `prefers-reduced-motion: reduce` is active.

---

## State Patterns

### Empty State

```html
<div class="empty-state">
  <div class="empty-state-icon"><!-- icon here --></div>
  <div class="empty-state-heading">No results found</div>
  <div class="empty-state-body">Try adjusting your search filters.</div>
</div>
```

### Error Page

```html
<div class="error-page">
  <div class="error-page-code">404</div>
  <div class="error-page-title">Page not found</div>
  <div class="error-page-body">The page you requested does not exist.</div>
</div>
```

---

## Scrollbar Styling

Custom scrollbar styling is applied globally:
- 8px width/height
- Track matches background color
- Thumb matches border color with full rounding
- Hover state uses muted foreground color

---

## Selection Styling

Text selection uses the primary color as background with primary-foreground text, applied globally via `::selection`.
