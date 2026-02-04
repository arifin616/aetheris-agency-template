"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Palette, Smartphone, Globe, Zap, Camera } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { portfolioItems } from "@/data/portfolio"

export function PortfolioGrid() {
  return (
    <Section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground"
            >
              SELECTED <br />
              <span className="text-primary">PROJECTS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              We don't just build websites; we create digital legacies. Explore our latest work with visionary clients across the globe.
            </motion.p>
          </div>
          <Button variant="outline" size="lg" className="rounded-2xl border-border dark:border-white/10" asChild>
            <Link href="/portfolio">View All Works <ArrowRight className="ml-2 size-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <Link href={`/portfolio/${item.slug}`} className="block" key={item.slug}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-muted dark:bg-slate-900 border border-border dark:border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-slate-950 via-background/20 dark:via-slate-950/20 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-8xl text-primary">
                  {item.title.split(' ').map((word, idx) => word[0]).join('').substring(0, 3)}
                </div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-2">{item.category}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-foreground dark:text-white uppercase group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-4 text-muted-foreground max-w-md line-clamp-2">{item.description}</p>
                <div className="mt-8 flex items-center gap-8 border-t border-border dark:border-white/10 pt-8">
                  {item.results.slice(0, 2).map((res) => (
                    <div key={res.label}>
                      <div className="text-2xl font-black text-foreground dark:text-white">{res.value}</div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{res.label}</div>
                    </div>
                  ))}
                  <div className="ml-auto" aria-label="View case study">
                    <Button variant="ghost" size="icon" className="rounded-full bg-muted/50 dark:bg-white/5 hover:bg-primary hover:text-white/90">
                      <ArrowRight className="size-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
