# SEO Implementation Guide

## Overview
Basic SEO has been implemented across the AanganOne website to improve search engine visibility and social media sharing.

## What's Been Added

### 1. Meta Tags (index.html)
- **Primary Meta Tags**: Title, description, keywords, author, robots directives
- **Open Graph Tags**: For Facebook and social media sharing
- **Twitter Card Tags**: For Twitter sharing optimization
- **Canonical URL**: To prevent duplicate content issues
- **Theme Color**: Brand color for mobile browsers

### 2. SEO Files

#### robots.txt
Located at: `public/robots.txt`
- Guides search engine crawlers
- Allows all pages to be indexed
- Points to sitemap location

#### sitemap.xml
Located at: `public/sitemap.xml`
- Lists all main pages with priorities
- Includes update frequencies
- Helps search engines crawl efficiently

**Pages included:**
- Home (/)
- Feature (/feature)
- How It Works (/how-it-works)
- Contact (/contact)
- Privacy Policy (/privacy-policy)
- Our Story (/our-story)

### 3. SEO Component

#### Location
`src/components/SEO.jsx`

#### Features
- Dynamic meta tag management
- JSON-LD structured data (Schema.org)
- Reusable across all pages
- Customizable per page

#### Usage Example
```javascript
import SEO from './SEO'

function YourPage() {
  return (
    <div>
      <SEO 
        title="Your Page Title - AanganOne"
        description="Your page description"
        keywords="your, keywords, here"
        url="https://aanganone.com/your-page"
      />
      {/* Rest of your page content */}
    </div>
  )
}
```

### 4. Structured Data (JSON-LD)
The SEO component includes Schema.org structured data for:
- Software Application type
- Organization information
- Contact information
- Aggregate ratings
- Pricing information

## How to Use SEO Component on Other Pages

1. Import the SEO component:
```javascript
import SEO from './SEO'
```

2. Add it to your page component:
```javascript
<SEO 
  title="Page Title - AanganOne"
  description="Page description for search engines"
  keywords="relevant, keywords, for, this, page"
  url="https://aanganone.com/page-url"
  ogImage="https://aanganone.com/page-specific-image.jpg" // Optional
/>
```

## Best Practices

### Title Tags
- Keep under 60 characters
- Include brand name (AanganOne)
- Make it descriptive and unique per page

### Meta Descriptions
- Keep between 150-160 characters
- Include primary keywords naturally
- Make it compelling to encourage clicks

### Keywords
- Use 5-10 relevant keywords
- Separate with commas
- Focus on user intent

### Images for Social Sharing
- Create og-image.jpg (1200x630px recommended)
- Create twitter-image.jpg (1200x600px recommended)
- Place in public folder
- Update URLs in SEO component

## Testing Your SEO

### Tools to Use
1. **Google Search Console**: Monitor search performance
2. **Facebook Sharing Debugger**: Test Open Graph tags
3. **Twitter Card Validator**: Test Twitter cards
4. **Google Rich Results Test**: Test structured data
5. **Lighthouse (Chrome DevTools)**: Overall SEO audit

### Quick Checks
- View page source to verify meta tags
- Test social sharing on Facebook/Twitter
- Check robots.txt: `https://aanganone.com/robots.txt`
- Check sitemap: `https://aanganone.com/sitemap.xml`

## Updating Sitemap

When adding new pages:
1. Open `public/sitemap.xml`
2. Add new URL entry:
```xml
<url>
  <loc>https://aanganone.com/new-page</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## Future Enhancements

Consider adding:
- Google Analytics
- Google Tag Manager
- Schema.org FAQ markup for FAQ sections
- Local Business schema (if applicable)
- Article schema for blog posts
- Breadcrumb schema
- Review schema

## Dependencies

- `react-helmet-async`: For dynamic meta tag management

Installed with:
```bash
npm install react-helmet-async --legacy-peer-deps
```

## Notes

- Update the canonical URLs when deploying to production
- Replace placeholder images (og-image.jpg, twitter-image.jpg) with actual images
- Update contact email in structured data
- Keep sitemap.xml updated when adding/removing pages
- Update lastmod dates in sitemap when content changes significantly
