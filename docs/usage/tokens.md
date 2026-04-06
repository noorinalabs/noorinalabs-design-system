# Token Reference

Design tokens are the foundational values (colors, typography, spacing, shadows, etc.) that ensure visual consistency across all NoorinALabs products. They are available as both **CSS custom properties** and **TypeScript constants**.

## Importing Tokens

### CSS Custom Properties

Import the stylesheet once in your app entry:

```tsx
import '@noorinalabs/design-system/styles.css'
```

Then use custom properties anywhere in CSS or Tailwind:

```css
.my-element {
  color: var(--color-primary);
  font-family: var(--font-body);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-md);
}
```

### TypeScript Constants

For programmatic access (charting libraries, styled-components, runtime logic):

```tsx
import { colors, fontFamily, spacing, shadow } from '@noorinalabs/design-system/tokens'

// Use in a charting library
const chartColor = colors.primary // 'oklch(0.55 0.14 45)'

// Or import the aggregate object
import { tokens } from '@noorinalabs/design-system/tokens'
tokens.colors.sahih // 'oklch(0.55 0.10 175)'
```

---

## Colors

The color system uses the **OKLCH** color space for perceptually uniform palettes. All combinations meet WCAG 2.2 AA contrast requirements.

### Semantic Colors

| Token (CSS) | Token (TS) | Purpose |
|-------------|-----------|---------|
| `--color-primary` | `colors.primary` | Primary brand action color |
| `--color-primary-hover` | `colors.primaryHover` | Primary hover state |
| `--color-primary-foreground` | `colors.primaryForeground` | Text on primary |
| `--color-secondary` | `colors.secondary` | Secondary actions |
| `--color-secondary-foreground` | `colors.secondaryForeground` | Text on secondary |
| `--color-muted` | `colors.muted` | Muted backgrounds |
| `--color-muted-foreground` | `colors.mutedForeground` | Muted text |
| `--color-accent` | `colors.accent` | Accent highlights |
| `--color-accent-foreground` | `colors.accentForeground` | Text on accent |
| `--color-destructive` | `colors.destructive` | Destructive/error actions |
| `--color-destructive-foreground` | `colors.destructiveForeground` | Text on destructive |
| `--color-success` | `colors.success` | Success states |
| `--color-warning` | `colors.warning` | Warning states |
| `--color-info` | `colors.info` | Informational states |

### Surface Colors

| Token (CSS) | Token (TS) | Purpose |
|-------------|-----------|---------|
| `--color-background` | `colors.background` | Page background |
| `--color-foreground` | `colors.foreground` | Default text color |
| `--color-card` | `colors.card` | Card/panel background |
| `--color-card-foreground` | `colors.cardForeground` | Text on cards |
| `--color-popover` | `colors.popover` | Popover/dropdown background |
| `--color-popover-foreground` | `colors.popoverForeground` | Text on popovers |

### Interactive Colors

| Token (CSS) | Token (TS) | Purpose |
|-------------|-----------|---------|
| `--color-border` | `colors.border` | Default border color |
| `--color-input` | `colors.input` | Input border color |
| `--color-ring` | `colors.ring` | Focus ring color |

### Domain: Hadith Grading

| Token (CSS) | Token (TS) | Purpose |
|-------------|-----------|---------|
| `--color-sahih` / `--color-sahih-bg` | `colors.sahih` / `colors.sahihBg` | Authentic (green) |
| `--color-hasan` / `--color-hasan-bg` | `colors.hasan` / `colors.hasanBg` | Good (amber) |
| `--color-daif` / `--color-daif-bg` | `colors.daif` / `colors.daifBg` | Weak (red) |
| `--color-mawdu` / `--color-mawdu-bg` | `colors.mawdu` / `colors.mawduBg` | Fabricated (dark red) |

### Domain: Sect Indicators

| Token (CSS) | Token (TS) | Purpose |
|-------------|-----------|---------|
| `--color-sunni` / `--color-sunni-bg` | `colors.sunni` / `colors.sunniBg` | Sunni (teal) |
| `--color-shia` / `--color-shia-bg` | `colors.shia` / `colors.shiaBg` | Shia (indigo) |

