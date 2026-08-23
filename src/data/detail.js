// Deeper product detail — flows, comparisons, trust and a day in the society.
// Companion to site.js.

/* ------------------------------------------------------------------ */
/* Flagship flows — how the four most-used journeys actually work      */
/* ------------------------------------------------------------------ */

export const FLOWS = [
  {
    id: 'visitor',
    label: 'QR visitor entry',
    icon: 'qr',
    summary:
      'A guest, a cab or a delivery is expected. Instead of a phone call to the flat and a scribble in the register, the approval happens before anyone reaches the gate.',
    steps: [
      { title: 'Resident pre-approves', desc: 'From the app, the resident adds an expected visitor — a guest, a delivery, a cab or a daily-help entry.' },
      { title: 'A QR pass is issued', desc: 'The visitor gets a pass to show at the gate. No pass? The guard can still raise a request to the flat.' },
      { title: 'Guard scans and verifies', desc: 'One scan confirms who the visitor is, which flat they are for, and whether the approval still stands.' },
      { title: 'The entry is logged', desc: 'It lands in the society log with a timestamp — searchable later by flat, date or visitor.' },
    ],
  },
  {
    id: 'billing',
    label: 'Maintenance billing',
    icon: 'invoice',
    summary:
      'The monthly cycle that eats a committee alive — raising bills, chasing payments, matching receipts — reduced to a schedule and a dashboard.',
    steps: [
      { title: 'Invoices generate automatically', desc: 'Maintenance is raised for every unit on the cycle the society sets, with no spreadsheet in sight.' },
      { title: 'Residents are notified', desc: 'Each resident sees their bill in the app — what is due, and by when.' },
      { title: 'They pay in the app', desc: 'UPI, card or net banking. The payment happens where the bill is, not in a separate chat thread.' },
      { title: 'The ledger updates itself', desc: 'Paid, pending and overdue are visible to admins in real time, and to residents for their own unit.' },
    ],
  },
  {
    id: 'complaints',
    label: 'Complaint resolution',
    icon: 'complaint',
    summary:
      'A complaint that lives in a group chat gets lost. A complaint with an owner, a status and a history gets closed.',
    steps: [
      { title: 'Resident raises it', desc: 'The issue is logged from the app — lift, water, housekeeping, common area — with detail attached.' },
      { title: 'Admin assigns it', desc: 'The secretary routes it to the right staff member or vendor.' },
      { title: 'Status moves visibly', desc: 'Open, in progress, resolved — the resident sees where it stands without asking anyone.' },
      { title: 'It closes with a record', desc: 'The resolution stays on file, so recurring problems become obvious instead of anecdotal.' },
    ],
  },
  {
    id: 'alerts',
    label: 'Notices & emergency alerts',
    icon: 'megaphone',
    summary:
      'Water cut at 9am, an AGM on Sunday, or something that cannot wait — reaching every resident should take seconds, not a phone tree.',
    steps: [
      { title: 'Admin composes once', desc: 'A notice, an announcement or a community update is written once in the admin view.' },
      { title: 'It reaches every resident', desc: 'The message goes to the whole society at once — no forwarding, no missed groups.' },
      { title: 'Emergencies go straight through', desc: 'An emergency alert reaches residents the moment it matters, not after the calls start.' },
      { title: 'Nothing gets buried', desc: 'Official notices stay in one place instead of scrolling out of a chat thread.' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* A day in the society                                                */
/* ------------------------------------------------------------------ */

export const DAY = [
  { time: '06:40', who: 'Guard', event: 'Morning help arrives. Each entry is scanned in at the gate — no register, no queue.' },
  { time: '08:15', who: 'Admin', event: 'A notice goes out: water tanker cleaning between 11 and 1. Every flat has it before breakfast.' },
  { time: '10:05', who: 'Resident', event: 'A delivery is pre-approved from the app on the way to work. The courier is let in without a phone call.' },
  { time: '13:30', who: 'Resident', event: 'The lift on B-wing is stuck. A complaint is raised from the app with a photo attached.' },
  { time: '13:52', who: 'Admin', event: 'The complaint is assigned to the lift vendor. Status moves to in-progress, and everyone can see it.' },
  { time: '18:20', who: 'Committee', event: 'This month’s collection is reviewed — paid, pending and overdue, unit by unit.' },
  { time: '21:10', who: 'Guard', event: 'A late visitor arrives without a pass. A request is raised to the flat and approved in seconds.' },
]

/* ------------------------------------------------------------------ */
/* Manual vs AanganOne                                                 */
/* ------------------------------------------------------------------ */

export const COMPARISON = [
  { area: 'Visitor entry', manual: 'Paper register at the gate', ours: 'QR pass, scanned and logged' },
  { area: 'Visitor approval', manual: 'Guard phones the flat', ours: 'Resident pre-approves in the app' },
  { area: 'Maintenance bills', manual: 'Spreadsheet, then WhatsApp', ours: 'Auto-generated every cycle' },
  { area: 'Payments', manual: 'Cash, cheque, UPI screenshots', ours: 'In-app UPI, card or net banking' },
  { area: 'Complaints', manual: 'Group chat and verbal follow-up', ours: 'Assigned tickets with live status' },
  { area: 'Notices', manual: 'Noticeboard and forwards', ours: 'Pushed to every resident at once' },
  { area: 'Emergencies', manual: 'A phone tree', ours: 'Society-wide alert, instantly' },
  { area: 'Staff', manual: 'Informal and undocumented', ours: 'A structured roster with records' },
  { area: 'Parking', manual: 'First come, disputes follow', ours: 'Assigned and tracked slots' },
  { area: 'Residents', manual: 'An outdated printed list', ours: 'A searchable digital directory' },
  { area: 'Records', manual: 'Whatever survived the year', ours: 'Every action timestamped' },
]

/* ------------------------------------------------------------------ */
/* Trust & data protection                                             */
/* ------------------------------------------------------------------ */

export const TRUST = [
  { title: 'Role-based access', desc: 'Residents, committee members, admins and staff each see only what their role authorises — nothing more.', icon: 'people' },
  { title: 'Encrypted storage', desc: 'Sensitive information is stored using encryption practices that block unauthorised access.', icon: 'lock' },
  { title: 'Secure infrastructure', desc: 'A reliable architecture built around data protection, controlled access and safe storage.', icon: 'shield' },
  { title: 'Privacy-first design', desc: 'We collect only what is needed, and use it clearly and responsibly for the community.', icon: 'sparkle' },
  { title: 'Data ownership', desc: 'The society keeps control of its data. Nothing is shared without a clear purpose and consent.', icon: 'directory' },
  { title: 'Audit & activity logs', desc: 'Administrative and financial actions are recorded, so accountability is not a matter of memory.', icon: 'notice' },
  { title: 'Safe cloud hosting', desc: 'Strong security controls, automated backups and availability measures as standard.', icon: 'cloud' },
  { title: 'Regular reviews', desc: 'Systems are checked and improved periodically against evolving security practices.', icon: 'clock' },
  { title: 'Compliance ready', desc: 'Aligned with applicable Indian data protection guidelines and evolving regulatory requirements.', icon: 'check' },
]

/* ------------------------------------------------------------------ */
/* What onboarding actually includes                                   */
/* ------------------------------------------------------------------ */

export const INCLUDED = [
  { title: 'Society setup', desc: 'Towers, wings, units and common areas configured to match how your society is actually laid out.' },
  { title: 'Data migration', desc: 'Existing resident records, unit allocations and dues brought across so you start with real data.' },
  { title: 'Resident registration', desc: 'Residents invited and registered against their own unit, with help for anyone who gets stuck.' },
  { title: 'Guard training', desc: 'On-site walkthrough of the gate flow so the guard view is second nature before you go live.' },
  { title: 'Committee walkthrough', desc: 'A session for the secretary, treasurer and committee on billing, complaints and notices.' },
  { title: 'Ongoing support', desc: 'A team on call after go-live, plus product updates as the platform grows.' },
]
