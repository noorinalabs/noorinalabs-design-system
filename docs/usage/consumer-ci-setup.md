# Consumer CI Setup for @noorinalabs/design-system

This guide explains how to install and use `@noorinalabs/design-system` from GitHub Packages in your repository's CI pipeline.

## 1. Configure `.npmrc`

Create or update `.npmrc` in your repository root to scope `@noorinalabs` packages to GitHub Packages:

```
@noorinalabs:registry=https://npm.pkg.github.com
```

Commit this file to your repository.

## 2. CI Workflow Configuration

### GitHub Actions

Use `actions/setup-node@v4` with `registry-url` and pass `GITHUB_TOKEN` as `NODE_AUTH_TOKEN`:

```yaml
steps:
  - uses: actions/checkout@v4

  - name: Setup Node.js
    uses: actions/setup-node@v4
    with:
      node-version: 20.x
      cache: npm
      registry-url: https://npm.pkg.github.com

  - name: Install dependencies
    run: npm ci
    env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

`GITHUB_TOKEN` is automatically available in GitHub Actions — no manual secret setup is required for repositories within the same organization.

### Cross-organization access

If the consumer repo is outside the `noorinalabs` organization, you will need to create a Personal Access Token (PAT) with `read:packages` scope and add it as a repository secret (e.g., `GH_PACKAGES_TOKEN`), then use that instead:

```yaml
env:
  NODE_AUTH_TOKEN: ${{ secrets.GH_PACKAGES_TOKEN }}
```

## 3. CSS Import — Known Limitation

### The problem

`@tailwindcss/vite` uses `enhanced-resolve` for CSS `@import` statements. This resolver does **not** support the `exports` field in `package.json` for CSS files. As a result, the following will fail:

```css
/* This does NOT work with @tailwindcss/vite */
@import '@noorinalabs/design-system/styles.css';
```

### The workaround

Import the CSS file via JavaScript in your framework's frontmatter or entry point instead:

**Astro** (in layout or page frontmatter):
```astro
---
import '@noorinalabs/design-system/styles.css';
---
```

**Vite / React** (in main entry):
```ts
import '@noorinalabs/design-system/styles.css';
```

Both of these use Node's standard module resolution which correctly handles the `exports` field, mapping `./styles.css` to `./dist/styles.css`.

### Why this works

Node's ESM resolution reads `package.json` `exports` and resolves `@noorinalabs/design-system/styles.css` to the correct `dist/styles.css` file. Vite's JavaScript import pipeline uses Node resolution, while Tailwind's CSS `@import` uses `enhanced-resolve` which does not support `exports` for CSS paths.

## 4. Verify Installation

After setup, you can verify the package is correctly installed:

```bash
# Check the package is installed
ls node_modules/@noorinalabs/design-system/dist/

# Verify JS imports work
node -e "import('@noorinalabs/design-system').then(m => console.log('OK:', Object.keys(m)))"

# Verify CSS file is accessible
node -e "require('fs').accessSync(require.resolve('@noorinalabs/design-system/styles.css')); console.log('CSS OK')"
```
