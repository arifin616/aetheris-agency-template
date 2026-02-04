"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { portfolioItems } from "@/data/portfolio"
import { ExternalLink, ArrowRight } from "lucide-react"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const categories = ["All", ...Array.from(new Set(portfolioItems.map(p => p.category)))]

  const filteredProjects = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory)

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <PageHeader 
            badge="OUR WORK"
            title="DIGITAL MASTERPIECES"
            subtitle="Explore our portfolio of elite digital products crafted with precision and passion for global leaders."
          />

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "shiny" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-2xl px-8 h-12 text-base font-bold transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <Link href={`/portfolio/${project.slug}`} className="block" key={project.slug}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-grid opacity-20 transition-transform group-hover:scale-110" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-slate-950 via-background/40 dark:via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-bold text-primary mb-2 tracking-[0.2em] uppercase">{project.category}</span>
                    <h3 className="text-3xl font-black text-foreground dark:text-white tracking-tight mb-6 uppercase">{project.title}</h3>
                    <div className="flex gap-4">
                      <Button variant="shiny" size="sm" className="rounded-xl px-6">
                        View Case Study
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-xl border-border dark:border-white/20 hover:bg-accent dark:hover:bg-white/10">
                        <ArrowRight className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 group-hover:opacity-0 transition-opacity">
                     <span className="text-sm font-bold text-primary mb-4 tracking-[0.2em] uppercase">{project.client}</span>
                     <h3 className="text-4xl font-black text-foreground dark:text-white tracking-tighter text-center uppercase leading-[0.9]">{project.title}</h3>
                  </div>
                </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
