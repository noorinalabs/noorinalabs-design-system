import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** ChevronRight — directional glyph for sub-menu triggers and expandable rows */
export function ChevronRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  )
}
