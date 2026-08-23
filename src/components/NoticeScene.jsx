const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const SAND_D = '#D6C6B0'
const PAPER = '#FBF8F4'

const FLATS = [
  { flat: 'A-1204' },
  { flat: 'B-0907' },
  { flat: 'C-0311' },
]

/* A single pinned notice, reused by both layouts. */
function PinnedNote({ x, y, r, w = 68, h = 60 }) {
  return (
    <g transform={`rotate(${r} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} fill={PAPER} stroke={INK} strokeWidth="1.6" />
      <line x1={x + 10} y1={y + 18} x2={x + w - 16} y2={y + 18} stroke={SAND_D} strokeWidth="3.5" strokeLinecap="round" />
      <line x1={x + 10} y1={y + 30} x2={x + w - 24} y2={y + 30} stroke={SAND_D} strokeWidth="3.5" strokeLinecap="round" />
      <line x1={x + 10} y1={y + 42} x2={x + w - 18} y2={y + 42} stroke={SAND_D} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={x + w / 2} cy={y + 6} r="4" fill={TERRA} stroke={INK} strokeWidth="1.2" />
    </g>
  )
}

/* A delivered-notice card for one flat. */
function FlatCard({ x, y, w = 210, flat }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="44" rx="12" fill={PAPER} stroke={INK} strokeWidth="1.8" />
      <circle cx={x + 26} cy={y + 22} r="11" fill={INDIGO} />
      <path
        d={`M ${x + 20} ${y + 22} l 4 4 l 8 -8`}
        fill="none"
        stroke={PAPER}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={x + 46} y={y + 13} width={w - 70} height="7" rx="3.5" fill={SAND_D} />
      <text x={x + 46} y={y + 37} fontSize="14" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        {flat}
      </text>
    </g>
  )
}

/* --------------------------------------------------------------------------
   Wide layout — left to right. Used from sm upwards.
   -------------------------------------------------------------------------- */
function Wide() {
  return (
    <svg
      viewBox="0 0 1000 300"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration: a cluttered pinned noticeboard on the left, and on the right a single notice reaching every flat as app notifications"
    >
      <rect x="60" y="60" width="250" height="180" rx="6" fill={SAND} stroke={INK} strokeWidth="2" />
      <PinnedNote x={84} y={84} r={-4} />
      <PinnedNote x={176} y={78} r={3} />
      <PinnedNote x={96} y={158} r={2.5} />
      <PinnedNote x={188} y={152} r={-3} />
      <text x="185" y="272" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        THE NOTICEBOARD
      </text>

      <line x1="352" y1="150" x2="470" y2="150" stroke={INK} strokeWidth="2" strokeDasharray="7 7" strokeLinecap="round" />
      <path d="M 464 142 l 12 8 l -12 8" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* composing phone */}
      <rect x="510" y="72" width="112" height="156" rx="16" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x="546" y="82" width="40" height="5" rx="2.5" fill={INK} opacity="0.8" />
      <rect x="526" y="102" width="80" height="10" rx="5" fill={INDIGO} />
      <rect x="526" y="122" width="62" height="7" rx="3.5" fill={SAND_D} />
      <rect x="526" y="137" width="72" height="7" rx="3.5" fill={SAND_D} />
      <rect x="526" y="152" width="48" height="7" rx="3.5" fill={SAND_D} />
      <rect x="526" y="196" width="80" height="20" rx="10" fill={TERRA} />

      {[96, 150, 204].map((y) => (
        <path
          key={y}
          d={`M 634 150 C 680 150, 690 ${y}, 726 ${y}`}
          fill="none"
          stroke={INDIGO}
          strokeWidth="1.8"
          strokeDasharray="6 6"
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}

      {FLATS.map((c, i) => (
        <FlatCard key={c.flat} x={730} y={74 + i * 54} flat={c.flat} />
      ))}

      <text x="726" y="272" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        EVERY FLAT, AT ONCE
      </text>
    </svg>
  )
}

/* --------------------------------------------------------------------------
   Stacked layout — top to bottom, so it fits a phone without sideways
   scrolling and the labels stay readable.
   -------------------------------------------------------------------------- */
function Stacked() {
  return (
    <svg
      viewBox="0 0 420 660"
      className="mx-auto h-auto w-full max-w-[340px]"
      role="img"
      aria-label="Illustration: a cluttered pinned noticeboard above, and below it a single notice reaching every flat as app notifications"
    >
      {/* noticeboard */}
      <rect x="60" y="16" width="300" height="196" rx="6" fill={SAND} stroke={INK} strokeWidth="2" />
      <PinnedNote x={86} y={40} r={-4} w={78} h={66} />
      <PinnedNote x={192} y={34} r={3} w={78} h={66} />
      <PinnedNote x={98} y={124} r={2.5} w={78} h={66} />
      <PinnedNote x={204} y={118} r={-3} w={78} h={66} />
      <text x="210" y="242" textAnchor="middle" fontSize="20" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        THE NOTICEBOARD
      </text>

      {/* downward arrow */}
      <line x1="210" y1="266" x2="210" y2="318" stroke={INK} strokeWidth="2" strokeDasharray="7 7" strokeLinecap="round" />
      <path d="M 202 312 l 8 12 l 8 -12" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* composing phone */}
      <rect x="26" y="344" width="112" height="156" rx="16" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x="62" y="354" width="40" height="5" rx="2.5" fill={INK} opacity="0.8" />
      <rect x="42" y="374" width="80" height="10" rx="5" fill={INDIGO} />
      <rect x="42" y="394" width="62" height="7" rx="3.5" fill={SAND_D} />
      <rect x="42" y="409" width="72" height="7" rx="3.5" fill={SAND_D} />
      <rect x="42" y="424" width="48" height="7" rx="3.5" fill={SAND_D} />
      <rect x="42" y="468" width="80" height="20" rx="10" fill={TERRA} />

      {/* fan-out to the flats */}
      {[366, 422, 478].map((y) => (
        <path
          key={y}
          d={`M 150 422 C 172 422, 176 ${y}, 196 ${y}`}
          fill="none"
          stroke={INDIGO}
          strokeWidth="1.8"
          strokeDasharray="6 6"
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}

      {FLATS.map((c, i) => (
        <FlatCard key={c.flat} x={200} y={344 + i * 56} w={196} flat={c.flat} />
      ))}

      <text x="210" y="556" textAnchor="middle" fontSize="20" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        EVERY FLAT, AT ONCE
      </text>
    </svg>
  )
}

/** The pinned noticeboard, replaced by one notice that reaches every flat. */
function NoticeScene({ className = '' }) {
  return (
    <div className={className}>
      <div className="sm:hidden">
        <Stacked />
      </div>
      <div className="hidden sm:block">
        <Wide />
      </div>
    </div>
  )
}

export default NoticeScene
