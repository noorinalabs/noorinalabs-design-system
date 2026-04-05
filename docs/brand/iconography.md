# Iconography

Guidelines for icon design, sizing, and usage within the Qalam design system.

---

## Qalam Aesthetic Principles

Icons in the Qalam system are designed to complement the scholarly, manuscript-inspired visual identity. They prioritize clarity over ornamentation and work harmoniously with both Arabic and Latin typography.

### Design Principles

1. **Geometric foundation** -- Icons are built on a consistent grid with clean geometric shapes. Where curves are used, they reference calligraphic pen strokes rather than rounded-rectangle "app icon" aesthetics.

2. **Minimal stroke weight** -- Icons use a consistent `2px` stroke at the `24x24` reference size (scales proportionally). Strokes are rounded (`stroke-linecap: round`, `stroke-linejoin: round`) to echo pen marks.

3. **Single color** -- Icons render in a single color using `currentColor`. They inherit their fill/stroke from the parent element's `color` property, adapting automatically to light/dark mode and semantic contexts.

4. **Optical balance** -- Icons are optically balanced within their bounding box, not mathematically centered. Directional icons (arrows, chevrons) may be visually shifted 1-2% to feel centered.

5. **No decoration** -- Icons communicate function, not style. No gradients, shadows, or multi-color fills. No purely decorative icons.

6. **RTL-aware** -- Directional icons (arrows, chevrons, "forward/back") must mirror in RTL contexts. Non-directional icons (search, settings, close) do not mirror. See the RTL section below.

---

## Size System

All icons are designed at a `24x24` reference size with a `2px` stroke. Other sizes scale proportionally.

| Size Token | Pixels | Stroke | Use |
|------------|--------|--------|-----|
| `--icon-xs` | 12x12 | 1px | Inline with small text, status indicators |
| `--icon-sm` | 16x16 | 1.5px | Inline with body text, table cells, metadata |
| `--icon-md` | 20x20 | 2px | Buttons, navigation items, form controls |
| `--icon-base` | 24x24 | 2px | Default size, standalone icons, list items |
| `--icon-lg` | 32x32 | 2.5px | Section headers, feature callouts |
| `--icon-xl` | 48x48 | 3px | Empty states, onboarding illustrations |

### Sizing Rules

- Use `--icon-base` (24x24) as the default unless there is a specific reason to deviate
- Icons paired with text should match the text's visual weight: `--icon-sm` with `--text-sm`, `--icon-md` with `--text-base`
- Never scale icons below `--icon-xs` (12x12) -- detail is lost
- Never scale icons above `--icon-xl` (48x48) -- use illustrations instead for larger sizes

---

## Color Rules

### Default: `currentColor`

Icons always use `currentColor` as their stroke/fill value. This means they inherit the text color of their parent element:

```css
.icon {
  width: var(--icon-base);
  height: var(--icon-base);
  color: currentColor; /* inherits from parent */
}
```

### Contextual Color

Icons take on the color of their context:

| Context | Color | Example |
|---------|-------|---------|
| Body text | `--color-foreground` (ink) | Paragraph-inline icons |
| Muted/secondary | `--color-muted` (graphite) | Metadata labels, timestamps |
| Primary action | `--color-primary` (sienna) | Active nav item, primary button icon |
| Destructive action | `--color-destructive` (vermillion) | Delete button icon |
| Success state | `--color-success` (verdigris) | Confirmation icon |
| Warning state | `--color-warning` (ochre) | Warning alert icon |
| Disabled | `--color-muted` at 50% opacity | Disabled button icon |

### Rules

- Never hard-code a color on an icon -- always use `currentColor` or a CSS custom property
- Never use icons as the sole means of communicating state (always pair with text or `aria-label`)
- Icon color should have at least **3:1 contrast** against its background (WCAG 2.2 AA for non-text elements, SC 1.4.11)

---

## RTL / Directional Behavior

### Icons That Mirror in RTL

These icons must be horizontally flipped when the document direction is `rtl`:

- Arrow left / Arrow right (become "forward" / "back")
- Chevron left / Chevron right
- External link (arrow direction flips)
- Reply / Forward (directional metaphor)
- Text indent / Text outdent
- Undo / Redo

Implementation:

```css
[dir="rtl"] .icon-directional {
  transform: scaleX(-1);
}
```

### Icons That Do NOT Mirror

- Close (X)
- Search (magnifying glass)
- Settings (gear)
- Check / Checkmark
- Plus / Minus
- Sort ascending / descending (vertical arrows)
- Calendar, Clock, User, Lock
- Graph node / edge icons

---

## Usage Guidelines

### When to Use Icons

- **Navigation:** Use icons alongside text labels in the sidebar and top navigation. Never use icon-only navigation without tooltips and `aria-label`.
- **Buttons:** Primary actions may use icon + text. Icon-only buttons must have `aria-label` and a tooltip.
- **Status indicators:** Pair icons with text labels and semantic color to convey state (success, warning, error).
- **Data enrichment:** Use icons in table headers and metadata labels to aid scanning (e.g., a chain icon next to "Isnad" headers).
- **Empty states:** Use `--icon-xl` size icons in empty state illustrations (see asset specifications).

### When NOT to Use Icons

- Don't use icons purely for decoration
- Don't use icons when text alone is clearer
- Don't use more than 2 icons per button or list item
- Don't create new icon variants for one-off use cases -- request additions through the design system team

### Accessibility Requirements

- All interactive icons (buttons, links) must have either visible text or `aria-label`
- Decorative icons adjacent to text labels should use `aria-hidden="true"` to avoid redundant announcements
- Icons conveying meaning without adjacent text must have `role="img"` and `aria-label`
- Ensure minimum touch target of `44x44px` for interactive icons, even if the icon itself is smaller (add padding)

### Implementation

Icons are delivered as React SVG components, not external image files:

```tsx
import { ChevronRight } from '@noorinalabs/design-system/icons';

// With text -- icon is decorative
<button>
  Next <ChevronRight aria-hidden="true" />
</button>

// Icon-only -- needs aria-label
<button aria-label="Next page">
  <ChevronRight />
</button>
```

SVG components use `currentColor` and accept `className` for sizing:

```tsx
<SearchIcon className="icon-sm text-muted" />
```
