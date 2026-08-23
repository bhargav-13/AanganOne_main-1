/* ==========================================================================
   Further line-art scenes.
   All deliberately text-free, so they scale to any width without needing a
   horizontal scroller or a separate portrait variant.
   Strokes use currentColor where the scene sits on a coloured card.
   ========================================================================== */

const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const PAPER = '#FBF8F4'

/* -------------------------------------------------------------------------
   1. A closed gate — for the 404 page, where the copy is "this door
      doesn't open". Same gate as the courtyard, shut, with the barrier down.
   ------------------------------------------------------------------------- */
export function ClosedGateScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 720 420"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Illustration: a society gate, closed, with the barrier lowered"
    >
      <defs>
        <pattern id="cg-jaali" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="none" stroke={INK} strokeWidth="1" opacity="0.28" />
        </pattern>
      </defs>

      {/* boundary walls */}
      <rect x="0" y="210" width="150" height="160" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x="0" y="210" width="150" height="160" fill="url(#cg-jaali)" />
      <rect x="570" y="210" width="150" height="160" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x="570" y="210" width="150" height="160" fill="url(#cg-jaali)" />

      {/* arch over the closed gate */}
      <path d="M 214 236 A 76 76 0 0 1 366 236" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 228 236 A 62 62 0 0 1 352 236" fill="none" stroke={INK} strokeWidth="1.4" opacity="0.4" />
      <rect x="252" y="182" width="76" height="18" rx="9" fill={SAND} stroke={INK} strokeWidth="1.4" />

      {/* the shut grille */}
      <rect x="214" y="236" width="152" height="134" fill={PAPER} stroke={INK} strokeWidth="2" />
      {Array.from({ length: 9 }, (_, i) => 226 + i * 16).map((bx) => (
        <line key={bx} x1={bx} y1="244" x2={bx} y2="370" stroke={INK} strokeWidth="1.6" opacity="0.7" />
      ))}
      <line x1="214" y1="270" x2="366" y2="270" stroke={INK} strokeWidth="1.8" />
      <line x1="214" y1="336" x2="366" y2="336" stroke={INK} strokeWidth="1.8" />
      <line x1="290" y1="236" x2="290" y2="370" stroke={INK} strokeWidth="2.6" />

      {/* padlock where the leaves meet */}
      <g transform="translate(290 300)">
        <path d="M -9 -4 v -7 a 9 9 0 0 1 18 0 v 7" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
        <rect x="-14" y="-4" width="28" height="22" rx="4" fill={TERRA} stroke={INK} strokeWidth="2" />
        <circle cx="0" cy="6" r="2.6" fill={PAPER} />
      </g>

      {/* gate posts */}
      <path d="M 170 370 L 170 220 A 22 22 0 0 1 214 220 L 214 370 Z" fill={PAPER} stroke={INK} strokeWidth="2" />
      <path d="M 366 370 L 366 220 A 22 22 0 0 1 410 220 L 410 370 Z" fill={PAPER} stroke={INK} strokeWidth="2" />

      {/* guard cabin, dark — nobody's letting you through */}
      <path d="M 452 370 L 452 262 A 30 30 0 0 1 512 262 L 512 370 Z" fill={SAND} stroke={INK} strokeWidth="2" />
      <path d="M 466 322 L 466 288 A 16 16 0 0 1 498 288 L 498 322 Z" fill={PAPER} stroke={INK} strokeWidth="1.6" />

      {/* barrier down, across the road */}
      <rect x="176" y="338" width="10" height="32" fill={INK} />
      <rect x="182" y="336" width="176" height="9" rx="4.5" fill={TERRA} stroke={INK} strokeWidth="1.6" />
      <rect x="220" y="336" width="22" height="9" fill={PAPER} opacity="0.9" />
      <rect x="276" y="336" width="22" height="9" fill={PAPER} opacity="0.9" />
      <rect x="332" y="336" width="22" height="9" fill={PAPER} opacity="0.9" />

      {/* ground */}
      <line x1="0" y1="370" x2="720" y2="370" stroke={INK} strokeWidth="2.5" />
      <line x1="0" y1="380" x2="720" y2="380" stroke={INK} strokeWidth="1" opacity="0.2" />
    </svg>
  )
}

