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

### Git hooks (required)

This repo mirrors its CI checks locally via [pre-commit](https://pre-commit.com/). After cloning, install BOTH hook stages once:

```bash
pre-commit install                       # commit-stage checks
pre-commit install --hook-type pre-push  # push-stage checks
```

- **Commit stage** runs: gitleaks (secret scan), actionlint (workflow lint), prettier (`format:check`), and eslint — the fast checks that catch the most common defects before a commit is recorded.
- **Pre-push stage** runs: typecheck (`tsc`), build, and the Vitest test suite — the heavier compile + test surface, run before code leaves the machine.

These mirror `.github/workflows/ci.yml` (and the docs/config gates in `.github/workflows/docs.yml`) so failures surface locally before a PR (org-wide local⇄CI parity, noorinalabs-main#684). Never bypass with `--no-verify`. If `pre-commit install` "cowardly refuses" because `core.hooksPath` is set, run `git config --unset core.hooksPath` first.

## Documentation

- [Usage & Installation](docs/usage/README.md)
- [Token Reference](docs/usage/tokens.md)
- [Brand Guidelines](docs/brand/README.md)
- [Consumer CI Setup](docs/usage/consumer-ci-setup.md)
