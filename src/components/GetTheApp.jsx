import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
import Icon from './Icon'
import Reveal from './Reveal'
import PageHero from './PageHero'
import SectionHeading from './SectionHeading'
import { SITE, ROLES } from '../data/site'

const STEPS = [
  {
    title: 'Download the app',
    desc: 'Get AanganOne from the Google Play Store on Android, or the App Store on iPhone. It is live on both.',
  },
  {
    title: 'Register against your flat',
    desc: 'Sign up with the mobile number your society has on record and pick your tower and unit. Your committee approves the request.',
  },
  {
    title: 'You are in',
    desc: 'Approve visitors, pay maintenance, raise complaints and read notices — all from the same place, for your own unit.',
  },
]

const RESIDENT_CAN = [
  { t: 'Pre-approve a guest before they arrive', i: 'qr' },
  { t: 'Let a delivery or cab through without a phone call', i: 'visitor' },
  { t: 'See and pay the maintenance bill by UPI', i: 'payment' },
  { t: 'Raise a complaint and watch its status', i: 'complaint' },
  { t: 'Read official society notices in one place', i: 'notice' },
  { t: 'Get emergency alerts the moment they go out', i: 'alert' },
  { t: 'Look up a neighbour in the resident directory', i: 'directory' },
  { t: 'Check your assigned parking slot', i: 'parking' },
]

function GetTheApp() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' },
      { '@type': 'ListItem', position: 2, name: 'Get the app', item: 'https://aanganone.com/app' },
    ],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="Get the AanganOne App — For Residents, Guards & Committees"
        description="Download AanganOne on Android, register against your flat and start approving visitors, paying maintenance and raising complaints. iOS is under App Store review."
        url="https://aanganone.com/app"
        schema={[breadcrumbSchema]}
      />

      <Navbar />

      <main id="main">
        <PageHero
          label="Get the app"
          title={<>Download it, and your flat is on the system.</>}
          lede="If your society is already on AanganOne, this takes about two minutes. If it isn't yet, send your committee our way — we'll take it from there."
          meta={[
            { label: 'Android', value: 'Live on Google Play' },
            { label: 'iOS', value: 'Live on the App Store' },
            { label: 'Cost to residents', value: 'Free — the society is billed' },
          ]}
        >
          <a href={SITE.playStore} target="_blank" rel="noopener noreferrer" className="btn-ink">
            <Icon name="play" filled className="h-4 w-4" />
            Get it on Google Play
          </a>
          <a href={SITE.appStore} target="_blank" rel="noopener noreferrer" className="btn-line">
            <Icon name="apple" filled className="h-4 w-4" />
            Download on the App Store
          </a>
        </PageHero>

        {/* ---------- Three steps ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="01"
              label="Getting started"
              title={<>Three steps, about two minutes.</>}
              lede="You need the mobile number your society has on record — that is what links you to your unit."
            />

            <div className="mt-10 grid sm:mt-16 items-start gap-12 lg:grid-cols-[1fr_.7fr] lg:gap-16">
              <div>
                <div className="rule-strong" />
                {STEPS.map((s, i) => (
                  <Reveal key={s.title} delay={i * 90}>
                    <div className="group flex items-start gap-6 border-b border-[color:var(--rule-soft)] py-8 transition-all duration-400 ease-smooth hover:pl-2">
                      <span className="font-display text-[38px] font-medium leading-none text-sand-400 transition-colors duration-400 group-hover:text-indigo-600">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-[21px] font-medium text-ink-900">{s.title}</h3>
                        <p className="mt-2 max-w-[54ch] text-[15px] leading-relaxed text-ink-500">{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div className="arch relative aspect-[3/4.2] border border-[color:var(--rule-soft)] bg-sand-100">
                    <div className="jaali absolute inset-0" />
                    <img
                      src="/images/iPhone 14 Pro Max.png"
                      alt="The AanganOne resident app"
                width={900}
                height={1614}
                      className="absolute left-1/2 top-[53%] w-[64%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- What a resident can do ---------- */}
        <section className="band bg-sand-50">
          <div className="shell">
            <SectionHeading
              n="02"
              label="For residents"
              title={<>What you can do from your phone.</>}
              lede="Everything below is available to a resident of an onboarded society, at no personal cost."
            />

            <div className="mt-10 grid sm:mt-16 gap-px overflow-hidden rounded-card bg-[color:var(--rule)] sm:grid-cols-2">
              {RESIDENT_CAN.map((r, i) => (
                <Reveal key={r.t} delay={(i % 2) * 60}>
                  <div className="group flex h-full items-center gap-4 bg-paper p-6 transition-colors duration-400 hover:bg-white">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-pill border border-ink-900/12 text-ink-700 transition-colors duration-400 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-paper">
                      <Icon name={r.i} className="h-[17px] w-[17px]" />
                    </span>
                    <p className="text-[15.5px] leading-snug text-ink-900">{r.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Other roles ---------- */}
        <section className="band bg-paper">
          <div className="shell">
            <SectionHeading
              n="03"
              label="Not a resident?"
              title={<>The same app, a different view.</>}
              lede="Admins, committee members and guards sign in to the same platform and see the tools their role needs."
            />

            <div className="mt-9 sm:mt-14">
              <div className="rule-strong" />
              {ROLES.filter((r) => r.role !== 'Residents').map((r, i) => (
                <Reveal key={r.role} delay={i * 80}>
                  <div className="group grid gap-3 border-b border-[color:var(--rule-soft)] py-7 transition-all duration-400 ease-smooth hover:pl-2 md:grid-cols-[40px_240px_1fr] md:gap-8">
                    <span className="font-mono text-[11px] text-ink-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[20px] font-medium text-ink-900">{r.role}</h3>
                    <p className="text-[14.5px] leading-relaxed text-ink-500">{r.points.join(' · ')}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Society not on it yet ----------
             Kept light: the footer below is dark, and two dark bands running
             into each other lose all separation. */}
        <section className="band bg-sand-50">
          <div className="shell">
            <Reveal>
              <p className="font-mono text-[11px] font-medium uppercase tracking-wider2 text-terracotta-500">
                Society not on AanganOne yet?
              </p>

              <h2 className="display-l mt-6 max-w-[18ch]">
                Point your committee at us — we'll do the rest.
              </h2>

              <p className="lede mt-6 max-w-[54ch]">
                AanganOne is onboarded by the society, not by individual flats. Share this with your
                secretary or committee and we will walk them through a free demo, set the society up
                and register every resident.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-ink">
                  Ask for a demo
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a href={`mailto:${SITE.sales}?subject=My%20society%20should%20be%20on%20AanganOne`} className="btn-line">
                  <Icon name="mail" className="h-4 w-4" />
                  Email the team
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default GetTheApp
