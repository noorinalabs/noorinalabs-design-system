# Accessibility Guidelines

The Qalam design system targets **WCAG 2.2 Level AA** compliance as a minimum. This document provides the accessibility checklist, requirements, and patterns that all components and pages must follow.

---

## WCAG 2.2 AA Compliance Checklist

### Perceivable

| SC | Name | Level | Requirement | Status |
|----|------|-------|-------------|--------|
| 1.1.1 | Non-text Content | A | All images, icons, and charts have text alternatives (`alt`, `aria-label`, or `<title>`) | Required |
| 1.3.1 | Info and Relationships | A | Form inputs have associated labels; headings use semantic HTML; tables use `<th>` with `scope` | Required |
| 1.3.2 | Meaningful Sequence | A | DOM order matches visual order; CSS does not reorder content in a way that changes meaning | Required |
| 1.3.4 | Orientation | AA | Content is not restricted to a single display orientation | Required |
| 1.4.1 | Use of Color | A | Color is never the sole means of conveying information (always pair with text, icons, or patterns) | Required |
| 1.4.3 | Contrast (Minimum) | AA | Text has at least 4.5:1 contrast; large text (18pt+ or 14pt+ bold) has at least 3:1 | Required |
| 1.4.4 | Resize Text | AA | Content is usable at 200% zoom; use `rem`/`em` units, not `px` for font sizes | Required |
| 1.4.11 | Non-text Contrast | AA | UI components (borders, icons, focus rings) have at least 3:1 contrast against adjacent colors | Required |
| 1.4.12 | Text Spacing | AA | Content remains functional with modified letter/word/line spacing | Required |
| 1.4.13 | Content on Hover or Focus | AA | Tooltips and popovers are dismissable, hoverable, and persistent until dismissed | Required |

### Operable

| SC | Name | Level | Requirement | Status |
|----|------|-------|-------------|--------|
| 2.1.1 | Keyboard | A | All functionality is operable via keyboard (Tab, Enter, Space, Escape, Arrow keys) | Required |
| 2.1.2 | No Keyboard Trap | A | Focus can always be moved away from any component; dialogs trap focus but allow Escape | Required |
| 2.4.1 | Bypass Blocks | A | Provide "Skip to main content" link as the first focusable element | Required |
| 2.4.2 | Page Titled | A | Each page has a descriptive `<title>` | Required |
| 2.4.3 | Focus Order | A | Focus order follows a logical sequence matching the visual layout | Required |
| 2.4.6 | Headings and Labels | AA | Headings are descriptive; form labels clearly indicate purpose | Required |
| 2.4.7 | Focus Visible | AA | All focusable elements show a visible focus indicator | Required |
| 2.4.11 | Focus Not Obscured (Minimum) | AA | Focused elements are not entirely hidden by sticky headers, floating panels, etc. | Required |
| 2.5.3 | Label in Name | A | Accessible name of controls includes their visible text label | Required |
| 2.5.8 | Target Size (Minimum) | AA | Interactive targets are at least 24x24 CSS pixels (44x44 recommended for touch) | Required |

### Understandable

| SC | Name | Level | Requirement | Status |
|----|------|-------|-------------|--------|
| 3.1.1 | Language of Page | A | `<html lang="...">` is set correctly | Required |
| 3.1.2 | Language of Parts | AA | Inline content in a different language uses `lang` attribute | Required |
| 3.2.1 | On Focus | A | Focus alone does not trigger unexpected changes (navigation, form submission) | Required |
| 3.2.2 | On Input | A | Input changes do not automatically cause unexpected context changes | Required |
| 3.3.1 | Error Identification | A | Form errors are described in text (not just color) and associated with the relevant field | Required |
| 3.3.2 | Labels or Instructions | A | Form fields have labels; complex inputs have instructions | Required |

### Robust

| SC | Name | Level | Requirement | Status |
|----|------|-------|-------------|--------|
| 4.1.2 | Name, Role, Value | A | All custom UI components expose name, role, and value to assistive tech via ARIA | Required |
| 4.1.3 | Status Messages | AA | Status messages (toasts, alerts) use `aria-live` regions | Required |

