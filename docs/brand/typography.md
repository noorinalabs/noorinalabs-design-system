# Typography

The Qalam type system serves a bilingual scholarly platform where Arabic and Latin scripts must coexist with equal dignity. Typography choices prioritize extended reading comfort, clear hierarchy, and proper rendering of Arabic diacritics (tashkeel).

---

## Font Stack

| Role | Font Family | Fallback | CSS Custom Property |
|------|-------------|----------|---------------------|
| Arabic text | Noto Naskh Arabic | serif | `--font-arabic` |
| Latin headings | IBM Plex Serif | Georgia, serif | `--font-heading` |
| Latin body | IBM Plex Sans | system-ui, sans-serif | `--font-body` |
| Monospace / data | IBM Plex Mono | ui-monospace, monospace | `--font-mono` |

### Font Selection Rationale

- **Noto Naskh Arabic** -- The most legible Arabic web font with complete diacritics (tashkeel) support. Essential for hadith text where diacritics carry meaning. Noto Naskh renders consistently across platforms and has extensive Unicode coverage for classical Arabic.

- **IBM Plex Serif** -- Used for Latin headings to give an editorial, scholarly quality. The serif treatment signals authority and permanence appropriate for an academic research tool.

- **IBM Plex Sans** -- Clean and neutral for Latin body text. Defers to Arabic when both scripts appear, avoiding visual competition. Excellent tabular figures for data-heavy views.

- **IBM Plex Mono** -- For code snippets, Cypher queries, API responses, and tabular data. The IBM Plex family gives typographic cohesion across all three weights.

### CSS Custom Properties

```css
:root {
  --font-arabic: 'Noto Naskh Arabic', serif;
  --font-heading: 'IBM Plex Serif', serif;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

---

## Type Scale

The type scale uses a **1.25 ratio** (Major Third) for Latin text, with Arabic sizes adjusted upward to achieve optical equivalence.

### Latin Type Scale

| Step | Token | Size (rem) | Size (px) | Weight | Line Height | Use |
|------|-------|-----------|-----------|--------|-------------|-----|
| -2 | `--text-xs` | 0.75 | 12 | 400 | 1.5 | Fine print, timestamps |
| -1 | `--text-sm` | 0.875 | 14 | 400 | 1.5 | Captions, metadata labels |
| 0 | `--text-base` | 1.0 | 16 | 400 | 1.6 | Body text (IBM Plex Sans) |
| 1 | `--text-lg` | 1.125 | 18 | 400 | 1.5 | Lead paragraphs |
| 2 | `--text-xl` | 1.25 | 20 | 600 | 1.3 | H4 headings (IBM Plex Serif) |
| 3 | `--text-2xl` | 1.5 | 24 | 600 | 1.3 | H3 headings |
| 4 | `--text-3xl` | 1.875 | 30 | 600 | 1.2 | H2 headings |
| 5 | `--text-4xl` | 2.25 | 36 | 600 | 1.2 | H1 headings |
| 6 | `--text-5xl` | 3.0 | 48 | 600 | 1.1 | Display / hero |

### Arabic Type Scale

Arabic text requires **larger font sizes** (typically 1.125x the Latin equivalent) and **taller line heights** to accommodate the vertical extent of Arabic letterforms, diacritics above and below the baseline, and the visual density of connected script.

| Step | Size (rem) | Weight | Line Height | Use |
|------|-----------|--------|-------------|-----|
| Body | 1.125 | 400 | 2.0 | Arabic body text |
| Lead | 1.25 | 400 | 1.8 | Arabic lead paragraphs |
| H4 | 1.5 | 700 | 1.6 | Arabic H4 headings |
| H3 | 1.75 | 700 | 1.6 | Arabic H3 headings |
| H2 | 2.125 | 700 | 1.4 | Arabic H2 headings |
| H1 | 2.5 | 700 | 1.4 | Arabic H1 headings |
| Display | 3.375 | 700 | 1.2 | Arabic display / hero |

### Monospace Scale

| Use | Size (rem) | Weight | Line Height |
|-----|-----------|--------|-------------|
| Inline code | 0.875 | 400 | inherit |
| Code blocks | 0.875 | 400 | 1.5 |
| Data tables | 0.875 | 400 | 1.5 |

---

## Arabic Text Handling

### Line Height

Arabic text requires significantly taller line height than Latin text due to:
- Diacritical marks (tashkeel) above and below letterforms
- Descenders and ascenders that extend further than Latin equivalents
- Connected script that benefits from more vertical breathing room

**Rule:** Arabic body text uses `line-height: 2.0`; Arabic headings use `line-height: 1.4-1.6`. Never use line heights below 1.4 for Arabic text.

### Font Size Adjustment

When Arabic and Latin text appear at the same nominal `font-size`, the Arabic often appears visually smaller due to different x-height proportions. Apply a **1.125x multiplier** to Arabic font sizes to achieve optical parity.

```css
[lang="ar"] {
  font-family: var(--font-arabic);
  font-size: 1.125em; /* relative to parent Latin size */
  line-height: 2.0;
  direction: rtl;
}
```

### Diacritics (Tashkeel)

Hadith text frequently includes full diacritical marks. Ensure:
- Sufficient `line-height` so marks do not collide with adjacent lines
- No CSS `text-transform` applied to Arabic text (it is meaningless and can corrupt rendering)
- No `letter-spacing` adjustments on Arabic text (it breaks connected letterforms)
- `font-feature-settings` are left at defaults for Arabic -- do not enable ligature features that may alter scholarly text

### Word Spacing

Arabic text uses natural word spacing. Do not apply `word-spacing` adjustments. Do not justify Arabic text (`text-align: justify`) as it creates uneven gaps in connected script.

---

## Mixed Latin/Arabic Layout

### BiDi (Bidirectional) Text

The platform renders content in both LTR (Latin) and RTL (Arabic) directions, often within the same view.

#### Page-Level Direction

- Pages with primarily Arabic content: `dir="rtl"` on `<html>` or `<body>`
- Pages with primarily Latin content: `dir="ltr"` on `<html>` or `<body>`
- The application should detect content language and set direction accordingly

#### Inline Mixed Text

When Arabic and Latin text appear in the same paragraph or element:

```html
<!-- Use <bdi> to isolate bidirectional text -->
<p>The narrator <bdi lang="ar" dir="rtl">&#x627;&#x644;&#x628;&#x62E;&#x627;&#x631;&#x64A;</bdi> transmitted 7,275 hadith.</p>

