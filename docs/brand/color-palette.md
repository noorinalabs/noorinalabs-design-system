# Color Palette

The Qalam color system uses **OKLCH** (Oklab Lightness, Chroma, Hue) for perceptually uniform color manipulation. All colors are defined as OKLCH values with sRGB hex fallbacks for environments that do not support OKLCH.

## Design Rationale

The palette draws from manuscript tradition: deep ink for text, aged parchment for backgrounds, and sienna marginalia accents for interactive elements. Colors are restrained -- the data, not the chrome, should command attention.

---

## Core Palette

### Light Mode

| Token | Name | OKLCH | Hex | Role |
|-------|------|-------|-----|------|
| `--color-foreground` | Ink | `oklch(0.25 0.02 260)` | `#1e2a3a` | Primary text, headings |
| `--color-background` | Parchment | `oklch(0.96 0.01 85)` | `#f5f0e8` | Page background |
| `--color-surface` | Vellum | `oklch(0.99 0.005 85)` | `#faf8f3` | Elevated surfaces (cards, panels) |
| `--color-surface-foreground` | Ink | `oklch(0.25 0.02 260)` | `#1e2a3a` | Text on elevated surfaces |
| `--color-primary` | Sienna | `oklch(0.55 0.14 45)` | `#a0522d` | Primary accent, links, interactive elements |
| `--color-primary-foreground` | White | -- | `#ffffff` | Text on primary accent backgrounds |
| `--color-muted` | Graphite | `oklch(0.45 0.01 260)` | `#5c6370` | Muted text, captions, placeholders |
| `--color-border` | Border | `oklch(0.85 0.01 85)` | `#d4cfc5` | Borders, dividers, separators |

### Semantic Colors

| Token | Name | OKLCH | Hex | Role |
|-------|------|-------|-----|------|
| `--color-destructive` | Vermillion | `oklch(0.60 0.18 30)` | `#c04020` | Errors, destructive actions, delete confirmations |
| `--color-success` | Verdigris | `oklch(0.55 0.10 175)` | `#2a8a6a` | Success states, confirmations |
| `--color-warning` | Ochre | `oklch(0.65 0.14 75)` | `#b8860b` | Warnings, caution states |
| `--color-info` | Lapis | `oklch(0.45 0.12 260)` | `#2d5a9e` | Informational highlights |

### Domain-Specific Colors

These colors encode domain meaning in the isnad-graph platform.

| Token | OKLCH | Hex | Meaning |
|-------|-------|-----|---------|
| `--color-sahih` | `oklch(0.55 0.10 175)` | `#2a8a6a` | Sahih (authentic) grading |
| `--color-hasan` | `oklch(0.65 0.14 75)` | `#b8860b` | Hasan (good) grading |
| `--color-daif` | `oklch(0.60 0.18 30)` | `#c04020` | Da'if (weak) grading |
| `--color-mawdu` | `oklch(0.50 0.15 15)` | -- | Mawdu' (fabricated) grading |
| `--color-sunni` | `oklch(0.55 0.10 175)` | `#2a8a6a` | Sunni sect identifier |
| `--color-shia` | `oklch(0.45 0.12 260)` | `#2d5a9e` | Shia sect identifier |

---

## Dark Mode

Dark mode inverts the parchment/ink relationship while preserving warmth. Accent hues increase lightness by approximately 15% to maintain contrast against dark backgrounds.

### Dark Mode Mappings

