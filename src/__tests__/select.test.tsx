import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '../components/select'

afterEach(cleanup)

describe('Select', () => {
  it('renders trigger with placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByText('Choose option')).toBeDefined()
  })

  it('renders as a combobox role', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick item" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="x">X</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(screen.getByRole('combobox')).toBeDefined()
  })

  it('opens dropdown when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select value" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="one">One</SelectItem>
          <SelectItem value="two">Two</SelectItem>
        </SelectContent>
      </Select>
    )

    await user.click(screen.getByRole('combobox'))
    expect(screen.getByText('One')).toBeDefined()
    expect(screen.getByText('Two')).toBeDefined()
  })

  it('renders with groups and labels', async () => {
    const user = userEvent.setup()
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Grouped select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )

    await user.click(screen.getByRole('combobox'))
    expect(screen.getByText('Fruits')).toBeDefined()
    expect(screen.getByText('Apple')).toBeDefined()
    expect(screen.getByText('Vegetables')).toBeDefined()
  })

  it('selects an item when clicked', async () => {
    const user = userEvent.setup()
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick one please" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alpha">Alpha</SelectItem>
          <SelectItem value="beta">Beta</SelectItem>
        </SelectContent>
      </Select>
    )

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Alpha'))
    expect(screen.getByText('Alpha')).toBeDefined()
  })

  it('supports disabled items', async () => {
    const user = userEvent.setup()
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick something" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="enabled">Enabled</SelectItem>
          <SelectItem value="disabled" disabled>Disabled Option</SelectItem>
        </SelectContent>
      </Select>
    )

    await user.click(screen.getByRole('combobox'))
    expect(screen.getByText('Disabled Option')).toBeDefined()
  })
})
