import type { SVGAttributes } from 'react'

/**
 * Octagonal frame — wraps content (like a logo) in an octagonal border.
 * Meant to be sized via CSS on the container.
 */
export function OctagonalFrame({
  className,
  style,
  ...props
}: SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
      style={{ opacity: 0.5, ...style }}
      {...props}
    >
      {/* Outer octagon */}
      <polygon points="30,2 70,2 98,30 98,70 70,98 30,98 2,70 2,30" />
      {/* Inner octagon */}
      <polygon points="35,10 65,10 90,35 90,65 65,90 35,90 10,65 10,35" strokeDasharray="4 3" strokeWidth="1" />
      {/* Corner accent diamonds */}
      <path d="M15 15l3 3-3 3-3-3z" fill="currentColor" opacity="0.3" />
      <path d="M85 15l3 3-3 3-3-3z" fill="currentColor" opacity="0.3" />
      <path d="M15 85l3 3-3 3-3-3z" fill="currentColor" opacity="0.3" />
      <path d="M85 85l3 3-3 3-3-3z" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
