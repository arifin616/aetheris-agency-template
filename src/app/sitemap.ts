import { MetadataRoute } from "next"
import { siteConfig } from "@/data/site"
import { services } from "@/data/services"
import { portfolioItems } from "@/data/portfolio"
import { blogPosts } from "@/data/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = siteConfig.navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }))

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const portfolioRoutes = portfolioItems.map((p) => ({
    url: `${siteConfig.url}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogRoutes = blogPosts.map((b) => ({
    url: `${siteConfig.url}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const legalRoutes = ["privacy", "terms", "cookies"].map((l) => ({
    url: `${siteConfig.url}/legal/${l}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }))

  return [...routes, ...serviceRoutes, ...portfolioRoutes, ...blogRoutes, ...legalRoutes]
}
