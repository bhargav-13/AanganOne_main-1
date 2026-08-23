/**
 * Inner-page masthead: an index label, a large serif title and an optional
 * meta rule — set on warm paper with the courtyard lattice behind it.
 */
function PageHero({ label, title, lede, meta = [], children }) {
  return (
    <section className="relative overflow-hidden bg-paper pb-10 pt-[calc(var(--nav-h)+28px)] sm:pb-14 sm:pt-[calc(var(--nav-h)+44px)] md:pb-20 md:pt-[calc(var(--nav-h)+56px)]">
      <div className="jaali pointer-events-none absolute inset-x-0 top-0 h-[440px] opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      <div className="shell relative">
        {label && <p className="index-label animate-rise">{label}</p>}

        <h1 className="display-xl mt-7 max-w-[17ch] animate-rise" style={{ animationDelay: '90ms' }}>
          {title}
        </h1>

        {lede && (
          <p className="lede mt-9 max-w-[58ch] animate-rise" style={{ animationDelay: '170ms' }}>
            {lede}
          </p>
        )}

        {/* Buttons sit side by side on mobile — each takes an equal share of
            the row with tighter padding, then returns to natural width from
            sm up. Targets the children so every page's hero behaves alike. */}
        {children && (
          <div
            className="mt-10 flex animate-rise items-center gap-3 [&>*]:min-w-0 [&>*]:flex-1 [&>*]:px-3 [&>*]:text-[13.5px] sm:flex-wrap sm:[&>*]:flex-none sm:[&>*]:px-7 sm:[&>*]:text-[15px]"
            style={{ animationDelay: '250ms' }}
          >
            {children}
          </div>
        )}

        {meta.length > 0 && (
          <div className="mt-14 animate-rise" style={{ animationDelay: '320ms' }}>
            <div className="rule-strong" />
            <dl className="grid grid-cols-1 divide-y divide-[color:var(--rule-soft)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {meta.map((m) => (
                <div key={m.label} className="py-5 sm:px-6 sm:first:pl-0">
                  <dt className="index-label">{m.label}</dt>
                  <dd className="mt-1.5 text-[15px] font-medium text-ink-900">{m.value}</dd>
                </div>
              ))}
            </dl>
            <div className="rule-strong" />
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
