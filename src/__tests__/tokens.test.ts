import { describe, it, expect } from 'vitest'
import {
  colors,
  colorsDark,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
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
    expect(tokens.fontFamily).toBe(fontFamily)
    expect(tokens.fontSize).toBe(fontSize)
    expect(tokens.spacing).toBe(spacing)
    expect(tokens.radius).toBe(radius)
    expect(tokens.shadow).toBe(shadow)
    expect(tokens.duration).toBe(duration)
    expect(tokens.easing).toBe(easing)
    expect(tokens.borderWidth).toBe(borderWidth)
  })
})
