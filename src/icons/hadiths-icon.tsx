import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Hadiths — open manuscript/scroll */
export function HadithsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Open book body */}
      <path d="M2 4s2-1 5-1 5 1 5 1v16s-2-1-5-1-5 1-5 1z" />
      <path d="M12 4s2-1 5-1 5 1 5 1v16s-2-1-5-1-5 1-5 1z" />
      {/* Spine */}
      <path d="M12 4v16" />
      {/* Text lines on left page */}
      <path d="M5 8h3" strokeWidth="1" opacity="0.5" />
      <path d="M5 11h3" strokeWidth="1" opacity="0.5" />
    </IconBase>
  )
}
