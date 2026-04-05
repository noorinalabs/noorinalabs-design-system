import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Graph Explorer — network constellation with nodes and edges */
export function GraphExplorerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Central node */}
      <circle cx="12" cy="12" r="2.5" />
      {/* Outer nodes */}
      <circle cx="5" cy="6" r="1.5" />
      <circle cx="19" cy="6" r="1.5" />
      <circle cx="5" cy="18" r="1.5" />
      <circle cx="19" cy="18" r="1.5" />
      {/* Edges connecting to center */}
      <path d="M6.3 7.2L9.7 10.2" />
      <path d="M17.7 7.2L14.3 10.2" />
      <path d="M6.3 16.8L9.7 13.8" />
      <path d="M17.7 16.8L14.3 13.8" />
      {/* Cross-edges for network feel */}
      <path d="M6.5 6h11" strokeDasharray="2 2" strokeWidth="1" opacity="0.3" />
    </IconBase>
  )
}
