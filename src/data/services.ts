export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    description: "We craft data-driven roadmaps to navigate the complex digital landscape and achieve sustainable growth.",
    icon: "Navigation",
    features: [
      "Market Intelligence",
      "Brand Positioning",
      "Growth Hacking",
      "Digital Transformation",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Creating immersive, user-centric interfaces that blend aesthetic beauty with seamless functionality.",
    icon: "LayoutDashboard",
    features: [
      "User Experience Research",
      "Visual Identity Design",
      "Interactive Prototyping",
      "Design System Development",
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    description: "Engineering scalable, high-performance web applications using the most modern technology stacks.",
    icon: "Terminal",
    features: [
      "Next.js Architecture",
      "Scalable Backend Systems",
      "API Integration",
      "Cloud Infrastructure",
    ],
  },
  {
    slug: "performance-optimization",
    title: "Performance Optimization",
    description: "Fine-tuning every aspect of your digital product to ensure lightning-fast speeds and elite performance.",
    icon: "Rocket",
    features: [
      "Core Web Vitals Improvement",
      "Load Speed Optimization",
      "Database Tuning",
      "Asset Delivery Strategy",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI & Machine Learning",
    description: "Harnessing the power of artificial intelligence to automate processes and unlock deep business insights.",
    icon: "Cpu",
    features: [
      "Custom LLM Integration",
      "Predictive Analytics",
      "Natural Language Processing",
      "Workflow Automation",
    ],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    description: "Protecting your digital assets with enterprise-grade security protocols and proactive threat monitoring.",
    icon: "ShieldPlus",
    features: [
      "Security Audits",
      "Encryption Standards",
      "Access Management",
      "Incident Response",
    ],
  },
];
