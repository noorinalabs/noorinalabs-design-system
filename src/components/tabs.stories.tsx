import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs'
import { Card, CardContent, CardHeader, CardTitle } from './card'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ maxWidth: 500 }}>
      <TabsList>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Narrators</TabsTrigger>
        <TabsTrigger value="tab3">References</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Overview content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardHeader>
            <CardTitle>Narrators</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Narrator details go here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3">
        <Card>
          <CardHeader>
            <CardTitle>References</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Reference materials go here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="first">
      <TabsList>
        <TabsTrigger value="first">First</TabsTrigger>
        <TabsTrigger value="second">Second</TabsTrigger>
      </TabsList>
      <TabsContent value="first">First tab content</TabsContent>
      <TabsContent value="second">Second tab content</TabsContent>
    </Tabs>
  ),
}

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active">Active tab content</TabsContent>
      <TabsContent value="another">Another tab content</TabsContent>
    </Tabs>
  ),
}

export const DarkMode: Story = {
  render: () => (
    <div className="dark" style={{ background: '#1a1a2e', padding: 24, borderRadius: 8 }}>
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Dark mode tab 1 content</TabsContent>
        <TabsContent value="tab2">Dark mode tab 2 content</TabsContent>
      </Tabs>
    </div>
  ),
}
