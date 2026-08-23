import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { STEPS } from '../data/site'

function StepsSection({ n = "06" }) {
  return (
    <section className="band grain relative overflow-hidden bg-ink-900">
      <div className="jaali-cream pointer-events-none absolute inset-0" />

      <div className="shell relative">
        <SectionHeading
          tone="cream"
          n={n}
          label="Onboarding"
          title={<>Live in under a week, without an IT team.</>}
          lede="We do the setup, the migration and the training. Your committee approves, and the society goes live."
        />

        <div className="mt-10 grid sm:mt-16 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="group">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[52px] font-medium leading-none tracking-tightest text-paper/25 transition-colors duration-600 group-hover:text-terracotta-300">
                    {s.step}
                  </span>
                  <span className="font-mono text-[11.5px] sm:text-[10px] uppercase tracking-wider2 text-paper/35">
                    Step
                  </span>
                </div>

                <div className="mt-5 h-px w-full bg-paper/20 transition-colors duration-600 group-hover:bg-terracotta-500" />

                <h3 className="mt-5 font-display text-[21px] font-medium text-paper">{s.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-paper/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection
