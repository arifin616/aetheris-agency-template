import { BlogPost, blogPosts } from '@/data/blog';
import { CaseStudy, portfolioItems } from '@/data/portfolio';

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate async operation (in a real app, this might be a database call)
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = blogPosts.find(post => post.slug === slug);
      resolve(post || null);
    }, 0);
  });
}

export async function getPortfolioItemBySlug(slug: string): Promise<CaseStudy | null> {
  // Simulate async operation (in a real app, this might be a database call)
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = portfolioItems.find(item => item.slug === slug);
      resolve(item || null);
    }, 0);
  });
}

import { Service, services } from '@/data/services';

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // Simulate async operation (in a real app, this might be a database call)
  return new Promise((resolve) => {
    setTimeout(() => {
      const service = services.find(service => service.slug === slug);
      resolve(service || null);
    }, 0);
  });
}