import type { Variants } from 'motion/react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * Fade + lift. `show` is a function variant: pass `custom={index}` for a
 * staggered entrance delay when used standalone. As a child of `staggerContainer`
 * (no custom), the parent drives the stagger instead.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: Math.min(index, 8) * 0.06 },
  }),
}

/** Parent that staggers its children's entrance. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

/** Route page transition, driven by AnimatePresence in the layout. */
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } },
}