| Token | Light OKLCH | Dark OKLCH | Dark Hex | Notes |
|-------|-------------|------------|----------|-------|
| `--color-foreground` | `oklch(0.25 0.02 260)` | `oklch(0.92 0.01 85)` | `#ece5d8` | Warm off-white, not pure white |
| `--color-background` | `oklch(0.96 0.01 85)` | `oklch(0.20 0.015 260)` | `#1a1f28` | Deep warm charcoal |
| `--color-surface` | `oklch(0.99 0.005 85)` | `oklch(0.25 0.015 260)` | -- | Slightly elevated charcoal |
| `--color-surface-foreground` | `oklch(0.25 0.02 260)` | `oklch(0.92 0.01 85)` | `#ece5d8` | Matches foreground |
| `--color-primary` | `oklch(0.55 0.14 45)` | `oklch(0.65 0.14 45)` | -- | Sienna, lightened for dark bg |
| `--color-muted` | `oklch(0.45 0.01 260)` | `oklch(0.60 0.01 260)` | -- | Graphite, lightened |
| `--color-border` | `oklch(0.85 0.01 85)` | `oklch(0.35 0.01 260)` | -- | Subtle dark border |
| `--color-destructive` | `oklch(0.60 0.18 30)` | `oklch(0.70 0.16 30)` | -- | Vermillion, lightened |
| `--color-success` | `oklch(0.55 0.10 175)` | `oklch(0.65 0.10 175)` | -- | Verdigris, lightened |
| `--color-warning` | `oklch(0.65 0.14 75)` | `oklch(0.75 0.12 75)` | -- | Ochre, lightened |
| `--color-info` | `oklch(0.45 0.12 260)` | `oklch(0.55 0.10 260)` | -- | Lapis, lightened |

---

## Contrast Ratios (WCAG 2.2 AA)

WCAG 2.2 AA requires a minimum contrast ratio of **4.5:1** for normal text and **3:1** for large text (18pt+ or 14pt+ bold).

### Light Mode Contrast

| Foreground | Background | Ratio | AA Normal | AA Large | Notes |
|------------|------------|-------|-----------|----------|-------|
| Ink (`#1e2a3a`) | Parchment (`#f5f0e8`) | **12.8:1** | Pass | Pass | Primary text -- exceeds AAA |
| Ink (`#1e2a3a`) | Vellum (`#faf8f3`) | **14.5:1** | Pass | Pass | Text on cards -- exceeds AAA |
| Sienna (`#a0522d`) | Parchment (`#f5f0e8`) | **5.2:1** | Pass | Pass | Links, interactive text |
| Sienna (`#a0522d`) | Vellum (`#faf8f3`) | **5.8:1** | Pass | Pass | Links on cards |
| Graphite (`#5c6370`) | Parchment (`#f5f0e8`) | **4.8:1** | Pass | Pass | Muted/caption text |
| White (`#ffffff`) | Sienna (`#a0522d`) | **4.6:1** | Pass | Pass | Text on primary buttons |
| Vermillion (`#c04020`) | Parchment (`#f5f0e8`) | **5.0:1** | Pass | Pass | Error text |
| Verdigris (`#2a8a6a`) | Parchment (`#f5f0e8`) | **4.6:1** | Pass | Pass | Success text |

### Dark Mode Contrast

| Foreground | Background | Ratio | AA Normal | AA Large | Notes |
|------------|------------|-------|-----------|----------|-------|
| Off-white (`#ece5d8`) | Charcoal (`#1a1f28`) | **12.1:1** | Pass | Pass | Primary text |
| Lightened sienna | Charcoal (`#1a1f28`) | **5.5:1** | Pass | Pass | Links, interactive text |
| Lightened graphite | Charcoal (`#1a1f28`) | **4.5:1** | Pass | Pass | Muted text |

### Color Vision Deficiency (CVD)

The palette has been verified to remain distinguishable under the three most common forms of color vision deficiency:

- **Protanopia** (red-blind): Sienna and verdigris remain distinguishable by lightness
- **Deuteranopia** (green-blind): Semantic colors differentiated by hue angle spread (45, 175, 75, 30)
- **Tritanopia** (blue-blind): Lapis info color distinguished from others by lightness

Domain-specific grading colors (sahih/hasan/daif/mawdu) always include text labels as a non-color fallback.

---

## Categorical / Data-Visualization Palette

