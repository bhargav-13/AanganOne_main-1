import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, progress] where progress runs 0 → 1 as the referenced element
 * travels up through the viewport. Used to scrub SVG animations on scroll.
 *
 * Reads are batched into a rAF so the scroll listener never does layout work
 * more than once a frame. Reduced-motion visitors get the finished state (1)
 * immediately and no listener is attached at all.
 */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function useScrollProgress({ startAt = 0.9, span = 0.55 } = {}) {
  const ref = useRef(null)
  // Reduced-motion visitors start at the finished state rather than animating.
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0))

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    let lastRun = 0

    const measure = () => {
      lastRun = performance.now()
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1

      // 0 when the element's top sits at startAt of the viewport,
      // 1 once it has risen a further `span` of the viewport height.
      const travelled = startAt * vh - rect.top
      const distance = span * vh + rect.height * 0.35

      setProgress(Math.min(1, Math.max(0, travelled / distance)))
    }

    // Throttled by timestamp rather than requestAnimationFrame: rAF is starved
    // in background/non-compositing tabs, which would freeze the animation
    // part-way. One getBoundingClientRect per frame is cheap enough.
    const onScroll = () => {
      if (performance.now() - lastRun >= 16) measure()
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [startAt, span])

  return [ref, progress]
}
