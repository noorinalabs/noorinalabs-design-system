import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../components/tooltip'

afterEach(cleanup)

describe('Tooltip', () => {
  it('renders trigger content', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
    expect(screen.getByText('Hover me')).toBeDefined()
  })

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover target</TooltipTrigger>
          <TooltipContent>Tooltip info</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    await user.hover(screen.getByText('Hover target'))
    // Radix renders tooltip text both visually and in a visually hidden span for a11y
    const matches = await screen.findAllByText('Tooltip info')
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
