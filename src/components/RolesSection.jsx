import { RoleFigure } from './moreScenes'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ROLES } from '../data/site'

const DOORS = [
  { fill: 'bg-indigo-600', text: 'text-paper', sub: 'text-paper/70', rule: 'bg-paper/20' },
  { fill: 'bg-terracotta-500', text: 'text-paper', sub: 'text-paper/75', rule: 'bg-paper/20' },
  { fill: 'bg-ink-900', text: 'text-paper', sub: 'text-paper/65', rule: 'bg-paper/20' },
  { fill: 'bg-sand-200', text: 'text-ink-900', sub: 'text-ink-600', rule: 'bg-ink-900/15' },
]

function RolesSection({ n = "05" }) {
  return (
    <section id="roles" className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="Who it's for"
          title={<>Four doors into the same courtyard.</>}
          lede="Residents, admins, committee members and guards work from one system — but each sees only the view their role needs."
        />

        <div className="mt-10 grid sm:mt-16 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => {
            const d = DOORS[i]
            return (
              <Reveal key={r.role} delay={i * 90}>
                <article
                  className={`arch group flex h-full flex-col ${d.fill} px-7 pb-8 pt-12 transition-transform duration-600 ease-smooth hover:-translate-y-2`}
                >
                  <span
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-pill border ${
                      i === 3 ? 'border-ink-900/25 text-ink-900' : 'border-paper/35 text-paper'
                    } transition-transform duration-600 ease-smooth group-hover:scale-110`}
                  >
                    <RoleFigure kind={i} className="h-8 w-8" />
                  </span>

                  <h3 className={`mt-7 text-center font-display text-[23px] font-medium ${d.text}`}>
                    {r.role}
                  </h3>

                  <div className={`mx-auto mt-5 h-px w-10 ${d.rule}`} />

                  <ul className="mt-5 space-y-2.5">
                    {r.points.map((p) => (
                      <li key={p} className={`text-[14px] leading-snug ${d.sub}`}>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RolesSection
