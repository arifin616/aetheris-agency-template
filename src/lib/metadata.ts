import { Metadata } from "next"
import { siteConfig } from "@/data/site"

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.svg",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Aetheris Agency",
      "Premium Template",
      "High-performance Web",
      "Digital Architecture",
      "Enterprise Intelligence",
    ],
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@aetheris",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