---

## Color Contrast Requirements

### Text Contrast

| Text Type | Minimum Ratio | Qalam Compliance |
|-----------|---------------|------------------|
| Normal text (< 18pt) | 4.5:1 | All foreground/background combinations verified |
| Large text (>= 18pt or >= 14pt bold) | 3:1 | Verified |
| Incidental text (decorative, disabled, logos) | No requirement | N/A |

### Non-Text Contrast

| Element | Minimum Ratio | Notes |
|---------|---------------|-------|
| UI component boundaries (input borders, button outlines) | 3:1 | Against adjacent background |
| Focus indicators | 3:1 | The focus ring against both the focused element and the surrounding background |
| Icons that convey meaning | 3:1 | Against their background |
| Graphical objects (charts, data visualizations) | 3:1 | Each meaningful segment against adjacent segments |

### Verifying Contrast

The Qalam OKLCH palette was designed with these contrast requirements in mind. See [Color Palette](./color-palette.md) for verified ratios. When creating new color combinations:

1. Use an OKLCH-aware contrast checker (APCA or WCAG 2.x algorithm)
2. Test both light mode and dark mode
3. Test against all three common CVD types (protanopia, deuteranopia, tritanopia)
4. Document the contrast ratio in the token definition

---

## Keyboard Navigation

### Global Keyboard Patterns

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next focusable element |
| `Shift + Tab` | Move focus to previous focusable element |
| `Enter` | Activate focused button/link |
| `Space` | Activate focused button; toggle checkbox; select option |
| `Escape` | Close modal/dialog/dropdown; cancel current action |
| `Arrow Up/Down` | Navigate within lists, menus, select options, radio groups |
| `Arrow Left/Right` | Navigate within tabs, horizontal menus; in RTL, arrows reverse |
| `Home / End` | Jump to first/last item in a list or menu |

### Focus Management

- **Focus ring:** All focusable elements display a visible focus ring using `:focus-visible`. The ring uses `outline: 2px solid var(--color-primary)` with a `2px` offset. This is defined globally in the base styles.

- **Focus trap:** Modal dialogs trap focus within the dialog. Focus moves to the first focusable element when the dialog opens and returns to the trigger element when it closes. Implemented via Radix UI dialog primitives.

- **Skip link:** A "Skip to main content" link is the first focusable element on every page. It becomes visible on focus and jumps to `<main id="main-content">`.

- **Roving tabindex:** Tab groups (tab bars, toolbars, radio groups) use roving `tabindex` -- only one item in the group is in the tab order at a time; arrow keys move within the group.

### Component Keyboard Patterns

| Component | Keys | Behavior |
|-----------|------|----------|
| Button | Enter, Space | Activates the button |
| Link | Enter | Follows the link |
| Dialog | Escape | Closes the dialog |
| Tabs | Arrow Left/Right | Switches active tab |
| Select / Dropdown | Arrow Up/Down, Enter | Navigates and selects options |
| Checkbox | Space | Toggles checked state |
| Radio Group | Arrow Up/Down | Moves selection within group |
| Menu | Arrow Up/Down, Enter, Escape | Navigates items, selects, closes |
| Tooltip | Escape | Dismisses the tooltip |
| Data Table (clickable rows) | Tab to row, Enter | Navigates to row detail |
| Combobox / Autocomplete | Arrow Up/Down, Enter, Escape | Navigates suggestions, selects, closes |

---

## Screen Reader Considerations

### Landmarks

Every page must include these ARIA landmarks:

| Landmark | Element | `aria-label` |
|----------|---------|--------------|
| Banner | `<header>` | -- (implicit) |
| Navigation (main) | `<nav aria-label="Main navigation">` | "Main navigation" |
| Navigation (admin) | `<nav aria-label="Admin navigation">` | "Admin navigation" (if applicable) |
| Main content | `<main id="main-content">` | -- (implicit) |
| Complementary | `<aside>` | Contextual label |
| Content info | `<footer>` | -- (implicit) |

When multiple `<nav>` elements exist on a page, each must have a unique `aria-label`.

### Live Regions

Dynamic content updates must be announced to screen readers:

