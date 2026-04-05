import type { SVGAttributes } from 'react'

/**
 * Page header geometric accent — small decorative element
 * that sits beside page titles. Renders an interlocking
 * geometric motif inspired by Islamic tilework.
 */
export function PageHeaderAccent({
  className,
  style,
  ...props
}: SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="-2 -2 36 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={className}
      style={{ width: 36, height: 28, opacity: 0.35, overflow: 'visible', ...style }}
      {...props}
    >
      {/* Interlocking squares forming 8-pointed star fragment */}
      <rect x="8" y="4" width="16" height="16" rx="1" transform="rotate(0 16 12)" />
      <rect x="8" y="4" width="16" height="16" rx="1" transform="rotate(45 16 12)" />
      {/* Center dot */}
      <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  )
}
