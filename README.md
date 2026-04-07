# @noorinalabs/design-system

The Qalam Design System — shared design tokens, React components, icons, and brand assets for all Noorina Labs frontends.

**[Storybook (live)](https://noorinalabs.github.io/noorinalabs-design-system/)** | [Usage Guide](docs/usage/README.md) | [Brand Guidelines](docs/brand/README.md)

## Quick Start

```bash
# Configure npm for the @noorinalabs scope
echo '@noorinalabs:registry=https://npm.pkg.github.com' >> .npmrc

# Install
npm install @noorinalabs/design-system
```

```tsx
import '@noorinalabs/design-system/styles.css'
import { Button, Card } from '@noorinalabs/design-system'
```

## Development

```bash
npm install              # Install dependencies
npm run dev              # Start Storybook dev server (port 6006)
npm run build            # Build the component library
npm run build:storybook  # Build static Storybook site
npm run check            # Run lint + typecheck + tests
```

## Documentation

- [Usage & Installation](docs/usage/README.md)
- [Token Reference](docs/usage/tokens.md)
- [Brand Guidelines](docs/brand/README.md)
- [Consumer CI Setup](docs/usage/consumer-ci-setup.md)
