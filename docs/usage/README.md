# Getting Started with @noorinalabs/design-system

The Qalam Design System provides design tokens, React components, icons, and global styles for all NoorinALabs frontends.

## Installation

The package is published to GitHub Packages under the `@noorinalabs` scope.

### 1. Configure npm for the @noorinalabs scope

Create or update `.npmrc` in your project root:

```
@noorinalabs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. Install the package

```bash
npm install @noorinalabs/design-system
```

## Package Exports

| Import Path | What You Get |
|-------------|-------------|
| `@noorinalabs/design-system` | All components, icons, tokens (TS), and `cn()` utility |
| `@noorinalabs/design-system/styles` | Global CSS (tokens + styles combined) |
| `@noorinalabs/design-system/styles.css` | Alias for the above |
| `@noorinalabs/design-system/tokens` | TypeScript token constants only |
| `@noorinalabs/design-system/components/*` | Individual component imports |

## Setup in Your Project

### React (Vite, Next.js, etc.)

```tsx
// Import global styles (tokens + utility classes) — do this once in your app entry
import '@noorinalabs/design-system/styles.css'

// Import components and icons
import { Button, Card, CardHeader, CardTitle, CardContent } from '@noorinalabs/design-system'
import { SearchIcon, NarratorsIcon } from '@noorinalabs/design-system'
```

### Astro

```astro
---
// src/layouts/Layout.astro
import '@noorinalabs/design-system/styles.css'
---

<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

In Astro components that use React (via `@astrojs/react`):

```astro
---
import { Button } from '@noorinalabs/design-system'
---

<Button client:load variant="default">Click me</Button>
```

## Dark Mode

The design system supports dark mode via two mechanisms:

1. **Automatic:** Respects `prefers-color-scheme: dark` media query
2. **Manual toggle:** Set `data-theme="dark"` or `data-theme="light"` on `<html>`

```tsx
// Toggle dark mode programmatically
document.documentElement.setAttribute('data-theme', 'dark')
```

## RTL / BiDi Support

All components use CSS logical properties (`ps-`, `pe-`, `start`, `end`) instead of physical `left`/`right`. To enable RTL:

```html
<html dir="rtl" lang="ar">
```

No additional configuration is needed — components adapt automatically.

## Further Reading

- [Component API Reference](./components.md)
- [Token Reference](./tokens.md)
- [Icon Catalog](./icons.md)
- [Global Styles & Utilities](./styles.md)
- [Contributing Guide](../contributing.md)
