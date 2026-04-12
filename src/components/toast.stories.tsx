import type { Meta, StoryObj } from '@storybook/react'
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from './toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toast open>
      <ToastTitle>Notification</ToastTitle>
      <ToastDescription>Something happened.</ToastDescription>
    </Toast>
  ),
}

export const Success: Story = {
  render: () => (
    <Toast open variant="success">
      <ToastTitle>Success</ToastTitle>
      <ToastDescription>Changes saved successfully.</ToastDescription>
    </Toast>
  ),
}

export const Error: Story = {
  render: () => (
    <Toast open variant="error">
      <ToastTitle>Error</ToastTitle>
      <ToastDescription>Something went wrong.</ToastDescription>
    </Toast>
  ),
}

export const Warning: Story = {
  render: () => (
    <Toast open variant="warning">
      <ToastTitle>Warning</ToastTitle>
      <ToastDescription>This action cannot be undone.</ToastDescription>
    </Toast>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Toast open>
        <ToastTitle>Default</ToastTitle>
        <ToastDescription>Default notification.</ToastDescription>
      </Toast>
      <Toast open variant="success">
        <ToastTitle>Success</ToastTitle>
        <ToastDescription>It worked.</ToastDescription>
      </Toast>
      <Toast open variant="error">
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>It failed.</ToastDescription>
      </Toast>
      <Toast open variant="warning">
        <ToastTitle>Warning</ToastTitle>
        <ToastDescription>Be careful.</ToastDescription>
      </Toast>
    </div>
  ),
}
