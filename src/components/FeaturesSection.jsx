import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { FEATURE_GROUPS } from '../data/site'

const TONE = {
  brand: { dot: 'bg-indigo-600', text: 'text-indigo-600', wash: 'bg-indigo-50' },
  mint: { dot: 'bg-terracotta-500', text: 'text-terracotta-600', wash: 'bg-terracotta-100' },
  sky: { dot: 'bg-ink-900', text: 'text-ink-800', wash: 'bg-sand-100' },
  sun: { dot: 'bg-sand-400', text: 'text-ink-700', wash: 'bg-sand-200' },
}

function FeaturesSection({ n = "02" }) {
  return (
    <section id="features" className="band bg-sand-50">
      <div className="shell">
        <SectionHeading
          n={n}
          label="What's inside"
          title={<>Thirteen tools, four jobs, one login.</>}
          lede="Security at the gate, money in the ledger, word to the residents, and the daily running of the place. Nothing bolted on."
        />

        <div className="mt-10 space-y-10 sm:mt-16 sm:space-y-14">
          {FEATURE_GROUPS.map((group, gi) => {
            const tone = TONE[group.accent]
            return (
              <Reveal key={group.id} delay={gi * 70}>
                <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[260px_1fr]">
                  {/* Group spine */}
                  <div className="md:sticky md:top-28 md:self-start">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                      <h3 className="font-display text-[22px] font-medium text-ink-900">{group.label}</h3>
                    </div>
                    <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-ink-500">
                      {group.blurb}
                    </p>
                    <p className="index-label mt-4">
                      {String(group.items.length).padStart(2, '0')} tools
                    </p>
                  </div>

                  {/* Items */}
                  <ul className="border-t border-[color:var(--rule)]">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <div className="group flex items-start gap-5 border-b border-[color:var(--rule-soft)] py-6 transition-all duration-400 ease-smooth hover:pl-2">
                          <span
                            className={`grid h-11 w-11 shrink-0 place-items-center rounded-pill ${tone.wash} ${tone.text} transition-all duration-400 ease-smooth group-hover:scale-105`}
                          >
                            <Icon name={item.icon} className="h-[19px] w-[19px]" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="font-display text-[19px] font-medium text-ink-900">
                              {item.title}
                            </h4>
                            <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-500">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
