import { useEffect, useState } from 'react'
import { useReducedMotion } from './use-reduced-motion'

type TypingOptions = {
  typeMin?: number
  typeMax?: number
  deleteSpeed?: number
  holdAfterType?: number
  holdAfterDelete?: number
  startDelay?: number
}

const DEFAULTS: Required<TypingOptions> = {
  typeMin: 65,
  typeMax: 120,
  deleteSpeed: 36,
  holdAfterType: 1500,
  holdAfterDelete: 420,
  startDelay: 600,
}

/**
 * Cycles through `words` with a type → hold → delete → next loop that mirrors
 * the prototype's timings. Returns the substring currently shown. Honors
 * reduced motion by rendering the first word statically.
 *
 * Pass a stable `words` array (e.g. a module constant) so the loop isn't reset
 * on every render.
 */
export function useTypingEffect(words: string[], options?: TypingOptions): string {
  const [animated, setAnimated] = useState('')
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !words.length) return

    const cfg = { ...DEFAULTS, ...options }
    let alive = true
    let timer = 0
    let wordIndex = 0
    let charIndex = 0
    let deleting = false

    const tick = () => {
      if (!alive) return
      const word = words[wordIndex]
      let delay: number

      if (!deleting) {
        charIndex += 1
        if (charIndex >= word.length) {
          charIndex = word.length
          deleting = true
          delay = cfg.holdAfterType
        } else {
          delay = cfg.typeMin + Math.random() * (cfg.typeMax - cfg.typeMin)
        }
      } else {
        charIndex -= 1
        if (charIndex <= 0) {
          charIndex = 0
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
          delay = cfg.holdAfterDelete
        } else {
          delay = cfg.deleteSpeed
        }
      }

      setAnimated(word.slice(0, charIndex))
      timer = window.setTimeout(tick, delay)
    }

    timer = window.setTimeout(tick, cfg.startDelay)
    return () => {
      alive = false
      clearTimeout(timer)
    }
  }, [words, reduced, options])

  // While reduced-motion is on, show the first role statically.
  return reduced ? (words[0] ?? '') : animated
}
