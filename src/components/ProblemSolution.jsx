import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { PAIN_POINTS } from '../data/site'

function ProblemSolution({ n = "01" }) {
  return (
    <section className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="The problem"
          title={<>Most societies still run on paper, cash and a group chat.</>}
          lede="None of it is connected, and none of it leaves a record. Here is what each of those becomes once a society moves onto AanganOne."
        />

        {/* Ledger-style table: the old way struck through, the new way beside it */}
        <div className="mt-10 sm:mt-16">
          <div className="rule-strong" />

          {PAIN_POINTS.map((item, i) => (
            <Reveal key={item.problem} delay={i * 60}>
              <div className="group grid grid-cols-1 items-center gap-3 border-b border-[color:var(--rule-soft)] py-6 transition-colors duration-400 hover:bg-sand-50 md:grid-cols-[40px_1fr_28px_1fr] md:gap-6 md:px-4">
                <span className="font-mono text-[11px] text-ink-300">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <p className="text-[15.5px] leading-snug text-ink-400 line-through decoration-terracotta-500/50">
                  {item.problem}
                </p>

                <span className="hidden justify-center text-ink-300 transition-all duration-400 ease-smooth group-hover:translate-x-1 group-hover:text-indigo-600 md:flex">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h15m0 0l-5-5m5 5l-5 5" />
                  </svg>
                </span>

                <p className="text-[15.5px] font-medium leading-snug text-ink-900">{item.solution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
