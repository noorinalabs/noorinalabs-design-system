import type { IconProps } from './types'

/**
 * Base wrapper for 24x24 stroke-based Qalam icons.
 * All icons use currentColor, work in light/dark mode, and are inline-friendly.
 */
export function IconBase({ size = 16, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}
