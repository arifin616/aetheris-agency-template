"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { cn } from "@/lib/utils"
import { faqs } from "@/data/faqs"

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <Section id="faq" className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-widest"
            >
              <HelpCircle className="size-4" />
              Answers & Insights
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground"
            >
              FREQUENTLY ASKED <br />
              <span className="text-primary">QUESTIONS</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-[2rem] border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300",
                  openIndex === index ? "ring-2 ring-primary/50 bg-accent dark:bg-white/10" : "hover:bg-accent/50 dark:hover:bg-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <span className="text-xl font-bold tracking-tight text-foreground">{faq.question}</span>
                  <div className={cn(
                    "flex size-10 items-center justify-center rounded-full border border-border dark:border-white/10 transition-transform duration-300",
                    openIndex === index ? "bg-primary text-white rotate-180" : "bg-muted dark:bg-white/5"
                  )}>
                    {openIndex === index ? <Minus className="size-5" /> : <Plus className="size-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-lg text-muted-foreground leading-relaxed border-t border-border dark:border-white/5 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
