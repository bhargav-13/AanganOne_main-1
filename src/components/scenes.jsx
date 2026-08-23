import { LedgerStacked, ScaleStacked } from './sceneVariants'

/* ==========================================================================
   Line-art scenes.
   Same grammar as CourtyardScene: 2px ink strokes, paper fills, sand shading,
   indigo + terracotta as the only accents, arches wherever a top can be round.
   ========================================================================== */

const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const SAND_D = '#D6C6B0'
const PAPER = '#FBF8F4'

/* -------------------------------------------------------------------------
   1. Ledger → phone. The paper register giving way to the app.
   ------------------------------------------------------------------------- */
function LedgerWide() {
  return (
    <svg
      viewBox="0 0 1000 300"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration: a paper maintenance ledger on the left, an arrow, and the same records on a phone with a paid receipt on the right"
    >
      {/* ---- paper ledger, dog-eared ---- */}
      <g>
        <path
          d="M 90 250 L 90 70 L 300 70 L 300 224 L 274 250 Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* folded corner */}
        <path d="M 300 224 L 274 224 L 274 250 Z" fill={SAND} stroke={INK} strokeWidth="2" strokeLinejoin="round" />

        {/* ruled lines, deliberately uneven — handwriting */}
        {[104, 128, 152, 176, 200].map((y, i) => (
          <g key={y}>
            <line x1="112" y1={y} x2={[240, 262, 218, 254, 232][i]} y2={y} stroke={SAND_D} strokeWidth="4" strokeLinecap="round" />
            <line x1="112" y1={y} x2={[168, 150, 190, 160, 176][i]} y2={y} stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
          </g>
        ))}

        {/* struck-through total */}
        <line x1="112" y1="224" x2="200" y2="224" stroke={TERRA} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="106" y1="230" x2="206" y2="218" stroke={TERRA} strokeWidth="2" strokeLinecap="round" />

        <text x="195" y="278" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
          THE REGISTER
        </text>
      </g>

      {/* ---- arrow ---- */}
      <g>
        <line x1="360" y1="160" x2="580" y2="160" stroke={INK} strokeWidth="2" strokeDasharray="7 7" strokeLinecap="round" />
        <path d="M 574 152 l 12 8 l -12 8" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ---- phone with a paid receipt ---- */}
      <g>
        <rect x="640" y="46" width="200" height="216" rx="26" fill={PAPER} stroke={INK} strokeWidth="2" />
        <rect x="702" y="58" width="76" height="7" rx="3.5" fill={INK} opacity="0.85" />

        {/* invoice card */}
        <rect x="662" y="84" width="156" height="98" rx="12" fill={SAND} stroke={INK} strokeWidth="1.6" />
        <text x="678" y="110" fontSize="15" fontFamily="IBM Plex Mono, monospace" fill="#5E566F">
          MAINTENANCE
        </text>
        <text x="678" y="146" fontSize="30" fontFamily="Fraunces, Georgia, serif" fontWeight="500" fill={INK}>
          ₹2,400
        </text>
        <rect x="678" y="158" width="60" height="8" rx="4" fill={SAND_D} />

        {/* paid pill */}
        <rect x="662" y="196" width="156" height="40" rx="20" fill={INDIGO} />
        <path
          d="M 704 216 l 7 7 l 14 -15"
          fill="none"
          stroke={PAPER}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="742" y="221" fontSize="16" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fill={PAPER}>
          Paid
        </text>

        <text x="740" y="290" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
          AANGANONE
        </text>
      </g>
    </svg>
  )
}

/* -------------------------------------------------------------------------
   2. One society → a township. What "scales with you" actually means.
   ------------------------------------------------------------------------- */
