import { useEffect } from 'react'
import { animate, m, useMotionValue, useReducedMotion, useTransform } from 'motion/react'

type CounterProps = {
  to: number
  format: (value: number) => string
  duration?: number
}

/** Animates a number 0 → `to` on mount. Reduced motion shows the final value. */
export function Counter({ to, format, duration = 1.4 }: CounterProps) {
  const reduced = useReducedMotion()
  const value = useMotionValue(reduced ? to : 0)
  const text = useTransform(value, format)

  useEffect(() => {
    if (reduced) {
      value.set(to)
      return
    }
    const controls = animate(value, to, { duration, ease: 'easeOut' })
    return () => controls.stop()
  }, [value, to, duration, reduced])

  return <m.span>{text}</m.span>
}
