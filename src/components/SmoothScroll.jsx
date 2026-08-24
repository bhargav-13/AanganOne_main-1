import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Inertia-style smooth scrolling for wheel/trackpad input.
 * `scroll-behavior: smooth` (in index.css) only eases anchor jumps —
 * this eases every regular scroll so the page never feels like it's
 * snapping between positions.
 */
function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(2, -10 * t), // easeOutExpo — matches the site's other motion
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll
