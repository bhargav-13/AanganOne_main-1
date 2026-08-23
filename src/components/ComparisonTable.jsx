import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { LedgerScene } from './scenes'
import { COMPARISON } from '../data/detail'

function ComparisonTable({ n = '07' }) {
  return (
    <section className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="Side by side"
          title={<>The same society, two ways of running it.</>}
          lede="Nothing here is theoretical — it is the list every committee recognises from their own noticeboard."
        />

        <Reveal className="mt-9 sm:mt-14">
          <div className="overflow-x-auto">
            <LedgerScene className="mx-auto min-w-[600px] max-w-[820px]" />
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-y border-[color:var(--rule)]">
                  <th className="w-[24%] py-5 pr-6 font-mono text-[10.5px] font-medium uppercase tracking-wider2 text-ink-400">
                    Area
                  </th>
                  <th className="w-[38%] py-5 pr-6 font-mono text-[10.5px] font-medium uppercase tracking-wider2 text-ink-400">
                    Managed manually
                  </th>
                  <th className="w-[38%] py-5 font-mono text-[10.5px] font-medium uppercase tracking-wider2 text-indigo-600">
                    With AanganOne
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARISON.map((row) => (
                  <tr
                    key={row.area}
                    className="group border-b border-[color:var(--rule-soft)] transition-colors duration-400 hover:bg-sand-50"
                  >
                    <td className="py-5 pr-6 align-top font-display text-[17px] font-medium text-ink-900">
                      {row.area}
                    </td>

                    <td className="py-5 pr-6 align-top text-[15px] leading-snug text-ink-400">
                      <span className="line-through decoration-terracotta-500/40">{row.manual}</span>
                    </td>

                    <td className="py-5 align-top text-[15px] font-medium leading-snug text-ink-900">
                      <span className="flex items-start gap-2.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4.5 12.5l5 5 10-11" />
                        </svg>
                        {row.ours}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ComparisonTable
