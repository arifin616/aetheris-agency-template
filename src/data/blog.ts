export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-digital-architecture",
    title: "The Future of Digital Architecture in 2026",
    excerpt: "Exploring how edge computing and AI-native design are reshaping the way we build the web.",
    date: "Feb 1, 2026",
    author: "Elena Vance",
    category: "Architecture",
    image: "/assets/blog/architecture.jpg",
    content: "The landscape of digital architecture is shifting. As we move deeper into 2026, the traditional boundaries between frontend and backend are blurring. With the rise of AI-native frameworks and distributed edge computing, the focus has shifted from simple responsiveness to proactive intelligence...",
  },
  {
    slug: "mastering-glassmorphism",
    title: "Mastering Glassmorphism: A Guide for Elite Brands",
    excerpt: "How to implement high-ticket aesthetic trends without compromising on performance or accessibility.",
    date: "Jan 28, 2026",
    author: "Marcus Thorne",
    category: "Design",
    image: "/assets/blog/glassmorphism.jpg",
    content: "Glassmorphism remains the hallmark of premium digital products. However, achieving that perfect balance of blur, transparency, and contrast is more than just a CSS filter. In this guide, we dive deep into the color theory and accessibility standards required for elite branding...",
  },
  {
    slug: "ai-scaling-strategies",
    title: "Strategic AI Scaling for Global Enterprises",
    excerpt: "Moving beyond chatbots: How to integrate LLMs into your core business workflow.",
    date: "Jan 15, 2026",
    author: "Dr. Sarah Chen",
    category: "Strategy",
    image: "/assets/blog/ai-strategy.jpg",
    content: "Most companies are still treating AI as a novelty. The real winners in 2026 are those who integrate Large Language Models into their internal operational logic. We examine case studies of companies that have successfully automated 40% of their operational overhead...",
  },
  {
    slug: "performance-as-a-feature",
    title: "Why Performance is Your Most Important Feature",
    excerpt: "The correlation between millisecond delays and multi-million dollar revenue losses.",
    date: "Jan 10, 2026",
    author: "Elena Vance",
    category: "Engineering",
    image: "/assets/blog/performance.jpg",
    content: "In a world of infinite choices, speed is the ultimate differentiator. Every 100ms of latency can cost an enterprise up to 1% in conversion. We look at the technical stack of Aetheris and how we achieve sub-second load times globally...",
  },
  {
    slug: "sustainable-digital-ecosystems",
    title: "Building Sustainable Digital Ecosystems",
    excerpt: "How clean code and efficient architecture contribute to a greener digital future.",
    date: "Jan 5, 2026",
    author: "Julian Reed",
    category: "Sustainability",
    image: "/assets/blog/sustainability.jpg",
    content: "Digital sustainability is no longer an afterthought. Efficient code doesn't just run faster; it consumes less energy. From serverless optimization to asset compression, we explore how Aetheris builds for the long term...",
  },
  {
    slug: "security-in-the-ai-era",
    title: "Security in the AI Era: Proactive Defense",
    excerpt: "Protecting against sophisticated AI-driven threats with machine-speed response systems.",
    date: "Jan 1, 2026",
    author: "Dr. Sarah Chen",
    category: "Security",
    image: "/assets/blog/security.jpg",
    content: "The threats we face today are smarter than ever. Traditional firewalls are no longer sufficient. Aetheris implements proactive defense mechanisms that use machine learning to identify and neutralize threats before they even reach your perimeter...",
  },
];
