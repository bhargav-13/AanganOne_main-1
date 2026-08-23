import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import DayInLife from './DayInLife'
import Testimonials from './Testimonials'
import DemoForm from './DemoForm'
import { SITE } from '../data/site'

const CHAPTERS = [
  {
    label: 'The problem',
    title: 'A register, a group chat and a cash box',
    body: 'Every society we looked at ran on the same three things — a paper visitor register at the gate, a WhatsApp group for notices, and cash or payment screenshots for maintenance. Each worked on its own. None of them talked to the others, and none of them left a record anyone could go back to.',
  },
  {
    label: 'The idea',
    title: 'One system, four points of view',
    body: 'Residents, admins, committee members and guards all depend on the same underlying information, but they need completely different things from it. So instead of forcing everyone through one dashboard, we designed four experiences over a single shared system.',
  },
  {
    label: 'The build',
    title: 'Mobile-first, and gate-first',
    body: 'The gate is the hardest place to change a habit, so we started there. QR-based entry came first; billing, complaints, notices, staff and parking grew around it — each one designed for the person who would actually use it every day.',
  },
  {
    label: 'Today',
    title: 'Live, and onboarding societies',
    body: 'AanganOne is live on both the Google Play Store and the Apple App Store, with societies onboarding across India — and a roadmap shaped largely by the committees using it week to week.',
  },
]

const NAME = [
  { word: 'Aangan', meaning: 'The courtyard — the shared space at the centre of a home, where a community actually meets.' },
  { word: 'One', meaning: 'A single place for all of it, instead of a register here, a ledger there and a chat group somewhere else.' },
]

const STANDS = [
  { t: 'Cleaner interface', d: 'Fewer screens between a task and its result.' },
  { t: 'Faster workflows', d: 'Designed around the gate and the committee, not the back office.' },
  { t: 'India-first', d: 'Built and maintained here, for the way societies here actually work.' },
]

function OurStory() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Our Story', item: 'https://aanganone.com/our-story' },
    ],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Our Story — Why We Built AanganOne"
        description="The story behind AanganOne: why we replaced the paper register, the WhatsApp group and the cash box with one connected society management platform."
        url="https://aanganone.com/our-story"
        schema={[breadcrumbSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="Our story"
          title={<>Smart living for modern societies.</>}
          lede="We build solutions that work quietly in the background, making everyday life simpler, smoother and more connected for your home and community."
        >
          <Link to="/about" className="btn-ink">
            Meet the team
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link to="/features" className="btn-line">See the product</Link>
        </PageHero>

        {/* ---------- The name ---------- */}
        <section className="band-tight bg-paper">
          <div className="shell">
            <div className="rule-strong" />
            <div className="grid gap-10 py-14 md:grid-cols-[240px_1fr] md:gap-16">
              <p className="index-label">Where the name comes from</p>

              <div className="space-y-10">
                {NAME.map((x) => (
                  <Reveal key={x.word}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                      <span className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-none tracking-tightest text-indigo-600">
                        {x.word}
                      </span>
                      <p className="max-w-[52ch] text-[16px] leading-relaxed text-ink-500">{x.meaning}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="rule-strong" />
          </div>
        </section>

        {/* ---------- Chapters ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="01"
              label="How we got here"
              title={<>From paper register to one platform.</>}
              lede="Four chapters that shaped what AanganOne became."
            />

            <div className="mt-10 space-y-0 sm:mt-16">
              <div className="rule-strong" />
              {CHAPTERS.map((c, i) => (
                <Reveal key={c.label} delay={i * 90}>
                  <article className="group grid gap-4 border-b border-[color:var(--rule-soft)] py-10 transition-all duration-400 ease-smooth hover:pl-2 md:grid-cols-[80px_260px_1fr] md:gap-10">
                    <span className="font-display text-[38px] font-medium leading-none text-sand-400 transition-colors duration-400 group-hover:text-terracotta-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <p className="index-label text-terracotta-500">{c.label}</p>
                      <h3 className="mt-3 font-display text-[22px] font-medium leading-snug text-ink-900">
                        {c.title}
                      </h3>
                    </div>

                    <p className="max-w-[64ch] text-[15.5px] leading-[1.7] text-ink-500">{c.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <DayInLife n="02" />

        {/* ---------- Positioning ---------- */}
        <section className="band grain relative overflow-hidden bg-ink-900">
          <div className="jaali-cream pointer-events-none absolute inset-0" />

          <div className="shell relative">
            <SectionHeading
              tone="cream"
              n="03"
              label="Where we stand"
              title={<>A premium alternative, not another portal.</>}
              lede="AanganOne sits alongside the platforms that defined this category — built with a cleaner interface, faster workflows and a product tailored to the Indian residential society ecosystem."
            />

            <div className="mt-10 grid sm:mt-16 gap-px overflow-hidden rounded-card bg-paper/15 sm:grid-cols-3">
              {STANDS.map((c) => (
                <Reveal key={c.t}>
                  <div className="h-full bg-ink-900 p-8 transition-colors duration-400 hover:bg-ink-800">
                    <h3 className="font-display text-[21px] font-medium text-paper">{c.t}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-paper/60">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Built by ---------- */}
        <section className="band bg-sand-50">
          <div className="shell">
            <SectionHeading
              n="04"
              label="Built by"
              title={<>{SITE.builtBy}</>}
              lede="A software agency and product company in Ahmedabad building India-first business systems — from CA practice management to manufacturing ERP to community management."
            />

            <Reveal className="mt-12">
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-ink">
                  Book a demo
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href="https://www.codelixitsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line"
                >
                  Visit Codelix
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Testimonials n="05" />
        <DemoForm n="06" />
      </main>

      <Footer />
    </div>
  )
}

export default OurStory
