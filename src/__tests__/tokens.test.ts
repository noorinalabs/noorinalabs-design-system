import { describe, it, expect } from 'vitest'
import {
  colors,
  colorsDark,
  dataViz,
  dataVizDark,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
  container,
  radius,
  zIndex,
  shadow,
  duration,
  easing,
  borderWidth,
  tokens,
} from '../tokens'

describe('design tokens', () => {
  it('exports color tokens with expected semantic keys', () => {
    expect(colors).toBeDefined()
    expect(colors.primary).toBeTruthy()
    expect(colors.secondary).toBeTruthy()
    expect(colors.destructive).toBeTruthy()
    expect(colors.background).toBeTruthy()
    expect(colors.foreground).toBeTruthy()
  })

  it('exports dark mode color tokens', () => {
    expect(colorsDark).toBeDefined()
    expect(colorsDark.primary).toBeTruthy()
    expect(colorsDark.background).toBeTruthy()
  })

  it('exports domain-specific color tokens', () => {
    expect(colors.sahih).toBeTruthy()
    expect(colors.hasan).toBeTruthy()
    expect(colors.daif).toBeTruthy()
    expect(colors.sunni).toBeTruthy()
    expect(colors.shia).toBeTruthy()
    expect(colors.tierThiqah).toBeTruthy()
  })

  it('exports a categorical data-viz palette (light + dark) with an accent', () => {
    expect(dataViz.categorical).toHaveLength(10)
    expect(dataVizDark.categorical).toHaveLength(dataViz.categorical.length)
    for (const c of [...dataViz.categorical, ...dataVizDark.categorical]) {
      expect(c).toMatch(/^oklch\(/)
    }
    expect(dataViz.accent).toBeTruthy()
    expect(dataVizDark.accent).toBeTruthy()
  })

  it('keeps the categorical series perceptually distinct (unique hues)', () => {
    const hueOf = (c: string) => Number(c.match(/oklch\([\d.]+ [\d.]+ ([\d.]+)\)/)?.[1])
    const hues = dataViz.categorical.map(hueOf)
    expect(hues.every((h) => Number.isFinite(h))).toBe(true)
    expect(new Set(hues).size).toBe(hues.length)
  })

  it('exports font family tokens', () => {
    expect(fontFamily.arabic).toContain('Noto Naskh Arabic')
    expect(fontFamily.body).toContain('IBM Plex Sans')
    expect(fontFamily.mono).toContain('IBM Plex Mono')
  })

  it('exports font size tokens', () => {
    expect(fontSize.base).toBe('1rem')
    expect(fontSize.sm).toBe('0.875rem')
  })

  it('exports font weight tokens', () => {
    expect(fontWeight.normal).toBe(400)
    expect(fontWeight.bold).toBe(700)
  })

  it('exports line height tokens', () => {
    expect(lineHeight.normal).toBe(1.5)
    expect(lineHeight.tight).toBe(1.25)
  })

  it('exports spacing tokens', () => {
    expect(spacing[4]).toBe('1rem')
    expect(spacing[0]).toBe('0')
  })

  it('exports container width tokens (Tailwind 4 stock scale)', () => {
    expect(container.md).toBe('28rem')
    expect(container['3xs']).toBe('16rem')
    expect(container['7xl']).toBe('80rem')
  })

  it('exports radius tokens', () => {
    expect(radius.full).toBe('9999px')
    expect(radius.md).toBe('0.375rem')
  })

  it('exports z-index tokens', () => {
    expect(zIndex.modal).toBe(400)
    expect(zIndex.tooltip).toBe(700)
  })

  it('exports shadow tokens', () => {
    expect(shadow.sm).toBeTruthy()
    expect(shadow.lg).toBeTruthy()
  })

  it('exports duration and easing tokens', () => {
    expect(duration.fast).toBe('100ms')
    expect(easing.default).toContain('cubic-bezier')
  })

  it('exports border width tokens', () => {
    expect(borderWidth.thin).toBe('1px')
  })

  it('exports aggregate tokens object with all sub-tokens', () => {
    expect(tokens).toBeDefined()
    expect(tokens.colors).toBe(colors)
    expect(tokens.colorsDark).toBe(colorsDark)
    expect(tokens.dataViz).toBe(dataViz)
    expect(tokens.dataVizDark).toBe(dataVizDark)
    expect(tokens.fontFamily).toBe(fontFamily)
    expect(tokens.fontSize).toBe(fontSize)
    expect(tokens.spacing).toBe(spacing)
    expect(tokens.container).toBe(container)
    expect(tokens.radius).toBe(radius)
    expect(tokens.shadow).toBe(shadow)
    expect(tokens.duration).toBe(duration)
    expect(tokens.easing).toBe(easing)
    expect(tokens.borderWidth).toBe(borderWidth)
  })
})
