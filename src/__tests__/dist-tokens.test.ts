import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/*
 * Published-dist token-resolution guard (#104).
 *
 * The bug: base tokens were authored in Tailwind v4 `@theme {}` blocks. `@theme`
 * is a build-time directive — when the dist is consumed as plain CSS (any
 * non-Tailwind consumer, or a browser directly), `@theme {}` is an unknown
 * at-rule and is silently ignored, so every `var(--color-*)` resolved to empty.
 *
 * These assertions run against the *built* dist (CI runs `npm run build` before
 * `npm run test`), so they verify the published artifact actually emits the
 * tokens to a browser-honored `:root` selector — i.e. they test *resolution*,
 * not mere token *existence*, which is what the original review/CI missed.
 *
 * When the dist has not been built (e.g. a bare `npm run test` with no prior
 * build), the suite skips rather than failing — CI is the enforcement point.
 */
const distCssPath = resolve(process.cwd(), 'dist/styles.css')
const distBuilt = existsSync(distCssPath)

describe.skipIf(!distBuilt)('published dist token resolution (#104)', () => {
  const css = distBuilt ? readFileSync(distCssPath, 'utf8') : ''

  it('ships no raw Tailwind @theme block (browsers ignore it)', () => {
    expect(css).not.toContain('@theme')
  })

  it('emits base surface/semantic tokens to a :root selector', () => {
    // Grab every :root{...} body (light base + prefers-dark + others) and
    // assert the critical base tokens are declared in at least one of them.
    const rootBodies = [...css.matchAll(/:root\s*\{([^}]*)\}/g)].map((m) => m[1])
    const allRoot = rootBodies.join('\n')
    for (const token of [
      '--color-background',
      '--color-foreground',
      '--color-border',
      '--color-primary',
      '--color-card',
      '--spacing-3',
    ]) {
      expect(allRoot, `${token} must resolve in :root, not @theme`).toContain(`${token}:`)
    }
  })

  it('keeps the explicit [data-theme] override blocks for opt-in theming', () => {
    expect(css).toContain('[data-theme=dark]')
    expect(css).toContain('[data-theme=light]')
  })

  it('sets color-scheme in the prefers-dark :root block so native UI honors dark (#109)', () => {
    // Find the @media(prefers-color-scheme:dark){:root{...}} block that carries
    // the color tokens (a second prefers-dark block exists for shadows) and
    // assert it declares `color-scheme: dark` — otherwise native form controls /
    // scrollbars stay light under OS dark for plain-CSS consumers.
    const prefersDarkRootBodies = [
      ...css.matchAll(/@media[^{]*prefers-color-scheme:\s*dark[^{]*\{\s*:root\s*\{([^}]*)\}/g),
    ].map((m) => m[1] ?? '')
    const colorTokenBlock = prefersDarkRootBodies.find((body) =>
      body.includes('--color-background'),
    )
    expect(colorTokenBlock, 'prefers-dark :root color block must exist in dist').toBeDefined()
    expect(colorTokenBlock).toMatch(/color-scheme:\s*dark/)
  })
})
