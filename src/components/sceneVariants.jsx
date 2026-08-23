/* ==========================================================================
   Portrait variants of the wide scenes, for phones.
   The wide versions read left-to-right, which forces a 600px+ canvas — on a
   327px column that meant half the illustration sat off-screen behind a
   horizontal scrollbar. These stack the same idea top-to-bottom instead.
   ========================================================================== */

const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const SAND_D = '#D6C6B0'
const PAPER = '#FBF8F4'

/* -------------------------------------------------------------------------
   Ledger → phone, stacked.
   ------------------------------------------------------------------------- */
export function LedgerStacked() {
  return (
    <svg
      viewBox="0 0 400 640"
      className="mx-auto h-auto w-full max-w-[320px]"
      role="img"
      aria-label="Illustration: a paper maintenance ledger above, and below it the same record as a paid receipt on a phone"
    >
      {/* ---- paper ledger ---- */}
      <path
        d="M 96 268 L 96 40 L 304 40 L 304 240 L 276 268 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M 304 240 L 276 240 L 276 268 Z" fill={SAND} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />

      {[78, 108, 138, 168, 198].map((y, i) => (
        <g key={y}>
          <line x1="120" y1={y} x2={[248, 266, 226, 258, 238][i]} y2={y} stroke={SAND_D} strokeWidth="5" strokeLinecap="round" />
          <line x1="120" y1={y} x2={[176, 156, 198, 166, 184][i]} y2={y} stroke={INK} strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
        </g>
      ))}

      <line x1="120" y1="228" x2="212" y2="228" stroke={TERRA} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="114" y1="234" x2="218" y2="222" stroke={TERRA} strokeWidth="2.2" strokeLinecap="round" />

      <text x="200" y="300" textAnchor="middle" fontSize="20" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        THE REGISTER
      </text>

      {/* ---- arrow down ---- */}
      <line x1="200" y1="322" x2="200" y2="368" stroke={INK} strokeWidth="2.2" strokeDasharray="7 7" strokeLinecap="round" />
      <path d="M 192 362 l 8 12 l 8 -12" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* ---- phone with the paid receipt ---- */}
      <rect x="112" y="392" width="176" height="196" rx="24" fill={PAPER} stroke={INK} strokeWidth="2.4" />
      <rect x="168" y="404" width="64" height="6" rx="3" fill={INK} opacity="0.85" />

      <rect x="130" y="426" width="140" height="90" rx="12" fill={SAND} stroke={INK} strokeWidth="1.8" />
      <text x="144" y="452" fontSize="15" fontFamily="IBM Plex Mono, monospace" fill="#5E566F">
        MAINTENANCE
      </text>
      <text x="144" y="490" fontSize="32" fontFamily="Fraunces, Georgia, serif" fontWeight="500" fill={INK}>
        ₹2,400
      </text>

      <rect x="130" y="530" width="140" height="40" rx="20" fill={INDIGO} />
      <path
        d="M 168 550 l 7 7 l 14 -15"
        fill="none"
        stroke={PAPER}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="204" y="556" fontSize="16" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fill={PAPER}>
        Paid
      </text>

      <text x="200" y="616" textAnchor="middle" fontSize="20" fontFamily="IBM Plex Mono, monospace" fill="#7E7691">
        AANGANONE
      </text>
    </svg>
  )
}

/* -------------------------------------------------------------------------
   One society → township, stacked into three rows.
   ------------------------------------------------------------------------- */
function MiniTower({ x, baseline, h, w = 40, lit = false, fill = PAPER }) {
  const y = baseline - h
  const r = w / 2
  return (
    <g>
      <path
        d={`M ${x} ${baseline} L ${x} ${y + r} A ${r} ${r} 0 0 1 ${x + w} ${y + r} L ${x + w} ${baseline} Z`}
        fill={fill}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <rect x={x + w / 2 - 12} y={y + r + 12} width="10" height="13" rx="2" fill={lit ? '#F0C9A8' : SAND} stroke={INK} strokeWidth="1.3" />
      <rect x={x + w / 2 + 2} y={y + r + 12} width="10" height="13" rx="2" fill={SAND} stroke={INK} strokeWidth="1.3" />
    </g>
  )
}

export function ScaleStacked() {
  const rows = [
    { label: 'ONE SOCIETY', baseline: 118, towers: [{ x: 172, h: 78, lit: true }] },
    {
      label: 'MULTI-TOWER',
      baseline: 288,
      towers: [
        { x: 118, h: 64 },
        { x: 168, h: 92, lit: true, fill: SAND },
        { x: 218, h: 72 },
      ],
    },
    {
      label: 'TOWNSHIP',
      baseline: 458,
      towers: [
        { x: 86, h: 58, w: 34 },
        { x: 128, h: 86, w: 34, lit: true, fill: SAND },
        { x: 170, h: 66, w: 34 },
        { x: 212, h: 94, w: 34, fill: SAND },
        { x: 254, h: 62, w: 34 },
      ],
    },
  ]

  return (
    <svg
      viewBox="0 0 400 540"
      className="mx-auto h-auto w-full max-w-[320px]"
      role="img"
      aria-label="Illustration: a single society building, then a multi-tower complex, then a township — the same platform at three sizes"
    >
      {rows.map((row, i) => (
        <g key={row.label}>
          {row.towers.map((t) => (
            <MiniTower key={t.x} x={t.x} baseline={row.baseline} h={t.h} w={t.w} lit={t.lit} fill={t.fill} />
          ))}
          <line x1="60" y1={row.baseline} x2="340" y2={row.baseline} stroke={INK} strokeWidth="2.2" />
          <text
            x="200"
            y={row.baseline + 28}
            textAnchor="middle"
            fontSize="19"
            fontFamily="IBM Plex Mono, monospace"
            fill="#7E7691"
          >
            {row.label}
          </text>

          {/* arrow down to the next size */}
          {i < rows.length - 1 && (
            <>
              <line
                x1="200"
                y1={row.baseline + 46}
                x2="200"
                y2={row.baseline + 78}
                stroke={INDIGO}
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              <path
                d={`M 192 ${row.baseline + 72} l 8 10 l 8 -10`}
                fill="none"
                stroke={INDIGO}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </g>
      ))}
    </svg>
  )
}
