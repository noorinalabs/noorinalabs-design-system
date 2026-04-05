import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './select'

const meta = {
  title: 'Components/Select',
  component: Select,
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger style={{ width: 240 }}>
        <SelectValue placeholder="Select an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
        <SelectItem value="option-3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger style={{ width: 240 }}>
        <SelectValue placeholder="Select a hadith collection..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sunni Collections</SelectLabel>
          <SelectItem value="bukhari">Sahih al-Bukhari</SelectItem>
          <SelectItem value="muslim">Sahih Muslim</SelectItem>
          <SelectItem value="tirmidhi">Jami at-Tirmidhi</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Shia Collections</SelectLabel>
          <SelectItem value="kafi">Al-Kafi</SelectItem>
          <SelectItem value="faqih">Man La Yahduruhu al-Faqih</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger style={{ width: 240 }}>
        <SelectValue placeholder="Disabled..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <div className="dark" style={{ background: '#1a1a2e', padding: 24, borderRadius: 8 }}>
      <Select>
        <SelectTrigger style={{ width: 240 }}>
          <SelectValue placeholder="Dark mode select..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">Option 1</SelectItem>
          <SelectItem value="option-2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
