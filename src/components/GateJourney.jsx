import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import GateScene from './GateScene'
import useScrollProgress from '../hooks/useScrollProgress'

const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const PAPER = '#FBF8F4'

/* Four stations along the visitor's path, positioned on a 1200x300 canvas. */
const STATIONS = [
  { x: 130, label: 'Resident approves', sub: 'In the app, before arrival' },
  { x: 450, label: 'QR pass issued', sub: 'Sent to the visitor' },
  { x: 770, label: 'Guard scans', sub: 'One tap at the gate' },
  { x: 1075, label: 'Entry logged', sub: 'Timestamped, searchable' },
]

const TRACK_Y = 112
const START_X = STATIONS[0].x
const END_X = STATIONS[STATIONS.length - 1].x

/* --- Minimal glyphs, drawn inline so they scale exactly with the diagram --- */
function Glyph({ kind, active }) {
  const stroke = active ? PAPER : INK
  const common = { fill: 'none', stroke, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

  if (kind === 0)
    return (
      <g {...common}>
        <rect x="-7" y="-11" width="14" height="22" rx="3" />
        <line x1="-2.5" y1="7.5" x2="2.5" y2="7.5" />
        <path d="M -3 -3 l 2.4 2.4 L 4 -5" />
      </g>
    )

  if (kind === 1)
    return (
      <g {...common}>
        <rect x="-10" y="-10" width="7.5" height="7.5" rx="1.2" />
        <rect x="2.5" y="-10" width="7.5" height="7.5" rx="1.2" />
        <rect x="-10" y="2.5" width="7.5" height="7.5" rx="1.2" />
        <path d="M 3 3 h 3 v 3 h -3 z M 9 3 v .01 M 9 9 v .01 M 3 9 v .01" />
      </g>
    )

  if (kind === 2)
    return (
      <g {...common}>
        <path d="M -11 -5 v -4 a 2 2 0 0 1 2 -2 h 4" />
        <path d="M 11 -5 v -4 a 2 2 0 0 0 -2 -2 h -4" />
        <path d="M -11 5 v 4 a 2 2 0 0 0 2 2 h 4" />
        <path d="M 11 5 v 4 a 2 2 0 0 1 -2 2 h -4" />
        <line x1="-9" y1="0" x2="9" y2="0" />
      </g>
    )

  return (
    <g {...common}>
      <rect x="-9" y="-11" width="18" height="22" rx="2.5" />
      <path d="M -5 -5 h 10 M -5 0 h 10 M -5 5 h 6" />
    </g>
  )
}

function GateJourney({ n = '03' }) {
  const [ref, progress] = useScrollProgress({ startAt: 0.85, span: 0.5 })

  // How far the travelling token has moved along the track.
  const tokenX = START_X + (END_X - START_X) * progress
  const drawnWidth = (END_X - START_X) * progress

  // A station lights up once the token reaches it.
  const isActive = (x) => tokenX >= x - 8

  return (
    <section className="band bg-paper">
      <div className="shell">
        <SectionHeading
          n={n}
          label="The visitor journey"
          title={<>From the flat to the gate, in four steps.</>}
          lede="The single flow a society runs most. Scroll to follow a visitor from approval to logged entry."
        />

        <Reveal className="mt-9 sm:mt-14">
          <div className="overflow-x-auto">
            <GateScene className="mx-auto min-w-[640px] max-w-[880px]" />
          </div>
        </Reveal>

        <Reveal className="mt-9 sm:mt-14">
          <div ref={ref} className="overflow-x-auto">
            <svg
              viewBox="0 0 1200 300"
              className="h-auto w-full min-w-[720px]"
              role="img"
              aria-label="Diagram: a resident approves a visitor in the app, a QR pass is issued, the guard scans it at the gate, and the entry is logged"
            >
              {/* ---- track ---- */}
              <line
                x1={START_X}
                y1={TRACK_Y}
                x2={END_X}
                y2={TRACK_Y}
                stroke={SAND}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1={START_X}
                y1={TRACK_Y}
                x2={START_X + drawnWidth}
                y2={TRACK_Y}
                stroke={INDIGO}
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* ---- travelling token ---- */}
              <g transform={`translate(${tokenX} ${TRACK_Y})`}>
                <circle r="9" fill={TERRA} opacity="0.18" />
                <circle r="5" fill={TERRA} stroke={PAPER} strokeWidth="1.6" />
              </g>

              {/* ---- stations ---- */}
              {STATIONS.map((s, i) => {
                const active = isActive(s.x)
                return (
                  <g key={s.label}>
                    {/* connector down to the label */}
                    <line
                      x1={s.x}
                      y1={TRACK_Y + 42}
                      x2={s.x}
                      y2={TRACK_Y + 62}
                      stroke={active ? INDIGO : SAND}
                      strokeWidth="1.5"
                    />

                    <circle
                      cx={s.x}
                      cy={TRACK_Y}
                      r="40"
                      fill={active ? INDIGO : PAPER}
                      stroke={active ? INDIGO : INK}
                      strokeWidth="2"
                      style={{ transition: 'fill .45s ease, stroke .45s ease' }}
                    />

                    <g transform={`translate(${s.x} ${TRACK_Y})`}>
                      <Glyph kind={i} active={active} />
                    </g>

                    {/* step number sits on the rim */}
                    <circle cx={s.x + 29} cy={TRACK_Y - 29} r="12" fill={active ? TERRA : SAND} />
                    <text
                      x={s.x + 29}
                      y={TRACK_Y - 25}
                      textAnchor="middle"
                      fontSize="11"
                      fontFamily="IBM Plex Mono, monospace"
                      fill={active ? PAPER : INK}
                    >
                      {i + 1}
                    </text>

                    <text
                      x={s.x}
                      y={TRACK_Y + 84}
                      textAnchor="middle"
                      fontSize="17"
                      fontFamily="Fraunces, Georgia, serif"
                      fontWeight="500"
                      fill={INK}
                    >
                      {s.label}
                    </text>
                    <text
                      x={s.x}
                      y={TRACK_Y + 106}
                      textAnchor="middle"
                      fontSize="12.5"
                      fontFamily="Plus Jakarta Sans, sans-serif"
                      fill="#5E566F"
                    >
                      {s.sub}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* progress read-out, so the scrub is legible on any device */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[color:var(--rule)]">
              <div
                className="h-px bg-indigo-600"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="font-mono text-[11px] tabular-nums text-ink-400">
              {Math.min(4, Math.floor(progress * 4) + (progress > 0 ? 1 : 0)) || 1} / 4
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default GateJourney
