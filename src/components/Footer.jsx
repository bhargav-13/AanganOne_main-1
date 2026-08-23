import { Link } from 'react-router-dom'
import Icon from './Icon'
import Reveal from './Reveal'
import { SkylineStrip } from './scenes'
import { SITE } from '../data/site'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Get the app', to: '/app' },
      { label: 'Who it’s for', to: '/features#roles' },
      { label: 'Book a demo', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Resources', to: '/resources' },
      { label: 'About', to: '/about' },
      { label: 'Our story', to: '/our-story' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', to: '/privacy-policy' },
      { label: 'Terms & conditions', to: '/terms-and-conditions' },
    ],
  },
]

const SOCIAL = [
  { href: SITE.social.instagram, label: 'Instagram' },
  { href: SITE.social.twitter, label: 'Twitter / X' },
  { href: SITE.social.linkedin, label: 'LinkedIn' },
]

function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink-950 text-paper">
      <div className="jaali-cream pointer-events-none absolute inset-0" />

      {/* skyline rule across the top edge */}
      <SkylineStrip className="absolute inset-x-0 top-0 opacity-70" />

      {/* ---------------- Closing line ---------------- */}
      {/* Top padding must clear the 84px skyline above — that space is filled
          with artwork, so it doesn't read as empty padding. */}
      <div className="shell relative pb-10 pt-[136px] sm:pb-16 sm:pt-[148px] md:pb-20 md:pt-40">
        <Reveal>
          <p className="font-mono text-[11px] font-medium uppercase tracking-wider2 text-terracotta-300">
            Smart living for modern societies
          </p>

          <h2 className="display-xl mt-8 max-w-[16ch] text-paper">
            Start managing your society the <span className="serif-italic text-terracotta-300">smart</span> way.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-cream">
              Book a free demo
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={SITE.playStore} target="_blank" rel="noopener noreferrer" className="btn-line-cream">
              <Icon name="play" filled className="h-4 w-4" />
              Google Play
            </a>
            <a href={SITE.appStore} target="_blank" rel="noopener noreferrer" className="btn-line-cream">
              <Icon name="apple" filled className="h-4 w-4" />
              App Store
            </a>
          </div>
        </Reveal>
      </div>

      {/* ---------------- Directory ---------------- */}
      <div className="shell relative">
        <div className="h-px w-full bg-paper/15" />

        <div className="grid gap-10 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <img src="/images/Aanganone-logo.svg" alt="" className="h-9 w-auto" />
              <span className="font-display text-[24px] font-medium text-paper">AanganOne</span>
            </div>
            <p className="mt-5 text-[14.5px] leading-relaxed text-paper/55">
              Visitor entry, maintenance billing, complaints and communication — the daily running
              of a residential society, digitised end to end.
            </p>

            <div className="mt-7 flex flex-col gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-[14px] text-paper/60 transition-colors hover:text-terracotta-300"
                >
                  <span className="h-px w-4 bg-current transition-all duration-400 ease-smooth group-hover:w-7" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[10.5px] font-medium uppercase tracking-wider2 text-paper/40">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[15px] text-paper/75 transition-colors hover:text-terracotta-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---------------- Contact rules ---------------- */}
        <div className="h-px w-full bg-paper/15" />
        <div className="grid gap-y-6 py-8 sm:grid-cols-3 sm:py-10">
          {[
            { label: 'Call', value: SITE.phonePrimary, href: SITE.phonePrimaryHref },
            { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
            { label: 'Based in', value: 'Ahmedabad, Gujarat', href: null },
          ].map((c) => (
            <div key={c.label}>
              <div className="font-mono text-[10.5px] uppercase tracking-wider2 text-paper/40">
                {c.label}
              </div>
              {c.href ? (
                <a href={c.href} className="mt-1.5 block text-[16px] text-paper transition-colors hover:text-terracotta-300">
                  {c.value}
                </a>
              ) : (
                <span className="mt-1.5 block text-[16px] text-paper">{c.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-paper/15" />
        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-8">
          <p className="font-mono text-[11px] text-paper/40">
            © {new Date().getFullYear()} {SITE.legalEntity}
          </p>
          <p className="font-mono text-[11px] text-paper/40">
            Built by{' '}
            <a
              href="https://www.codelixitsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 transition-colors hover:text-terracotta-300"
            >
              {SITE.builtBy}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
