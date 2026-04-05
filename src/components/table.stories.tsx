import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './table'
import { Badge } from './badge'

const meta = {
  title: 'Components/Table',
  component: Table,
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Narrators in the isnad chain</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Era</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Grade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Abu Hurayrah</TableCell>
          <TableCell>1st century AH</TableCell>
          <TableCell>Medina</TableCell>
          <TableCell><Badge variant="sahih">Sahih</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ibn Abbas</TableCell>
          <TableCell>1st century AH</TableCell>
          <TableCell>Mecca</TableCell>
          <TableCell><Badge variant="sahih">Sahih</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Anas ibn Malik</TableCell>
          <TableCell>1st century AH</TableCell>
          <TableCell>Basra</TableCell>
          <TableCell><Badge variant="default">Thiqah</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const Simple: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Column 1</TableHead>
          <TableHead>Column 2</TableHead>
          <TableHead>Column 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 4</TableCell>
          <TableCell>Cell 5</TableCell>
          <TableCell>Cell 6</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <div className="dark" style={{ background: '#1a1a2e', padding: 24, borderRadius: 8 }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Abu Hurayrah</TableCell>
            <TableCell>Companion</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ibn Abbas</TableCell>
            <TableCell>Companion</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
