// Single source of truth for site content.
// Sourced from the AanganOne product brief.

export const SITE = {
  name: 'AanganOne',
  tagline: 'Smart Living for Modern Societies',
  cta: 'Start managing your society the smart way.',
  legalEntity: 'AanganOne Space Private Limited',
  builtBy: 'Codelix IT Solutions Pvt. Ltd.',
  phonePrimary: '+91 88664 48967',
  phonePrimaryHref: 'tel:+918866448967',
  phoneSecondary: '+91 74909 09686',
  phoneSecondaryHref: 'tel:+917490909686',
  email: 'info@aanganone.com',
  sales: 'sales@aanganone.com',
  address: 'PNTC, Vejalpur, Times of India Press Road, Ahmedabad — 380015, Gujarat, India',
  // TODO: replace both with the real listing URLs — these are store searches,
  // which work but are not the canonical product pages.
  playStore: 'https://play.google.com/store/search?q=AanganOne&c=apps',
  appStore: 'https://apps.apple.com/in/search?term=AanganOne',
  social: {
    instagram: 'https://instagram.com/aanganone',
    twitter: 'https://twitter.com/aanganone',
    linkedin: 'https://www.linkedin.com/company/aanganone',
  },
}

export const STATS = [
  { value: 100, suffix: '+', label: 'Societies connected' },
  { value: 25, suffix: 'k+', label: 'Active residents' },
  { value: 95, suffix: '%', label: 'Satisfaction rate' },
  { value: 24, suffix: '/7', label: 'Support available' },
]

/* ------------------------------------------------------------------ */
/* Core features — grouped exactly as in the product brief            */
/* ------------------------------------------------------------------ */

