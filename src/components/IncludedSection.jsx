import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { INCLUDED } from '../data/detail'

function IncludedSection({ n = '06' }) {
  return (
    <section className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="What onboarding includes"
          title={<>You are not handed a login and left to it.</>}
          lede="Every society goes live with the same hands-on setup, whatever its size."
        />

        <div className="mt-9 grid sm:mt-14 gap-px overflow-hidden rounded-card bg-[color:var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 70}>
              <div className="group h-full bg-paper p-8 transition-colors duration-400 hover:bg-sand-50">
                <span className="font-mono text-[11px] text-ink-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-[19px] font-medium text-ink-900">{c.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-500">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IncludedSection
