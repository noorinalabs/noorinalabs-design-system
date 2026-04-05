import type { Meta, StoryObj } from '@storybook/react'
import {
  NarratorsIcon,
  HadithsIcon,
  CollectionsIcon,
  SearchIcon,
  TimelineIcon,
  CompareIcon,
  GraphExplorerIcon,
  AdminIcon,
  SignOutIcon,
  NoResultsIllustration,
  EmptyGraphIllustration,
  NoDataIllustration,
  EmptyState,
  GeometricBorder,
  OctagonalFrame,
  PageHeaderAccent,
} from './index'
import type { IconProps } from './types'

const icons = [
  { name: 'NarratorsIcon', Component: NarratorsIcon },
  { name: 'HadithsIcon', Component: HadithsIcon },
  { name: 'CollectionsIcon', Component: CollectionsIcon },
  { name: 'SearchIcon', Component: SearchIcon },
  { name: 'TimelineIcon', Component: TimelineIcon },
  { name: 'CompareIcon', Component: CompareIcon },
  { name: 'GraphExplorerIcon', Component: GraphExplorerIcon },
  { name: 'AdminIcon', Component: AdminIcon },
  { name: 'SignOutIcon', Component: SignOutIcon },
]

function IconGallery(props: IconProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 24 }}>
      {icons.map(({ name, Component }) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: 16,
            borderRadius: 8,
            border: '1px solid #e5e7eb',
          }}
        >
          <Component {...props} />
          <span style={{ fontSize: 11, color: '#6b7280', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  )
}

const meta: Meta = {
  title: 'Icons/Gallery',
}
export default meta

export const AllIcons: StoryObj = {
  render: () => <IconGallery size={24} />,
}

export const SizeVariants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {[16, 24, 32, 48].map((size) => (
        <div key={size}>
          <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#374151' }}>Size: {size}px</h3>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {icons.map(({ name, Component }) => (
              <Component key={name} size={size} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const ColorCustomization: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {[
        { label: 'Default (currentColor)', color: undefined },
        { label: 'Emerald', color: '#059669' },
        { label: 'Amber', color: '#d97706' },
        { label: 'Rose', color: '#e11d48' },
        { label: 'Indigo', color: '#4f46e5' },
      ].map(({ label, color }) => (
        <div key={label}>
          <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#374151' }}>{label}</h3>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', color }}>
            {icons.map(({ name, Component }) => (
              <Component key={name} size={24} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
}

export const EmptyStateIllustrations: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <NoResultsIllustration />
        <span style={{ fontSize: 12, color: '#6b7280' }}>NoResultsIllustration</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <EmptyGraphIllustration />
        <span style={{ fontSize: 12, color: '#6b7280' }}>EmptyGraphIllustration</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <NoDataIllustration />
        <span style={{ fontSize: 12, color: '#6b7280' }}>NoDataIllustration</span>
      </div>
    </div>
  ),
}

export const EmptyStateComposed: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <EmptyState
        illustration={<NoResultsIllustration />}
        title="No results found"
        description="Try adjusting your search terms or filters to find what you're looking for."
      />
      <EmptyState
        illustration={<EmptyGraphIllustration />}
        title="Empty graph"
        description="No narrators or connections have been loaded yet."
      />
      <EmptyState
        illustration={<NoDataIllustration />}
        title="No data available"
        description="This collection doesn't have any hadiths yet."
      />
    </div>
  ),
}

export const DecorativeElements: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#374151' }}>GeometricBorder</h3>
        <GeometricBorder />
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#374151' }}>OctagonalFrame</h3>
        <div style={{ width: 100, height: 100 }}>
          <OctagonalFrame style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#374151' }}>
          PageHeaderAccent (inline with text)
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <PageHeaderAccent />
          <span style={{ fontSize: 20, fontWeight: 600 }}>Page Title</span>
        </div>
      </div>
    </div>
  ),
}
