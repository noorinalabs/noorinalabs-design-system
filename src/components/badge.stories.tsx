import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'sunni', 'shia', 'sahih'],
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
}

export const Sunni: Story = {
  args: { variant: 'sunni', children: 'Sunni' },
}

export const Shia: Story = {
  args: { variant: 'shia', children: 'Shia' },
}

export const Sahih: Story = {
  args: { variant: 'sahih', children: 'Sahih' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="sunni">Sunni</Badge>
      <Badge variant="shia">Shia</Badge>
      <Badge variant="sahih">Sahih</Badge>
    </div>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <div className="dark" style={{ background: '#1a1a2e', padding: 24, borderRadius: 8 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="sunni">Sunni</Badge>
        <Badge variant="shia">Shia</Badge>
        <Badge variant="sahih">Sahih</Badge>
      </div>
    </div>
  ),
}
