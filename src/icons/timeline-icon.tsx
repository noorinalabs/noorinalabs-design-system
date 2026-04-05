import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Timeline — horizontal timeline with crescent markers */
export function TimelineIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Horizontal line */}
      <path d="M3 12h18" />
      {/* Timeline nodes */}
      <circle cx="6" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
      {/* Crescent accent above center node */}
      <path d="M10.5 7a2.5 2.5 0 0 1 3 0" />
      <path d="M11 7.2a1.8 1.8 0 0 0 2 0" />
      {/* Tick marks */}
      <path d="M6 9v-2" strokeWidth="1" opacity="0.4" />
      <path d="M18 9v-2" strokeWidth="1" opacity="0.4" />
    </IconBase>
  )
}
