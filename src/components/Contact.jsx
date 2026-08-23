import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import DemoForm from './DemoForm'
import FAQ from './FAQ'
import Testimonials from './Testimonials'
import IncludedSection from './IncludedSection'
import { DemoCallScene } from './moreScenes'
import { SITE, FAQS } from '../data/site'

const CHANNELS = [
  {
    label: 'Call the team',
    icon: 'phone',
    rows: [
      { value: SITE.phonePrimary, href: SITE.phonePrimaryHref },
      { value: SITE.phoneSecondary, href: SITE.phoneSecondaryHref },
    ],
    note: 'Monday to Saturday, 10am – 7pm IST',
  },
  {
    label: 'Write to us',
    icon: 'mail',
    rows: [
      { value: SITE.sales, href: `mailto:${SITE.sales}` },
      { value: SITE.email, href: `mailto:${SITE.email}` },
    ],
    note: 'We reply within one business day',
  },
  {
    label: 'Find us',
    icon: 'pin',
    rows: [{ value: 'Ahmedabad, Gujarat, India', href: null }],
    note: `c/o ${SITE.builtBy} — ${SITE.address}`,
  },
]

const WHO_SHOULD = [
  { t: 'Committee members & secretaries', d: 'You are the one fielding the calls. Start here — a demo takes about thirty minutes.' },
  { t: 'Society managers & RWAs', d: 'Bring the treasurer and one committee member; we will walk through billing and complaints properly.' },
  { t: 'Builders & multi-tower complexes', d: 'Several towers under one management? We will cover how the structure maps across.' },
  { t: 'Brands & service providers', d: 'Looking to reach residents inside trusted communities — write to us about partnerships.' },
]

function Contact() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://aanganone.com/contact' },
    ],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Contact AanganOne — Book a Free Society Demo"
        description="Talk to the AanganOne team about a free demo for your society. Call +91 88664 48967, email sales@aanganone.com, or send your society details and we will reply within a business day."
        url="https://aanganone.com/contact"
        schema={[faqSchema, breadcrumbSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="Get in touch"
          title={<>Let's get your society onboard.</>}
          lede="New to a society or already running one? Tell us what you need — better security at the gate, smoother communication, or maintenance that collects itself."
          meta={[
            { label: 'Demo length', value: 'About 30 minutes' },
            { label: 'Response', value: 'Within one business day' },
            { label: 'Cost', value: 'Free, no obligation' },
          ]}
        >
          <a href="#demo" className="btn-ink">
            Request a demo
            <Icon name="arrow" className="h-4 w-4" />
          </a>
          <a href={SITE.phonePrimaryHref} className="btn-line">
            <Icon name="phone" className="hidden h-4 w-4 shrink-0 sm:inline-block" />
            {SITE.phonePrimary}
          </a>
        </PageHero>

        {/* ---------- Channels ---------- */}
        <section className="band-tight bg-paper">
          <div className="shell">
            <div className="grid gap-px overflow-hidden rounded-card bg-[color:var(--rule)] md:grid-cols-3">
              {CHANNELS.map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <div className="group h-full bg-sand-50 p-8 transition-colors duration-400 hover:bg-white">
                    <span className="grid h-11 w-11 place-items-center rounded-pill border border-ink-900/12 text-ink-700 transition-colors duration-400 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-paper">
                      <Icon name={c.icon} className="h-[18px] w-[18px]" />
                    </span>

                    <h2 className="mt-6 font-display text-[20px] font-medium text-ink-900">{c.label}</h2>

                    <div className="mt-4 space-y-1.5">
                      {c.rows.map((r) =>
                        r.href ? (
                          <a key={r.value} href={r.href} className="link-rule block text-[16px]">
                            {r.value}
                          </a>
                        ) : (
                          <span key={r.value} className="block text-[16px] font-medium text-ink-900">
                            {r.value}
                          </span>
                        ),
                      )}
                    </div>

                    <p className="mt-4 text-[13.5px] leading-relaxed text-ink-400">{c.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="band-tight bg-sand-50">
          <div className="shell">
            <Reveal>
              <p className="index-label text-center text-terracotta-500">What a demo looks like</p>
              <DemoCallScene className="mx-auto mt-8 max-w-[720px]" />
              <p className="mx-auto mt-8 max-w-[46ch] text-center text-[15px] leading-relaxed text-ink-500">
                Your committee on one side, us on the other, about thirty minutes — the gate flow,
                the billing cycle and the resident app, walked through live.
              </p>
            </Reveal>
          </div>
        </section>

        <DemoForm id="demo" n="01" />

        {/* ---------- Who should get in touch ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="02"
              label="Who gets in touch"
              title={<>Whether you run one society or twenty towers.</>}
              lede="Tell us which of these sounds like you and we will shape the demo around it."
            />

            <div className="mt-9 sm:mt-14">
              <div className="rule-strong" />
              {WHO_SHOULD.map((w, i) => (
                <Reveal key={w.t} delay={i * 70}>
                  <div className="group grid gap-2 border-b border-[color:var(--rule-soft)] py-6 transition-all duration-400 ease-smooth hover:pl-2 md:grid-cols-[40px_320px_1fr] md:gap-8">
                    <span className="font-mono text-[11px] text-ink-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[20px] font-medium text-ink-900">{w.t}</h3>
                    <p className="max-w-[58ch] text-[14.5px] leading-relaxed text-ink-500">{w.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <IncludedSection n="03" />

        {/* ---------- Partnerships ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <Reveal>
              <div className="grain relative overflow-hidden rounded-card bg-indigo-600">
                <div className="jaali-cream pointer-events-none absolute inset-0" />

                <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_.8fr] lg:items-center lg:gap-10 lg:p-16">
                  <div>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-wider2 text-terracotta-300">
                      For brands & service providers
                    </p>

                    <h2 className="display-l mt-6 max-w-[15ch] text-paper">
                      Reach the right communities.
                    </h2>

                    <p className="mt-6 max-w-[50ch] text-[16.5px] leading-relaxed text-paper/75">
                      From premium residential societies to growing neighbourhoods across cities,
                      AanganOne helps businesses, service providers and local brands connect
                      directly with active communities — where residents actually live.
                    </p>

                    <a
                      href={`mailto:${SITE.sales}?subject=Partnership%20enquiry`}
                      className="btn-cream mt-9"
                    >
                      Partner with us
                      <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Screen framed in an arch so it reads as a device, not a raw asset */}
                  <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
                    <div className="arch relative aspect-[3/4.2] border border-paper/20 bg-paper/10">
                      <img
                        src="/images/Frame 2118388460.png"
                        alt="The AanganOne community dashboard"
                        width={1095}
                        height={1963}
                        className="absolute left-1/2 top-[53%] w-[64%] -translate-x-1/2 -translate-y-1/2"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Testimonials n="04" />
        <FAQ n="05" />
      </main>

      <Footer />
    </div>
  )
}

export default Contact
