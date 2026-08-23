import { Link } from 'react-router-dom'
import Icon from './Icon'
import Counter from './Counter'
import { SITE, STATS } from '../data/site'

const META = [
  { label: 'Android', value: 'Live on Google Play' },
  { label: 'iOS', value: 'Live on the App Store' },
  { label: 'Made in', value: 'Ahmedabad, India' },
]

/* An illustrative feed of the events a society generates in a normal day. */
const ACTIVITY = [
  {
    icon: 'qr',
    label: 'Visitor verified at Gate 2',
    meta: 'Pre-approved · B-1104',
    time: '09:41',
    wash: 'bg-indigo-50',
    tone: 'text-indigo-600',
  },
  {
    icon: 'payment',
    label: '₹2,400 maintenance paid',
    meta: 'UPI · A-1204',
    time: '10:06',
    wash: 'bg-sand-200',
    tone: 'text-ink-700',
  },
  {
    icon: 'complaint',
    label: 'Lift complaint resolved',
    meta: 'B-wing · closed in 2h 14m',
    time: '13:52',
    wash: 'bg-terracotta-100',
    tone: 'text-terracotta-600',
  },
  {
    icon: 'megaphone',
    label: 'Notice sent to 218 flats',
    meta: 'Tanker cleaning, 11am–1pm',
    time: '18:20',
    wash: 'bg-ink-900/8',
    tone: 'text-ink-800',
  },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-[calc(var(--nav-h)+24px)] sm:pt-[calc(var(--nav-h)+40px)]">
      {/* faint lattice behind the headline */}
      <div className="jaali pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      <div className="shell relative">
        {/* ---------------- Headline ---------------- */}
        <p className="index-label animate-rise">Society · Apartment · Community management</p>

        <h1 className="display-xl mt-7 max-w-[15ch] animate-rise" style={{ animationDelay: '90ms' }}>
          One app for the whole <span className="serif-italic text-indigo-600">aangan</span>.
        </h1>

        <div className="mt-8 grid animate-rise gap-10 sm:mt-12 md:grid-cols-[1.15fr_.85fr] md:items-end" style={{ animationDelay: '180ms' }}>
          <p className="lede max-w-[54ch]">
            The courtyard is where a society really happens — the gate, the noticeboard, the
            register, the maintenance bill. AanganOne brings all of it into one app for residents,
            admins, committee members and guards.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <Link to="/contact" className="btn-ink">
              Book a free demo
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/features" className="btn-line">See what's inside</Link>
          </div>
        </div>

        {/* ---------------- Meta rule ---------------- */}
        <div className="mt-10 animate-rise sm:mt-14" style={{ animationDelay: '260ms' }}>
          <div className="rule-strong" />
          <dl className="grid grid-cols-1 divide-y divide-[color:var(--rule-soft)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {META.map((m) => (
              <div key={m.label} className="py-5 sm:px-6 sm:first:pl-0">
                <dt className="index-label">{m.label}</dt>
                <dd className="mt-1.5 text-[15px] font-medium text-ink-900">{m.value}</dd>
              </div>
            ))}
          </dl>
          <div className="rule-strong" />
        </div>
      </div>

      {/* ---------------- Live board ---------------- */}
      <div className="shell relative mt-10 sm:mt-16 md:mt-20">
        <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-card border border-[color:var(--rule)] bg-sand-50">
          <div className="jaali pointer-events-none absolute inset-0" />

          <div className="relative grid gap-10 p-6 sm:gap-12 sm:p-12 lg:grid-cols-[1fr_.85fr] lg:items-center lg:gap-10 lg:p-14">
            {/* --- Left: statement + live activity --- */}
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-pill border border-ink-900/12 bg-paper px-4 py-2">
                <span className="h-2 w-2 animate-blink rounded-full bg-terracotta-500" />
                <span className="font-mono text-[11.5px] sm:text-[10.5px] uppercase tracking-wider2 text-ink-600">
                  Today, in a society like yours
                </span>
              </span>

              <p className="mt-7 max-w-[19ch] font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-[1.15] tracking-tightest text-ink-900">
                Replacing the paper register, the cash box and the group chat.
              </p>

              {/* activity feed — real product events, not stock art */}
              <ul className="mt-9 space-y-2.5">
                {ACTIVITY.map((a, i) => (
                  <li
                    key={a.label}
                    className="flex animate-rise items-center gap-3.5 rounded-[14px] border border-[color:var(--rule-soft)] bg-white px-4 py-3 shadow-paper"
                    style={{ animationDelay: `${360 + i * 130}ms` }}
                  >
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-pill ${a.wash} ${a.tone}`}>
                      <Icon name={a.icon} className="h-[17px] w-[17px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14.5px] font-semibold text-ink-900">
                        {a.label}
                      </span>
                      <span className="block truncate font-mono text-[11.5px] sm:text-[10.5px] uppercase tracking-wider2 text-ink-400">
                        {a.meta}
                      </span>
                    </span>

                    <span className="shrink-0 font-mono text-[11px] tabular-nums text-ink-300">
                      {a.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Right: the actual product --- */}
            <div className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
              <div className="arch relative aspect-[3/3.9] border border-[color:var(--rule-soft)] bg-sand-100">
                <img
                  src="/images/iPhone 14 Pro Max.png"
                  alt="The AanganOne resident app"
                  width={900}
                  height={1614}
                  className="absolute bottom-0 left-1/2 w-[74%] -translate-x-1/2 drop-shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Numbers ---------------- */}
      <div className="shell relative mt-14 sm:mt-20 md:mt-28">
        <div className="rule-strong" />
        <div className="grid grid-cols-2 gap-y-8 py-8 sm:gap-y-10 sm:py-12 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 md:px-0">
              <div className="font-display text-[clamp(2.4rem,4.6vw,3.6rem)] font-medium leading-none tracking-tightest text-ink-900">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="index-label mt-3">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="rule-strong" />
      </div>

      {/* ---------------- Store row ---------------- */}
      <div className="shell relative flex flex-wrap items-center justify-between gap-4 py-6 sm:py-8">
        <p className="index-label">Available to your residents</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href={SITE.playStore} target="_blank" rel="noopener noreferrer" className="btn-line btn-sm">
            <Icon name="play" filled className="h-3.5 w-3.5" />
            Google Play
          </a>
          <a href={SITE.appStore} target="_blank" rel="noopener noreferrer" className="btn-line btn-sm">
            <Icon name="apple" filled className="h-3.5 w-3.5" />
            App Store
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
