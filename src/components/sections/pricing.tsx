"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout-wrapper"
import { pricingTiers } from "@/data/pricing"
import { PricingCard } from "@/components/ui/PricingCard"

export function Pricing() {
  return (
    <Section id="pricing" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground"
          >
            INVEST IN <br />
            <span className="text-primary">EXCELLENCE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            Transparent pricing for elite teams. Choose the level of power that matches your ambition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