export const FEATURE_GROUPS = [
  {
    id: 'security',
    label: 'Security & Access',
    accent: 'brand',
    blurb: 'Every entry logged, approved and visible — no register, no guesswork.',
    items: [
      { title: 'Visitor Management', desc: 'Log, track and approve every visitor entry digitally.', icon: 'visitor' },
      { title: 'QR Visitor Entry', desc: 'Contactless gate entry with a scannable QR pass.', icon: 'qr' },
      { title: 'Gate Security', desc: 'A real-time guard dashboard built for the gate, not the desk.', icon: 'shield' },
      { title: 'Emergency Alerts', desc: 'Notify every resident instantly when seconds matter.', icon: 'alert' },
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Payments',
    accent: 'mint',
    blurb: 'Maintenance that collects itself — invoices out, payments in, records clean.',
    items: [
      { title: 'Maintenance Billing', desc: 'Auto-generate monthly invoices for every unit.', icon: 'invoice' },
      { title: 'Online Payments', desc: 'Residents pay in-app via UPI, card or net banking.', icon: 'payment' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    accent: 'sky',
    blurb: 'One channel that everyone actually reads — no more lost WhatsApp threads.',
    items: [
      { title: 'Society Notices', desc: 'Official notices from admin straight to every resident.', icon: 'notice' },
      { title: 'Announcements', desc: 'Broadcast water cut-offs, meetings and updates in seconds.', icon: 'megaphone' },
      { title: 'Community Updates', desc: 'General community posts, events and information.', icon: 'community' },
    ],
  },
  {
    id: 'management',
    label: 'Management Tools',
    accent: 'sun',
    blurb: 'The daily running of the society — complaints, staff, parking, people.',
    items: [
      { title: 'Complaint Management', desc: 'Raise, assign, track and close with status at every step.', icon: 'complaint' },
      { title: 'Staff Management', desc: 'Housekeeping, security and maintenance staff in one roster.', icon: 'staff' },
      { title: 'Parking Management', desc: 'Assign and track slots for residents and guests.', icon: 'parking' },
      { title: 'Resident Directory', desc: 'A complete, searchable digital directory of residents.', icon: 'directory' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Who uses AanganOne                                                  */
/* ------------------------------------------------------------------ */

export const ROLES = [
  {
    role: 'Residents',
    icon: 'home',
    accent: 'from-brand-500 to-brand-700',
    points: ['Raise and track complaints', 'Approve visitors before they arrive', 'Pay maintenance in a tap', 'Read notices that matter'],
  },
  {
    role: 'Society Admins',
    icon: 'dashboard',
    accent: 'from-indigoo-500 to-brand-600',
    points: ['Generate and reconcile billing', 'Manage staff and vendors', 'Publish notices society-wide', 'Oversee daily operations'],
  },
  {
    role: 'Committee Members',
    icon: 'people',
    accent: 'from-sky-400 to-indigoo-500',
    points: ['Oversee decisions and approvals', 'Review society finances', 'Drive community announcements', 'Keep records transparent'],
  },
  {
    role: 'Security Guards',
    icon: 'guard',
    accent: 'from-mint-500 to-sky-500',
    points: ['Verify entries via QR scan', 'Log visitors in seconds', 'Raise emergency alerts', 'Work from a simple guard view'],
  },
]

/* ------------------------------------------------------------------ */
/* Problem → Solution                                                  */
/* ------------------------------------------------------------------ */

export const PAIN_POINTS = [
  { problem: 'Visitor entries scrawled in a physical register', solution: 'QR-based digital entry, logged and searchable' },
  { problem: 'Maintenance collected over WhatsApp and cash', solution: 'Auto-generated invoices with in-app UPI payments' },
  { problem: 'Complaints that disappear without a follow-up', solution: 'Tracked tickets with status until resolution' },
  { problem: 'Notices and emergencies missed entirely', solution: 'Push notices and instant society-wide alerts' },
  { problem: 'Staff and parking managed informally', solution: 'Structured staff rosters and assigned parking slots' },
  { problem: 'No visibility into where society money goes', solution: 'Clear, transparent records every resident can see' },
]

/* ------------------------------------------------------------------ */
/* Differentiators                                                     */
/* ------------------------------------------------------------------ */

export const DIFFERENTIATORS = [
  { title: 'All-in-one', desc: 'Security, billing and communication in a single app — not three vendors.', icon: 'layers' },
  { title: 'QR visitor entry', desc: 'No manual register at the gate. Scan, verify, done.', icon: 'qr' },
  { title: 'Real-time alerts', desc: 'Reach every resident the moment something happens.', icon: 'alert' },
  { title: 'Clean, modern UI', desc: 'Simple enough for guards, deep enough for admins.', icon: 'sparkle' },
  { title: 'India-first', desc: 'Built and maintained in India for Indian residential societies.', icon: 'flag' },
  { title: 'Scales with you', desc: 'From a single society to a multi-tower complex.', icon: 'scale' },
]

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

export const STEPS = [
  { step: '01', title: 'Onboard your society', desc: 'We set up towers, units and residents with you — data migration included. Most societies are live in 3–5 days.' },
  { step: '02', title: 'Invite residents & staff', desc: 'Residents download the app and register against their unit. Guards and staff get their own focused views.' },
  { step: '03', title: 'Run everything digitally', desc: 'Visitors, billing, complaints and notices all move through one platform, with a record of every action.' },
  { step: '04', title: 'Track and improve', desc: 'Committee and admins see what is open, what is paid and what needs attention — in real time.' },
]

/* ------------------------------------------------------------------ */
/* Impact                                                              */
/* ------------------------------------------------------------------ */

export const IMPACT = [
  { value: 75, suffix: '%', title: 'Time saved', desc: 'Less admin work, fewer phone calls, no paper chasing.' },
  { value: 85, suffix: '%', title: 'Fewer escalations', desc: 'Structured complaint flow resolves issues before they grow.' },
  { value: 90, suffix: '%', title: 'Cost effective', desc: 'Optimised resources and lower operational overhead.' },
  { value: 100, suffix: '%', title: 'Transparency', desc: 'Complete visibility into society finances and activity.' },
]

export const BENEFITS = [
  { title: 'Cloud-based access', desc: 'Anywhere, anytime, on any device.' },
  { title: 'Real-time updates', desc: 'Instant notifications keep everyone informed.' },
  { title: 'Easy onboarding', desc: 'Your whole society running within days.' },
  { title: 'Dedicated support', desc: 'Technical help whenever you need it.' },
]

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    society: 'Shaligram',
    role: 'Secretary',
    quote:
      'Our secretary used to handle 50+ calls a week for maintenance and updates. With AanganOne everything is digital — residents raise complaints in-app, staff get instant assignments, and every update is tracked in real time.',
  },
  {
    society: 'Indraprasth',
    role: 'Secretary',
    quote:
      'Managing finances and vendor payments was a nightmare. Now all transactions are transparent, automated and accessible. Residents can track every rupee spent, and accounting errors dropped by 90%.',
  },
  {
    society: 'Satyagruh',
    role: 'Secretary',
    quote:
      'Event management used to be chaotic. Residents now book amenities, RSVP to events and get instant notifications. Community engagement is up and everything simply runs.',
  },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    question: 'What is AanganOne and how does it work?',
    answer:
      'AanganOne is a society, apartment and community management platform that digitises the daily operations of a residential society. Residents, admins, committee members and security guards each get a tailored view of one shared system — covering visitors, maintenance billing, complaints, notices, staff and parking.',
  },
  {
    question: 'How long does setup take for my society?',
    answer:
      'Most societies are fully operational within 3–5 business days. Our team handles onboarding end to end — data migration, staff training and resident registration included.',
  },
  {
    question: 'Is our society data secure?',
    answer:
      'Yes. AanganOne uses industry-standard encryption, role-based access and secure cloud storage with automated backups. Residents, committee members and staff only see what they are authorised to see, and we never share your society data with third parties.',
  },
  {
    question: 'Which platforms is the app available on?',
    answer:
      'AanganOne is live on both the Google Play Store for Android and the Apple App Store for iOS. The app is published by AanganOne Space Private Limited.',
  },
  {
    question: 'How does QR visitor entry work?',
    answer:
      'A resident pre-approves a guest or delivery from the app and a QR pass is generated. At the gate the guard scans it, the entry is verified and logged instantly — no register, no phone calls to confirm.',
  },
  {
    question: 'Can residents pay maintenance through the app?',
    answer:
      'Yes. Maintenance invoices are auto-generated every month and residents pay directly in the app via UPI, card or net banking. Payment status is visible to both the resident and the admin.',
  },
  {
    question: 'What does AanganOne cost?',
    answer:
      'Pricing is based on your society size and requirements, with no hidden costs. Request a free demo and we will share a tailored quote for your society.',
  },
  {
    question: 'What if our staff is not tech-savvy?',
    answer:
      'The interface is deliberately simple — guards and staff see only what they need. We run training sessions, provide step-by-step guides, and our support team stays available. Most staff are comfortable within a few days.',
  },
]

/* ------------------------------------------------------------------ */
/* Leadership                                                          */
/* ------------------------------------------------------------------ */

export const TEAM = [
  { name: 'Mr. Durgesh Chavda', role: 'Founder & CEO', image: '/images/durgesh_profile_image.jpeg' },
  { name: 'Mr. Vivek Changani', role: 'Co-Founder & CFO', image: '/images/vivek_profile_image.jpg' },
  { name: 'Mr. Manas Vadodaria', role: 'CTO & Technical Head', image: '/images/manas_profile_image.png' },
]
