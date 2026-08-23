import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/site'

const AUTOPLAY_MS = 8000

function Testimonials({ n = "12" }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = TESTIMONIALS.length

  const go = useCallback((next) => setIndex(((next % count) + count) % count), [count])

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [index, paused, go])

  const active = TESTIMONIALS[index]

  return (
    <section
      className="band grain relative overflow-hidden bg-sand-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="jaali pointer-events-none absolute inset-0 opacity-70" />

      <div className="shell relative">
        <div className="rule-strong" />
        <div className="flex items-baseline gap-3 pt-6">
          <span className="font-mono text-[11px] text-ink-300">{n}</span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider2 text-terracotta-500">
            Society reviews
          </span>
        </div>

        <Reveal className="mt-12">
          <blockquote
            className="max-w-none"
            aria-live="polite"
            aria-atomic="true"
          >
            <p
              key={active.society}
              className="animate-rise font-display text-[clamp(1.7rem,3.9vw,3.1rem)] font-medium leading-[1.16] tracking-tightest text-ink-900"
            >
              <span className="serif-italic mr-2 text-terracotta-500 sm:mr-3">&ldquo;</span>
              {active.quote}
              <span className="serif-italic ml-1.5 text-terracotta-500">&rdquo;</span>
            </p>

            <footer className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-pill bg-terracotta-500 font-display text-[19px] font-medium text-paper">
                  {active.society.charAt(0)}
                </span>
                <div>
                  <div className="font-display text-[18px] font-medium text-ink-900">
                    {active.role}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider2 text-ink-400">
                    {active.society} Society
                  </div>
                </div>
              </div>

              {/* Numbered pager */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  {TESTIMONIALS.map((t, i) => (
                    <button
                      key={t.society}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Review from ${t.society} Society`}
                      aria-current={i === index}
                      className={`font-mono text-[12px] transition-colors duration-300 ${
                        i === index ? 'text-ink-900' : 'text-ink-300 hover:text-ink-600'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                      {i === index && <span className="mt-1 block h-px w-full bg-terracotta-500" />}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next review"
                  className="grid h-11 w-11 place-items-center rounded-pill border border-ink-900/20 text-ink-700 transition-all duration-400 ease-smooth hover:border-terracotta-500 hover:bg-terracotta-500 hover:text-paper"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h15m0 0l-5-5m5 5l-5 5" />
                  </svg>
                </button>
              </div>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials
