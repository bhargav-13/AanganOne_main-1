import { useEffect, useRef, useState } from 'react'

/** Counts up from 0 to `value` the first time it scrolls into view. */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Counter({ value, suffix = '', prefix = '', duration = 1600, className = '' }) {
  const ref = useRef(null)
  // Reduced-motion visitors get the final number straight away.
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? value : 0))
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.unobserve(entry.target)

        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          // easeOutExpo
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
          setDisplay(Math.round(eased * value))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default Counter
