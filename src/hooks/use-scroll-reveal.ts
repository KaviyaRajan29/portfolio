import { useEffect, useRef, useState } from 'react'

type RevealOptions = {
  once?: boolean
  rootMargin?: string
  threshold?: number
}

/**
 * Reveals an element when it scrolls into view, via IntersectionObserver.
 * Returns a ref to attach and whether the element has been revealed yet.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: RevealOptions) {
  const { once = true, rootMargin = '0px 0px -10% 0px', threshold = 0.01 } = options ?? {}
  const ref = useRef<T | null>(null)
  // If IntersectionObserver is unavailable, start revealed rather than hidden.
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, isVisible }
}
