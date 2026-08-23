import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import NoticeScene from './NoticeScene'
import { FLOWS } from '../data/detail'

const SHOTS = [
  '/images/iPhone 14 Pro Max1.png',
  '/images/iPhone 14 Pro Max2.png',
  '/images/iPhone 14 Pro Max3.png',
  '/images/iPhone 14 Pro Max4.png',
]

function FlowsSection({ n = '03' }) {
  const [active, setActive] = useState(0)
  const flow = FLOWS[active]

  return (
    <section id="flows" className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="How it works"
          title={<>Four journeys, start to finish.</>}
          lede="The flows a society runs every single day — and exactly what happens at each step once they live in one app."
        />

        <Reveal className="mt-9 sm:mt-14">
          {/* the scene picks its own layout per breakpoint — no sideways scrolling */}
          <NoticeScene className="mx-auto max-w-[880px]" />
        </Reveal>

        {/* Flow selector */}
        <Reveal className="mt-10 sm:mt-16">
          <div className="rule-strong" />
          {/* 1px gaps over a rule-coloured background give the dividers, so
              there is no nth-child border logic to get wrong when the column
              count changes between breakpoints. */}
          <div className="grid auto-rows-fr grid-cols-2 gap-px bg-[color:var(--rule-soft)] md:grid-cols-4">
            {FLOWS.map((f, i) => {
              const on = i === active
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  /* Stacks on mobile so the label gets the full cell width. */
                  className={`group relative flex h-full flex-col items-start gap-3 p-5 text-left transition-colors duration-400 md:flex-row md:gap-3 md:p-6 ${
                    on ? 'bg-ink-900' : 'bg-paper hover:bg-sand-50'
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-pill transition-colors duration-400 ${
                      on ? 'bg-terracotta-500 text-ink-900' : 'border border-ink-900/12 text-ink-600'
                    }`}
                  >
                    <Icon name={f.icon} className="h-[17px] w-[17px]" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block font-mono text-[11.5px] uppercase tracking-wider2 sm:text-[10px] ${on ? 'text-paper/50' : 'text-ink-300'}`}>
                      0{i + 1}
                    </span>
                    <span className={`mt-1 block font-display text-[16px] font-medium leading-snug md:text-[17px] ${on ? 'text-paper' : 'text-ink-900'}`}>
                      {f.label}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Active flow */}
        <div key={flow.id} className="mt-9 grid sm:mt-14 animate-rise gap-12 lg:grid-cols-[1fr_.7fr] lg:gap-16">
          <div>
            <p className="lede max-w-[56ch]">{flow.summary}</p>

            <ol className="mt-10">
              <div className="rule-strong" />
              {flow.steps.map((s, i) => (
                <li
                  key={s.title}
                  className="group flex items-start gap-5 border-b border-[color:var(--rule-soft)] py-6 transition-all duration-400 ease-smooth hover:pl-2"
                >
                  <span className="font-display text-[26px] font-medium leading-none text-sand-400 transition-colors duration-400 group-hover:text-indigo-600">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-medium text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-relaxed text-ink-500">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Screen for the active flow */}
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
            <div className="arch relative aspect-[3/4.2] bg-sand-100">
              <div className="jaali absolute inset-0 opacity-70" />
              <img
                src={SHOTS[active]}
                alt={`AanganOne app — ${flow.label}`}
                width={900}
                height={1614}
                className="absolute left-1/2 top-[53%] w-[64%] -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlowsSection
