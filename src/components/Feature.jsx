import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import Counter from './Counter'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import Testimonials from './Testimonials'
import DemoForm from './DemoForm'
import { SITE, TEAM, STATS } from '../data/site'
import { ARTICLES } from '../data/articles'

const VALUES = [
  { title: 'Community first', desc: 'Everything is designed around people — residents, committees and the service teams who keep the place running.' },
  { title: 'Simplicity', desc: 'Software should be intuitive enough for the guard at the gate and deep enough for the treasurer.' },
  { title: 'Trust & transparency', desc: 'Clear communication, secure systems and processes a community can actually rely on.' },
  { title: 'Reliability', desc: 'Stable, scalable software that societies can count on every single day.' },
  { title: 'Continuous improvement', desc: 'We listen, learn and evolve with the changing needs of modern communities.' },
]

const CODELIX = [
  { title: 'End-to-end product', desc: 'Design, development and deployment under one roof.' },
  { title: 'Mobile-first', desc: 'Built for real-world society workflows, not desktop forms.' },
  { title: 'Scales with you', desc: 'A single society or a multi-tower complex.' },
  { title: 'Ongoing support', desc: 'Continuous product updates and a team that answers.' },
]

function Feature() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://aanganone.com/about' },
    ],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="About AanganOne — Shaping the Future of Community Living"
        description="AanganOne is a smart society and community management platform built by Codelix IT Solutions in Ahmedabad. Our mission, vision, values and the team behind the product."
        url="https://aanganone.com/about"
        schema={[breadcrumbSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="About us"
          title={<>Shaping the future of community living.</>}
          lede="We build software that works quietly in the background — making everyday life simpler, smoother and more connected for your home and your society."
          meta={[
            { label: 'Category', value: 'SaaS mobile application' },
            { label: 'Model', value: 'B2B2C — admins to residents' },
            { label: 'Market', value: 'Residential societies, India' },
          ]}
        >
          <Link to="/contact" className="btn-ink">
            Talk to our team
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </PageHero>

        {/* ---------- What we are ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="01"
              label="The product"
              title={<>A single platform for how societies actually run.</>}
              lede="AanganOne is a smart society, apartment and community management platform built to simplify and digitise the daily operations of modern residential societies."
            />

            <div className="mt-9 grid sm:mt-14 gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
              <Reveal>
                <p className="lede">
                  From visitor entry to maintenance billing, it replaces manual, paper-based
                  processes with one mobile application — available to residents, admins, committee
                  members and security guards alike.
                </p>

                <div className="mt-10">
                  <div className="rule-strong" />
                  {[
                    { k: 'Category', v: 'SaaS mobile application' },
                    { k: 'Business model', v: 'B2B2C — society admins to residents' },
                    { k: 'Target market', v: 'Residential societies, apartments and gated communities across India' },
                    { k: 'Platforms', v: 'Android and iOS — live on both stores' },
                    { k: 'Developer entity', v: SITE.legalEntity },
                  ].map((row) => (
                    <div key={row.k} className="grid gap-1 border-b border-[color:var(--rule-soft)] py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                      <span className="index-label">{row.k}</span>
                      <span className="text-[15px] text-ink-900">{row.v}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-[color:var(--rule)]">
                  {STATS.map((s) => (
                    <div key={s.label} className="bg-sand-50 p-8">
                      <div className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-tightest text-ink-900">
                        <Counter value={s.value} suffix={s.suffix} />
                      </div>
                      <div className="index-label mt-3">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Mission / vision ---------- */}
        <section className="band bg-sand-50">
          <div className="shell">
            <SectionHeading
              n="02"
              label="Purpose"
              title={<>Why we build AanganOne.</>}
              lede="Two statements that decide what gets built — and what does not."
            />

            <div className="mt-10 grid sm:mt-16 gap-6 md:grid-cols-2">
              <Reveal>
                <article className="relative h-full overflow-hidden rounded-card bg-indigo-600 p-9 text-paper">
                  <div className="jaali-cream absolute inset-0" />
                  <span className="relative index-label text-paper/60">Our mission</span>
                  <p className="relative mt-6 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug">
                    To simplify and strengthen community living by building technology that connects
                    residents, management and daily operations.
                  </p>
                  <p className="relative mt-5 text-[15px] leading-relaxed text-paper/70">
                    We reduce complexity, improve transparency and help communities function smoothly
                    through reliable, easy-to-use digital tools.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={100}>
                <article className="relative h-full overflow-hidden rounded-card bg-ink-900 p-9 text-paper">
                  <div className="jaali-cream absolute inset-0" />
                  <span className="relative index-label text-paper/60">Our vision</span>
                  <p className="relative mt-6 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug">
                    A future where every residential community is connected, secure and effortlessly
                    managed.
                  </p>
                  <p className="relative mt-5 text-[15px] leading-relaxed text-paper/70">
                    Where technology supports better living without getting in the way of everyday
                    life.
                  </p>
                </article>
              </Reveal>
            </div>

            {/* Values as a ledger */}
            <Reveal delay={140}>
              <div className="mt-10 sm:mt-16">
                <p className="index-label">Our values</p>
                <div className="mt-6 rule-strong" />
                {VALUES.map((v, i) => (
                  <div
                    key={v.title}
                    className="group grid gap-2 border-b border-[color:var(--rule-soft)] py-6 transition-all duration-400 ease-smooth hover:pl-2 md:grid-cols-[40px_240px_1fr] md:gap-8"
                  >
                    <span className="font-mono text-[11px] text-ink-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[20px] font-medium text-ink-900">{v.title}</h3>
                    <p className="max-w-[62ch] text-[14.5px] leading-relaxed text-ink-500">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Team ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="03"
              label="Leadership"
              title={<>The people behind the product.</>}
              lede="A small team that ships, supports and keeps improving the platform."
            />

            <div className="mt-10 grid sm:mt-16 gap-8 sm:grid-cols-3">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={i * 110}>
                  <article className="group">
                    <div className="arch relative aspect-[3/4] bg-sand-100">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-105"
                        style={{ objectPosition: m.position || 'center' }}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-6 font-display text-[21px] font-medium text-ink-900">{m.name}</h3>
                    <p className="index-label mt-2">{m.role}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Built by Codelix ---------- */}
        <section className="band grain relative overflow-hidden bg-ink-900">
          <div className="jaali-cream pointer-events-none absolute inset-0" />

          <div className="shell relative">
            <SectionHeading
              tone="cream"
              n="04"
              label="Built by"
              title={<>{SITE.builtBy}</>}
              lede="A business systems and AI implementation company in Ahmedabad, building intelligent, India-first software across CA practice management, manufacturing ERP and residential community management."
            />

            <div className="mt-10 grid sm:mt-16 gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-16">
              <Reveal>
                <div className="h-px w-full bg-paper/20" />
                {CODELIX.map((c, i) => (
                  <div key={c.title} className="flex items-start gap-5 border-b border-paper/12 py-6">
                    <span className="font-mono text-[11px] text-paper/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-[19px] font-medium text-paper">{c.title}</h3>
                      <p className="mt-1.5 text-[14.5px] leading-relaxed text-paper/60">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-card border border-paper/15 p-8">
                  <p className="index-label text-paper/50">Get in touch with Codelix</p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <span className="font-mono text-[11.5px] sm:text-[10.5px] uppercase tracking-wider2 text-paper/40">Email</span>
                      <a
                        href="mailto:sales@codelixitsolutions.com"
                        className="mt-1 block text-[16px] text-paper transition-colors hover:text-terracotta-300"
                      >
                        sales@codelixitsolutions.com
                      </a>
                    </div>
                    <div>
                      <span className="font-mono text-[11.5px] sm:text-[10.5px] uppercase tracking-wider2 text-paper/40">Office</span>
                      <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-paper/80">{SITE.address}</p>
                    </div>
                  </div>

                  <a
                    href="https://www.codelixitsolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-cream mt-8"
                  >
                    Visit Codelix
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Blog ---------- */}
        <section className="band bg-sand-50">
          <div className="shell">
            <SectionHeading
              n="05"
              label="From the blog"
              title={<>Insights for smarter communities.</>}
              lede="Ideas, updates and practical guidance for committees running modern societies."
            />

            <div className="mt-10 grid sm:mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 90}>
                  <Link
                    to={`/resources/${p.slug}`}
                    className={`group relative flex h-64 flex-col justify-between overflow-hidden rounded-card ${p.tint} p-7 transition-transform duration-600 ease-smooth hover:-translate-y-2`}
                  >
                    <div className="jaali-cream absolute inset-0 opacity-60" />

                    <span className="relative flex items-center justify-between">
                      <span className={`font-mono text-[11.5px] sm:text-[10.5px] uppercase tracking-wider2 ${p.text} opacity-70`}>
                        {p.tag}
                      </span>
                      <Icon
                        name="arrow"
                        className={`h-4 w-4 ${p.text} opacity-0 transition-all duration-400 ease-smooth group-hover:translate-x-1 group-hover:opacity-80`}
                      />
                    </span>

                    <span>
                      <h3 className={`relative max-w-[22ch] font-display text-[22px] font-medium leading-snug ${p.text}`}>
                        {p.title}
                      </h3>
                      <span className={`relative mt-3 block font-mono text-[11.5px] sm:text-[10.5px] ${p.text} opacity-60`}>
                        {p.readMins} min read
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-12">
                <Link to="/resources" className="btn-line">
                  All resources
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Testimonials n="06" />
        <DemoForm n="07" />
      </main>

      <Footer />
    </div>
  )
}

export default Feature