A **qualitative** scale for graph and chart **series** — community/cluster coloring in the isnad-graph `ForceGraph`, comparative views, and timelines. Unlike the semantic and domain colors above, these carry **no inherent meaning**: they exist only to keep adjacent series mutually distinguishable. Index assignment (series 1, 2, 3, …) is positional and stable, so a given cluster keeps its color across renders.

Design constraints:

- **10 series**, hues spread around the wheel with deliberate **lightness variation** so the scale survives the three common forms of color-vision deficiency (CVD), not hue alone.
- Each series meets **WCAG 2.2 §1.4.11 non-text contrast (≥3:1)** against its mode's `--color-background`, so a filled node/marker reads against the canvas. (Series marks are graphical objects; pair them with labels/legends — never rely on series color alone to convey identity.)
- A separate **accent** token (`--color-viz-accent`) for the active/selected edge or focused-node ring.
- Light and dark variants follow the same lighten-for-dark strategy as the rest of the system.

### Light Mode (on Parchment `#f5f0e8`)

| Token | OKLCH | Hex | Contrast vs bg |
|-------|-------|-----|----------------|
| `--color-viz-categorical-1` | `oklch(0.58 0.15 35)` | `#c25237` | 4.08:1 |
| `--color-viz-categorical-2` | `oklch(0.6 0.135 75)` | `#ae7200` | 3.59:1 |
| `--color-viz-categorical-3` | `oklch(0.62 0.12 120)` | `#7d9034` | 3.15:1 |
| `--color-viz-categorical-4` | `oklch(0.55 0.11 155)` | `#318454` | 4.10:1 |
| `--color-viz-categorical-5` | `oklch(0.58 0.1 195)` | `#008c8d` | 3.63:1 |
| `--color-viz-categorical-6` | `oklch(0.52 0.13 245)` | `#036eae` | 4.86:1 |
| `--color-viz-categorical-7` | `oklch(0.48 0.14 275)` | `#4953ab` | 6.05:1 |
| `--color-viz-categorical-8` | `oklch(0.52 0.15 310)` | `#834ba8` | 5.28:1 |
| `--color-viz-categorical-9` | `oklch(0.55 0.16 345)` | `#af4387` | 4.72:1 |
| `--color-viz-categorical-10` | `oklch(0.5 0.17 15)` | `#af2843` | 5.86:1 |
| `--color-viz-accent` | `oklch(0.55 0.18 255)` | `#026fd7` | 4.39:1 |

### Dark Mode (on Charcoal `#1a1f28`)

| Token | OKLCH | Hex | Contrast vs bg |
|-------|-------|-----|----------------|
| `--color-viz-categorical-1` | `oklch(0.72 0.13 35)` | `#ea856b` | 6.94:1 |
| `--color-viz-categorical-2` | `oklch(0.78 0.12 75)` | `#e4ac59` | 8.91:1 |
| `--color-viz-categorical-3` | `oklch(0.75 0.11 120)` | `#a5b866` | 8.34:1 |
| `--color-viz-categorical-4` | `oklch(0.7 0.1 155)` | `#69b183` | 7.08:1 |
| `--color-viz-categorical-5` | `oklch(0.72 0.09 195)` | `#57b6b6` | 7.58:1 |
| `--color-viz-categorical-6` | `oklch(0.68 0.12 245)` | `#519fdd` | 6.35:1 |
| `--color-viz-categorical-7` | `oklch(0.66 0.13 275)` | `#7c8ae1` | 5.68:1 |
| `--color-viz-categorical-8` | `oklch(0.7 0.13 310)` | `#b786db` | 6.43:1 |
| `--color-viz-categorical-9` | `oklch(0.72 0.14 345)` | `#e17eb9` | 6.82:1 |
| `--color-viz-categorical-10` | `oklch(0.68 0.15 15)` | `#e56d7a` | 5.85:1 |
| `--color-viz-accent` | `oklch(0.7 0.15 255)` | `#59a0f9` | 6.76:1 |

> Contrast ratios computed via OKLCH→sRGB conversion against the mode's `--color-background`. All series clear the 3:1 non-text-contrast bar; the accent additionally clears 4.5:1 (text-level AA) in both modes.

### Consuming the palette

These tokens are exported both ways, matching the rest of the system:

- **CSS custom properties** — `--color-viz-categorical-1` … `--color-viz-categorical-10` and `--color-viz-accent`. They are **theme-reactive**: they resolve to the light or dark value automatically under `prefers-color-scheme` or a `[data-theme]` toggle. A canvas renderer that cannot use `var()` directly should read the resolved value with `getComputedStyle(document.documentElement).getPropertyValue('--color-viz-categorical-' + n)`, mirroring how `ForceGraph` already reads its theme colors. This keeps the graph in step with light/dark mode.
- **TypeScript constants** — `dataViz` (light) and `dataVizDark` (dark) from `@noorinalabs/design-system/tokens`, each `{ categorical: string[], accent: string }`. Use these for libraries that take a static color array. Note they are **not** theme-reactive — prefer the CSS vars when the view must follow the active theme.

```ts
import { dataViz } from '@noorinalabs/design-system/tokens'

const seriesColor = (i: number) => dataViz.categorical[i % dataViz.categorical.length]
```

This palette is the agreed source for **isnad-graph#979** (deriving `ForceGraph` community colors + accent from DS tokens), replacing the bespoke hardcoded `COMMUNITY_HEX` array and `ACCENT`.

---

## Usage Guidelines

### Do

- Use `--color-primary` (sienna) for interactive elements: links, buttons, focused inputs
- Use `--color-foreground` (ink) for all body text and headings
- Use `--color-muted` (graphite) for secondary text: captions, timestamps, metadata labels
- Use semantic colors (`destructive`, `success`, `warning`, `info`) consistently for their designated states
- Always pair color-only indicators with text or icon labels for accessibility
- Use `--color-border` for all dividers, card borders, and input outlines

### Don't

- Don't use `--color-primary` for large background areas -- it is an accent, not a surface
- Don't use semantic colors decoratively; they must retain their meaning
- Don't rely on color alone to communicate state (always pair with text or iconography)
- Don't mix light mode and dark mode tokens in the same context
- Don't create new color tokens outside this palette without design system team approval

### CSS Custom Properties Reference

```css
:root {
  /* Qalam palette -- light mode */
  --color-primary: oklch(0.55 0.14 45);
  --color-primary-foreground: #ffffff;
  --color-background: oklch(0.96 0.01 85);
  --color-foreground: oklch(0.25 0.02 260);
  --color-surface: oklch(0.99 0.005 85);
  --color-surface-foreground: oklch(0.25 0.02 260);
  --color-muted: oklch(0.45 0.01 260);
  --color-border: oklch(0.85 0.01 85);
  --color-destructive: oklch(0.60 0.18 30);
  --color-success: oklch(0.55 0.10 175);
  --color-warning: oklch(0.65 0.14 75);
  --color-info: oklch(0.45 0.12 260);

  /* Domain: grading */
  --color-sahih: oklch(0.55 0.10 175);
  --color-hasan: oklch(0.65 0.14 75);
  --color-daif: oklch(0.60 0.18 30);
  --color-mawdu: oklch(0.50 0.15 15);

  /* Domain: sect */
  --color-sunni: oklch(0.55 0.10 175);
  --color-shia: oklch(0.45 0.12 260);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: oklch(0.20 0.015 260);
    --color-foreground: oklch(0.92 0.01 85);
    --color-surface: oklch(0.25 0.015 260);
    --color-surface-foreground: oklch(0.92 0.01 85);
    --color-border: oklch(0.35 0.01 260);
    --color-muted: oklch(0.60 0.01 260);
    --color-primary: oklch(0.65 0.14 45);
    --color-destructive: oklch(0.70 0.16 30);
    --color-success: oklch(0.65 0.10 175);
    --color-warning: oklch(0.75 0.12 75);
    --color-info: oklch(0.55 0.10 260);
  }
}
```
