/**
 * Design Tokens — Qalam Design System
 * TypeScript constants mirroring the CSS custom properties.
 * Use these for programmatic access (e.g., charting libraries, styled-components).
 */

// ---------------------------------------------------------------------------
// Colors — Light Mode
// ---------------------------------------------------------------------------

export const colors = {
  // Semantic
  primary: 'oklch(0.55 0.14 45)',
  primaryHover: 'oklch(0.60 0.14 45)',
  primaryForeground: '#ffffff',
  secondary: 'oklch(0.85 0.01 85)',
  secondaryForeground: 'oklch(0.25 0.02 260)',
  muted: 'oklch(0.93 0.005 85)',
  mutedForeground: 'oklch(0.45 0.01 260)',
  accent: 'oklch(0.90 0.03 45)',
  accentForeground: 'oklch(0.40 0.12 45)',
  destructive: 'oklch(0.60 0.18 30)',
  destructiveForeground: '#ffffff',
  success: 'oklch(0.55 0.10 175)',
  successForeground: '#ffffff',
  warning: 'oklch(0.65 0.14 75)',
  warningForeground: 'oklch(0.25 0.02 260)',
  info: 'oklch(0.45 0.12 260)',
  infoForeground: '#ffffff',

  // Surface
  background: 'oklch(0.96 0.01 85)',
  foreground: 'oklch(0.25 0.02 260)',
  card: 'oklch(0.99 0.005 85)',
  cardForeground: 'oklch(0.25 0.02 260)',
  popover: 'oklch(0.99 0.005 85)',
  popoverForeground: 'oklch(0.25 0.02 260)',

  // Interactive
  border: 'oklch(0.85 0.01 85)',
  input: 'oklch(0.85 0.01 85)',
  ring: 'oklch(0.55 0.14 45)',

  // Domain: hadith grading
  sahih: 'oklch(0.55 0.10 175)',
  sahihBg: 'oklch(0.93 0.03 175)',
  hasan: 'oklch(0.65 0.14 75)',
  hasanBg: 'oklch(0.95 0.04 75)',
  daif: 'oklch(0.60 0.18 30)',
  daifBg: 'oklch(0.95 0.03 30)',
  mawdu: 'oklch(0.50 0.15 15)',
  mawduBg: 'oklch(0.94 0.03 15)',

  // Domain: sect indicators
  sunni: 'oklch(0.55 0.10 175)',
  sunniBg: 'oklch(0.93 0.03 175)',
  shia: 'oklch(0.45 0.12 260)',
  shiaBg: 'oklch(0.93 0.03 260)',

  // Domain: narrator reliability tiers
  tierThiqah: 'oklch(0.55 0.10 175)',
  tierSaduq: 'oklch(0.60 0.10 45)',
  tierDaifNarrator: 'oklch(0.65 0.14 75)',
  tierMatruk: 'oklch(0.60 0.18 30)',
  tierKadhdhab: 'oklch(0.50 0.15 15)',
} as const;

// ---------------------------------------------------------------------------
// Colors — Dark Mode
// ---------------------------------------------------------------------------

