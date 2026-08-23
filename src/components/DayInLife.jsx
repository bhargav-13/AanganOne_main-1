import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { DAY } from '../data/detail'

const WHO = {
  Guard: 'bg-ink-900 text-paper',
  Admin: 'bg-indigo-600 text-paper',
  Resident: 'bg-terracotta-500 text-paper',
  Committee: 'bg-sand-300 text-ink-900',
}

function DayInLife({ n = '04' }) {
  return (
    <section className="band bg-sand-50">
      <div className="shell">
        <SectionHeading
          n={n}
          label="A day in the society"
          title={<>Tuesday, from the gate to the ledger.</>}
          lede="Not a feature list — the ordinary running of a residential society, hour by hour, once it is all in one place."
        />

        <div className="mt-10 sm:mt-16">
          <div className="rule-strong" />

          {DAY.map((d, i) => (
            <Reveal key={d.time} delay={i * 60}>
              <div className="group grid grid-cols-[64px_1fr] items-start gap-4 border-b border-[color:var(--rule-soft)] py-6 transition-colors duration-400 hover:bg-white md:grid-cols-[92px_120px_1fr] md:gap-8 md:px-4">
                <span className="font-mono text-[13px] tabular-nums text-ink-900">{d.time}</span>

                <span
                  className={`inline-flex w-fit items-center rounded-pill px-3 py-1 font-mono text-[11.5px] sm:text-[10px] uppercase tracking-wider2 ${WHO[d.who]}`}
                >
                  {d.who}
                </span>

                <p className="col-span-2 max-w-[68ch] text-[15.5px] leading-relaxed text-ink-600 md:col-span-1">
                  {d.event}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DayInLife
