"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { testimonials } from "@/data/testimonials"

export function Testimonials() {
  return (
    <Section className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground"
          >
            TRUSTED BY <br />
            <span className="text-primary">VISIONARIES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-[2.5rem] border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-xl"
            >
              <Quote className="size-10 text-primary/20 mb-8" />
              <p className="text-lg text-foreground dark:text-white font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto pt-8 border-t border-border dark:border-white/5">
                <p className="font-bold text-foreground dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
