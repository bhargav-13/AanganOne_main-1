import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Icon from './Icon'
import { SITE } from '../data/site'
import './legal.css'

/**
 * Shared shell for the long-form legal documents.
 *
 * Both pages mark up their body the same way (`.privacy-section` > h2, then
 * `.privacy-item` > h3), so this reads those headings out of the DOM after
 * mount and builds a sticky contents rail with scroll-spy — which is what a
 * twenty-section terms document actually needs.
 */
function LegalPage({ label, title, intro, updated, children }) {
  const bodyRef = useRef(null)
  const [toc, setToc] = useState([])
  const [activeId, setActiveId] = useState('')

  // Build the contents list from the rendered headings.
  useEffect(() => {
    const node = bodyRef.current
    if (!node) return

    const headings = [...node.querySelectorAll('.privacy-section > h2')]
    headings.forEach((h, i) => {
      if (!h.id) h.id = `section-${i + 1}`
    })

    setToc(headings.map((h) => ({ id: h.id, text: h.textContent.trim() })))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-100px 0px -70% 0px' },
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [children])

  return (
    <div className="privacy-policy-page min-h-screen bg-paper">
      <Navbar simple />

      <main id="main">
        {/* ---------------- Masthead ---------------- */}
        <section className="relative overflow-hidden bg-paper pb-10 pt-[calc(var(--nav-h)+28px)] sm:pb-14 sm:pt-[calc(var(--nav-h)+44px)] md:pt-[calc(var(--nav-h)+56px)]">
          <div className="jaali pointer-events-none absolute inset-x-0 top-0 h-[360px] opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

          <div className="shell relative">
            <p className="index-label animate-rise">{label}</p>

            <h1 className="display-l mt-6 max-w-[18ch] animate-rise" style={{ animationDelay: '80ms' }}>
              {title}
            </h1>

            <p
              className="lede mt-7 max-w-[62ch] animate-rise"
              style={{ animationDelay: '150ms' }}
            >
              {intro}
            </p>

            <div className="mt-12 animate-rise" style={{ animationDelay: '220ms' }}>
              <div className="rule-strong" />
              <dl className="grid grid-cols-1 divide-y divide-[color:var(--rule-soft)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  { k: 'Document', v: label },
                  { k: 'Last updated', v: updated },
                  { k: 'Entity', v: SITE.legalEntity },
                ].map((m) => (
                  <div key={m.k} className="py-5 sm:px-6 sm:first:pl-0">
                    <dt className="index-label">{m.k}</dt>
                    <dd className="mt-1.5 text-[15px] font-medium text-ink-900">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="rule-strong" />
            </div>
          </div>
        </section>

        {/* ---------------- Body + contents rail ---------------- */}
        <section className="pb-14 sm:pb-20 md:pb-32">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
              {/* contents */}
              <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
                <p className="index-label">On this page</p>

                <ol className="mt-5 max-h-[60vh] space-y-1 overflow-y-auto pr-2">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`flex gap-2.5 border-l-2 py-1.5 pl-3 text-[13.5px] leading-snug transition-colors duration-300 ${
                          activeId === item.id
                            ? 'border-terracotta-500 text-ink-900'
                            : 'border-transparent text-ink-400 hover:border-ink-200 hover:text-ink-700'
                        }`}
                      >
                        <span className="font-mono text-[11.5px] sm:text-[10px] text-ink-300">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{item.text.replace(/^\d+\.\s*/, '')}</span>
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 hidden lg:block">
                  <div className="rule" />
                  <a href="#main" className="link-rule mt-5 inline-flex text-[13.5px]">
                    <Icon name="arrow" className="h-3.5 w-3.5 -rotate-90" />
                    Back to top
                  </a>
                </div>
              </nav>

              {/* document */}
              <div ref={bodyRef} className="legal-body min-w-0">{children}</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LegalPage
