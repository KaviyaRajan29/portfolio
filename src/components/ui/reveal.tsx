import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp } from '@/components/motion/variants'

// Pre-made motion components (stable references — never created during render).
const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  ul: motion.ul,
  li: motion.li,
} as const

type RevealTag = keyof typeof TAGS

type RevealProps = {
  /** Semantic element to render (default `div`). */
  as?: RevealTag
  /** Stagger index — later items animate in slightly after earlier ones. */
  index?: number
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Fades + lifts its element into view on scroll (Framer Motion `whileInView`).
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">.
 */
export function Reveal({ as = 'div', index = 0, id, className, children }: RevealProps) {
  const MotionTag = TAGS[as]
  return (
    <MotionTag
      id={id}
      className={className}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </MotionTag>
  )
}
