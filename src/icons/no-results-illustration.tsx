import type { IllustrationProps } from './types'
import { IllustrationBase } from './illustration-base'

/** No search results — magnifying glass over empty geometric pattern */
export function NoResultsIllustration(props: IllustrationProps) {
  return (
    <IllustrationBase {...props}>
      {/* Background geometric pattern (faded) */}
      <g opacity="0.15">
        <rect x="16" y="16" width="24" height="24" transform="rotate(45 28 28)" />
        <rect x="48" y="16" width="24" height="24" transform="rotate(45 60 28)" />
        <rect x="16" y="48" width="24" height="24" transform="rotate(45 28 60)" />
        <rect x="48" y="48" width="24" height="24" transform="rotate(45 60 60)" />
      </g>
      {/* Magnifying glass */}
      <circle cx="40" cy="40" r="18" strokeWidth="2" />
      <path d="M53 53l16 16" strokeWidth="3" />
      {/* X inside lens */}
      <path d="M34 34l12 12M46 34l-12 12" strokeWidth="1.5" opacity="0.5" />
    </IllustrationBase>
  )
}
