import { siteConfig } from "@/data/site"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "sameAs": [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US",
    },
    "priceRange": "$$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
