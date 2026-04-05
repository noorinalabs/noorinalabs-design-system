import type { IconProps } from './types'
import { IllustrationBase } from './illustration-base'

/** No data — empty scroll/manuscript */
export function NoDataIllustration(props: IconProps) {
  return (
    <IllustrationBase {...props}>
      {/* Scroll body */}
      <rect x="20" y="14" width="56" height="62" rx="3" strokeWidth="1.5" />
      {/* Scroll top roll */}
      <ellipse cx="48" cy="14" rx="28" ry="4" strokeWidth="1.5" />
      {/* Scroll bottom roll */}
      <ellipse cx="48" cy="76" rx="28" ry="4" strokeWidth="1.5" />
      {/* Empty text lines (ghosted) */}
      <path d="M30 30h36" opacity="0.15" />
      <path d="M30 38h28" opacity="0.15" />
      <path d="M30 46h32" opacity="0.15" />
      <path d="M30 54h24" opacity="0.15" />
      <path d="M30 62h30" opacity="0.15" />
      {/* Decorative diamond in center */}
      <path d="M48 42l4 4-4 4-4-4z" fill="currentColor" opacity="0.12" stroke="none" />
    </IllustrationBase>
  )
}
