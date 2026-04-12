import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={0}>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const RTL: Story = {
  render: () => (
    <div dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">مرر فوقي</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>محتوى التلميح</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}
