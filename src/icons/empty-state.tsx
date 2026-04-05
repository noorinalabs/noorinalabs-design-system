/**
 * Empty state container — wraps an illustration with a message.
 * Pure layout component, no styling opinions beyond centering.
 */
export function EmptyState({
  illustration,
  title,
  description,
}: {
  illustration: React.ReactNode
  title: string
  description?: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-4)',
        padding: 'var(--spacing-12) var(--spacing-6)',
        textAlign: 'center',
        color: 'var(--color-muted-foreground)',
      }}
    >
      {illustration}
      <h3
        style={{
          margin: 0,
          fontSize: 'var(--text-lg)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 500,
          color: 'var(--color-foreground)',
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            margin: 0,
            fontSize: 'var(--text-sm)',
            maxWidth: 320,
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
