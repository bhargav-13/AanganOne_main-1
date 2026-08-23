const INK = '#241F2F'
const INDIGO = '#4F55D8'
const TERRA = '#C9603C'
const SAND = '#E6DACA'
const PAPER = '#FBF8F4'

/**
 * The gate, close up: a visitor holding a QR pass, the scan beam, the guard
 * cabin and a raised barrier. Same line-art grammar as CourtyardScene.
 */
function GateScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1000 320"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Illustration: a visitor holding a phone with a QR pass at a society gate, the pass being scanned, a guard cabin and a raised boom barrier"
    >
      <defs>
        <pattern id="gate-jaali" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M8 0 L16 8 L8 16 L0 8 Z" fill="none" stroke={INK} strokeWidth="1" opacity="0.3" />
        </pattern>
      </defs>

      {/* boundary walls */}
      <rect x="0" y="150" width="210" height="120" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x="0" y="150" width="210" height="120" fill="url(#gate-jaali)" />
      <rect x="790" y="150" width="210" height="120" fill={PAPER} stroke={INK} strokeWidth="2" />
      <rect x="790" y="150" width="210" height="120" fill="url(#gate-jaali)" />

      {/* gate posts */}
      <path d="M 210 270 L 210 128 A 26 26 0 0 1 262 128 L 262 270 Z" fill={PAPER} stroke={INK} strokeWidth="2" />
      <path d="M 738 270 L 738 128 A 26 26 0 0 1 790 128 L 790 270 Z" fill={PAPER} stroke={INK} strokeWidth="2" />

      {/* guard cabin */}
      <path d="M 620 270 L 620 150 A 34 34 0 0 1 688 150 L 688 270 Z" fill={TERRA} stroke={INK} strokeWidth="2" />
      <path d="M 636 214 L 636 176 A 18 18 0 0 1 672 176 L 672 214 Z" fill={PAPER} stroke={INK} strokeWidth="1.6" />
      <circle cx="654" cy="192" r="7" fill={SAND} stroke={INK} strokeWidth="1.6" />
      <path d="M 644 214 a 10 12 0 0 1 20 0 Z" fill={SAND} stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />

      {/* raised barrier */}
      <rect x="580" y="238" width="10" height="32" fill={INK} />
      <g transform="rotate(-52 585 242)">
        <rect x="585" y="237" width="150" height="9" rx="4.5" fill={TERRA} stroke={INK} strokeWidth="1.6" />
        <rect x="618" y="237" width="20" height="9" fill={PAPER} opacity="0.9" />
        <rect x="668" y="237" width="20" height="9" fill={PAPER} opacity="0.9" />
      </g>

      {/* visitor holding the pass */}
      <circle cx="380" cy="146" r="20" fill={SAND} stroke={INK} strokeWidth="2" />
      <path d="M 348 270 a 32 44 0 0 1 64 0 Z" fill={PAPER} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 408 208 L 452 190" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" />

      <rect x="450" y="160" width="46" height="76" rx="8" fill={PAPER} stroke={INK} strokeWidth="2" />
      <g fill={INK}>
        <rect x="459" y="172" width="11" height="11" rx="1.5" />
        <rect x="477" y="172" width="11" height="11" rx="1.5" />
        <rect x="459" y="190" width="11" height="11" rx="1.5" />
        <rect x="479" y="192" width="6" height="6" />
        <rect x="479" y="204" width="6" height="6" />
        <rect x="467" y="204" width="6" height="6" />
      </g>
      <rect x="459" y="218" width="28" height="5" rx="2.5" fill={INDIGO} />

      {/* scan beam */}
      <line
        x1="502"
        y1="196"
        x2="612"
        y2="196"
        stroke={INDIGO}
        strokeWidth="2"
        strokeDasharray="8 8"
        strokeLinecap="round"
      >
        <animate attributeName="stroke-dashoffset" values="32;0" dur="1.6s" repeatCount="indefinite" />
      </line>
      <path
        d="M 606 189 l 10 7 l -10 7"
        fill="none"
        stroke={INDIGO}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* verified */}
      <g transform="translate(556 140)">
        <circle r="19" fill={INDIGO} />
        <path d="M -8 1 l 6 6 l 11 -13" fill="none" stroke={PAPER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* ground */}
      <line x1="0" y1="270" x2="1000" y2="270" stroke={INK} strokeWidth="2.5" />
      <line x1="0" y1="280" x2="1000" y2="280" stroke={INK} strokeWidth="1" opacity="0.22" />
    </svg>
  )
}

export default GateScene
