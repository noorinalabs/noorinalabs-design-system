import { describe, it, expect } from 'vitest'
import { colors, tokens } from '../tokens'

describe('design tokens', () => {
  it('exports color tokens', () => {
    expect(colors).toBeDefined()
    expect(colors.primary).toBeTruthy()
  })

  it('exports aggregate tokens object', () => {
    expect(tokens).toBeDefined()
    expect(tokens.colors).toBe(colors)
  })
})
