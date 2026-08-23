import Reveal from './Reveal'

/* ------------------------------------------------------------------ */
/* Bespoke line-art elevation of a residential society.                */
/* Drawn in code so it sits exactly in the brand palette — no stock art. */
/* ------------------------------------------------------------------ */

const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const PAPER = '#FBF8F4'

/** An arched window: flat sides, semicircular head — the building's echo of the logo. */
function ArchWindow({ x, y, w, h, fill = SAND, stroke = INK, lit = false }) {
  const r = w / 2
  const d = `M ${x} ${y + h} L ${x} ${y + r} A ${r} ${r} 0 0 1 ${x + w} ${y + r} L ${x + w} ${y + h} Z`
  return (
    <path
      d={d}
      fill={lit ? '#F0C9A8' : fill}
      stroke={stroke}
      strokeWidth="1.6"
      strokeLinejoin="round"
      opacity={lit ? 1 : 0.9}
    />
  )
}

/** A grid of arched windows across a tower face. */
function WindowGrid({ x, y, cols, rows, w = 22, h = 34, gapX = 16, gapY = 20, litCells = [] }) {
  const cells = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push(
        <ArchWindow
          key={`${r}-${c}`}
          x={x + c * (w + gapX)}
          y={y + r * (h + gapY)}
          w={w}
          h={h}
          lit={litCells.some(([lr, lc]) => lr === r && lc === c)}
        />,
      )
    }
  }
  return <g>{cells}</g>
}