/* -------------------------------------------------------------------------
   2. Role figures — one per door in "four doors into the same courtyard".
      currentColor, so each inherits its card's text colour.
   ------------------------------------------------------------------------- */
export function RoleFigure({ kind, className = '' }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      {/* resident — a person under their own arch */}
      {kind === 0 && (
        <g {...s}>
          <path d="M 14 54 V 30 A 18 18 0 0 1 50 30 V 54" />
          <circle cx="32" cy="30" r="6" />
          <path d="M 21 54 a 11 13 0 0 1 22 0" />
          <path d="M 8 32 L 32 12 L 56 32" />
        </g>
      )}

      {/* admin — a person behind a dashboard */}
      {kind === 1 && (
        <g {...s}>
          <rect x="10" y="12" width="44" height="30" rx="3" />
          <path d="M 16 20 h 12 M 16 27 h 8 M 34 20 h 14 M 34 27 h 10 M 16 34 h 32" />
          <circle cx="32" cy="48" r="5" />
          <path d="M 22 60 a 10 9 0 0 1 20 0" />
        </g>
      )}

      {/* committee — three people together */}
      {kind === 2 && (
        <g {...s}>
          <circle cx="32" cy="20" r="7" />
          <path d="M 20 42 a 12 13 0 0 1 24 0" />
          <circle cx="13" cy="28" r="5.5" />
          <path d="M 5 46 a 8 10 0 0 1 13 -6" />
          <circle cx="51" cy="28" r="5.5" />
          <path d="M 59 46 a 8 10 0 0 0 -13 -6" />
          <path d="M 8 56 h 48" />
        </g>
      )}

      {/* guard — cap, shoulders, shield */}
      {kind === 3 && (
        <g {...s}>
          <circle cx="32" cy="26" r="7" />
          <path d="M 22 18 a 10 7 0 0 1 20 0 z" />
          <path d="M 18 56 a 14 15 0 0 1 28 0" />
          <path d="M 32 36 l 12 4 v 8 a 12 12 0 0 1 -12 10 a 12 12 0 0 1 -12 -10 v -8 z" />
          <path d="M 28 46 l 3 3 l 6 -6" />
        </g>
      )}
    </svg>
  )
}

/* -------------------------------------------------------------------------
   3. The demo call — what actually happens when a committee books one.
   ------------------------------------------------------------------------- */
export function DemoCallScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 760 340"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Illustration: a committee on one screen and the AanganOne team on another, connected for a short demo call"
    >
      {/* committee side — laptop with three people */}
      <rect x="40" y="70" width="250" height="160" rx="10" fill={PAPER} stroke={INK} strokeWidth="2.4" />
      <path d="M 20 244 L 46 230 h 238 l 26 14 z" fill={SAND} stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />

      <g fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="112" cy="126" r="15" />
        <path d="M 88 186 a 24 26 0 0 1 48 0" />
        <circle cx="188" cy="134" r="12" />
        <path d="M 168 186 a 20 22 0 0 1 40 0" />
        <circle cx="240" cy="140" r="10" />
        <path d="M 224 186 a 16 18 0 0 1 32 0" />
      </g>

      {/* connection — a dashed link with a clock on it */}
      <line x1="316" y1="150" x2="452" y2="150" stroke={INDIGO} strokeWidth="2" strokeDasharray="7 7" strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" values="28;0" dur="1.8s" repeatCount="indefinite" />
      </line>

      <g transform="translate(384 150)">
        <circle r="30" fill={PAPER} stroke={INK} strokeWidth="2.2" />
        <circle r="30" fill="none" stroke={INDIGO} strokeWidth="3" strokeDasharray="94 188" strokeDashoffset="0" transform="rotate(-90)" />
        <path d="M 0 -15 V 0 l 10 7" fill="none" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* AanganOne side — phone showing the product */}
      <rect x="500" y="46" width="150" height="216" rx="22" fill={PAPER} stroke={INK} strokeWidth="2.4" />
      <rect x="548" y="58" width="54" height="6" rx="3" fill={INK} opacity="0.8" />

      <rect x="518" y="82" width="114" height="52" rx="10" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <rect x="530" y="96" width="56" height="7" rx="3.5" fill={INK} opacity="0.35" />
      <rect x="530" y="110" width="78" height="7" rx="3.5" fill={INK} opacity="0.2" />

      <rect x="518" y="146" width="114" height="34" rx="8" fill={PAPER} stroke={INK} strokeWidth="1.4" />
      <circle cx="536" cy="163" r="8" fill={INDIGO} />
      <rect x="552" y="159" width="64" height="7" rx="3.5" fill={INK} opacity="0.22" />

      <rect x="518" y="190" width="114" height="34" rx="8" fill={PAPER} stroke={INK} strokeWidth="1.4" />
      <circle cx="536" cy="207" r="8" fill={TERRA} />
      <rect x="552" y="203" width="52" height="7" rx="3.5" fill={INK} opacity="0.22" />

      {/* ground */}
      <line x1="0" y1="290" x2="760" y2="290" stroke={INK} strokeWidth="2" opacity="0.5" />
    </svg>
  )
}