| Content Type | ARIA Pattern |
|-------------|--------------|
| Toast notifications | `role="status"` + `aria-live="polite"` |
| Error messages | `role="alert"` (implicit `aria-live="assertive"`) |
| Search result counts | `aria-live="polite"` on the count element |
| Loading states | `aria-busy="true"` on the loading container |
| Form validation | `aria-describedby` linking to the error message element |

### Semantic HTML

- Use `<button>` for actions, `<a>` for navigation -- never `<div onClick>`
- Use `<dl>`, `<dt>`, `<dd>` for key-value metadata
- Use `<table>` with `<th scope="col/row">` for tabular data
- Use heading hierarchy (`h1` through `h6`) sequentially -- no skipped levels
- Use `<label>` with `for` attribute or wrapping for all form inputs

### Images and Charts

- Informative images: `alt="Descriptive text"`
- Decorative images: `alt=""` or `aria-hidden="true"`
- Complex charts/visualizations: `role="img"` + `aria-label="Description"` or provide a text-based data table alternative
- SVG icons: `aria-hidden="true"` when adjacent to text; `role="img"` + `aria-label` when standalone

---

## RTL / BiDi Support

The platform serves content in both Arabic (RTL) and Latin (LTR) scripts. All components must render correctly in both directions.

### Document Direction

- Set `dir="rtl"` and `lang="ar"` on the root element for Arabic-primary pages
- Set `dir="ltr"` and `lang="en"` for English-primary pages
- Use `dir` attribute on inline elements when mixing languages

### CSS Requirements

- Use **CSS logical properties** exclusively (see [Typography](./typography.md) for the complete mapping)
- Never use `left`/`right` in CSS -- use `inline-start`/`inline-end`
- Flexbox and Grid `direction` follows the document `dir` automatically
- Test all components in both `dir="ltr"` and `dir="rtl"`

### Content Rules

- Wrap inline Arabic text in `<bdi>` or `<span lang="ar" dir="rtl">`
- Use `unicode-bidi: isolate` for dynamic mixed-direction content
- Numbers in Arabic text remain LTR (this is handled automatically by the Unicode Bidi Algorithm)
- Punctuation follows the language it belongs to

### Icons in RTL

Directional icons (arrows, chevrons, reply/forward) must mirror in RTL. Non-directional icons (search, close, settings) must not. See [Iconography](./iconography.md) for the complete list.

### Testing RTL

Every component in Storybook must include an RTL story variant. RTL testing covers:
- Text alignment flips correctly
- Padding and margins mirror (via logical properties)
- Directional icons mirror
- Focus order follows RTL reading order
- Scroll direction follows document direction

---

## Motion and Animation

### Reduced Motion

All animations must respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

When reduced motion is active:
- Skeleton shimmer animations are disabled (static skeleton shown)
- Graph force simulation skips warmup animation
- Page transitions are instant
- Toasts appear without slide/fade animation

### Animation Principles

- Animations communicate state change, not decoration
- Duration: 150-300ms for micro-interactions; up to 500ms for skeleton shimmer
- Easing: `ease-out` for enter animations; `ease-in` for exit
- No animation should be required to understand content or complete a task

---

## Testing Checklist

Before any component or page ships, verify:

- [ ] All text meets 4.5:1 contrast (normal) or 3:1 (large text)
- [ ] All non-text UI elements meet 3:1 contrast
- [ ] All interactive elements are keyboard accessible (Tab, Enter, Space, Escape)
- [ ] Focus indicator is visible on all focusable elements
- [ ] Focus order is logical and follows visual layout
- [ ] All form inputs have associated labels
- [ ] All images and icons have appropriate text alternatives
- [ ] Page has correct heading hierarchy (no skipped levels)
- [ ] ARIA landmarks are present and correctly labeled
- [ ] Dynamic content updates use `aria-live` regions
- [ ] Component works in both LTR and RTL
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Touch targets are at least 24x24px (44x44 recommended)
- [ ] Page has a descriptive `<title>`
- [ ] `lang` attributes are set correctly on page and inline content
- [ ] Tested with at least one screen reader (VoiceOver, NVDA, or JAWS)
