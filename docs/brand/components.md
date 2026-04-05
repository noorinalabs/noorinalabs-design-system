# Component Usage Guidelines

High-level guidelines for using Qalam design system components. Detailed API documentation, props, and interactive examples are available in Storybook.

---

## Principles

1. **Use the design system** -- Do not create custom components for patterns that already exist in the system. If a pattern is missing, request it through the design system team.

2. **Composition over customization** -- Components are built from Radix UI primitives with CVA variants. Use the provided variants rather than overriding styles with custom CSS.

3. **Accessibility is built in** -- Components handle ARIA attributes, keyboard navigation, and focus management. Do not remove or override these. If you need different accessibility behavior, discuss with the accessibility engineer.

4. **BiDi by default** -- All components render correctly in both LTR and RTL. This is achieved through CSS logical properties and Radix UI's built-in direction support. Do not add directional CSS overrides.

---

## Component Categories

### Layout

| Component | Use | Notes |
|-----------|-----|-------|
| Container | Page-width wrapper with responsive padding | Max-width varies by breakpoint |
| Stack | Vertical or horizontal spacing | Uses `gap` for consistent spacing tokens |
| Grid | Multi-column layouts | CSS Grid with responsive breakpoints |
| Sidebar | Application navigation panel | Includes skip-link target, landmarks |
| Card | Elevated content container | Uses `--color-surface` background |

### Navigation

| Component | Use | Notes |
|-----------|-----|-------|
| NavLink | Sidebar and top-bar navigation items | Active state uses `--color-primary` |
| Breadcrumb | Page hierarchy trail | Uses `<nav aria-label="Breadcrumb">` |
| Tabs | Content section switching | Arrow key navigation, roving tabindex |
| Pagination | Page-level result navigation | Uses `<nav aria-label="Page navigation">` |

### Forms

| Component | Use | Notes |
|-----------|-----|-------|
| Input | Text entry fields | Always pair with Label; supports `aria-describedby` for errors |
| Select | Dropdown selection | Built on Radix Select; keyboard navigable |
| Checkbox | Boolean toggles | Must be wrapped in `<label>` |
| RadioGroup | Single selection from options | Arrow key navigation within group |
| Button | Actions and form submission | Variants: primary, secondary, destructive, ghost |
| SearchInput | Combobox with suggestions | Uses `role="combobox"`, `aria-autocomplete="list"` |

### Data Display

| Component | Use | Notes |
|-----------|-----|-------|
| DataTable | Tabular data with sortable columns | Clickable rows must have `tabIndex={0}` and `onKeyDown` |
| Badge | Status indicators, grading labels | Always includes text, not just color |
| DescriptionList | Key-value metadata (narrator details) | Uses `<dl>`, `<dt>`, `<dd>` |
| Skeleton | Loading state placeholder | Respects `prefers-reduced-motion` |

### Feedback

| Component | Use | Notes |
|-----------|-----|-------|
| Dialog | Modal confirmations, detail views | Radix Dialog with focus trap and Escape |
| Toast | Transient status messages | Uses `aria-live="polite"` |
| Alert | Persistent messages (warnings, errors) | Uses `role="alert"` for errors |
| EmptyState | No-data placeholder | Icon + heading + body + optional action |

### Visualization

| Component | Use | Notes |
|-----------|-----|-------|
| ForceGraph | Isnad chain network visualization | Canvas-based; provide text alternative via detail panel |
| Timeline | Historical event timeline | SVG with `role="img"` and `aria-label` |

---

## Variant System

Components use **CVA (class-variance-authority)** for variant definitions. Each component exposes a `variant` prop with predefined options:

```tsx
<Button variant="primary">Submit</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Cancel</Button>
```

### Variant Rules

- Use the `variant` prop -- do not override styles with `className` for variant-level changes
- If a needed variant does not exist, request it rather than creating ad-hoc styles
- Semantic variants (`destructive`, `success`, `warning`) should only be used for their intended meaning
- The `ghost` variant is for de-emphasized actions, not for "unstyled" buttons

---

## Spacing

Components use spacing tokens from the design system. Do not use arbitrary pixel values.

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 0.25rem (4px) | Tight internal spacing |
| `--space-2` | 0.5rem (8px) | Input padding, badge padding |
| `--space-3` | 0.75rem (12px) | Button padding, card internal margin |
| `--space-4` | 1rem (16px) | Standard gap between elements |
| `--space-6` | 1.5rem (24px) | Section spacing |
| `--space-8` | 2rem (32px) | Large section gaps |
| `--space-12` | 3rem (48px) | Page-level vertical spacing |

---

## Dark Mode

All components automatically adapt to dark mode via CSS custom properties. No component-level dark mode logic is needed. The token layer handles all color inversions.

Test every component in both light and dark mode to ensure:
- Text remains legible
- Borders and separators remain visible
- Focus rings remain visible
- Interactive states (hover, active, disabled) remain distinguishable

---

## RTL Support

All components support RTL out of the box. Verify in Storybook RTL stories that:
- Text alignment flips correctly
- Icons that should mirror do mirror
- Padding and margins are correct (logical properties)
- Dropdown/popover positioning follows reading direction

---

## When to Use Storybook

Storybook is the authoritative reference for:
- Complete component API (all props and their types)
- Interactive examples showing all variants and states
- Accessibility annotations (ARIA attributes, keyboard behavior)
- RTL preview mode
- Dark mode preview
- Responsive behavior at different breakpoints

This document provides the high-level "when and why" for each component. Storybook provides the detailed "how."