function CourtyardScene() {
  return (
    <section className="relative overflow-hidden bg-paper pb-10 pt-4">
      <div className="shell">
        <Reveal>
          <div className="rule-strong" />

          <div className="grid gap-8 py-12 md:grid-cols-[240px_1fr] md:gap-16">
            <div>
              <p className="index-label text-terracotta-500">The aangan</p>
              <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-ink-500">
                One gate, two towers, two hundred families — and a single system holding it all
                together.
              </p>
            </div>

            <svg
              viewBox="0 0 1200 420"
              className="h-auto w-full"
              role="img"
              aria-label="Illustration of a residential society: two towers with arched windows either side of a gated entrance with a guard cabin and boom barrier"
            >
              <defs>
                {/* jaali screen for the boundary wall */}
                <pattern id="cs-jaali" width="18" height="18" patternUnits="userSpaceOnUse">
                  <path d="M9 0 L18 9 L9 18 L0 9 Z" fill="none" stroke={INK} strokeWidth="1" opacity="0.35" />
                </pattern>
                {/* the sky arch behind everything */}
                <linearGradient id="cs-sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={INDIGO} stopOpacity="0.10" />
                  <stop offset="100%" stopColor={INDIGO} stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* sky arch */}
              <path d="M 160 400 L 160 220 A 440 220 0 0 1 1040 220 L 1040 400 Z" fill="url(#cs-sky)" />

              {/* ---------------- left tower ---------------- */}
              <g>
                <path
                  d="M 120 400 L 120 150 A 90 90 0 0 1 300 150 L 300 400 Z"
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <WindowGrid x={144} y={130} cols={3} rows={4} litCells={[[1, 0], [2, 2], [3, 1]]} />
                {/* entrance */}
                <path d="M 190 400 L 190 358 A 20 20 0 0 1 230 358 L 230 400 Z" fill={INDIGO} opacity="0.9" />
              </g>

              {/* ---------------- right tower ---------------- */}
              <g>
                <path
                  d="M 900 400 L 900 175 A 90 90 0 0 1 1080 175 L 1080 400 Z"
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <WindowGrid x={924} y={155} cols={3} rows={3} litCells={[[0, 1], [2, 0]]} />
                <path d="M 970 400 L 970 358 A 20 20 0 0 1 1010 358 L 1010 400 Z" fill={INDIGO} opacity="0.9" />
              </g>

              {/* ---------------- boundary walls with jaali ---------------- */}
              <g>
                <rect x="300" y="300" width="180" height="100" fill={PAPER} stroke={INK} strokeWidth="2" />
                <rect x="300" y="300" width="180" height="100" fill="url(#cs-jaali)" />
                <rect x="720" y="300" width="180" height="100" fill={PAPER} stroke={INK} strokeWidth="2" />
                <rect x="720" y="300" width="180" height="100" fill="url(#cs-jaali)" />
              </g>

              {/* ---------------- the gateway ---------------- */}
              {/* A permanent arched gate with a grille, so the entrance still
                  reads as a gate when the barrier is in its raised position. */}
              <g>
                {/* springing arch across the opening */}
                <path
                  d="M 524 300 A 76 76 0 0 1 676 300"
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M 538 300 A 62 62 0 0 1 662 300"
                  fill="none"
                  stroke={INK}
                  strokeWidth="1.4"
                  opacity="0.45"
                />

                {/* nameplate on the arch */}
                <rect x="562" y="246" width="76" height="18" rx="9" fill={INDIGO} />

                {/* grille leaves — vertical bars with two rails */}
                <g>
                  <rect x="524" y="300" width="152" height="100" fill={PAPER} stroke={INK} strokeWidth="2" />
                  {Array.from({ length: 9 }, (_, i) => 536 + i * 16).map((bx) => (
                    <line key={bx} x1={bx} y1="308" x2={bx} y2="400" stroke={INK} strokeWidth="1.6" opacity="0.7" />
                  ))}
                  <line x1="524" y1="330" x2="676" y2="330" stroke={INK} strokeWidth="1.8" />
                  <line x1="524" y1="376" x2="676" y2="376" stroke={INK} strokeWidth="1.8" />
                  {/* centre stile where the two leaves meet */}
                  <line x1="600" y1="300" x2="600" y2="400" stroke={INK} strokeWidth="2.4" />
                </g>

                {/* gate posts, drawn over the grille edges */}
                <path d="M 480 400 L 480 285 A 22 22 0 0 1 524 285 L 524 400 Z" fill={PAPER} stroke={INK} strokeWidth="2" />
                <path d="M 676 400 L 676 285 A 22 22 0 0 1 720 285 L 720 400 Z" fill={PAPER} stroke={INK} strokeWidth="2" />
              </g>

              {/* ---------------- guard cabin, beside the gate ---------------- */}
              <g>
                <path
                  d="M 408 400 L 408 330 A 26 26 0 0 1 460 330 L 460 400 Z"
                  fill={TERRA}
                  stroke={INK}
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <ArchWindow x={422} y={332} w={24} h={30} fill={PAPER} />
                {/* the verified-entry pulse */}
                <circle cx="434" cy="312" r="5" fill={PAPER} stroke={INK} strokeWidth="1.4" />
                <circle cx="434" cy="312" r="5" fill="none" stroke={TERRA} strokeWidth="2">
                  <animate attributeName="r" values="5;16" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0" dur="2.6s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* ---------------- boom barrier, in front of the gate ---------------- */}
              <g>
                <rect x="486" y="360" width="11" height="40" rx="2" fill={INK} />
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 492 364; -42 492 364; -42 492 364; 0 492 364; 0 492 364"
                    keyTimes="0; 0.16; 0.5; 0.66; 1"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                  <rect x="492" y="359" width="176" height="9" rx="4.5" fill={TERRA} stroke={INK} strokeWidth="1.6" />
                  <rect x="530" y="359" width="22" height="9" fill={PAPER} opacity="0.9" />
                  <rect x="586" y="359" width="22" height="9" fill={PAPER} opacity="0.9" />
                  <rect x="642" y="359" width="22" height="9" fill={PAPER} opacity="0.9" />
                </g>
              </g>

              {/* ---------------- trees ---------------- */}
              {[
                { x: 330, s: 0.9 },
                { x: 372, s: 0.74 },
                { x: 780, s: 0.9 },
                { x: 860, s: 1.05 },
              ].map((t) => (
                <g key={t.x} transform={`translate(${t.x} 400) scale(${t.s})`}>
                  <line x1="0" y1="0" x2="0" y2="-34" stroke={INK} strokeWidth="2.4" />
                  <circle cx="0" cy="-48" r="20" fill={SAND} stroke={INK} strokeWidth="1.8" />
                  <path d="M -10 -48 A 10 10 0 0 1 10 -48" fill="none" stroke={INK} strokeWidth="1.2" opacity="0.5" />
                </g>
              ))}

              {/* ---------------- ground ---------------- */}
              <line x1="0" y1="400" x2="1200" y2="400" stroke={INK} strokeWidth="2.5" />
              <line x1="0" y1="410" x2="1200" y2="410" stroke={INK} strokeWidth="1" opacity="0.25" />
            </svg>
          </div>

          <div className="rule-strong" />
        </Reveal>
      </div>
    </section>
  )
}

export default CourtyardScene
