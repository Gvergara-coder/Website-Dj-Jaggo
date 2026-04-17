/**
 * Reusable Section Title Component
 */

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
      <span className="w-12 h-1 bg-accent"></span>
      {children}
    </h2>
  )
}

/**
 * Stat Card Component
 */
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
      <p className="text-4xl font-bold text-accent mb-2">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

/**
 * Card Component
 */
export function Card({
  children,
  className = '',
  hover = true,
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 ${
        hover ? 'hover:border-accent/50 transition-colors' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * CTA Button Component
 */
export function CTAButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}) {
  const variants = {
    primary: 'bg-accent text-background hover:shadow-lg hover:shadow-accent/50',
    secondary: 'bg-secondary text-foreground hover:bg-secondary/80',
    outline: 'border border-accent text-accent hover:bg-accent/10',
  }

  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-bold rounded transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

/**
 * Icon with Text Component
 */
export function IconText({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-6 h-6 text-accent mt-1">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
    </div>
  )
}

/**
 * Grid Container Component
 */
export function GridContainer({
  children,
  cols = 3,
  gap = 6,
}: {
  children: React.ReactNode
  cols?: number
  gap?: number
}) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }[cols] || `grid-cols-1 md:grid-cols-${cols}`

  const gapClass = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  }[gap] || `gap-${gap}`

  return (
    <div className={`grid ${gridClass} ${gapClass}`}>
      {children}
    </div>
  )
}
