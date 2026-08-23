import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import FeaturesSection from './FeaturesSection'
import FlowsSection from './FlowsSection'
import RolesSection from './RolesSection'
import StepsSection from './StepsSection'
import IncludedSection from './IncludedSection'
import ComparisonTable from './ComparisonTable'
import TrustSection from './TrustSection'
import Testimonials from './Testimonials'
import DemoForm from './DemoForm'
import FAQ from './FAQ'
import { FEATURE_GROUPS } from '../data/site'

const PILLARS = [
  {
    title: 'Community',
    image: '/images/Frame 2118388466.png',
    alt: 'Residents celebrating a festival in their society',
    desc: 'A complete management system for RWAs and society administrators — communication, maintenance requests, complaints, vendor coordination, notices and amenity bookings from one place.',
  },
  {
    title: 'Security',
    image: '/images/Frame 2118388467.png',
    alt: 'A security guard at a society entrance gate',
    desc: 'Track visitor entries, manage approvals and keep visibility across the society. Residents feel secure while management keeps real control over access.',
  },
  {
    title: 'Accounting',
    image: '/images/Frame 2118388468.png',
    alt: 'Society accounts being worked out on a calculator',
    desc: 'From maintenance billing and collections to expense tracking and reports — society finances stay clear, accurate and effortless to maintain.',
  },
]

const GALLERY = [
  { src: '/images/Frame 2118388466 (2).png', alt: 'Amenities booking', cap: 'Amenities booking' },
  { src: '/images/Frame 2118388467 (1).png', alt: 'Accounting module', cap: 'Accounting' },
  { src: '/images/Frame 2118388468 (2).png', alt: 'Visitor management', cap: 'Visitor management' },
  { src: '/images/Frame 2118388466 (3).png', alt: 'Parking management', cap: 'Parking' },
  { src: '/images/Frame 2118388467 (2).png', alt: 'Child safety alerts', cap: 'Safety alerts' },
  { src: '/images/Frame 2118388468 (3).png', alt: 'Guard patrolling', cap: 'Guard patrolling' },
  { src: '/images/Frame 2118388466 (4).png', alt: 'Resident communication', cap: 'Communication' },
  { src: '/images/Frame 2118388467 (3).png', alt: 'Complaints management', cap: 'Complaints' },
  { src: '/images/Frame 2118388468 (4).png', alt: 'Access control', cap: 'Access control' },
]

function HowItWorks() {
  const totalFeatures = FEATURE_GROUPS.reduce((sum, g) => sum + g.items.length, 0)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://aanganone.com/features' },
    ],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Features — Everything Your Society Runs On | AanganOne"
        description="Every AanganOne feature in detail: QR visitor entry, gate security, emergency alerts, maintenance billing, UPI payments, notices, complaints, staff, parking and the resident directory."
        url="https://aanganone.com/features"
        schema={[breadcrumbSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="Product tour"
          title={<>Everything a society runs on, in one place.</>}
          lede="Thirteen tools across security, billing, communication and daily management — built to work together rather than as separate systems bolted onto each other."
          meta={[
            { label: 'Tools', value: `${totalFeatures} across 4 groups` },
            { label: 'Roles', value: 'Resident · Admin · Committee · Guard' },
            { label: 'Go live', value: 'Typically 3–5 days' },
          ]}
        >
          <Link to="/contact" className="btn-ink">
            Book a demo
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a href="#features" className="btn-line">Browse the catalog</a>
        </PageHero>

        <FeaturesSection n="01" />
        <FlowsSection n="02" />

        {/* ---------- Three pillars ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="03"
              label="Three pillars"
              title={<>Community, security, accounting.</>}
              lede="The three systems a residential society cannot run without — and the three AanganOne was built around."
            />

            <div className="mt-10 grid sm:mt-16 gap-6 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="group h-full">
                    <div className="arch relative aspect-[4/5] bg-sand-100">
                      <img
                        src={p.image}
                        alt={p.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-600 ease-smooth group-hover:scale-[1.04]"
                        loading="lazy"
                      />

                      {/* just enough shading for the label to sit on */}
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950/80 via-ink-950/35 to-transparent" />

                      <span className="absolute bottom-6 left-6 font-display text-[26px] font-medium text-paper drop-shadow-sm">
                        {p.title}
                      </span>
                    </div>
                    <p className="mt-6 text-[14.5px] leading-relaxed text-ink-500">{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <RolesSection n="04" />
        <StepsSection n="05" />
        <IncludedSection n="06" />

        {/* ---------- Marketplace ---------- */}
        <section className="band bg-sand-50">
          <div className="shell">
            <SectionHeading
              n="07"
              label="Community marketplace"
              title={<>A marketplace made for your neighbours.</>}
              lede="A dedicated space where residents buy, sell and discover useful products and services — inside a trusted, verified community rather than out on the open internet."
            />

            <div className="mt-10 grid sm:mt-16 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div className="grid gap-5 sm:grid-cols-2">
                  {['/images/Frame 2118388466 (1).png', '/images/Frame 2118388468 (1).png'].map((src, i) => (
                    <div
                      key={src}
                      className={`overflow-hidden rounded-card border border-[color:var(--rule-soft)] bg-white ${
                        i === 1 ? 'sm:translate-y-8' : ''
                      }`}
                    >
                      <img src={src} alt="AanganOne marketplace" width={1400} height={1110} className="w-full" loading="lazy" />
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div>
                  <div className="rule-strong" />
                  {[
                    { t: 'Verified neighbours only', d: 'Listings stay within the society, so buyers and sellers already know each other.' },
                    { t: 'Local services, found locally', d: 'Tutors, repairs, tiffin services — the things residents ask the group chat for.' },
                    { t: 'No stepping outside', d: 'Trade and discovery happen inside the community network, not on a public marketplace.' },
                  ].map((x, i) => (
                    <div key={x.t} className="flex items-start gap-5 border-b border-[color:var(--rule-soft)] py-6">
                      <span className="font-mono text-[11px] text-ink-300">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-display text-[19px] font-medium text-ink-900">{x.t}</h3>
                        <p className="mt-1.5 max-w-[46ch] text-[14.5px] leading-relaxed text-ink-500">{x.d}</p>
                      </div>
                    </div>
                  ))}
                  <Link to="/contact" className="btn-ink mt-9">
                    See it in a demo
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Screen gallery ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="08"
              label="Inside the app"
              title={<>And plenty more besides.</>}
              lede="Amenities, patrolling, child safety, access control — the details that keep daily society life running quietly in the background."
            />

            <div className="mt-10 grid sm:mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.map((g, i) => (
                <Reveal key={g.src} delay={(i % 3) * 80}>
                  <figure className="group">
                    <div className="overflow-hidden rounded-card border border-[color:var(--rule-soft)] bg-sand-50">
                      <img
                        src={g.src}
                        alt={g.alt}
                        width={1400}
                        height={1062}
                        className="w-full transition-transform duration-600 ease-smooth group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="index-label mt-4">{g.cap}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable n="09" />
        <TrustSection n="10" />
        <Testimonials n="11" />
        <FAQ n="12" />
        <DemoForm n="13" />
      </main>

      <Footer />
    </div>
  )
}

export default HowItWorks