<!-- For standalone Arabic names in Latin context -->
<span lang="ar" dir="rtl" class="font-arabic">&#x645;&#x633;&#x644;&#x645;</span>
```

**Rules:**
- Always wrap inline Arabic text in an element with `lang="ar"` and `dir="rtl"`
- Use `<bdi>` for user-generated or dynamic bidirectional content
- Use `<span lang="ar" dir="rtl">` for known Arabic content in templates
- Never rely on Unicode Bidirectional Algorithm alone -- always declare direction explicitly

#### CSS Logical Properties

All layout CSS must use **logical properties** instead of physical properties to support both LTR and RTL layouts:

| Physical (don't use) | Logical (use instead) |
|----------------------|----------------------|
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `text-align: left` | `text-align: start` |
| `text-align: right` | `text-align: end` |
| `float: left` | `float: inline-start` |
| `border-left` | `border-inline-start` |
| `left` / `right` | `inset-inline-start` / `inset-inline-end` |

#### Layout Patterns for Mixed Content

**Side-by-side Arabic/Latin (e.g., hadith with translation):**

```css
.bilingual-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.bilingual-layout .arabic-column {
  direction: rtl;
  text-align: start; /* aligns to right in RTL */
  font-family: var(--font-arabic);
  font-size: 1.125em;
  line-height: 2.0;
}

.bilingual-layout .latin-column {
  direction: ltr;
  text-align: start; /* aligns to left in LTR */
  font-family: var(--font-body);
  line-height: 1.6;
}
```

**Stacked Arabic/Latin (mobile or narrow views):**

```css
@media (max-width: 640px) {
  .bilingual-layout {
    grid-template-columns: 1fr;
  }
}
```

---

## Typography Do's and Don'ts

### Do

- Use IBM Plex Serif for Latin headings, IBM Plex Sans for Latin body
- Use Noto Naskh Arabic for all Arabic text
- Apply the 1.125x size multiplier for Arabic text alongside Latin
- Use `line-height: 2.0` for Arabic body text
- Use CSS logical properties for all directional layout
- Set `lang` and `dir` attributes on Arabic text elements
- Use `<bdi>` for dynamic bidirectional content

### Don't

- Don't apply `letter-spacing` to Arabic text
- Don't apply `text-transform` to Arabic text
- Don't use `text-align: justify` for Arabic text
- Don't set Arabic `line-height` below 1.4
- Don't use physical CSS properties (`margin-left`, `padding-right`) -- use logical equivalents
- Don't rely on the Unicode Bidi Algorithm without explicit `dir` attributes
- Don't use IBM Plex Sans for headings or IBM Plex Serif for body text
- Don't mix font families within a single text run (e.g., don't set Arabic text in IBM Plex Sans)
