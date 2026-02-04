export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  thumbnail: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  results: { label: string; value: string }[];
  timeline: { phase: string; duration: string; description: string }[];
  team: { role: string; members: number }[];
  content: string;
}

export const portfolioItems: CaseStudy[] = [
  {
    slug: "nexus-fintech-revolution",
    title: "Revolutionizing Fintech with Nexus",
    client: "Nexus Global",
    category: "Full-Stack Development",
    description: "A complete overhaul of a legacy banking system into a modern, high-speed digital experience.",
    thumbnail: "/assets/portfolio/nexus.jpg",
    overview: "Nexus Global needed a complete digital transformation to modernize their legacy banking system. We delivered a high-performance platform that handles millions of transactions while maintaining enterprise-grade security standards.",
    challenges: [
      "Legacy system with poor scalability",
      "Outdated security protocols",
      "Slow transaction processing times",
      "Poor user experience on mobile devices"
    ],
    solutions: [
      "Implemented microservices architecture for better scalability",
      "Integrated advanced encryption and multi-factor authentication",
      "Optimized database queries and caching strategies",
      "Redesigned responsive UI with mobile-first approach"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    results: [
      { label: "Transaction Speed", value: "+300%" },
      { label: "User Retention", value: "+45%" },
      { label: "Security Incidents", value: "0" },
      { label: "Mobile Conversion", value: "+180%" }
    ],
    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Requirements gathering and technical assessment" },
      { phase: "Architecture", duration: "3 weeks", description: "System design and technology stack selection" },
      { phase: "Development", duration: "12 weeks", description: "Full-stack development and integration" },
      { phase: "Testing", duration: "3 weeks", description: "Security audits and performance optimization" },
      { phase: "Deployment", duration: "2 weeks", description: "Production launch and monitoring setup" }
    ],
    team: [
      { role: "Project Lead", members: 1 },
      { role: "Full-Stack Developers", members: 3 },
      { role: "UI/UX Designers", members: 2 },
      { role: "Security Specialists", members: 2 }
    ],
    content: "We partnered with Nexus Global to redesign their entire digital infrastructure. By implementing a microservices architecture and a glassmorphic UI, we delivered a platform that is both beautiful and incredibly efficient. The new system processes transactions 300% faster while maintaining the highest security standards.",
  },
  {
    slug: "aurora-lifestyle-brand",
    title: "Luxury Reimagined for Aurora",
    client: "Aurora Lifestyle",
    category: "UI/UX Design",
    description: "Creating an immersive digital showroom for a premium lifestyle brand.",
    thumbnail: "/assets/portfolio/aurora.jpg",
    overview: "Aurora Lifestyle required a premium digital showroom that would showcase their luxury products with the same elegance as their physical stores. We created an immersive experience that drives conversions while maintaining brand prestige.",
    challenges: [
      "Need for premium, high-end aesthetic",
      "Complex product visualization requirements",
      "High expectations for user experience",
      "Integration with existing inventory systems"
    ],
    solutions: [
      "Created custom 3D product visualization tools",
      "Implemented sophisticated animation sequences",
      "Designed intuitive navigation with luxury feel",
      "Built seamless API integration with inventory management"
    ],
    technologies: ["React", "Three.js", "GSAP", "Shopify API", "Cloudinary", "Framer Motion"],
    results: [
      { label: "Conversion Rate", value: "+28%" },
      { label: "Avg. Session Duration", value: "+120s" },
      { label: "Mobile Sales", value: "+60%" },
      { label: "Bounce Rate", value: "-40%" }
    ],
    timeline: [
      { phase: "Research", duration: "2 weeks", description: "Brand analysis and user experience research" },
      { phase: "Design", duration: "4 weeks", description: "UI/UX design and 3D visualization concepts" },
      { phase: "Development", duration: "8 weeks", description: "Frontend development and 3D integration" },
      { phase: "Testing", duration: "2 weeks", description: "Cross-browser testing and performance optimization" },
      { phase: "Launch", duration: "1 week", description: "Production deployment and analytics setup" }
    ],
    team: [
      { role: "Creative Director", members: 1 },
      { role: "3D Artists", members: 2 },
      { role: "Frontend Developers", members: 2 },
      { role: "UX Researchers", members: 1 }
    ],
    content: "Aurora needed a digital presence that matched the quality of their physical products. Our design team focused on high-resolution imagery, subtle animations, and a seamless checkout experience. The result is a digital showroom that feels as luxurious as visiting one of their flagship stores.",
  },
  {
    slug: "stellar-saas-scaling",
    title: "Scaling Stellar to New Heights",
    client: "Stellar AI",
    category: "Digital Strategy",
    description: "Strategic growth planning and performance optimization for a rapidly expanding SaaS platform.",
    thumbnail: "/assets/portfolio/stellar.jpg",
    overview: "Stellar AI was experiencing rapid growth but their infrastructure couldn't scale efficiently. We developed a comprehensive digital strategy that optimized performance while reducing operational costs through smart architecture decisions.",
    challenges: [
      "Rapid user growth outpacing infrastructure",
      "High operational costs from inefficient scaling",
      "Performance degradation during peak usage",
      "Complex multi-region deployment requirements"
    ],
    solutions: [
      "Implemented edge computing with CDN optimization",
      "Redesigned architecture for horizontal scaling",
      "Automated deployment pipelines with monitoring",
      "Optimized database queries and caching layers"
    ],
    technologies: ["Next.js", "Vercel", "MongoDB", "Redis", "Docker", "Kubernetes", "Terraform"],
    results: [
      { label: "User Base", value: "1M+" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Operational Cost", value: "-35%" },
      { label: "Page Load Time", value: "-60%" }
    ],
    timeline: [
      { phase: "Audit", duration: "1 week", description: "Performance analysis and bottleneck identification" },
      { phase: "Strategy", duration: "2 weeks", description: "Scalability planning and architecture redesign" },
      { phase: "Implementation", duration: "6 weeks", description: "Infrastructure migration and optimization" },
      { phase: "Monitoring", duration: "2 weeks", description: "Analytics setup and performance tracking" },
      { phase: "Optimization", duration: "3 weeks", description: "Continuous improvement and cost reduction" }
    ],
    team: [
      { role: "Solutions Architect", members: 1 },
      { role: "DevOps Engineers", members: 2 },
      { role: "Backend Developers", members: 2 },
      { role: "Data Scientists", members: 1 }
    ],
    content: "Stellar AI was growing fast but their infrastructure was struggling. We implemented an edge-computing strategy and optimized their Next.js application to handle millions of concurrent users. The optimized platform now serves over 1 million users with 99/100 Lighthouse scores while reducing operational costs by 35%.",
  },
  {
    slug: "vanguard-security-portal",
    title: "Enterprise-Grade Security for Vanguard",
    client: "Vanguard Defense",
    category: "Cyber Security",
    description: "Building a secure, high-stakes portal for international defense communications.",
    thumbnail: "/assets/portfolio/vanguard.jpg",
    overview: "Vanguard Defense required a mission-critical security portal for handling classified international communications. We delivered an enterprise-grade solution with military-level encryption and real-time threat detection capabilities.",
    challenges: [
      "Military-grade security requirements",
      "Real-time threat detection needs",
      "Multi-factor authentication complexity",
      "Zero-downtime operational requirements"
    ],
    solutions: [
      "Implemented AES-256 end-to-end encryption",
      "Developed real-time threat monitoring system",
      "Created biometric authentication workflows",
      "Built redundant infrastructure for 99.999% uptime"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "WebAssembly", "WebRTC", "OpenSSL"],
    results: [
      { label: "Encryption Level", value: "AES-256" },
      { label: "Uptime", value: "99.999%" },
      { label: "Threat Mitigation", value: "Real-time" },
      { label: "Response Time", value: "< 100ms" }
    ],
    timeline: [
      { phase: "Security Audit", duration: "3 weeks", description: "Compliance requirements and threat modeling" },
      { phase: "Architecture", duration: "4 weeks", description: "Secure system design and encryption implementation" },
      { phase: "Development", duration: "10 weeks", description: "Portal development with security features" },
      { phase: "Testing", duration: "4 weeks", description: "Penetration testing and security validation" },
      { phase: "Deployment", duration: "2 weeks", description: "Secure production deployment and monitoring" }
    ],
    team: [
      { role: "Security Lead", members: 1 },
      { role: "Cryptography Experts", members: 2 },
      { role: "Full-Stack Developers", members: 3 },
      { role: "Compliance Officers", members: 1 }
    ],
    content: "Security was the top priority for Vanguard. We built a custom portal with multi-layer encryption and biometric authentication, ensuring that sensitive data remains protected at all times. The system maintains 99.999% uptime with real-time threat detection and military-grade AES-256 encryption.",
  },
];
