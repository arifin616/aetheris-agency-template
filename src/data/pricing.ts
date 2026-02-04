export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small projects.",
    features: [
      "Up to 5 Projects",
      "Basic Analytics",
      "24/7 Support",
      "Community Access",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "Ideal for growing teams and businesses.",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "Custom Domains",
      "Team Collaboration",
    ],
    cta: "Start Free Trial",
    featured: true,
    badge: "MOST ELITE",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs.",
    features: [
      "Everything in Pro",
      "Custom SLA",
      "Dedicated Account Manager",
      "SSO & Security",
      "White-labeling",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];
