import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Compare — split/diff with geometric separator */
export function CompareIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Left panel */}
      <rect x="2" y="3" width="8" height="18" rx="1" />
      {/* Right panel */}
      <rect x="14" y="3" width="8" height="18" rx="1" />
      {/* Connecting arrows */}
      <path d="M10 8h4" />
      <path d="M14 8l-1.5-1.5M14 8l-1.5 1.5" />
      <path d="M14 16h-4" />
      <path d="M10 16l1.5-1.5M10 16l1.5 1.5" />
      {/* Diamond separator accent */}
      <path d="M12 11l1 1-1 1-1-1z" fill="currentColor" stroke="none" opacity="0.5" />
    </IconBase>
  )
}
