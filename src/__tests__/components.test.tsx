import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../components/card'
import { Badge } from '../components/badge'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableFooter } from '../components/table'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/tabs'

describe('Button', () => {
  it('renders with text content', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeDefined()
  })

  it('renders all variant styles without crashing', () => {
    const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const
    for (const variant of variants) {
      const { unmount } = render(<Button variant={variant}>btn</Button>)
      expect(screen.getByRole('button', { name: 'btn' })).toBeDefined()
      unmount()
    }
  })

  it('renders all size variants without crashing', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const
    for (const size of sizes) {
      const { unmount } = render(<Button size={size}>btn</Button>)
      expect(screen.getByRole('button', { name: 'btn' })).toBeDefined()
      unmount()
    }
  })

  it('forwards ref', () => {
    let buttonRef: HTMLButtonElement | null = null
    render(<Button ref={(el) => { buttonRef = el }}>ref test</Button>)
    expect(buttonRef).toBeInstanceOf(HTMLButtonElement)
  })
})

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeDefined()
  })

  it('renders with type prop', () => {
    render(<Input type="email" placeholder="email" />)
    const input = screen.getByPlaceholderText('email') as HTMLInputElement
    expect(input.type).toBe('email')
  })
})

describe('Card', () => {
  it('renders card with header and content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Card body</CardContent>
      </Card>
    )
    expect(screen.getByText('Test Card')).toBeDefined()
    expect(screen.getByText('Card body')).toBeDefined()
  })
})

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeDefined()
  })

  it('renders domain-specific variants', () => {
    const variants = ['sahih', 'sunni', 'shia'] as const
    for (const variant of variants) {
      const { unmount } = render(<Badge variant={variant}>{variant}</Badge>)
      expect(screen.getByText(variant)).toBeDefined()
      unmount()
    }
  })
})

describe('Card subcomponents', () => {
  it('renders CardDescription and CardFooter', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description text</CardDescription>
        </CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Footer content</CardFooter>
      </Card>
    )
    expect(screen.getByText('Description text')).toBeDefined()
    expect(screen.getByText('Footer content')).toBeDefined()
  })
})

describe('Table', () => {
  it('renders a complete table structure', () => {
    render(
      <Table>
        <TableCaption>A test table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Item 1</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
    expect(screen.getByText('A test table')).toBeDefined()
    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('Item 1')).toBeDefined()
    expect(screen.getByText('Total')).toBeDefined()
  })
})

describe('Tabs', () => {
  it('renders tabs with triggers and content', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )
    expect(screen.getByText('Tab 1')).toBeDefined()
    expect(screen.getByText('Tab 2')).toBeDefined()
    expect(screen.getByText('Content 1')).toBeDefined()
  })
})
