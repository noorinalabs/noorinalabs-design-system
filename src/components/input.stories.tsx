import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: { defaultValue: 'Hello world' },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Cannot edit' },
}

export const Password: Story = {
  args: { type: 'password', placeholder: 'Enter password...' },
}

export const Email: Story = {
  args: { type: 'email', placeholder: 'user@example.com' },
}

export const RTL: Story = {
  render: () => (
    <div dir="rtl">
      <Input placeholder="ادخل النص هنا..." />
    </div>
  ),
}

export const FocusManagement: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300 }}>
      <label>
        Name
        <Input placeholder="Enter name" />
      </label>
      <label>
        Email
        <Input type="email" placeholder="Enter email" />
      </label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const { within, userEvent } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const nameInput = canvas.getByPlaceholderText('Enter name')
    await userEvent.click(nameInput)
    await userEvent.tab()
  },
}

export const DarkMode: Story = {
  render: () => (
    <div className="dark" style={{ background: '#1a1a2e', padding: 24, borderRadius: 8 }}>
      <Input placeholder="Dark mode input..." />
    </div>
  ),
}
