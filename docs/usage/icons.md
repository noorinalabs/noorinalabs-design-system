# Icon Catalog

The Qalam Design System provides domain-specific SVG icons as React components. All icons use `currentColor` for stroke, making them theme-aware in both light and dark mode.

## Usage

```tsx
import { NarratorsIcon, SearchIcon, HadithsIcon } from '@noorinalabs/design-system'

<NarratorsIcon />
<SearchIcon size={24} />
<HadithsIcon className="text-primary" />
```

## Icon Props

All icons extend `SVGAttributes<SVGElement>` and accept:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `16` | Width and height in pixels |
| `className` | `string` | — | Additional CSS classes |
| `...rest` | `SVGAttributes` | — | Any valid SVG attribute |

Icons are rendered with `aria-hidden="true"` by default. For interactive icons, add an accessible label:

```tsx
<button aria-label="Search">
  <SearchIcon />
</button>
```

## Navigation & Feature Icons

| Component | Import | Description |
|-----------|--------|-------------|
| `NarratorsIcon` | `import { NarratorsIcon } from '@noorinalabs/design-system'` | Narrator listing pages |
| `HadithsIcon` | `import { HadithsIcon } from '@noorinalabs/design-system'` | Hadith listing pages |
| `CollectionsIcon` | `import { CollectionsIcon } from '@noorinalabs/design-system'` | Collection browsing |
| `SearchIcon` | `import { SearchIcon } from '@noorinalabs/design-system'` | Search functionality |
| `TimelineIcon` | `import { TimelineIcon } from '@noorinalabs/design-system'` | Timeline views |
| `CompareIcon` | `import { CompareIcon } from '@noorinalabs/design-system'` | Comparison features |
| `GraphExplorerIcon` | `import { GraphExplorerIcon } from '@noorinalabs/design-system'` | Graph explorer |
| `AdminIcon` | `import { AdminIcon } from '@noorinalabs/design-system'` | Admin panel |
| `SignOutIcon` | `import { SignOutIcon } from '@noorinalabs/design-system'` | Sign out action |

## Empty State Illustrations

Larger illustrations for zero-data states. These accept `IllustrationProps` (same shape as `IconProps`).

| Component | Import | Description |
|-----------|--------|-------------|
| `NoResultsIllustration` | `import { NoResultsIllustration } from '@noorinalabs/design-system'` | Search returned no results |
| `EmptyGraphIllustration` | `import { EmptyGraphIllustration } from '@noorinalabs/design-system'` | Graph has no data |
| `NoDataIllustration` | `import { NoDataIllustration } from '@noorinalabs/design-system'` | Generic no-data state |
| `EmptyState` | `import { EmptyState } from '@noorinalabs/design-system'` | Composed empty state with icon, heading, and body |

### Example

```tsx
import { NoResultsIllustration } from '@noorinalabs/design-system'

<div className="empty-state">
  <div className="empty-state-icon">
    <NoResultsIllustration size={64} />
  </div>
  <div className="empty-state-heading">No results found</div>
  <div className="empty-state-body">Try adjusting your search terms.</div>
</div>
```

## Decorative Elements

Islamic geometric patterns for visual accents.

| Component | Import | Description |
|-----------|--------|-------------|
| `GeometricBorder` | `import { GeometricBorder } from '@noorinalabs/design-system'` | Repeating geometric border pattern |
| `OctagonalFrame` | `import { OctagonalFrame } from '@noorinalabs/design-system'` | Octagonal decorative frame |
| `PageHeaderAccent` | `import { PageHeaderAccent } from '@noorinalabs/design-system'` | Accent element for page headers |

## Base Components

For creating custom icons that match the Qalam style:

```tsx
import { IconBase } from '@noorinalabs/design-system'
import type { IconProps } from '@noorinalabs/design-system'

function MyCustomIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
    </IconBase>
  )
}
```

`IconBase` renders a 24x24 viewBox SVG with `stroke="currentColor"`, `strokeWidth="1.5"`, `fill="none"`, and `aria-hidden="true"`.

For illustrations, use `IllustrationBase` instead (same API, designed for larger decorative SVGs).
