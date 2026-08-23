/**
 * Page metadata.
 *
 * Uses React 19's built-in document metadata support: <title>, <meta> and
 * <link> rendered here are hoisted into <head> automatically and removed
 * when the route unmounts. That replaces react-helmet-async, which does not
 * support React 19 and broke `npm install` with a peer-dependency conflict.
 */
function SEO({
  title = 'AanganOne — Smart Society, Apartment & Community Management App',
  description = 'AanganOne digitises society management end to end — QR visitor entry, maintenance billing, UPI payments, complaints, notices, staff and parking in one app for residents, admins, committees and guards.',
  keywords = 'AanganOne, society management app, apartment management software, community management platform India, QR visitor entry, maintenance billing, RWA software, gated community app',
  ogImage = 'https://aanganone.com/og-image.png',
  url = 'https://aanganone.com/',
  schema = [],
}) {
  /* Global entity schema (Organization, WebSite, SoftwareApplication) lives in
     index.html so it is present before hydration. Only page-specific schema —
     BreadcrumbList, FAQPage, Article — is emitted here, to avoid duplicates. */
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AanganOne" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={url} />

      {schema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  )
}

export default SEO