function Tower({ x, h, w = 46, lit = [], fill = PAPER }) {
  const y = 250 - h
  const r = w / 2

  /* Window geometry is derived from the tower width, not hardcoded — the
     township towers are narrower (w=38) and fixed offsets pushed their
     windows past the right wall. */
  const ww = Math.round(w * 0.26) // window width
  const gap = Math.round(w * 0.14) // gap between the two columns
  const inset = (w - (ww * 2 + gap)) / 2 // centres the pair
  const wh = Math.round(ww * 1.35) // window height
  const rowGap = wh + 12

  // rows that fit between the arch springing and the ground, with a margin
  const usable = h - r - 14
  const rows = Math.max(1, Math.floor(usable / rowGap))

  const windows = []
  for (let i = 0; i < rows; i++) {
    for (let c = 0; c < 2; c++) {
      const wx = x + inset + c * (ww + gap)
      const wy = y + r + 6 + i * rowGap
      windows.push(
        <path
          key={`${i}-${c}`}
          d={`M ${wx} ${wy + wh} L ${wx} ${wy + ww / 2} A ${ww / 2} ${ww / 2} 0 0 1 ${wx + ww} ${wy + ww / 2} L ${wx + ww} ${wy + wh} Z`}
          fill={lit.some(([lr, lc]) => lr === i && lc === c) ? '#F0C9A8' : SAND}
          stroke={INK}
          strokeWidth="1.3"
          strokeLinejoin="round"
        />,
      )
    }
  }

  return (
    <g>
      <path
        d={`M ${x} 250 L ${x} ${y + r} A ${r} ${r} 0 0 1 ${x + w} ${y + r} L ${x + w} 250 Z`}
        fill={fill}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {windows}
    </g>
  )
}

