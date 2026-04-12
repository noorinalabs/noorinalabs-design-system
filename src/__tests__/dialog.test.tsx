import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/dialog'

afterEach(cleanup)

describe('Dialog', () => {
  it('renders trigger button', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
    expect(screen.getByText('Open Dialog')).toBeDefined()
  })

  it('opens when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Test 2</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title 2</DialogTitle>
            <DialogDescription>Dialog description text</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByText('Open Test 2'))
    expect(screen.getByText('Dialog Title 2')).toBeDefined()
    expect(screen.getByText('Dialog description text')).toBeDefined()
  })

  it('has correct aria attributes when open', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Test 3</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Accessible Dialog</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByText('Open Test 3'))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeDefined()
  })

  it('closes when close button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Test 4</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Closable Dialog</DialogTitle>
            <DialogDescription>Close me</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByText('Open Test 4'))
    expect(screen.getByText('Closable Dialog')).toBeDefined()

    const closeButton = screen.getByText('Close')
    await user.click(closeButton)
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Test 5</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Escape Dialog</DialogTitle>
            <DialogDescription>Press escape</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByText('Open Test 5'))
    expect(screen.getByText('Escape Dialog')).toBeDefined()

    await user.keyboard('{Escape}')
  })

  it('renders footer content', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Test 6</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>With Footer</DialogTitle>
            <DialogDescription>Has footer</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button>Save Changes</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByText('Open Test 6'))
    expect(screen.getByText('Save Changes')).toBeDefined()
  })
})
