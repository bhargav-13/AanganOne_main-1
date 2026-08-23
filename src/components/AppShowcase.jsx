import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SITE, DIFFERENTIATORS } from '../data/site'

function AppShowcase({ n = "08" }) {
  return (
    <section className="band bg-sand-50">
      <div className="shell">
        <SectionHeading
          n={n}
          label="Why AanganOne"
          title={<>Built like a product, not a portal.</>}
          lede="A premium alternative to traditional society software — cleaner to look at, faster to use, and shaped around how Indian societies actually work."
        />

        <div className="mt-10 grid sm:mt-16 gap-14 lg:grid-cols-[1fr_.85fr] lg:gap-16">
          {/* Reasons, as a ledger */}
          <div>
            <div className="rule-strong" />
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div className="group flex items-start gap-5 border-b border-[color:var(--rule-soft)] py-6 transition-all duration-400 ease-smooth hover:pl-2">
                  <span className="mt-0.5 font-mono text-[11px] text-ink-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill border border-ink-900/12 text-ink-700 transition-colors duration-400 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-paper">
                    <Icon name={d.icon} className="h-[17px] w-[17px]" />
                  </span>
                  <div>
                    <h3 className="font-display text-[20px] font-medium text-ink-900">{d.title}</h3>
                    <p className="mt-1.5 max-w-[46ch] text-[14.5px] leading-relaxed text-ink-500">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={SITE.playStore} target="_blank" rel="noopener noreferrer" className="btn-ink">
                  <Icon name="play" filled className="h-4 w-4" />
                  Get it on Google Play
                </a>
                <a href={SITE.appStore} target="_blank" rel="noopener noreferrer" className="btn-line">
                  <Icon name="apple" filled className="h-4 w-4" />
                  Download on the App Store
                </a>
              </div>
            </Reveal>
          </div>

          {/* A single screen, framed — one device reads far better than two overlapping */}
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-[400px] lg:sticky lg:top-28">
              <div className="arch relative aspect-[3/4] border border-[color:var(--rule-soft)] bg-sand-100">
                <div className="jaali absolute inset-0" />
                <img
                  src="/images/iPhone 14 Pro Max3.png"
                  alt="AanganOne app — visitor management"
                  width={900}
                  height={1614}
                  className="absolute left-1/2 top-[53%] w-[64%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

              <p className="index-label mt-6 text-center">Visitor management, on the resident app</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
