import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import PageHero from './PageHero'
import DemoForm from './DemoForm'
import { ARTICLES } from '../data/articles'

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

function Blog() {
  const [lead, ...rest] = ARTICLES

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://aanganone.com/resources' },
    ],
  }

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: ARTICLES.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://aanganone.com/resources/${a.slug}`,
      name: a.title,
    })),
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Resources — Practical Guidance for Society Committees | AanganOne"
        description="Practical articles for RWA committees and society secretaries: gate security, maintenance collection, community communication and running a society without drowning in admin."
        url="https://aanganone.com/resources"
        schema={[breadcrumbSchema, listSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="Resources"
          title={<>Written for the people who actually run societies.</>}
          lede="Committee members are volunteers with day jobs. These are practical notes on the parts of the work that take the most time — and what can be done about them."
          meta={[
            { label: 'Articles', value: `${ARTICLES.length} published` },
            { label: 'Written for', value: 'Committees, secretaries, RWAs' },
            { label: 'Reading time', value: '5–7 minutes each' },
          ]}
        />

        {/* ---------- Lead article ---------- */}
        <section className="band-tight bg-paper">
          <div className="shell">
            <Reveal>
              <Link to={`/resources/${lead.slug}`} className="group block">
                <div className="rule-strong" />
                <div className="grid gap-8 py-10 lg:grid-cols-[1fr_.8fr] lg:gap-16">
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="index-label text-terracotta-500">{lead.tag}</span>
                      <span className="font-mono text-[11px] text-ink-300">
                        {fmtDate(lead.date)} · {lead.readMins} min read
                      </span>
                    </div>

                    <h2 className="display-l mt-6 max-w-[18ch] transition-colors duration-400 group-hover:text-indigo-600">
                      {lead.title}
                    </h2>

                    <p className="lede mt-6 max-w-[54ch]">{lead.excerpt}</p>

                    <span className="link-rule mt-8 inline-flex text-[15px]">
                      Read the article
                      <Icon
                        name="arrow"
                        className="h-4 w-4 transition-transform duration-400 ease-smooth group-hover:translate-x-1"
                      />
                    </span>
                  </div>

                  <div className={`arch relative aspect-[4/3] ${lead.tint} lg:aspect-auto lg:min-h-[280px]`}>
                    <div className="jaali-cream absolute inset-0" />
                    <span className={`absolute bottom-6 left-7 font-display text-[24px] font-medium ${lead.text}`}>
                      {lead.tag}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ---------- The rest ---------- */}
        <section className="band-tight bg-paper pb-14 sm:pb-20 md:pb-32">
          <div className="shell">
            <div className="rule-strong" />

            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <Link
                  to={`/resources/${a.slug}`}
                  className="group grid items-baseline gap-3 border-b border-[color:var(--rule-soft)] py-8 transition-all duration-400 ease-smooth hover:pl-2 md:grid-cols-[150px_1fr_130px] md:gap-8"
                >
                  <span className="index-label text-terracotta-500">{a.tag}</span>

                  <div>
                    <h3 className="font-display text-[23px] font-medium leading-snug text-ink-900 transition-colors duration-400 group-hover:text-indigo-600">
                      {a.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-ink-500">
                      {a.excerpt}
                    </p>
                  </div>

                  <span className="flex items-center justify-between font-mono text-[11px] text-ink-300 md:justify-end md:gap-3">
                    {a.readMins} min
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform duration-400 ease-smooth group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <DemoForm n="01" />
      </main>

      <Footer />
    </div>
  )
}

export default Blog
