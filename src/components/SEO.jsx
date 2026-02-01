import { Helmet } from 'react-helmet-async';

function SEO({
    title = "AanganOne - Smart Community Management Platform",
    description = "AanganOne is a comprehensive community management platform designed for RWAs and residential societies. Streamline communication, maintenance, security, accounting, and daily operations.",
    keywords = "community management, society management, RWA software, residential society app",
    ogImage = "https://aanganone.com/og-image.jpg",
    url = "https://aanganone.com/"
}) {
    const structuredData = {
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
            "ratingValue": "4.8",
            "ratingCount": "500"
        },
        "description": description,
        "url": url,
        "image": ogImage,
        "provider": {
            "@type": "Organization",
            "name": "AanganOne",
            "url": "https://aanganone.com",
            "logo": "https://aanganone.com/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@aanganone.com"
            }
        }
    };

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
