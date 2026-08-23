import Reveal from './Reveal'

/**
 * Editorial chapter header: an index number and label sit on a rule above
 * the title, with the whole block set against the left margin.
 */
function SectionHeading({ n, label, title, lede, tone = 'ink', className = '' }) {
  const cream = tone === 'cream'

  return (
    <Reveal className={className}>
      <div className={`h-px w-full ${cream ? 'bg-paper/20' : 'bg-[color:var(--rule)]'}`} />

      <div className="grid gap-6 pt-6 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[260px_1fr]">
        <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
          {n && (
            <span className={`font-mono text-[11px] ${cream ? 'text-paper/45' : 'text-ink-300'}`}>{n}</span>
          )}
          {label && (
            <span
              className={`font-mono text-[11px] font-medium uppercase tracking-wider2 ${
                cream ? 'text-terracotta-300' : 'text-terracotta-500'
              }`}
            >
              {label}
            </span>
          )}
        </div>

        <div>
          <h2 className={`display-l max-w-[19ch] ${cream ? 'text-paper' : ''}`}>{title}</h2>
          {lede && (
            <p className={`lede mt-6 max-w-[58ch] ${cream ? 'text-paper/65' : ''}`}>{lede}</p>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default SectionHeading
