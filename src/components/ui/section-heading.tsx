import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { IconBadge } from './icon-badge'
import styles from './section-heading.module.css'

type SectionHeadingProps = {
  icon: ReactNode
  title: string
  /** Render the icon in the mono font (e.g. the `</>` skills glyph). */
  mono?: boolean
  iconFontSize?: number
  size?: 'md' | 'lg'
  /** Optional trailing element (e.g. a "View all" link), pushed to the right. */
  action?: ReactNode
  className?: string
}

export function SectionHeading({
  icon,
  title,
  mono,
  iconFontSize,
  size = 'md',
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(styles.row, className)}>
      <div className={styles.left}>
        <IconBadge mono={mono} fontSize={iconFontSize}>
          {icon}
        </IconBadge>
        <h2 className={cn(styles.title, size === 'lg' && styles.lg)}>{title}</h2>
      </div>
      {action}
    </div>
  )
}
