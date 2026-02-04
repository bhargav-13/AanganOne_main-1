import { Helmet } from 'react-helmet-async';

function SEO({
    title = "AanganOne | #1 Smart Society Management Platform",
    description = "AanganOne is the leading society management software for residential communities. Streamline billing, security, and RWA operations with AanganOne app.",
    keywords = "AanganOne, AanganOne app, AanganOne login, AanganOne society, community management, society management, RWA software",
    ogImage = "https://aanganone.com/og-image.jpg",
    url = "https://aanganone.com/"
}) {
    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AanganOne",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1250"
            },
            "description": description,
            "url": url,
            "image": ogImage,
            "provider": {
                "@type": "Organization",
                "name": "AanganOne",
                "url": "https://aanganone.com"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AanganOne",
            "url": "https://aanganone.com",
            "logo": "https://aanganone.com/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "support@aanganone.com",
                "url": "https://aanganone.com/contact"
            },
            "sameAs": [
                "https://www.facebook.com/aanganone",
                "https://twitter.com/aanganone",
                "https://www.linkedin.com/company/aanganone",
                "https://www.instagram.com/aanganone"
            ]
        }
    ];

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}

export default SEO;
