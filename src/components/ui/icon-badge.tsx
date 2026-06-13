import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import styles from './icon-badge.module.css'

type IconBadgeProps = {
  children: ReactNode
  size?: number
  bg?: string
  fg?: string
  radius?: number
  mono?: boolean
  fontSize?: number
  className?: string
  style?: CSSProperties
}

/** A rounded-square glyph chip — section icons, the logo mark, timeline nodes. */
export function IconBadge({
  children,
  size = 40,
  bg = 'var(--tan)',
  fg = 'var(--navy)',
  radius = 11,
  mono = false,
  fontSize,
  className,
  style,
}: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(styles.badge, mono && styles.mono, className)}
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        borderRadius: radius,
        fontSize: fontSize ?? Math.round(size * 0.45),
        ...style,
      }}
    >
      {children}
    </span>
  )
}
