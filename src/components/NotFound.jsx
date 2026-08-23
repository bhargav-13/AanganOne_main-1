import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import { ClosedGateScene } from './moreScenes'

const SUGGESTIONS = [
  { to: '/features', label: 'Explore the features', n: '01' },
  { to: '/about', label: 'About AanganOne', n: '02' },
  { to: '/our-story', label: 'Our story', n: '03' },
  { to: '/contact', label: 'Book a demo', n: '04' },
]

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <SEO title="Page Not Found | AanganOne" description="The page you are looking for does not exist." />
      <Navbar />

      <main id="main" className="relative flex flex-1 items-center overflow-hidden pt-[calc(var(--nav-h)+24px)] sm:pt-[calc(var(--nav-h)+48px)]">
        <div className="jaali pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000,transparent)]" />

        <div className="shell relative grid items-center gap-12 py-16 lg:grid-cols-[1fr_.85fr] lg:gap-16 lg:py-20">
          <div>
          <p className="index-label">Error 404</p>

          <h1 className="display-xl mt-7 max-w-[14ch]">
            This door doesn't <span className="serif-italic text-terracotta-500">open</span>.
          </h1>

          <p className="lede mt-8 max-w-[48ch]">
            The page you're looking for has moved, or it never existed. Here's the way back into the
            courtyard.
          </p>

          <div className="mt-10">
            <Link to="/" className="btn-ink">
              Back to home
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 max-w-2xl">
            <div className="rule-strong" />
            {SUGGESTIONS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between border-b border-[color:var(--rule-soft)] py-5 transition-all duration-400 ease-smooth hover:pl-2"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-ink-300">{s.n}</span>
                  <span className="font-display text-[20px] font-medium text-ink-900">{s.label}</span>
                </span>
                <Icon
                  name="arrow"
                  className="h-4 w-4 text-ink-300 transition-all duration-400 ease-smooth group-hover:translate-x-1 group-hover:text-indigo-600"
                />
              </Link>
            ))}
          </div>
          </div>

          {/* the gate, shut — the page title, drawn */}
          <ClosedGateScene className="mx-auto max-w-[460px] lg:max-w-none" />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
