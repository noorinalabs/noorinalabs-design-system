import type { IllustrationProps } from './types'

/**
 * Base wrapper for 96x96 empty state illustrations.
 * Uses currentColor for automatic theme adaptation.
 */
export function IllustrationBase({ size = 96, children, ...props }: IllustrationProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}
