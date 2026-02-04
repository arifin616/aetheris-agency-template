"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Smartphone, Globe, Code, Zap as Fast } from "lucide-react"
import { Section } from "@/components/layout-wrapper"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const features = [
  {
    title: "Blazing Fast",
    description: "Optimized for speed with Next.js App Router and edge computing support.",
    icon: Fast,
  },
  {
    title: "Secure by Design",
    description: "Built-in security features and best practices to keep your data safe.",
    icon: Shield,
  },
  {
    title: "Mobile First",
    description: "Fully responsive design that looks great on any screen size or device.",
    icon: Smartphone,
  },
  {
    title: "Global Scale",
    description: "Multi-language support and internationalization ready out of the box.",
    icon: Globe,
  },
  {
    title: "Clean Code",
    description: "Strict TypeScript support and modular component architecture.",
    icon: Code,
  },
  {
    title: "Easy Customization",
    description: "Easily tweak colors, fonts, and layouts using Tailwind CSS.",
    icon: Zap,
  },
]

export function Features() {
  return (
    <Section className="relative bg-background/50 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground"
          >
            ENGINEERED FOR <br />
            <span className="text-primary">SUPREMACY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Stop settling for average. Lumina delivers the raw power and polished aesthetics your elite digital products deserve.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-accent dark:hover:bg-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="absolute -right-4 -top-4 size-24 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white/90">
                <feature.icon className="size-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{feature.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
