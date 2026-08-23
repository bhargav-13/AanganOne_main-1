import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import { SITE } from '../data/site'

const LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/app', label: 'Get the app' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ simple = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sheetRef = useRef(null)
  const closeRef = useRef(null)
  const openRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape closes the sheet, and focus is kept inside it while it is open.
  useEffect(() => {
    if (!open) return

    const sheet = sheetRef.current
    const focusable = () =>
      [...(sheet?.querySelectorAll('a[href], button:not([disabled])') ?? [])].filter(
        (el) => el.offsetParent !== null,
      )

    closeRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        openRef.current?.focus()
        return
      }

      if (e.key !== 'Tab') return

      const items = focusable()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-paper/95 backdrop-blur-md transition-all duration-600 ease-smooth ${
          scrolled ? 'border-b border-[color:var(--rule-soft)] shadow-paper' : 'border-b border-transparent'
        }`}
      >
        <div className="shell">
          <div className="flex h-[82px] items-center justify-between gap-6">
            {/* Wordmark */}
            <Link to="/" className="group flex items-center gap-3" aria-label="AanganOne home">
              <img
                src="/images/Aanganone-logo.svg"
                alt=""
                className="h-8 w-auto transition-transform duration-600 ease-smooth group-hover:scale-110 md:h-9"
              />
              <span className="font-display text-[22px] font-medium tracking-tightest text-ink-900 md:text-[25px]">
                AanganOne
              </span>
            </Link>

            {simple ? (
              <Link to="/" className="link-rule text-[15px]">
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
                Back to site
              </Link>
            ) : (
              <>
                {/* Desktop nav */}
                <nav className="hidden items-center gap-9 lg:flex">
                  {LINKS.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `group relative flex items-baseline text-[15px] font-medium transition-colors duration-300 ${
                          isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {link.label}
                          <span
                            className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-ink-900 transition-transform duration-400 ease-smooth ${
                              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  ))}
                </nav>

                <div className="flex items-center gap-3">
                  <Link to="/contact" className="btn-ink btn-sm hidden sm:inline-flex">
                    Book a demo
                  </Link>

                  <button
                    type="button"
                    ref={openRef}
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={open}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-pill border border-ink-900/15 transition-colors hover:border-ink-900 lg:hidden"
                  >
                    <span className="block h-px w-4 bg-ink-900" />
                    <span className="block h-px w-4 bg-ink-900" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu — full sheet */}
      {!simple && (
        <div
          className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
          aria-hidden={!open}
        >
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-ink-950/40 transition-opacity duration-400 ${open ? 'opacity-100' : 'opacity-0'}`}
          />
          <aside
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`absolute inset-x-0 top-0 flex max-h-full flex-col overflow-y-auto bg-paper px-6 pb-10 pt-6 transition-transform duration-600 ease-smooth ${
              open ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/images/Aanganone-logo.svg" alt="" className="h-8 w-auto" />
                <span className="font-display text-[22px] font-medium text-ink-900">AanganOne</span>
              </div>
              <button
                type="button"
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-pill border border-ink-900/15 text-ink-700 transition-colors hover:border-ink-900"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className="flex items-baseline border-t border-[color:var(--rule-soft)] py-5 font-display text-[30px] font-medium text-ink-900"
              >
                Home
              </NavLink>
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline border-t border-[color:var(--rule-soft)] py-5 font-display text-[30px] font-medium text-ink-900"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-10 space-y-3 border-t border-[color:var(--rule-soft)] pt-8">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-ink w-full">
                Book a free demo
              </Link>
              <a href={SITE.phonePrimaryHref} className="btn-line w-full">
                <Icon name="phone" className="h-4 w-4" />
                {SITE.phonePrimary}
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}

export default Navbar
