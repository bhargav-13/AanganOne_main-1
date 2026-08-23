import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import DemoForm from './DemoForm'
import FAQ from './FAQ'
import IncludedSection from './IncludedSection'
import { ScaleScene } from './scenes'
import { FEATURE_GROUPS, SITE } from '../data/site'

const FACTORS = [
  {
    title: 'How many units',
    desc: 'A 40-flat society and a 600-flat multi-tower complex do not have the same needs, so they do not carry the same cost. Price scales with the size of the society.',
  },
  {
    title: 'What you switch on',
    desc: 'Some societies start with security and communication and add billing later. You pay for what your committee actually turns on.',
  },
  {
    title: 'How you commit',
    desc: 'Monthly or annual. Longer terms cost less per unit — but nothing is locked in before you have seen the platform working.',
  },
]

const PROMISES = [
  { t: 'No setup fee surprises', d: 'Onboarding, migration and training are quoted up front, in the same number.' },
  { t: 'No per-feature upsell mid-year', d: 'What you agreed to at the start is what you keep for the term.' },
  { t: 'No charge per resident', d: 'Every resident in the society gets the app. You are not billed per download.' },
  { t: 'No lock-in before the demo', d: 'The demo is free and carries no obligation. Nothing is signed until the committee agrees.' },
]

const PRICING_FAQS = [
  {
    question: 'Why is there no price list on this page?',
    answer:
      'Because a fair number depends on the size of your society and which modules you turn on. Publishing a single figure would either overcharge a small society or undersell a large complex. Tell us your unit count and we will send a specific quote — usually the same day.',
  },
  {
    question: 'What determines the cost?',
    answer:
      'Three things: the number of units in the society, which modules the committee wants active, and whether you pay monthly or annually. Onboarding, migration and training are quoted in the same number rather than added later.',
  },
  {
    question: 'Are residents charged anything?',
    answer:
      'No. AanganOne is billed to the society, not to individual residents. Every resident in an onboarded society can download and use the app at no personal cost.',
  },
  {
    question: 'Is there a minimum society size?',
    answer:
      'No hard minimum. We work with single societies and with multi-tower complexes — the platform is built to scale in both directions.',
  },
  {
    question: 'What happens after the demo?',
    answer:
      'You get a written quote for your society. If the committee approves it, onboarding begins — setup, data migration, resident registration and guard training. Most societies are fully operational within 3–5 business days.',
  },
  {
    question: 'Can we stop using it?',
    answer:
      'Yes. Your society keeps control of its data, and we will help you export it. There is no penalty structure designed to trap a committee that changes its mind.',
  },
]

function Pricing() {
  const totalFeatures = FEATURE_GROUPS.reduce((sum, g) => sum + g.items.length, 0)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://aanganone.com/pricing' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PRICING_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Pricing — Quoted for Your Society | AanganOne"
        description="AanganOne pricing is based on your society's size and the modules you switch on, with onboarding and training quoted up front. Request a free demo and a specific quote for your society."
        url="https://aanganone.com/pricing"
        schema={[breadcrumbSchema, faqSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="Pricing"
          title={<>Priced for your society, not for a category.</>}
          lede="There is no single sticker price here, and that is deliberate — a 40-flat society and a 600-flat complex should not pay the same. Here is exactly what the number depends on."
          meta={[
            { label: 'Billed to', value: 'The society, never residents' },
            { label: 'Quote', value: 'Usually same business day' },
            { label: 'Demo', value: 'Free, no obligation' },
          ]}
        >
          <a href="#demo" className="btn-ink">
            Get a quote
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a href={SITE.phonePrimaryHref} className="btn-line">
            <Icon name="phone" className="h-4 w-4" />
            {SITE.phonePrimary}
          </a>
        </PageHero>

        {/* ---------- What the price depends on ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="01"
              label="What it depends on"
              title={<>Three things, and nothing hidden behind them.</>}
              lede="Every quote we send is built from the same three inputs. Nothing else moves the number."
            />

            <Reveal className="mt-10 sm:mt-16">
              <ScaleScene className="mx-auto max-w-[860px]" />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {FACTORS.map((f, i) => (
                <Reveal key={f.title} delay={i * 100}>
                  <article className="flex h-full flex-col rounded-card bg-sand-50 p-8">
                    <span className="font-display text-[44px] font-medium leading-none tracking-tightest text-sand-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-6 font-display text-[22px] font-medium text-ink-900">{f.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">{f.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Included in every quote ---------- */}
        <section className="band grain relative overflow-hidden bg-ink-900">
          <div className="jaali-cream pointer-events-none absolute inset-0" />

          <div className="shell relative">
            <SectionHeading
              tone="cream"
              n="02"
              label="In every quote"
              title={<>Every society gets the whole platform.</>}
              lede={`All ${totalFeatures} tools across security, billing, communication and management — there is no cut-down tier that quietly removes the gate.`}
            />

            <div className="mt-10 grid sm:mt-16 gap-px overflow-hidden rounded-card bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURE_GROUPS.map((group) => (
                <Reveal key={group.id}>
                  <div className="h-full bg-ink-900 p-7 transition-colors duration-400 hover:bg-ink-800">
                    <h3 className="font-display text-[19px] font-medium text-paper">{group.label}</h3>
                    <ul className="mt-5 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item.title} className="flex items-start gap-2.5 text-[14px] leading-snug text-paper/65">
                          <svg
                            viewBox="0 0 24 24"
                            className="mt-1 h-3 w-3 shrink-0 text-terracotta-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4.5 12.5l5 5 10-11" />
                          </svg>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <IncludedSection n="03" />

        {/* ---------- What we won't do ---------- */}
        <section className="band bg-sand-50">
          <div className="shell">
            <SectionHeading
              n="04"
              label="Our side of it"
              title={<>Four things we will not do to a committee.</>}
              lede="The parts of software pricing that make treasurers nervous — written down, so you can hold us to them."
            />

            <div className="mt-9 sm:mt-14">
              <div className="rule-strong" />
              {PROMISES.map((p, i) => (
                <Reveal key={p.t} delay={i * 70}>
                  <div className="group grid gap-2 border-b border-[color:var(--rule-soft)] py-6 transition-all duration-400 ease-smooth hover:pl-2 md:grid-cols-[40px_320px_1fr] md:gap-8">
                    <span className="font-mono text-[11px] text-ink-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[20px] font-medium text-ink-900">{p.t}</h3>
                    <p className="max-w-[58ch] text-[14.5px] leading-relaxed text-ink-500">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-14 flex flex-wrap items-center gap-4">
                <Link to="/features" className="btn-line">
                  See what is included
                </Link>
                <a href="#demo" className="btn-ink">
                  Get a quote for my society
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <DemoForm id="demo" n="05" />
        <FAQ items={PRICING_FAQS} n="06" />
      </main>

      <Footer />
    </div>
  )
}

export default Pricing