### Domain: Narrator Reliability Tiers

| Token (CSS) | Token (TS) | Purpose |
|-------------|-----------|---------|
| `--color-tier-thiqah` | `colors.tierThiqah` | Trustworthy |
| `--color-tier-saduq` | `colors.tierSaduq` | Truthful |
| `--color-tier-daif-narrator` | `colors.tierDaifNarrator` | Weak narrator |
| `--color-tier-matruk` | `colors.tierMatruk` | Abandoned |
| `--color-tier-kadhdhab` | `colors.tierKadhdhab` | Liar |

### Dark Mode

Dark mode tokens are provided automatically via:
- `prefers-color-scheme: dark` media query
- `data-theme="dark"` attribute on `<html>`

Dark-mode values are available in TypeScript as `colorsDark`:

```tsx
import { colorsDark } from '@noorinalabs/design-system/tokens'
colorsDark.primary // 'oklch(0.65 0.14 45)'
```

---

## Typography

### Font Families

| Token (CSS) | Token (TS) | Fonts | Usage |
|-------------|-----------|-------|-------|
| `--font-arabic` | `fontFamily.arabic` | Noto Naskh Arabic, serif | Arabic script text |
| `--font-heading` | `fontFamily.heading` | IBM Plex Serif, Georgia, serif | Headings |
| `--font-body` | `fontFamily.body` | IBM Plex Sans, Inter, system-ui | Body text |
| `--font-mono` | `fontFamily.mono` | IBM Plex Mono, ui-monospace | Code blocks |

### Type Scale

| Token (CSS) | Token (TS) | Size |
|-------------|-----------|------|
| `--text-xs` | `fontSize.xs` | 0.75rem (12px) |
| `--text-sm` | `fontSize.sm` | 0.875rem (14px) |
| `--text-base` | `fontSize.base` | 1rem (16px) |
| `--text-lg` | `fontSize.lg` | 1.125rem (18px) |
| `--text-xl` | `fontSize.xl` | 1.25rem (20px) |
| `--text-2xl` | `fontSize["2xl"]` | 1.5rem (24px) |
| `--text-3xl` | `fontSize["3xl"]` | 1.875rem (30px) |
| `--text-4xl` | `fontSize["4xl"]` | 2.25rem (36px) |

### Line Heights

| Token (CSS) | Token (TS) | Value |
|-------------|-----------|-------|
| `--leading-tight` | `lineHeight.tight` | 1.25 |
| `--leading-normal` | `lineHeight.normal` | 1.5 |
| `--leading-relaxed` | `lineHeight.relaxed` | 1.625 |
| `--leading-loose` | `lineHeight.loose` | 2 |

### Font Weights

| Token (CSS) | Token (TS) | Value |
|-------------|-----------|-------|
| `--font-weight-normal` | `fontWeight.normal` | 400 |
| `--font-weight-medium` | `fontWeight.medium` | 500 |
| `--font-weight-semibold` | `fontWeight.semibold` | 600 |
| `--font-weight-bold` | `fontWeight.bold` | 700 |

### Arabic Typography

| Token (CSS) | Token (TS) | Value | Purpose |
|-------------|-----------|-------|---------|
| `--arabic-line-height` | `arabicTypography.lineHeight` | 2 | Extra line height for Arabic diacritics |
| `--arabic-body-size` | `arabicTypography.bodySize` | 1.125rem | Larger base size for Arabic readability |
| `--arabic-heading-size` | `arabicTypography.headingSize` | 1.5rem | Arabic heading size |

---

## Spacing

Based on a 4px base scale with semantic aliases.

### Scale

| Token (CSS) | Token (TS) | Value |
|-------------|-----------|-------|
| `--spacing-px` | `spacing.px` | 1px |
| `--spacing-0` | `spacing[0]` | 0 |
| `--spacing-0_5` | `spacing[0.5]` | 0.125rem (2px) |
| `--spacing-1` | `spacing[1]` | 0.25rem (4px) |
| `--spacing-1_5` | `spacing[1.5]` | 0.375rem (6px) |
| `--spacing-2` | `spacing[2]` | 0.5rem (8px) |
| `--spacing-3` | `spacing[3]` | 0.75rem (12px) |
| `--spacing-4` | `spacing[4]` | 1rem (16px) |
| `--spacing-6` | `spacing[6]` | 1.5rem (24px) |
| `--spacing-8` | `spacing[8]` | 2rem (32px) |
| `--spacing-12` | `spacing[12]` | 3rem (48px) |
| `--spacing-16` | `spacing[16]` | 4rem (64px) |
| `--spacing-20` | `spacing[20]` | 5rem (80px) |
| `--spacing-24` | `spacing[24]` | 6rem (96px) |

