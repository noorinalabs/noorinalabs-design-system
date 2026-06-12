import { describe, it, expect } from 'vitest'
import { ICON_NAMES, iconBaseAttributes, iconPaths, renderIconSvg } from '../icons/paths'

describe('iconPaths (framework-neutral geometry)', () => {
  it('has inner markup for every declared icon name', () => {
    for (const name of ICON_NAMES) {
      expect(iconPaths[name], `missing markup for ${name}`).toBeTruthy()
    }
  })

  it('exposes exactly the functional icon set', () => {
    expect([...ICON_NAMES].sort()).toEqual(
      [
        'admin',
        'collections',
        'compare',
        'graph-explorer',
        'hadiths',
        'narrators',
        'search',
        'sign-out',
        'timeline',
      ].sort(),
    )
  })

  it('uses SVG-native (kebab-case) attribute names so it renders verbatim in any DOM', () => {
    for (const markup of Object.values(iconPaths)) {
      // No React-style camelCase attributes should leak into the neutral markup.
      expect(markup).not.toMatch(/strokeWidth|strokeDasharray|strokeLinecap/)
    }
    // Spot-check that the kebab-case forms are present where expected.
    expect(iconPaths['graph-explorer']).toContain('stroke-dasharray="2 2"')
    expect(iconPaths.hadiths).toContain('stroke-width="1"')
  })

  it('shares the canonical 24x24 stroke base attributes', () => {
    expect(iconBaseAttributes.viewBox).toBe('0 0 24 24')
    expect(iconBaseAttributes.stroke).toBe('currentColor')
    expect(iconBaseAttributes['stroke-width']).toBe('1.5')
  })
})

describe('renderIconSvg', () => {
  it('wraps the geometry in a complete <svg> with the shared base attributes', () => {
    const svg = renderIconSvg('search')
    expect(svg.startsWith('<svg ')).toBe(true)
    expect(svg.endsWith('</svg>')).toBe(true)
    expect(svg).toContain('viewBox="0 0 24 24"')
    expect(svg).toContain('stroke="currentColor"')
    expect(svg).toContain('width="16"')
    expect(svg).toContain('height="16"')
    expect(svg).toContain(iconPaths.search)
  })

  it('honours a custom size', () => {
    const svg = renderIconSvg('narrators', { size: 32 })
    expect(svg).toContain('width="32"')
    expect(svg).toContain('height="32"')
  })

  it('merges and overrides extra attributes (e.g. class, aria)', () => {
    const svg = renderIconSvg('admin', {
      attributes: { class: 'qalam-icon', 'aria-hidden': 'false', 'aria-label': 'Admin' },
    })
    expect(svg).toContain('class="qalam-icon"')
    expect(svg).toContain('aria-hidden="false"')
    expect(svg).toContain('aria-label="Admin"')
  })
})
