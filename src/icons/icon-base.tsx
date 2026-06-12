import type { IconProps } from './types'
import { iconPaths, type IconName } from './paths'

interface IconBaseProps extends IconProps {
  /**
   * Render geometry from the shared framework-neutral {@link iconPaths} map (#103),
   * the single source of truth for the Qalam functional icon set. When omitted, the
   * caller supplies its own `children` (custom / utility icons).
   *
   * Named `icon` rather than `name` to avoid colliding with the SVG `name` attribute
   * carried by `SVGAttributes`.
   */
  icon?: IconName
  children?: React.ReactNode
}

/**
 * Base wrapper for 24x24 stroke-based Qalam icons.
 * All icons use currentColor, work in light/dark mode, and are inline-friendly.
 *
 * Pass `icon` to render a functional icon from the shared `iconPaths` geometry, or
 * pass `children` to draw a custom/utility icon inline.
 */
export function IconBase({ size = 16, icon, children, ...props }: IconBaseProps) {
  if (icon) {
    // Geometry comes from the framework-neutral source of truth so the React and
    // non-React renderings can never drift.
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
        dangerouslySetInnerHTML={{ __html: iconPaths[icon] }}
        {...props}
      />
    )
  }

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