### Semantic Aliases

| Token (CSS) | Token (TS) | Maps To |
|-------------|-----------|---------|
| `--spacing-xs` | `spacingSemantic.xs` | `--spacing-1` (4px) |
| `--spacing-sm` | `spacingSemantic.sm` | `--spacing-2` (8px) |
| `--spacing-md` | `spacingSemantic.md` | `--spacing-4` (16px) |
| `--spacing-lg` | `spacingSemantic.lg` | `--spacing-6` (24px) |
| `--spacing-xl` | `spacingSemantic.xl` | `--spacing-8` (32px) |

---

## Shadows

OKLCH-based shadows with deeper dark mode variants.

| Token (CSS) | Token (TS) | Usage |
|-------------|-----------|-------|
| `--shadow-xs` | `shadow.xs` | Subtle elevation (inputs, small cards) |
| `--shadow-sm` | `shadow.sm` | Light elevation (cards) |
| `--shadow-md` | `shadow.md` | Medium elevation (dropdowns) |
| `--shadow-lg` | `shadow.lg` | High elevation (modals) |
| `--shadow-xl` | `shadow.xl` | Highest elevation (popovers) |

Dark mode shadows (TypeScript): `shadowDark.xs` through `shadowDark.xl`.

---

## Border Radii

| Token (CSS) | Token (TS) | Value |
|-------------|-----------|-------|
| `--radius-sm` | `radius.sm` | 0.25rem (4px) |
| `--radius-md` | `radius.md` | 0.375rem (6px) |
| `--radius-lg` | `radius.lg` | 0.5rem (8px) |
| `--radius-xl` | `radius.xl` | 0.75rem (12px) |
| `--radius-2xl` | `radius["2xl"]` | 1rem (16px) |
| `--radius-full` | `radius.full` | 9999px (pill) |

---

## Z-Index

| Token (CSS) | Token (TS) | Value | Usage |
|-------------|-----------|-------|-------|
| `--z-base` | `zIndex.base` | 0 | Default |
| `--z-dropdown` | `zIndex.dropdown` | 100 | Dropdown menus |
| `--z-sticky` | `zIndex.sticky` | 200 | Sticky headers |
| `--z-overlay` | `zIndex.overlay` | 300 | Overlays |
| `--z-modal` | `zIndex.modal` | 400 | Modals |
| `--z-popover` | `zIndex.popover` | 500 | Popovers |
| `--z-toast` | `zIndex.toast` | 600 | Toast notifications |
| `--z-tooltip` | `zIndex.tooltip` | 700 | Tooltips |

---

## Motion

| Token (CSS) | Token (TS) | Value |
|-------------|-----------|-------|
| `--duration-fast` | `duration.fast` | 100ms |
| `--duration-normal` | `duration.normal` | 200ms |
| `--duration-slow` | `duration.slow` | 300ms |
| `--duration-slower` | `duration.slower` | 500ms |
| `--ease-default` | `easing.default` | cubic-bezier(0.4, 0, 0.2, 1) |
| `--ease-in` | `easing.in` | cubic-bezier(0.4, 0, 1, 1) |
| `--ease-out` | `easing.out` | cubic-bezier(0, 0, 0.2, 1) |
| `--ease-in-out` | `easing.inOut` | cubic-bezier(0.4, 0, 0.2, 1) |

---

## Borders

| Token (CSS) | Token (TS) | Value |
|-------------|-----------|-------|
| `--border-width-thin` | `borderWidth.thin` | 1px |
| `--border-width-medium` | `borderWidth.medium` | 2px |
| `--border-width-thick` | `borderWidth.thick` | 4px |
