import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Close — X / dismiss glyph for modals, toasts, and dismissible chips */
export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  )
}
