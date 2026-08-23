import Counter from './Counter'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useScrollProgress from '../hooks/useScrollProgress'
import { IMPACT, BENEFITS } from '../data/site'

function ImpactSection({ n = "10" }) {
  const [ref, progress] = useScrollProgress({ startAt: 0.85, span: 0.45 })

  return (
    <section id="impact" className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="Impact"
          title={<>What changes once the paper goes away.</>}
          lede="Reported by societies after moving their day-to-day operations onto AanganOne."
        />

        {/* Big numbers, each over a bar that fills as the section scrolls in */}
        <div ref={ref} className="mt-10 grid sm:mt-16 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((s, i) => {
            // stagger each bar slightly so they fill in sequence
            const local = Math.min(1, Math.max(0, (progress - i * 0.07) / 0.6))
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group">
                  {/* track + fill */}
                  <div className="relative h-[3px] w-full bg-[color:var(--rule-soft)]">
                    <div
                      className="absolute inset-y-0 left-0 bg-indigo-600 transition-colors duration-600 group-hover:bg-terracotta-500"
                      style={{ width: `${local * 100}%` }}
                    />
                  </div>

                  <div className="pt-6">
                    <div className="font-display text-[clamp(3rem,6vw,4.4rem)] font-medium leading-none tracking-tightest text-ink-900">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <h3 className="mt-5 font-display text-[19px] font-medium text-ink-900">{s.title}</h3>
                    <p className="mt-2 max-w-[32ch] text-[14.5px] leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Benefits ribbon */}
        <Reveal delay={140}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-card bg-[color:var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-sand-50 p-7 transition-colors duration-400 hover:bg-white">
                <h4 className="font-display text-[18px] font-medium text-ink-900">{b.title}</h4>
                <p className="mt-2 text-[14px] leading-snug text-ink-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ImpactSection
