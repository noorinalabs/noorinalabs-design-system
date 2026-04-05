import type { SVGAttributes } from 'react'

/**
 * Repeating Islamic geometric border pattern.
 * Renders as a horizontal divider with interlocking octagonal motifs.
 * Width fills container; height is fixed at 12px.
 */
export function GeometricBorder({
  className,
  style,
  ...props
}: SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: 12, opacity: 0.3, ...style }}
      {...props}
    >
      {/* Repeating octagonal / interlocking diamond pattern */}
      <defs>
        <pattern id="geo-border-pat" x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
          {/* Diamond */}
          <path d="M10 1l4 5-4 5-4-5z" />
          {/* Connecting lines */}
          <path d="M0 6h6M14 6h6" />
          {/* Small accent squares at intersections */}
          <rect x="9" y="5" width="2" height="2" fill="currentColor" opacity="0.4" transform="rotate(45 10 6)" />
        </pattern>
      </defs>
      <rect width="200" height="12" fill="url(#geo-border-pat)" stroke="none" />
    </svg>
  )
}
