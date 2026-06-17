import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/*
 * Published-dist component-utilities guard (ds#115).
 *
 * The bug: the interactive components express their structural contract
 * (positioning / sizing / overlay / focus ring / surface colors) as Tailwind
 * utility classes in their `className` strings, but the dist build never ran a
 * Tailwind utility pass over the components — so `dist/styles.css` shipped tokens
 * + authored component classes but ZERO of those utilities. A consumer's
 * Tailwind build skips `node_modules`, so the utilities emitted nowhere and apps
 * had to hand-mirror the class list with `@source inline(...)`.
 *
 * styles/component-utilities.css now runs that pass, so the compiled utilities
 * ride along in dist/styles.css and consumers can drop their `@source inline`
 * mirrors. These assertions run against the *built* dist (CI runs `npm run
 * build` before `npm run test`) so they verify the published artifact actually
 * carries the utilities AND that each resolves to the runtime DS tokens — not
 * mere class existence. When the dist has not been built (bare `npm run test`
 * with no prior build) the suite skips; CI is the enforcement point.
 */
const distCssPath = resolve(process.cwd(), 'dist/styles.css')
const distBuilt = existsSync(distCssPath)

describe.skipIf(!distBuilt)('published dist component utilities (ds#115)', () => {
  const css = distBuilt ? readFileSync(distCssPath, 'utf8') : ''

  it('emits the Dialog overlay/content structural utilities', () => {
    // The exact class contract isnad-graph previously mirrored with @source inline.
    for (const rule of [
      '.fixed{',
      '.inset-0{',
      '.z-50{',
      '.max-w-lg{',
      '.-translate-x-1\\/2{',
      '.-translate-y-1\\/2{',
      '.grid{',
      '.rounded-lg{',
      '.shadow-lg{',
    ]) {
      expect(css, `${rule} must be compiled into dist/styles.css`).toContain(rule)
    }
  })

  it('emits DS-color utilities that resolve to the runtime --color-* tokens', () => {
    // Color utilities must reference the tokens shipped in tokens/colors.css,
    // not re-declare them — i.e. @theme inline, single source of truth.
    expect(css).toContain('.bg-background{background-color:var(--color-background)}')
    expect(css).toContain('.text-muted-foreground{color:var(--color-muted-foreground)}')
    expect(css).toContain('.bg-popover{background-color:var(--color-popover)}')
    // accent / ring are only used in variant form (hover/focus/data-state).
    expect(css).toContain('bg-accent:hover{background-color:var(--color-accent)}')
    expect(css).toContain('outline-ring:focus{outline-color:var(--color-ring)}')
  })

  it('wraps the generated utilities in the `utilities` cascade layer', () => {
    // Layering keeps DS utilities at the same low precedence as a consumer's own
    // Tailwind utilities, preserving override semantics.
    expect(css).toContain('@layer utilities{')
  })
})
