import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'sunni', 'shia', 'sahih', 'hasan', 'daif', 'mawdu'],
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

export const Hasan: Story = {
  args: { variant: 'hasan', children: 'Hasan' },
}

export const Daif: Story = {
  args: { variant: 'daif', children: 'Da\'if' },
}

export const Mawdu: Story = {
  args: { variant: 'mawdu', children: 'Mawdu\'' },
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
      <Badge variant="hasan">Hasan</Badge>
      <Badge variant="daif">Da'if</Badge>
      <Badge variant="mawdu">Mawdu'</Badge>
    </div>
  ),
}

export const RTL: Story = {
  render: () => (
    <div dir="rtl">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <Badge variant="default">افتراضي</Badge>
        <Badge variant="sahih">صحيح</Badge>
        <Badge variant="hasan">حسن</Badge>
        <Badge variant="daif">ضعيف</Badge>
        <Badge variant="mawdu">موضوع</Badge>
        <Badge variant="sunni">سني</Badge>
        <Badge variant="shia">شيعي</Badge>
      </div>
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
        <Badge variant="hasan">Hasan</Badge>
        <Badge variant="daif">Da'if</Badge>
        <Badge variant="mawdu">Mawdu'</Badge>
      </div>
    </div>
  ),
}
