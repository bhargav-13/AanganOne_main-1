import React from 'react'

/**
 * Single stroke-based icon set so every glyph on the site shares one
 * weight, cap and corner radius. 24x24 grid, 1.6 stroke.
 */
const PATHS = {
  visitor: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M17 8h4M19 6v4" />
    </>
  ),
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1.6" />
      <path d="M14 14h3v3h-3zM20 14v.01M20 20v.01M14 20v.01M17.5 20v.01M20 17.5v.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.4c0 4.4-3 8.2-7.5 9.6-4.5-1.4-7.5-5.2-7.5-9.6V6z" />
      <path d="M9.2 12.2l2 2 3.6-3.8" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5a6.2 6.2 0 00-6.2 6.2c0 4.2-1.4 5.6-2 6.3-.3.4 0 1 .5 1h15.4c.5 0 .8-.6.5-1-.6-.7-2-2.1-2-6.3A6.2 6.2 0 0012 3.5z" />
      <path d="M10 20.2a2.2 2.2 0 004 0" />
    </>
  ),
  invoice: (
    <>
      <path d="M6 3h9l3.5 3.5V21l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3L6 21z" />
      <path d="M9 9h6M9 12.5h6M9 16h3.5" />
    </>
  ),
  payment: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.6" />
      <path d="M2.5 10h19" />
      <path d="M6 14.6h3.5" />
    </>
  ),
  notice: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2.4" />
      <path d="M8 8h8M8 12h8M8 16h4.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3.5 10.5v3a1.5 1.5 0 001.5 1.5h1.6L14 19.5V4.5L6.6 9H5a1.5 1.5 0 00-1.5 1.5z" />
      <path d="M17.5 9.2a4 4 0 010 5.6M20 6.8a7.5 7.5 0 010 10.4" />
    </>
  ),
  community: (
    <>
      <circle cx="8" cy="8.5" r="2.6" />
      <circle cx="16" cy="8.5" r="2.6" />
      <path d="M3 19c.4-2.8 2.4-4.4 5-4.4s4.6 1.6 5 4.4" />
      <path d="M14.2 15.1c2.2-.4 4.4 1.1 4.8 3.9" />
    </>
  ),
  complaint: (
    <>
      <path d="M20.5 12.6c0 3.7-3.8 6.7-8.5 6.7a10 10 0 01-2.6-.34L4 21l1.3-3.6A6.5 6.5 0 013.5 12.6C3.5 8.9 7.3 6 12 6s8.5 2.9 8.5 6.6z" />
      <path d="M12 9.6v3.2M12 15.6v.01" />
    </>
  ),
  staff: (
    <>
      <circle cx="12" cy="7.4" r="3.2" />
      <path d="M5.5 20.5c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M9.6 14.9L12 18l2.4-3.1" />
    </>
  ),
  parking: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <path d="M10 16.5v-9h3a2.75 2.75 0 010 5.5h-3" />
    </>
  ),
  directory: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2.4" />
      <path d="M4 8h3M4 12h3M4 16h3" />
      <circle cx="13.5" cy="10.5" r="2.2" />
      <path d="M10 17c.4-1.8 1.8-2.7 3.5-2.7s3.1.9 3.5 2.7" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5L12 4l8 6.5V19a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 19z" />
      <path d="M9.6 20.6v-6h4.8v6" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3.2" y="3.2" width="7.6" height="8.6" rx="2" />
      <rect x="13.2" y="3.2" width="7.6" height="5.4" rx="2" />
      <rect x="3.2" y="15" width="7.6" height="5.8" rx="2" />
      <rect x="13.2" y="11.8" width="7.6" height="9" rx="2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19.5c.5-3.2 2.9-5 6-5s5.5 1.8 6 5" />
      <path d="M16.2 5.6a3 3 0 010 5.4M18 14.9c1.7.6 2.8 2.2 3 4.6" />
    </>
  ),
  guard: (
    <>
      <path d="M12 3l7 2.8v5.3c0 4.2-2.9 7.8-7 9.2-4.1-1.4-7-5-7-9.2V5.8z" />
      <circle cx="12" cy="10.2" r="2" />
      <path d="M8.6 16.4c.5-1.7 1.8-2.6 3.4-2.6s2.9.9 3.4 2.6" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.2l8.4 4.4-8.4 4.4-8.4-4.4z" />
      <path d="M4 12.4l8 4.2 8-4.2M4 16.6l8 4.2 8-4.2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5l1.9 4.9 4.9 1.9-4.9 1.9L12 17.1l-1.9-4.9-4.9-1.9 4.9-1.9z" />
      <path d="M18.6 15.4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </>
  ),
  flag: (
    <>
      <path d="M6 21V4.2" />
      <path d="M6 5.2c3.6-1.6 6.4 1.6 10 0v7.6c-3.6 1.6-6.4-1.6-10 0z" />
    </>
  ),
  scale: (
    <>
      <path d="M4 20.5V9.5L10 5v15.5M14 20.5V11l6-3.5v13" />
      <path d="M2.5 20.5h19" />
      <path d="M7 9.5v.01M7 13v.01M17 12v.01M17 15.5v.01" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M4 12h15m0 0l-5.5-5.5M19 12l-5.5 5.5" />,
  phone: (
    <>
      <path d="M6.2 3.8h2.4l1.7 4.2-2 1.3a11.5 11.5 0 005.4 5.4l1.3-2 4.2 1.7v2.4a2.2 2.2 0 01-2.4 2.2A15.8 15.8 0 014 6.2a2.2 2.2 0 012.2-2.4z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.6" />
      <path d="M3.6 7l8.4 5.6L20.4 7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.4 6-7.7 6-10a6 6 0 10-12 0c0 2.3 2 5.6 6 10z" />
      <circle cx="12" cy="10.8" r="2.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.4V12l3 1.8" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.2" width="15" height="10.3" rx="2.6" />
      <path d="M8 10.2V7.8a4 4 0 018 0v2.4" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5a4 4 0 01-.3-8A5.5 5.5 0 0117.6 10a3.9 3.9 0 01-.4 8.5z" />
    </>
  ),
  bolt: <path d="M13.2 3L5.5 13.4h5.1L10.2 21l7.8-10.6h-5.2z" />,
  play: <path d="M7 4.6l12 7.4-12 7.4z" />,
  apple: (
    <>
      <path d="M15.9 12.4c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.8-3.6.8s-1.9-.8-3.1-.8c-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.9z" />
      <path d="M13.6 5.4c.7-.8 1.1-1.9 1-3-.9.04-2.1.6-2.8 1.4-.6.7-1.1 1.9-1 3 1 .1 2.1-.5 2.8-1.4z" />
    </>
  ),
}

function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.6, filled = false, ...rest }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {path}
    </svg>
  )
}

export default Icon
