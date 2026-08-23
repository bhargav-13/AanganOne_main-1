/* Capability ticker — every item is a shipped feature, no client claims. */
const ITEMS = [
  'QR visitor entry',
  'Maintenance billing',
  'UPI payments',
  'Emergency alerts',
  'Complaint tracking',
  'Society notices',
  'Gate security',
  'Staff management',
  'Parking slots',
  'Resident directory',
  'Announcements',
  'Community updates',
]

function SocietiesMarquee() {
  const row = [...ITEMS, ...ITEMS]

  return (
    <section className="relative border-y border-[color:var(--rule-soft)] bg-ink-900 py-5">
      <div className="mask-fade overflow-hidden">
        <div className="flex w-max animate-ticker items-center hover:[animation-play-state:paused]">
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex shrink-0 items-center">
              <span className="whitespace-nowrap px-6 font-display text-[19px] font-medium text-paper/85">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-terracotta-500" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocietiesMarquee
