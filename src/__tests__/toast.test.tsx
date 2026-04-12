import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup, act } from '@testing-library/react'
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from '../components/toast'

afterEach(() => {
  cleanup()
  // Allow pending React work to flush
  return new Promise(resolve => setTimeout(resolve, 0))
})

describe('Toast', () => {
  it('renders toast with title and description', async () => {
    await act(async () => {
      render(
        <ToastProvider>
          <Toast open>
            <ToastTitle>Success</ToastTitle>
            <ToastDescription>Operation completed</ToastDescription>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      )
    })
    expect(screen.getByText('Success')).toBeDefined()
    expect(screen.getByText('Operation completed')).toBeDefined()
  })

  it('renders with success variant', async () => {
    await act(async () => {
      render(
        <ToastProvider>
          <Toast open variant="success">
            <ToastTitle>Saved</ToastTitle>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      )
    })
    expect(screen.getByText('Saved')).toBeDefined()
  })

  it('renders with error variant', async () => {
    await act(async () => {
      render(
        <ToastProvider>
          <Toast open variant="error">
            <ToastTitle>Error Occurred</ToastTitle>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      )
    })
    expect(screen.getByText('Error Occurred')).toBeDefined()
  })

  it('renders with warning variant', async () => {
    await act(async () => {
      render(
        <ToastProvider>
          <Toast open variant="warning">
            <ToastTitle>Warning Alert</ToastTitle>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      )
    })
    expect(screen.getByText('Warning Alert')).toBeDefined()
  })
})
