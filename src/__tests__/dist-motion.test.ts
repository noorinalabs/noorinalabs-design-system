import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/*
 * Published-dist motion-primitive emission guard (#110).
 *
 * The motion primitives (`.reveal`, `[data-parallax]` + reduced-motion gating)
 * are promoted into the DS so framework-neutral consumers — the Astro landing
 * page (which cannot import React) and the React isnad-graph app — reuse the
 * same behaviour from the published `dist/styles.css` instead of re-rolling it.
 *
 * The failure mode this guards against (DS #104/#111/#812): a "primitive" that
 * only exists in a Tailwind `@theme {}` block, an `@source inline` mirror, or
 * dist JS emits 0 CSS to a non-Tailwind consumer. These are plain CSS
 * class/attribute selectors, so they MUST appear as real rules in the built
 * artifact. CI runs `npm run build` before `npm run test`; when the dist has not
 * been built (bare `npm run test`), the suite skips — CI is the enforcement
 * point.
 */
const distCssPath = resolve(process.cwd(), 'dist/styles.css')
const distBuilt = existsSync(distCssPath)

describe.skipIf(!distBuilt)('published dist motion primitives (#110)', () => {
  const css = distBuilt ? readFileSync(distCssPath, 'utf8') : ''

  it('emits the .reveal scroll-reveal selectors as real CSS', () => {
    expect(css).toContain('.reveal')
    expect(css).toContain('.is-visible')
    // Reveal transition is built on DS motion tokens, not bespoke values.
    expect(css).toContain('var(--duration-slower)')
    expect(css).toContain('var(--ease-out)')
  })

  it('emits the [data-parallax] primitive as real CSS', () => {
    expect(css).toContain('[data-parallax]')
    expect(css).toContain('--parallax-offset')
  })

  it('gates motion behind .motion-ready (no-JS safety)', () => {
    expect(css).toContain('.motion-ready')
  })

  it('ships the prefers-reduced-motion guard', () => {
    expect(css).toContain('prefers-reduced-motion')
  })
})