function ScaleWide() {
  return (
    <svg
      viewBox="0 0 1000 300"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration: a single society building, then a multi-tower complex, then a township — the same platform at three sizes"
    >
      {/* group 1 — one society */}
      <g>
        <Tower x={70} h={140} lit={[[1, 0]]} />
        <line x1="40" y1="250" x2="180" y2="250" stroke={INK} strokeWidth="2" />
        <text x="110" y="278" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
          ONE SOCIETY
        </text>
      </g>

      {/* group 2 — multi-tower */}
      <g>
        <Tower x={380} h={120} lit={[[0, 1]]} />
        <Tower x={438} h={168} lit={[[2, 0]]} fill={SAND} />
        <Tower x={496} h={134} lit={[[1, 1]]} />
        <line x1="350" y1="250" x2="572" y2="250" stroke={INK} strokeWidth="2" />
        <text x="461" y="278" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
          MULTI-TOWER
        </text>
      </g>

      {/* group 3 — township, with a boundary */}
      <g>
        <Tower x={730} h={112} w={38} />
        <Tower x={778} h={152} w={38} lit={[[1, 0]]} fill={SAND} />
        <Tower x={826} h={128} w={38} />
        <Tower x={874} h={166} w={38} lit={[[0, 1], [3, 0]]} fill={SAND} />
        <Tower x={922} h={120} w={38} />
        <line x1="700" y1="250" x2="990" y2="250" stroke={INK} strokeWidth="2" />
        <text x="845" y="278" textAnchor="middle" fontSize="17" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
          TOWNSHIP
        </text>
      </g>

      {/* connective arrows */}
      {[[200, 330], [600, 680]].map(([x1, x2]) => (
        <g key={x1}>
          <line x1={x1} y1="196" x2={x2} y2="196" stroke={INDIGO} strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
          <path d={`M ${x2 - 7} 189 l 10 7 l -10 7`} fill="none" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
    </svg>
  )
}

/* -------------------------------------------------------------------------
   3. A slim skyline rule — decorative, sits above the footer.
   ------------------------------------------------------------------------- */
export function SkylineStrip({ className = '' }) {
  /* Tiled via <pattern> with NO viewBox, so units stay in CSS pixels and the
     buildings keep their proportions at any width. (preserveAspectRatio="none"
     on a viewBox stretches the arches into flat ovals — don't.)

     Seven distinct building types rather than one repeated arch: a tower with
     a roof water tank, a stepped setback block, an arched block, a pitched-roof
     low-rise, a slim tower with a mast, a wide parapet block and a domed one.
     Tile is 400px and starts/ends on a gap so it repeats seamlessly. */
  const B = 82 // baseline

  const fill = { fill: PAPER, fillOpacity: 0.07, stroke: PAPER, strokeOpacity: 0.26, strokeWidth: 1.25, strokeLinejoin: 'round' }
  const win = (x, y, o = 0.34) => <rect key={`${x}-${y}`} x={x} y={y} width="4.5" height="6" rx="1" fill={PAPER} opacity={o} />

  return (
    <svg width="100%" height="84" className={`block ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="ao-skyline" patternUnits="userSpaceOnUse" width="400" height="84">
          {/* 1 — flat tower with a rooftop water tank */}
          <g>
            <rect x="4" y={B - 58} width="40" height="58" {...fill} />
            <rect x="16" y={B - 70} width="16" height="8" rx="2" {...fill} />
            <line x1="20" y1={B - 62} x2="20" y2={B - 58} stroke={PAPER} strokeOpacity="0.26" strokeWidth="1.25" />
            <line x1="28" y1={B - 62} x2="28" y2={B - 58} stroke={PAPER} strokeOpacity="0.26" strokeWidth="1.25" />
            {[B - 48, B - 34, B - 20].map((y) => [win(12, y), win(28, y, 0.14)])}
          </g>

          {/* 2 — stepped setback tower */}
          <g>
            <rect x="56" y={B - 48} width="44" height="48" {...fill} />
            <rect x="66" y={B - 72} width="24" height="24" {...fill} />
            {[B - 40, B - 26, B - 12].map((y) => [win(64, y, 0.14), win(86, y)])}
            {win(72, B - 64, 0.4)}
          </g>

          {/* 3 — arched block (the brand motif, used once) */}
          <g>
            <path d={`M 112 ${B} L 112 ${B - 29} A 17 17 0 0 1 146 ${B - 29} L 146 ${B} Z`} {...fill} />
            {[B - 26, B - 12].map((y) => [win(120, y), win(134, y, 0.14)])}
          </g>

          {/* 4 — pitched-roof low-rise */}
          <g>
            <rect x="158" y={B - 26} width="52" height="26" {...fill} />
            <path d={`M 154 ${B - 26} L 184 ${B - 40} L 214 ${B - 26} Z`} {...fill} />
            {win(168, B - 19)}
            {win(196, B - 19, 0.14)}
          </g>

          {/* 5 — slim tower with a mast */}
          <g>
            <rect x="222" y={B - 68} width="24" height="68" {...fill} />
            <line x1="234" y1={B - 68} x2="234" y2={B - 76} stroke={PAPER} strokeOpacity="0.3" strokeWidth="1.25" />
            <circle cx="234" cy={B - 78} r="2" fill={PAPER} opacity="0.4" />
            {[B - 58, B - 44, B - 30, B - 16].map((y, i) => win(231, y, i % 2 ? 0.14 : 0.36))}
          </g>

          {/* 6 — wide block with a raised parapet */}
          <g>
            <rect x="258" y={B - 42} width="60" height="42" {...fill} />
            <rect x="254" y={B - 48} width="68" height="7" rx="2" {...fill} />
            {[B - 34, B - 20].map((y) => [win(266, y, 0.14), win(284, y), win(302, y, 0.14)])}
          </g>

          {/* 7 — domed roof */}
          <g>
            <rect x="332" y={B - 38} width="44" height="38" {...fill} />
            <path d={`M 332 ${B - 38} A 22 22 0 0 1 376 ${B - 38} Z`} {...fill} />
            <line x1="354" y1={B - 60} x2="354" y2={B - 68} stroke={PAPER} strokeOpacity="0.3" strokeWidth="1.25" />
            {[B - 30, B - 16].map((y) => [win(340, y, 0.14), win(362, y)])}
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="84" fill="url(#ao-skyline)" />
      <rect x="0" y="82" width="100%" height="1.25" fill={PAPER} opacity="0.26" />
    </svg>
  )
}

/* -------------------------------------------------------------------------
   Responsive wrappers: portrait on phones, wide from sm upwards.
   ------------------------------------------------------------------------- */
export function LedgerScene({ className = '' }) {
  return (
    <div className={className}>
      <div className="sm:hidden">
        <LedgerStacked />
      </div>
      <div className="hidden sm:block">
        <LedgerWide />
      </div>
    </div>
  )
}

export function ScaleScene({ className = '' }) {
  return (
    <div className={className}>
      <div className="sm:hidden">
        <ScaleStacked />
      </div>
      <div className="hidden sm:block">
        <ScaleWide />
      </div>
    </div>
  )
}
