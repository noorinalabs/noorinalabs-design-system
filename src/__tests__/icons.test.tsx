import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchIcon } from '../icons/search-icon'
import { NarratorsIcon } from '../icons/narrators-icon'
import { HadithsIcon } from '../icons/hadiths-icon'
import { AdminIcon } from '../icons/admin-icon'
import { IconBase } from '../icons/icon-base'
import { CollectionsIcon } from '../icons/collections-icon'
import { CompareIcon } from '../icons/compare-icon'
import { GraphExplorerIcon } from '../icons/graph-explorer-icon'
import { TimelineIcon } from '../icons/timeline-icon'
import { SignOutIcon } from '../icons/sign-out-icon'
import { GeometricBorder } from '../icons/geometric-border'
import { OctagonalFrame } from '../icons/octagonal-frame'
import { PageHeaderAccent } from '../icons/page-header-accent'
import { IllustrationBase } from '../icons/illustration-base'
import { EmptyGraphIllustration } from '../icons/empty-graph-illustration'
import { NoResultsIllustration } from '../icons/no-results-illustration'
import { NoDataIllustration } from '../icons/no-data-illustration'
import { EmptyState } from '../icons/empty-state'

describe('IconBase', () => {
  it('renders an SVG element', () => {
    const { container } = render(
      <IconBase>
        <circle cx="12" cy="12" r="10" />
      </IconBase>
    )
    const svg = container.querySelector('svg')
    expect(svg).toBeDefined()
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
  })

  it('applies custom size', () => {
    const { container } = render(
      <IconBase size={24}>
        <circle cx="12" cy="12" r="10" />
      </IconBase>
    )
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('width')).toBe('24')
    expect(svg?.getAttribute('height')).toBe('24')
  })
})

describe('SearchIcon', () => {
  it('renders an SVG with stroke-based paths', () => {
    const { container } = render(<SearchIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toBeDefined()
    expect(svg?.getAttribute('stroke')).toBe('currentColor')
  })
})

describe('NarratorsIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<NarratorsIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('HadithsIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<HadithsIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('AdminIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<AdminIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('CollectionsIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<CollectionsIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('CompareIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<CompareIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('GraphExplorerIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<GraphExplorerIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('TimelineIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<TimelineIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('SignOutIcon', () => {
  it('renders without crashing', () => {
    const { container } = render(<SignOutIcon />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('IllustrationBase', () => {
  it('renders an SVG element', () => {
    const { container } = render(
      <IllustrationBase>
        <circle cx="50" cy="50" r="40" />
      </IllustrationBase>
    )
    const svg = container.querySelector('svg')
    expect(svg).toBeDefined()
  })
})

describe('Illustrations', () => {
  it('EmptyGraphIllustration renders', () => {
    const { container } = render(<EmptyGraphIllustration />)
    expect(container.querySelector('svg')).toBeDefined()
  })

  it('NoResultsIllustration renders', () => {
    const { container } = render(<NoResultsIllustration />)
    expect(container.querySelector('svg')).toBeDefined()
  })

  it('NoDataIllustration renders', () => {
    const { container } = render(<NoDataIllustration />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})

describe('EmptyState', () => {
  it('renders with title and description', () => {
    render(<EmptyState illustration={<NoDataIllustration />} title="No items" description="Try a different search" />)
    expect(screen.getByText('No items')).toBeDefined()
    expect(screen.getByText('Try a different search')).toBeDefined()
  })
})

describe('Decorative elements', () => {
  it('GeometricBorder renders', () => {
    const { container } = render(<GeometricBorder />)
    expect(container.querySelector('svg')).toBeDefined()
  })

  it('OctagonalFrame renders', () => {
    const { container } = render(<OctagonalFrame />)
    expect(container.querySelector('svg')).toBeDefined()
  })

  it('PageHeaderAccent renders', () => {
    const { container } = render(<PageHeaderAccent />)
    expect(container.querySelector('svg')).toBeDefined()
  })
})