export const colorsDark = {
  // Surface
  background: 'oklch(0.20 0.015 260)',
  foreground: 'oklch(0.92 0.01 85)',
  card: 'oklch(0.25 0.015 260)',
  cardForeground: 'oklch(0.92 0.01 85)',
  popover: 'oklch(0.25 0.015 260)',
  popoverForeground: 'oklch(0.92 0.01 85)',

  // Semantic
  primary: 'oklch(0.65 0.14 45)',
  primaryHover: 'oklch(0.70 0.14 45)',
  primaryForeground: 'oklch(0.20 0.015 260)',
  secondary: 'oklch(0.30 0.01 260)',
  secondaryForeground: 'oklch(0.90 0.01 85)',
  muted: 'oklch(0.25 0.01 260)',
  mutedForeground: 'oklch(0.60 0.01 260)',
  accent: 'oklch(0.28 0.03 45)',
  accentForeground: 'oklch(0.75 0.12 45)',
  destructive: 'oklch(0.70 0.16 30)',
  destructiveForeground: 'oklch(0.20 0.015 260)',
  success: 'oklch(0.65 0.10 175)',
  successForeground: 'oklch(0.20 0.015 260)',
  warning: 'oklch(0.75 0.12 75)',
  warningForeground: 'oklch(0.20 0.015 260)',
  info: 'oklch(0.55 0.10 260)',
  infoForeground: '#ffffff',

  // Interactive
  border: 'oklch(0.35 0.01 260)',
  input: 'oklch(0.35 0.01 260)',
  ring: 'oklch(0.65 0.14 45)',

  // Domain: hadith grading
  sahih: 'oklch(0.65 0.10 175)',
  sahihBg: 'oklch(0.25 0.03 175)',
  hasan: 'oklch(0.75 0.12 75)',
  hasanBg: 'oklch(0.28 0.04 75)',
  daif: 'oklch(0.70 0.16 30)',
  daifBg: 'oklch(0.25 0.03 30)',
  mawdu: 'oklch(0.60 0.14 15)',
  mawduBg: 'oklch(0.24 0.03 15)',

  // Domain: sect indicators
  sunni: 'oklch(0.65 0.10 175)',
  sunniBg: 'oklch(0.25 0.03 175)',
  shia: 'oklch(0.55 0.10 260)',
  shiaBg: 'oklch(0.25 0.03 260)',

  // Domain: narrator reliability tiers
  tierThiqah: 'oklch(0.65 0.10 175)',
  tierSaduq: 'oklch(0.70 0.10 45)',
  tierDaifNarrator: 'oklch(0.75 0.12 75)',
  tierMatruk: 'oklch(0.70 0.16 30)',
  tierKadhdhab: 'oklch(0.60 0.14 15)',
} as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export const fontFamily = {
  arabic: "'Noto Naskh Arabic', serif",
  heading: "'IBM Plex Serif', 'Georgia', serif",
  body: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
} as const;

export const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
} as const;

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeight = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
} as const;

export const arabicTypography = {
  lineHeight: 2,
  bodySize: '1.125rem',
  headingSize: '1.5rem',
} as const;

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
} as const;

export const spacingSemantic = {
  xs: 'var(--spacing-1)',
  sm: 'var(--spacing-2)',
  md: 'var(--spacing-4)',
  lg: 'var(--spacing-6)',
  xl: 'var(--spacing-8)',
} as const;

// ---------------------------------------------------------------------------
// Radii
// ---------------------------------------------------------------------------

export const radius = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

// ---------------------------------------------------------------------------
// Z-Index
// ---------------------------------------------------------------------------

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  tooltip: 700,
} as const;

// ---------------------------------------------------------------------------
// Shadows
// ---------------------------------------------------------------------------

export const shadow = {
  xs: '0 1px 2px oklch(0 0 0 / 0.05)',
  sm: '0 1px 3px oklch(0 0 0 / 0.1), 0 1px 2px oklch(0 0 0 / 0.06)',
  md: '0 4px 6px oklch(0 0 0 / 0.1), 0 2px 4px oklch(0 0 0 / 0.06)',
  lg: '0 10px 15px oklch(0 0 0 / 0.1), 0 4px 6px oklch(0 0 0 / 0.05)',
  xl: '0 20px 25px oklch(0 0 0 / 0.1), 0 8px 10px oklch(0 0 0 / 0.04)',
} as const;

export const shadowDark = {
  xs: '0 1px 2px oklch(0 0 0 / 0.2)',
  sm: '0 1px 3px oklch(0 0 0 / 0.3), 0 1px 2px oklch(0 0 0 / 0.2)',
  md: '0 4px 6px oklch(0 0 0 / 0.3), 0 2px 4px oklch(0 0 0 / 0.2)',
  lg: '0 10px 15px oklch(0 0 0 / 0.3), 0 4px 6px oklch(0 0 0 / 0.2)',
  xl: '0 20px 25px oklch(0 0 0 / 0.3), 0 8px 10px oklch(0 0 0 / 0.2)',
} as const;

// ---------------------------------------------------------------------------
// Motion / Transitions
// ---------------------------------------------------------------------------

export const duration = {
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

export const easing = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ---------------------------------------------------------------------------
// Borders
// ---------------------------------------------------------------------------

export const borderWidth = {
  thin: '1px',
  medium: '2px',
  thick: '4px',
} as const;

// ---------------------------------------------------------------------------
// Aggregate export
// ---------------------------------------------------------------------------

export const tokens = {
  colors,
  colorsDark,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  arabicTypography,
  spacing,
  spacingSemantic,
  radius,
  zIndex,
  shadow,
  shadowDark,
  duration,
  easing,
  borderWidth,
} as const;
