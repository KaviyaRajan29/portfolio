const NAV_OFFSET = 70

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Smooth-scrolls to a section by id (accounting for the sticky nav) and keeps
 * the URL hash in sync without polluting browser history.
 */
export function scrollToSection(id: string, offset: number = NAV_OFFSET): void {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  history.replaceState(null, '', `#${id}`)
}
