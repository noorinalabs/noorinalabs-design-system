# Component API Reference

All components are built on [Radix UI](https://www.radix-ui.com/) primitives with [CVA](https://cva.style/) for variant styling. They support `className` overrides via the `cn()` utility (clsx + tailwind-merge).

## Button

A polymorphic button with variant and size options.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Size preset |
| `asChild` | `boolean` | `false` | Render as child element (Radix Slot) for composability |
| `className` | `string` | — | Additional CSS classes |

Plus all native `<button>` HTML attributes.

### Variants

- **default** — Primary background, white foreground
- **destructive** — Red/error background
- **outline** — Bordered, transparent background
- **secondary** — Muted background
- **ghost** — No background, accent on hover
- **link** — Text-only with underline on hover

### Sizes

- **default** — `h-10 px-4 py-2`
- **sm** — `h-9 px-3`
- **lg** — `h-11 px-8`
- **icon** — `h-10 w-10` (square, for icon-only buttons)

### Examples

```tsx
import { Button } from '@noorinalabs/design-system'

<Button variant="default">Save</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="ghost" size="icon"><SearchIcon /></Button>

{/* Render as a link */}
<Button asChild variant="link">
  <a href="/narrators">View Narrators</a>
</Button>
```

### Exports

```tsx
import { Button, buttonVariants } from '@noorinalabs/design-system'
import type { ButtonProps } from '@noorinalabs/design-system'
```

`buttonVariants` can be used standalone to generate class strings without the component.

---

## Input

A text input with BiDi support using CSS logical properties.

### Props

All native `<input>` HTML attributes. No additional custom props.

The component uses `ps-3 pe-3` (logical padding) so it works correctly in both LTR and RTL layouts. It inherits `dir` from its parent.

### Example

```tsx
import { Input } from '@noorinalabs/design-system'

<Input type="text" placeholder="Search narrators..." />
<Input type="email" disabled />
```

---

## Card

A composable card with header, title, description, content, and footer sub-components.

### Sub-components

| Component | HTML Element | Purpose |
|-----------|-------------|---------|
| `Card` | `<div>` | Outer container with border, shadow, and background |
| `CardHeader` | `<div>` | Top section with flex-column layout and padding |
| `CardTitle` | `<div>` | Large semibold heading |
| `CardDescription` | `<div>` | Muted description text |
| `CardContent` | `<div>` | Main content area (padding, no top padding) |
| `CardFooter` | `<div>` | Bottom section with flex row layout |

All sub-components accept `className` and standard `<div>` HTML attributes.

### Example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@noorinalabs/design-system'
import { Button } from '@noorinalabs/design-system'

<Card>
  <CardHeader>
    <CardTitle>Narrator Profile</CardTitle>
    <CardDescription>Abu Hurayrah (d. 59 AH)</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Transmitted 5,374 hadith narrations.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">View Full Profile</Button>
  </CardFooter>
</Card>
```

---

## Badge

An inline label with domain-specific variant support.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline" \| "sunni" \| "shia" \| "sahih"` | `"default"` | Visual style |
| `className` | `string` | — | Additional CSS classes |

Plus all native `<div>` HTML attributes.

### Domain Variants

- **sunni** — Teal background, used for Sunni sect indicators
- **shia** — Blue/indigo background, used for Shia sect indicators
- **sahih** — Green background, used for authentic hadith grading

### Example

```tsx
import { Badge } from '@noorinalabs/design-system'

<Badge>Default</Badge>
<Badge variant="sahih">Sahih</Badge>
<Badge variant="sunni">Sunni</Badge>
<Badge variant="destructive">Rejected</Badge>
```

### Exports

```tsx
import { Badge, badgeVariants } from '@noorinalabs/design-system'
import type { BadgeProps } from '@noorinalabs/design-system'
```

---

## Dialog

A modal dialog built on Radix Dialog with overlay, animations, and close button.

### Sub-components

| Component | Description |
|-----------|-------------|
| `Dialog` | Root (manages open/close state) |
| `DialogTrigger` | Element that opens the dialog |
| `DialogPortal` | Portals content to document body |
| `DialogOverlay` | Semi-transparent backdrop (`bg-black/80`) |
| `DialogContent` | Centered modal panel with close button |
| `DialogHeader` | Flex column header layout |
| `DialogFooter` | Responsive footer (column on mobile, row on desktop) |
| `DialogTitle` | Accessible title |
| `DialogDescription` | Accessible description (muted) |
| `DialogClose` | Close trigger |

### Example

```tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from '@noorinalabs/design-system'
import { Button } from '@noorinalabs/design-system'

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Narrator</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Narrator</DialogTitle>
      <DialogDescription>Update the narrator's biographical details.</DialogDescription>
    </DialogHeader>
    {/* form fields here */}
    <DialogFooter>
      <Button variant="default">Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### BiDi Notes

`DialogContent` uses `start-1/2` (not `left-1/2`) and the close button uses `end-4` for correct RTL positioning.

---

## Select

A dropdown select built on Radix Select with check indicators and keyboard navigation.

### Sub-components

| Component | Description |
|-----------|-------------|
| `Select` | Root (manages value state) |
| `SelectTrigger` | Button that opens the dropdown |
| `SelectValue` | Displays selected value text |
| `SelectContent` | Dropdown panel (portaled) |
| `SelectGroup` | Groups related items |
| `SelectLabel` | Non-selectable group label |
| `SelectItem` | Selectable option with check indicator |
| `SelectSeparator` | Visual divider between groups |

### Example

```tsx
import {
  Select, SelectTrigger, SelectValue,
  SelectContent, SelectGroup, SelectLabel, SelectItem
} from '@noorinalabs/design-system'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a collection" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Sunni Collections</SelectLabel>
      <SelectItem value="bukhari">Sahih al-Bukhari</SelectItem>
      <SelectItem value="muslim">Sahih Muslim</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>Shia Collections</SelectLabel>
      <SelectItem value="kafi">Al-Kafi</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

---

## Table

A data table with header, body, footer, and caption sub-components.

### Sub-components

| Component | HTML Element | Description |
|-----------|-------------|-------------|
| `Table` | `<table>` | Wrapped in overflow-auto container |
| `TableHeader` | `<thead>` | Header row group |
| `TableBody` | `<tbody>` | Body row group |
| `TableFooter` | `<tfoot>` | Footer row group |
| `TableRow` | `<tr>` | Row with hover and selected states |
| `TableHead` | `<th>` | Header cell with logical padding |
| `TableCell` | `<td>` | Body cell |
| `TableCaption` | `<caption>` | Table caption (bottom) |

### Example

```tsx
import {
  Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell, TableCaption
} from '@noorinalabs/design-system'

<Table>
  <TableCaption>Top narrators by hadith count</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Hadiths</TableHead>
      <TableHead>Reliability</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Abu Hurayrah</TableCell>
      <TableCell>5,374</TableCell>
      <TableCell>Thiqah</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### BiDi Notes

`TableHead` uses `text-start` and logical padding (`ps-4 pe-4`) for automatic RTL alignment.

---

## Tabs

A tabbed interface built on Radix Tabs with keyboard navigation.

### Sub-components

| Component | Description |
|-----------|-------------|
| `Tabs` | Root (manages active tab state) |
| `TabsList` | Container for tab triggers |
| `TabsTrigger` | Individual tab button |
| `TabsContent` | Content panel for each tab |

### Example

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@noorinalabs/design-system'

<Tabs defaultValue="narrators">
  <TabsList>
    <TabsTrigger value="narrators">Narrators</TabsTrigger>
    <TabsTrigger value="hadiths">Hadiths</TabsTrigger>
    <TabsTrigger value="graph">Graph</TabsTrigger>
  </TabsList>
  <TabsContent value="narrators">
    {/* Narrator list */}
  </TabsContent>
  <TabsContent value="hadiths">
    {/* Hadith list */}
  </TabsContent>
  <TabsContent value="graph">
    {/* Graph explorer */}
  </TabsContent>
</Tabs>
```

---

## Utility: `cn()`

A class name merge utility combining [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge). Use it to conditionally apply and override Tailwind classes.

```tsx
import { cn } from '@noorinalabs/design-system'

<div className={cn(
  "p-4 rounded-md",
  isActive && "bg-primary text-primary-foreground",
  className
)} />
```