/* -------------------------------------------------------------------------
   4. Role-based access — a strongbox behind a jaali screen, with four keys
      that each open only their own panel. Sits on the dark trust section.
   ------------------------------------------------------------------------- */
export function VaultScene({ className = '' }) {
  const line = { fill: 'none', stroke: PAPER, strokeOpacity: 0.85, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

  return (
    <svg
      viewBox="0 0 760 300"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Illustration: society records held in a strongbox, with separate keys for residents, committee, admins and staff"
    >
      <defs>
        <pattern id="vault-jaali" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M9 0 L18 9 L9 18 L0 9 Z" fill="none" stroke={PAPER} strokeOpacity="0.22" strokeWidth="1" />
        </pattern>
      </defs>

      {/* four keys, each a different shape — different roles, different access */}
      {[0, 1, 2, 3].map((i) => {
        const y = 54 + i * 58
        return (
          <g key={i}>
            <circle cx="86" cy={y} r="17" {...line} />
            <circle cx="86" cy={y} r="6" fill={PAPER} fillOpacity={0.9} stroke="none" />
            <path d={`M 103 ${y} h 62`} {...line} />
            <path d={`M 150 ${y} v ${8 + i * 3}`} {...line} />
            <path d={`M 136 ${y} v ${5 + i * 2}`} {...line} />
            {/* dashed run into the vault */}
            <path
              d={`M 172 ${y} C 220 ${y}, 240 150, 292 150`}
              fill="none"
              stroke={TERRA}
              strokeWidth="1.6"
              strokeDasharray="5 6"
              strokeLinecap="round"
              opacity="0.7"
            />
          </g>
        )
      })}

      {/* the strongbox */}
      <rect x="300" y="46" width="300" height="208" rx="14" {...line} />
      <rect x="300" y="46" width="300" height="208" rx="14" fill="url(#vault-jaali)" stroke="none" />
      <rect x="322" y="68" width="256" height="164" rx="8" {...line} strokeOpacity="0.5" />

      {/* dial */}
      <circle cx="450" cy="150" r="42" {...line} />
      <circle cx="450" cy="150" r="27" {...line} strokeOpacity="0.5" />
      <circle cx="450" cy="150" r="7" fill={TERRA} stroke="none" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1={450 + 46 * Math.cos((a * Math.PI) / 180)}
          y1={150 + 46 * Math.sin((a * Math.PI) / 180)}
          x2={450 + 54 * Math.cos((a * Math.PI) / 180)}
          y2={150 + 54 * Math.sin((a * Math.PI) / 180)}
          stroke={PAPER}
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* handle */}
      <path d="M 600 132 h 26 a 10 10 0 0 1 0 36 h -26" {...line} />

      {/* records inside, implied by stacked cards on the right */}
      {[70, 118, 166, 214].map((y, i) => (
        <g key={y}>
          <rect x="654" y={y} width="86" height="34" rx="7" {...line} strokeOpacity={0.35 + i * 0.12} />
          <circle cx="672" cy={y + 17} r="6" fill={INDIGO} stroke="none" />
          <rect x="686" y={y + 13} width="40" height="6" rx="3" fill={PAPER} opacity="0.3" />
        </g>
      ))}
    </svg>
  )
}
