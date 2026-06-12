/**
 * Framework-neutral icon geometry — the single source of truth for the Qalam
 * functional icon set (#103).
 *
 * The React icon components (`./icon-base`, `./*-icon`) render *from* this module,
 * and non-React consumers (the Astro landing page, any plain-DOM consumer) can build
 * an `<svg>` from the same data — so the two can never drift. Attribute names here are
 * SVG-native (kebab-case) so every string renders verbatim in any DOM/markup context.
 *
 * Consume via the stable subpath: `@noorinalabs/design-system/icons/paths`.
 */

/** Canonical functional icon names. */
export const ICON_NAMES = [
  'graph-explorer',
  'narrators',
  'hadiths',
  'collections',
  'search',
  'compare',
  'timeline',
  'admin',
  'sign-out',
] as const

export type IconName = (typeof ICON_NAMES)[number]

/**
 * Shared root `<svg>` attributes for every Qalam icon. Names are SVG-native so the
 * map is directly usable by string/DOM consumers; React's `IconBase` applies the
 * camelCase equivalents on its JSX wrapper.
 */
export const iconBaseAttributes = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
} as const

/**
 * Inner SVG markup for each icon — the children that sit inside the shared `<svg>`
 * wrapper described by {@link iconBaseAttributes}. This is the geometry the React
 * components and every non-React consumer share.
 */
export const iconPaths: Record<IconName, string> = {
  'graph-explorer': [
    '<circle cx="12" cy="12" r="2.5" />',
    '<circle cx="5" cy="6" r="1.5" />',
    '<circle cx="19" cy="6" r="1.5" />',
    '<circle cx="5" cy="18" r="1.5" />',
    '<circle cx="19" cy="18" r="1.5" />',
    '<path d="M6.3 7.2L9.7 10.2" />',
    '<path d="M17.7 7.2L14.3 10.2" />',
    '<path d="M6.3 16.8L9.7 13.8" />',
    '<path d="M17.7 16.8L14.3 13.8" />',
    '<path d="M6.5 6h11" stroke-dasharray="2 2" stroke-width="1" opacity="0.3" />',
  ].join(''),
  narrators: [
    '<circle cx="12" cy="7" r="4" />',
    '<path d="M5 21v-2a7 7 0 0 1 14 0v2" />',
    '<path d="M12 15l1.2 1.2L12 17.4l-1.2-1.2z" fill="currentColor" stroke="none" />',
  ].join(''),
  hadiths: [
    '<path d="M2 4s2-1 5-1 5 1 5 1v16s-2-1-5-1-5 1-5 1z" />',
    '<path d="M12 4s2-1 5-1 5 1 5 1v16s-2-1-5-1-5 1-5 1z" />',
    '<path d="M12 4v16" />',
    '<path d="M5 8h3" stroke-width="1" opacity="0.5" />',
    '<path d="M5 11h3" stroke-width="1" opacity="0.5" />',
  ].join(''),
  collections: [
    '<path d="M3 21h18" />',
    '<path d="M3 13h18" />',
    '<rect x="5" y="5" width="3" height="8" rx="0.5" />',
    '<rect x="9" y="3" width="2.5" height="10" rx="0.5" />',
    '<rect x="12.5" y="6" width="3" height="7" rx="0.5" />',
    '<rect x="16.5" y="4" width="2.5" height="9" rx="0.5" />',
    '<rect x="5" y="14" width="4" height="7" rx="0.5" />',
    '<rect x="10" y="15" width="3" height="6" rx="0.5" />',
    '<rect x="14" y="14" width="3" height="7" rx="0.5" />',
    '<path d="M3 13l1-1 1 1" stroke-width="1" opacity="0.5" />',
    '<path d="M19 13l1-1 1 1" stroke-width="1" opacity="0.5" />',
  ].join(''),
  search: [
    '<circle cx="11" cy="11" r="7" />',
    '<path d="M21 21l-4.35-4.35" />',
    '<path d="M11 7l1 2.5L14.5 11l-2.5 1L11 14.5l-1-2.5L7.5 11l2.5-1z" fill="currentColor" stroke="none" opacity="0.35" />',
  ].join(''),
  compare: [
    '<rect x="2" y="3" width="8" height="18" rx="1" />',
    '<rect x="14" y="3" width="8" height="18" rx="1" />',
    '<path d="M10 8h4" />',
    '<path d="M14 8l-1.5-1.5M14 8l-1.5 1.5" />',
    '<path d="M14 16h-4" />',
    '<path d="M10 16l1.5-1.5M10 16l1.5 1.5" />',
    '<path d="M12 11l1 1-1 1-1-1z" fill="currentColor" stroke="none" opacity="0.5" />',
  ].join(''),
  timeline: [
    '<path d="M3 12h18" />',
    '<circle cx="6" cy="12" r="1.5" fill="currentColor" stroke="none" />',
    '<circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />',
    '<circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />',
    '<path d="M10.5 7a2.5 2.5 0 0 1 3 0" />',
    '<path d="M11 7.2a1.8 1.8 0 0 0 2 0" />',
    '<path d="M6 9v-2" stroke-width="1" opacity="0.4" />',
    '<path d="M18 9v-2" stroke-width="1" opacity="0.4" />',
  ].join(''),
  admin: [
    '<path d="M12 2l2.2 1.3 2.5-.3 1.3 2.2 2.5.3.3 2.5 2.2 1.3L22 12l1.3 2.2-.3 2.5-2.2 1.3-.3 2.5-2.5.3-1.3 2.2-2.5-.3L12 22l-2.2-1.3-2.5.3-1.3-2.2-2.5-.3-.3-2.5L1 14.7 2 12 .7 9.3l.3-2.5 2.2-1.3.3-2.5 2.5-.3L7.3 2.7l2.5.3z" stroke-width="1.2" />',
    '<circle cx="12" cy="12" r="3" />',
  ].join(''),
  'sign-out': [
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />',
    '<polyline points="16 17 21 12 16 7" />',
    '<line x1="21" y1="12" x2="9" y2="12" />',
  ].join(''),
}

/** Options for {@link renderIconSvg}. */
export interface RenderIconOptions {
  /** Width and height in px (number) or any CSS length (string). Defaults to 16. */
  size?: number | string
  /**
   * Extra attributes merged onto the root `<svg>` (e.g. `class`, `aria-label`,
   * `role`). Override `aria-hidden` here when the icon is meaningful on its own.
   */
  attributes?: Record<string, string | number>
}

const escapeAttr = (value: string | number): string =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/**
 * Serialize a Qalam icon to a complete `<svg>…</svg>` string for non-React
 * consumers (Astro `set:html`, plain DOM `innerHTML`, server-rendered markup).
 *
 * @example
 *   element.innerHTML = renderIconSvg('search', { size: 20 })
 */
export function renderIconSvg(name: IconName, options: RenderIconOptions = {}): string {
  const { size = 16, attributes = {} } = options
  const attrs: Record<string, string | number> = {
    ...iconBaseAttributes,
    width: size,
    height: size,
    'aria-hidden': 'true',
    ...attributes,
  }
  const attrString = Object.entries(attrs)
    .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
    .join(' ')
  return `<svg ${attrString}>${iconPaths[name]}</svg>`
}
