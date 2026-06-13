import { useEffect, useState } from 'react'

type ScrollSpyOptions = {
  /** Fraction of viewport height used as the activation line (top of section). */
  lineRatio?: number
  /** Keep the URL hash in sync with the active section. */
  syncHash?: boolean
}

/**
 * Returns the id of the section currently considered "active" — the last
 * section whose top has crossed the activation line. Optionally mirrors the
 * active section into the URL hash (via replaceState, so history stays clean).
 */
export function useScrollSpy(ids: string[], options?: ScrollSpyOptions): string {
  const { lineRatio = 0.32, syncHash = true } = options ?? {}
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!ids.length) return
    let frame = 0
    let last = ids[0]

    const compute = () => {
      frame = 0
      const line = (window.innerHeight || 800) * lineRatio
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (current !== last) {
        last = current
        setActiveId(current)
        if (syncHash) history.replaceState(null, '', `#${current}`)
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, lineRatio, syncHash])

  return activeId
}
