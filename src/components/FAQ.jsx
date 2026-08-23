import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'
import { FAQS, SITE } from '../data/site'

function FaqRow({ faq, n, open, onToggle }) {
  return (
    <div className="border-b border-[color:var(--rule-soft)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start gap-5 py-6 text-left transition-all duration-400 ease-smooth hover:pl-2"
      >
        <span className="mt-1.5 font-mono text-[11px] text-ink-300">{n}</span>

        <span
          className={`flex-1 font-display text-[19px] font-medium leading-snug transition-colors duration-300 sm:text-[21px] ${
            open ? 'text-indigo-600' : 'text-ink-900'
          }`}
        >
          {faq.question}
        </span>

        <span
          className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-pill border transition-all duration-400 ease-smooth ${
            open ? 'rotate-45 border-indigo-600 bg-indigo-600 text-paper' : 'border-ink-900/15 text-ink-500'
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      {/* grid-rows 0fr → 1fr animates to natural height */}
      <div
        className="grid transition-[grid-template-rows] duration-600 ease-smooth"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[68ch] pb-7 pl-[42px] pr-10 text-[15px] leading-[1.7] text-ink-500">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

function FAQ({ items = FAQS, n = '08' }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="band bg-paper">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* Sticky spine */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rule-strong" />
            <div className="flex items-baseline gap-3 pt-6">
              <span className="font-mono text-[11px] text-ink-300">{n}</span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-wider2 text-terracotta-500">
                Questions
              </span>
            </div>

            <h2 className="display-l mt-6 max-w-[12ch]">Before you ask.</h2>

            <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed text-ink-500">
              What committees want to know before they switch. Still unsure — call us, it's a short
              conversation.
            </p>

            <Reveal delay={100}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link to="/contact" className="btn-ink">
                  Talk to us
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href={SITE.phonePrimaryHref} className="btn-line">
                  <Icon name="phone" className="h-4 w-4" />
                  {SITE.phonePrimary}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Rows */}
          <div>
            <div className="rule-strong" />
            {items.map((faq, i) => (
              <FaqRow
                key={faq.question}
                faq={faq}
                n={String(i + 1).padStart(2, '0')}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
