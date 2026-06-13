import { useEffect } from 'react'
import { scrollToSection } from '@/lib/scroll'

/** On mount, if the URL carries a section hash, scroll to it after first paint. */
export function useInitialHashScroll(): void {
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const timer = window.setTimeout(() => scrollToSection(id), 80)
    return () => clearTimeout(timer)
  }, [])
}
