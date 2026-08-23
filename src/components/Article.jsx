import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import NotFound from './NotFound'
import useScrollProgress from '../hooks/useScrollProgress'
import { ARTICLES, getArticle } from '../data/articles'

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

function Article() {
  const { slug } = useParams()
  const [bodyRef, readProgress] = useScrollProgress({ startAt: 0.98, span: 1.6 })
  const article = getArticle(slug)

  if (!article) return <NotFound />

  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3)
  const url = `https://aanganone.com/resources/${article.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'AanganOne' },
    publisher: {
      '@type': 'Organization',
      name: 'AanganOne',
      logo: { '@type': 'ImageObject', url: 'https://aanganone.com/icon-512.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://aanganone.com/resources' },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title={`${article.title} | AanganOne`}
        description={article.excerpt}
        url={url}
        schema={[articleSchema, breadcrumbSchema]}
      />

      <Navbar />

      {/* reading progress, pinned just under the navbar */}
      <div
        className="fixed inset-x-0 z-40 h-[2px] bg-transparent"
        style={{ top: 'var(--nav-h)' }}
        aria-hidden="true"
      >
        <div
          className="h-full bg-terracotta-500 transition-[width] duration-150 ease-out"
          style={{ width: `${readProgress * 100}%` }}
        />
      </div>

      <main id="main">
        {/* ---------- Masthead ---------- */}
        <article className="relative overflow-hidden pb-10 pt-[calc(var(--nav-h)+28px)] sm:pb-16 sm:pt-[calc(var(--nav-h)+44px)] md:pt-[calc(var(--nav-h)+56px)]">
          <div className="jaali pointer-events-none absolute inset-x-0 top-0 h-[380px] opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

          <div className="shell relative">
            <Link to="/resources" className="link-rule animate-rise text-[14px] text-ink-500">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              All resources
            </Link>

            <div className="mt-10 flex animate-rise flex-wrap items-center gap-4" style={{ animationDelay: '60ms' }}>
              <span className="index-label text-terracotta-500">{article.tag}</span>
              <span className="font-mono text-[11px] text-ink-300">
                {fmtDate(article.date)} · {article.readMins} min read
              </span>
            </div>

            <h1
              className="display-l mt-6 max-w-[20ch] animate-rise"
              style={{ animationDelay: '120ms' }}
            >
              {article.title}
            </h1>
          </div>

          {/* ---------- Body ---------- */}
          <div className="shell relative mt-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
              <div ref={bodyRef} className="max-w-[68ch]">
                <div className="rule-strong" />

                <p className="mt-10 font-display text-[clamp(1.25rem,2.1vw,1.55rem)] font-medium leading-snug text-ink-900">
                  {article.intro}
                </p>

                {article.sections.map((s, i) => (
                  <Reveal key={s.h} delay={i * 50}>
                    <section className="mt-12">
                      <h2 className="font-display text-[26px] font-medium leading-snug text-ink-900">
                        {s.h}
                      </h2>

                      {s.p?.map((para) => (
                        <p key={para.slice(0, 40)} className="mt-5 text-[17px] leading-[1.75] text-ink-600">
                          {para}
                        </p>
                      ))}

                      {s.list && (
                        <ul className="mt-7">
                          <div className="rule" />
                          {s.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-4 border-b border-[color:var(--rule-soft)] py-4 text-[16px] leading-snug text-ink-700"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  </Reveal>
                ))}

                {/* CTA at the end of the read */}
                <Reveal>
                  <aside className="mt-16 rounded-card bg-sand-50 p-8 sm:p-10">
                    <p className="index-label text-terracotta-500">See it working</p>
                    <h2 className="display-m mt-4 max-w-[20ch]">
                      Everything above, in one app for your society.
                    </h2>
                    <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-500">
                      Visitor entry, maintenance billing, complaints and notices — for residents,
                      admins, committee members and guards. A demo takes about thirty minutes.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link to="/contact" className="btn-ink">
                        Book a free demo
                        <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                      <Link to="/features" className="btn-line">
                        See the features
                      </Link>
                    </div>
                  </aside>
                </Reveal>
              </div>

              {/* ---------- Sidebar ---------- */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rule-strong" />
                <p className="index-label mt-5">In this article</p>

                <nav className="mt-4 flex flex-col gap-3">
                  {article.sections.map((s) => (
                    <span key={s.h} className="text-[14px] leading-snug text-ink-500">
                      {s.h}
                    </span>
                  ))}
                </nav>
              </aside>
            </div>
          </div>
        </article>

        {/* ---------- Keep reading ---------- */}
        <section className="band-tight bg-paper pb-14 sm:pb-20 md:pb-32">
          <div className="shell">
            <div className="rule-strong" />
            <p className="index-label mt-6">Keep reading</p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <Link to={`/resources/${a.slug}`} className="group block h-full">
                    <div className={`arch relative aspect-[5/3] ${a.tint}`}>
                      <div className="jaali-cream absolute inset-0" />
                      <span className={`absolute bottom-4 left-5 font-mono text-[11.5px] sm:text-[10.5px] uppercase tracking-wider2 ${a.text} opacity-80`}>
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[19px] font-medium leading-snug text-ink-900 transition-colors duration-400 group-hover:text-indigo-600">
                      {a.title}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] text-ink-300">{a.readMins} min read</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Article
