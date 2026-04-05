import type { IconProps } from './types'
import { IconBase } from './icon-base'

/** Admin — gear with octagonal geometric accent */
export function AdminIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* Gear outer — octagonal shape for Islamic geometric feel */}
      <path d="M12 2l2.2 1.3 2.5-.3 1.3 2.2 2.5.3.3 2.5 2.2 1.3L22 12l1.3 2.2-.3 2.5-2.2 1.3-.3 2.5-2.5.3-1.3 2.2-2.5-.3L12 22l-2.2-1.3-2.5.3-1.3-2.2-2.5-.3-.3-2.5L1 14.7 2 12 .7 9.3l.3-2.5 2.2-1.3.3-2.5 2.5-.3L7.3 2.7l2.5.3z" strokeWidth="1.2" />
      {/* Inner circle */}
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  )
}
