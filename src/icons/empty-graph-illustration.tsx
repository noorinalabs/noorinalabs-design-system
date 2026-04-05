import type { IllustrationProps } from './types'
import { IllustrationBase } from './illustration-base'

/** Empty graph — disconnected nodes with no edges */
export function EmptyGraphIllustration(props: IllustrationProps) {
  return (
    <IllustrationBase {...props}>
      {/* Scattered nodes */}
      <circle cx="20" cy="24" r="4" opacity="0.3" />
      <circle cx="48" cy="16" r="4" opacity="0.3" />
      <circle cx="76" cy="28" r="4" opacity="0.3" />
      <circle cx="28" cy="56" r="4" opacity="0.3" />
      <circle cx="60" cy="52" r="4" opacity="0.3" />
      <circle cx="44" cy="76" r="4" opacity="0.3" />
      <circle cx="72" cy="68" r="4" opacity="0.3" />
      {/* Dashed lines suggesting missing connections */}
      <path d="M24 26l20-8" strokeDasharray="3 4" opacity="0.15" />
      <path d="M52 18l20 8" strokeDasharray="3 4" opacity="0.15" />
      <path d="M32 56l24-4" strokeDasharray="3 4" opacity="0.15" />
      {/* Central question mark */}
      <text
        x="48"
        y="48"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        stroke="none"
        fontSize="18"
        fontFamily="var(--font-heading)"
        opacity="0.25"
      >
        ?
      </text>
    </IllustrationBase>
  )
}
