import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal wrapper. Adds `.is-visible` once the element enters the
 * viewport, then stops observing. Honours prefers-reduced-motion via CSS.
 */
function Reveal({ children, delay = 0, className = '', y = 28, once = true }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let reported = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        reported = true
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)

    // Safety net: an observer always reports once on observe. If nothing arrives,
    // rendering is throttled — show the content rather than leaving it invisible.
    const fallback = setTimeout(() => {
      if (!reported) setVisible(true)
    }, 2500)

    return () => {
      clearTimeout(fallback)
      observer.disconnect()
    }
  }, [once])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, '--reveal-y': `${y}px` }}
    >
      {children}
    </div>
  )
}

export default Reveal
