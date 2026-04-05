import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Collections — library/bookshelf with geometric shelf brackets */
export function CollectionsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Shelf */}
      <path d="M3 21h18" />
      <path d="M3 13h18" />
      {/* Books on top shelf */}
      <rect x="5" y="5" width="3" height="8" rx="0.5" />
      <rect x="9" y="3" width="2.5" height="10" rx="0.5" />
      <rect x="12.5" y="6" width="3" height="7" rx="0.5" />
      <rect x="16.5" y="4" width="2.5" height="9" rx="0.5" />
      {/* Books on bottom shelf */}
      <rect x="5" y="14" width="4" height="7" rx="0.5" />
      <rect x="10" y="15" width="3" height="6" rx="0.5" />
      <rect x="14" y="14" width="3" height="7" rx="0.5" />
      {/* Geometric bracket accents */}
      <path d="M3 13l1-1 1 1" strokeWidth="1" opacity="0.5" />
      <path d="M19 13l1-1 1 1" strokeWidth="1" opacity="0.5" />
    </IconBase>
  )
}
