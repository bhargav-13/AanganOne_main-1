import { useEffect } from 'react'

/**
 * Page metadata.
 *
 * index.html carries static <title>/<meta>/<link> tags as a fallback for
 * crawlers and link-preview bots that don't execute JS (WhatsApp, Facebook,
 * LinkedIn, iMessage — Googlebot is the exception, it does run JS). This
 * component updates those SAME elements in place per route rather than
 * rendering new ones: React's built-in head-tag support only de-dupes
 * against tags it rendered itself, so declaring a second <meta name="description">
 * here would leave both in the DOM instead of replacing the static one.
 */
const DEFAULTS = {
  title: 'AanganOne — Smart Society, Apartment & Community Management App',
  description:
    'AanganOne digitises society management end to end — QR visitor entry, maintenance billing, UPI payments, complaints, notices, staff and parking in one app for residents, admins, committees and guards.',
  keywords:
    'AanganOne, society management app, apartment management software, community management platform India, QR visitor entry, maintenance billing, RWA software, gated community app',
  ogImage: 'https://aanganone.com/og-image.png',
  url: 'https://aanganone.com/',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}

const setMeta = (selector, value) => {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  keywords = DEFAULTS.keywords,
  ogImage = DEFAULTS.ogImage,
  url = DEFAULTS.url,
  robots = DEFAULTS.robots,
  schema = [],
}) {
  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', description)
    setMeta('meta[name="keywords"]', keywords)
    setMeta('meta[name="robots"]', robots)

    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:image"]', ogImage)
    setMeta('meta[property="og:url"]', url)

    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="twitter:image"]', ogImage)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', url)

    /* Page-specific structured data (BreadcrumbList, FAQPage, Article) has no
       static counterpart, so it's safe to own this <script> tag directly. */
    let script
    if (schema.length > 0) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    }

    return () => {
      if (script) script.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, ogImage, url, robots, JSON.stringify(schema)])

  return null
}

export default SEO
