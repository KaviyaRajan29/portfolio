import type { CSSProperties, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import styles from './reveal.module.css'

type RevealProps = {
  /** Element to render (default `div`). Use a semantic tag where it fits. */
  as?: ElementType
  /** Stagger index — later items animate in slightly after earlier ones. */
  index?: number
  id?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

/**
 * Fades + lifts its element into view on scroll (IntersectionObserver). Owns
 * the `transition` on its element, so anything with its own hover/theme
 * transition should live as a CHILD, not share this element.
 */
export function Reveal({ as, index = 0, id, className, style, children }: RevealProps) {
  const Tag = as ?? 'div'
  const reduced = useReducedMotion()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()
  const shown = reduced || isVisible

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(styles.reveal, shown && styles.shown, className)}
      style={{
        ...style,
        transitionDelay: shown && !reduced ? `${Math.min(index, 8) * 65}ms` : undefined,
      }}
    >
      {children}
    </Tag>
  )
}
