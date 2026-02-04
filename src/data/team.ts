import { User, Code, Palette, Zap, Shield, Brain } from "lucide-react"

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  icon: any;
}

export const team: TeamMember[] = [
  {
    name: "Elena Vance",
    role: "Chief Architect",
    bio: "Visionary leader with 15+ years experience in distributed systems and high-scale digital architecture.",
    icon: Code,
  },
  {
    name: "Marcus Thorne",
    role: "Design Principal",
    bio: "Award-winning UI/UX designer obsessed with glassmorphic aesthetics and user-centric psychology.",
    icon: Palette,
  },
  {
    name: "Dr. Sarah Chen",
    role: "AI & Intelligence Lead",
    bio: "Pioneer in Large Language Model integration and proactive machine-speed defense systems.",
    icon: Brain,
  },
  {
    name: "Julian Reed",
    role: "Performance Engineer",
    bio: "Specialist in sub-second global asset delivery and serverless optimization for elite platforms.",
    icon: Zap,
  },
  {
    name: "Aria Sterling",
    role: "Strategy Director",
    bio: "Expert in brand positioning and sustainable growth for rapidly expanding global enterprises.",
    icon: Shield,
  },
  {
    name: "Viktor Petrov",
    role: "Full-Stack Lead",
    bio: "Technical orchestrator focused on Next.js scalability and robust backend infrastructure.",
    icon: User,
  },
];
