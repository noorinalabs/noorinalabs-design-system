import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** RadioDot — filled dot indicator for radio item selection */
export function RadioDotIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </IconBase>
  )
}
