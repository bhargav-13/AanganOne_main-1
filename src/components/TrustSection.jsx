import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { TRUST } from '../data/detail'

function TrustSection({ n = '08' }) {
  return (
    <section id="trust" className="band grain relative overflow-hidden bg-ink-900">
      <div className="jaali-cream pointer-events-none absolute inset-0" />

      <div className="shell relative">
        <SectionHeading
          tone="cream"
          n={n}
          label="Trust & privacy"
          title={<>Society data is personal data.</>}
          lede="Names, flats, vehicles, visitors, payments — a society register holds all of it. Here is how it is handled."
        />

        <div className="mt-10 grid sm:mt-16 gap-px overflow-hidden rounded-card bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 80}>
              <div className="group h-full bg-ink-900 p-8 transition-colors duration-400 hover:bg-ink-800">
                <span className="grid h-11 w-11 place-items-center rounded-pill border border-paper/25 text-paper transition-colors duration-400 group-hover:border-terracotta-500 group-hover:bg-terracotta-500 group-hover:text-paper">
                  <Icon name={t.icon} className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-medium text-paper">{t.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-paper/60">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
