import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Check — confirmation glyph for checkbox indicators, success states, and selected items */
export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  )
}
