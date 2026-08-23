/* ==========================================================================
   Small line-art vignettes for the "inside the app" gallery.
   Text-free by design — the caption lives in HTML beneath each tile, so the
   artwork never carries burned-in labels that duplicate it.
   320x220 canvas, same palette and stroke weight as the larger scenes.
   ========================================================================== */

const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const SAND_D = '#D6C6B0'
const PAPER = '#FBF8F4'

const S = { fill: 'none', stroke: INK, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const GROUND = 186

function Ground() {
  return (
    <>
      <line x1="20" y1={GROUND} x2="300" y2={GROUND} stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1={GROUND + 8} x2="300" y2={GROUND + 8} stroke={INK} strokeWidth="1" opacity="0.18" />
    </>
  )
}

const TILES = {
  /* Amenities — an arched pavilion beside the pool */
  amenities: (
    <>
      <path d="M 62 186 L 62 96 A 40 40 0 0 1 142 96 L 142 186 Z" fill={PAPER} {...S} />
      <path d="M 88 186 L 88 132 A 14 14 0 0 1 116 132 L 116 186 Z" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <circle cx="102" cy="76" r="7" fill={TERRA} stroke={INK} strokeWidth="1.6" />
      <rect x="168" y="140" width="118" height="46" rx="8" fill={INDIGO} opacity="0.16" />
      <rect x="168" y="140" width="118" height="46" rx="8" {...S} />
      <path d="M 178 158 q 12 -8 24 0 t 24 0 t 24 0 t 24 0" fill="none" stroke={INDIGO} strokeWidth="2" strokeLinecap="round" />
      <path d="M 178 172 q 12 -8 24 0 t 24 0 t 24 0 t 24 0" fill="none" stroke={INDIGO} strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <line x1="238" y1="140" x2="238" y2="104" {...S} />
      <circle cx="238" cy="92" r="14" fill={SAND} {...S} />
      <Ground />
    </>
  ),

  /* Accounting — a ledger card with a rising bar chart and a coin */
  accounting: (
    <>
      <rect x="52" y="44" width="146" height="142" rx="10" fill={PAPER} {...S} />
      <line x1="70" y1="70" x2="150" y2="70" stroke={SAND_D} strokeWidth="6" strokeLinecap="round" />
      <rect x="72" y="126" width="20" height="36" rx="3" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <rect x="102" y="106" width="20" height="56" rx="3" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <rect x="132" y="88" width="20" height="74" rx="3" fill={INDIGO} stroke={INK} strokeWidth="1.6" />
      <path d="M 70 100 L 96 92 L 122 78 L 158 62" fill="none" stroke={TERRA} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 150 60 l 10 2 l -2 10" fill="none" stroke={TERRA} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="244" cy="126" r="30" fill={SAND} {...S} />
      <circle cx="244" cy="126" r="20" fill="none" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      <path d="M 236 114 h 16 M 236 122 h 16 M 248 114 v 6 a 6 6 0 0 1 -12 0 M 240 122 l 10 16" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Ground />
    </>
  ),

  /* Visitor management — a person presenting a pass at the door */
  visitor: (
    <>
      <path d="M 178 186 L 178 84 A 40 40 0 0 1 258 84 L 258 186 Z" fill={PAPER} {...S} />
      <path d="M 200 186 L 200 118 A 18 18 0 0 1 236 118 L 236 186 Z" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <circle cx="231" cy="152" r="3" fill={INK} />
      <circle cx="96" cy="70" r="18" fill={SAND} {...S} />
      <path d="M 66 186 a 30 42 0 0 1 60 0 Z" fill={PAPER} {...S} />
      <path d="M 124 118 L 158 106" {...S} />
      <rect x="152" y="86" width="34" height="26" rx="4" fill={PAPER} {...S} />
      <rect x="158" y="93" width="10" height="10" rx="1.5" fill={INDIGO} />
      <line x1="172" y1="94" x2="180" y2="94" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="172" y1="102" x2="178" y2="102" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <Ground />
    </>
  ),

  /* Parking — a car in a marked bay under a P sign */
  parking: (
    <>
      <line x1="46" y1="186" x2="46" y2="128" stroke={SAND_D} strokeWidth="3" strokeLinecap="round" />
      <line x1="274" y1="186" x2="274" y2="128" stroke={SAND_D} strokeWidth="3" strokeLinecap="round" />
      <path d="M 78 168 l 12 -30 a 8 8 0 0 1 7 -5 h 66 a 8 8 0 0 1 7 5 l 12 30 Z" fill={PAPER} {...S} />
      <rect x="70" y="166" width="122" height="22" rx="8" fill={INDIGO} {...S} />
      <circle cx="94" cy="188" r="9" fill={PAPER} {...S} />
      <circle cx="168" cy="188" r="9" fill={PAPER} {...S} />
      <path d="M 100 162 l 8 -20 h 46 l 8 20 Z" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <circle cx="246" cy="86" r="30" fill={TERRA} {...S} />
      <path d="M 238 104 v -36 h 12 a 10 10 0 0 1 0 20 h -12" fill="none" stroke={PAPER} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="246" y1="116" x2="246" y2="186" {...S} />
      <Ground />
    </>
  ),

  /* Safety alerts — a bell ringing over a small figure */
  safety: (
    <>
      <path d="M 118 116 a 40 40 0 0 1 80 0 c 0 26 8 34 12 38 h -104 c 4 -4 12 -12 12 -38 Z" fill={PAPER} {...S} />
      <path d="M 144 154 a 14 14 0 0 0 28 0" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <circle cx="158" cy="70" r="7" fill={TERRA} stroke={INK} strokeWidth="1.6" />
      <path d="M 88 96 a 34 34 0 0 1 8 -30" fill="none" stroke={TERRA} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 64 104 a 56 56 0 0 1 14 -50" fill="none" stroke={TERRA} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M 228 96 a 34 34 0 0 0 -8 -30" fill="none" stroke={TERRA} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 252 104 a 56 56 0 0 0 -14 -50" fill="none" stroke={TERRA} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <Ground />
    </>
  ),

  /* Guard patrolling — a guard walking a boundary with a torch beam */
  patrol: (
    <>
      <rect x="196" y="106" width="104" height="80" fill={PAPER} {...S} />
      <path d="M 196 106 h 104 M 214 106 v 80 M 232 106 v 80 M 250 106 v 80 M 268 106 v 80 M 286 106 v 80" stroke={INK} strokeWidth="1.4" opacity="0.45" />
      <circle cx="96" cy="72" r="17" fill={SAND} {...S} />
      <path d="M 78 60 a 18 12 0 0 1 36 0 z" fill={INK} />
      <path d="M 68 186 a 28 44 0 0 1 56 0 Z" fill={PAPER} {...S} />
      <path d="M 122 116 L 156 128" {...S} />
      <rect x="152" y="118" width="22" height="14" rx="3" fill={INDIGO} stroke={INK} strokeWidth="1.6" />
      <path d="M 174 118 L 210 100 L 210 148 Z" fill={TERRA} opacity="0.22" />
      <path d="M 174 118 L 210 100 M 174 130 L 210 148" stroke={TERRA} strokeWidth="1.8" strokeLinecap="round" />
      <Ground />
    </>
  ),

  /* Communication — a notice fanning out to flats */
  communication: (
    <>
      <rect x="40" y="72" width="88" height="102" rx="10" fill={PAPER} {...S} />
      <rect x="56" y="92" width="56" height="10" rx="5" fill={INDIGO} />
      <line x1="56" y1="116" x2="104" y2="116" stroke={SAND_D} strokeWidth="6" strokeLinecap="round" />
      <line x1="56" y1="132" x2="96" y2="132" stroke={SAND_D} strokeWidth="6" strokeLinecap="round" />
      <rect x="56" y="148" width="40" height="12" rx="6" fill={TERRA} />
      {[70, 118, 166].map((y) => (
        <path
          key={y}
          d={`M 136 123 C 166 123, 172 ${y + 14}, 196 ${y + 14}`}
          fill="none"
          stroke={INDIGO}
          strokeWidth="1.8"
          strokeDasharray="5 5"
          strokeLinecap="round"
          opacity="0.8"
        />
      ))}
      {[70, 118, 166].map((y) => (
        <g key={`c-${y}`}>
          <rect x="200" y={y} width="90" height="28" rx="8" fill={PAPER} stroke={INK} strokeWidth="1.7" />
          <circle cx="216" cy={y + 14} r="7" fill={INDIGO} />
          <line x1="230" y1={y + 14} x2="276" y2={y + 14} stroke={SAND_D} strokeWidth="5" strokeLinecap="round" />
        </g>
      ))}
    </>
  ),

  /* Complaints — a ticket moving along a status track */
  complaints: (
    <>
      <path d="M 42 78 h 128 v 30 a 12 12 0 0 0 0 24 v 30 h -128 v -30 a 12 12 0 0 0 0 -24 Z" fill={PAPER} {...S} />
      <line x1="62" y1="100" x2="150" y2="100" stroke={SAND_D} strokeWidth="6" strokeLinecap="round" />
      <line x1="62" y1="142" x2="128" y2="142" stroke={SAND_D} strokeWidth="6" strokeLinecap="round" />
      <line x1="106" y1="78" x2="106" y2="162" stroke={INK} strokeWidth="1.6" strokeDasharray="5 6" opacity="0.5" />
      <line x1="196" y1="120" x2="286" y2="120" stroke={SAND} strokeWidth="4" strokeLinecap="round" />
      <line x1="196" y1="120" x2="256" y2="120" stroke={INDIGO} strokeWidth="4" strokeLinecap="round" />
      {[196, 226, 256, 286].map((x, i) => (
        <circle key={x} cx={x} cy="120" r="8" fill={i < 3 ? INDIGO : PAPER} stroke={INK} strokeWidth="1.8" />
      ))}
      <path d="M 252 120 l 4 4 l 7 -8" fill="none" stroke={PAPER} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <Ground />
    </>
  ),

  /* Access control — a QR pass read by a gate scanner */
  access: (
    <>
      <rect x="46" y="58" width="92" height="128" rx="12" fill={PAPER} {...S} />
      <g fill={INK}>
        <rect x="64" y="80" width="20" height="20" rx="3" />
        <rect x="100" y="80" width="20" height="20" rx="3" />
        <rect x="64" y="116" width="20" height="20" rx="3" />
        <rect x="104" y="120" width="10" height="10" />
        <rect x="104" y="140" width="10" height="10" />
        <rect x="84" y="140" width="10" height="10" />
      </g>
      <rect x="64" y="158" width="56" height="8" rx="4" fill={INDIGO} />
      <path d="M 152 122 h 44" stroke={INDIGO} strokeWidth="2.2" strokeDasharray="7 7" strokeLinecap="round" />
      <path d="M 190 115 l 9 7 l -9 7" fill="none" stroke={INDIGO} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 216 186 L 216 96 A 32 32 0 0 1 280 96 L 280 186 Z" fill={PAPER} {...S} />
      <circle cx="248" cy="122" r="18" fill={INDIGO} />
      <path d="M 240 122 l 6 6 l 11 -13" fill="none" stroke={PAPER} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <Ground />
    </>
  ),
}

function FeatureTile({ kind, className = '', label }) {
  const art = TILES[kind]
  if (!art) return null

  return (
    <svg
      viewBox="0 0 320 220"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label={`Illustration: ${label}`}
    >
      {art}
    </svg>
  )
}

export default FeatureTile
