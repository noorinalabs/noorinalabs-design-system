import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Narrators — scholar/person with turban silhouette accent */
export function NarratorsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Head */}
      <circle cx="12" cy="7" r="4" />
      {/* Shoulders */}
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      {/* Small diamond accent at collar — Islamic geometric motif */}
      <path d="M12 15l1.2 1.2L12 17.4l-1.2-1.2z" fill="currentColor" stroke="none" />
    </IconBase>
  )
}
