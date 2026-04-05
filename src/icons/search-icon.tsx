import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Search — magnifying glass with 4-fold star in lens */
export function SearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Lens */}
      <circle cx="11" cy="11" r="7" />
      {/* Handle */}
      <path d="M21 21l-4.35-4.35" />
      {/* 4-pointed star motif inside lens */}
      <path
        d="M11 7l1 2.5L14.5 11l-2.5 1L11 14.5l-1-2.5L7.5 11l2.5-1z"
        fill="currentColor"
        stroke="none"
        opacity="0.35"
      />
    </IconBase>
  )
}
