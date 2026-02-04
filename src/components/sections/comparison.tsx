"use client"

import { motion } from "framer-motion"
import { CircleCheckBig, CircleX, ShieldCheck, CircleHelp } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { cn } from "@/lib/utils"

const comparisonData = [
  {
    feature: "Fully Built Internal Pages",
    aetheris: true,
    typical: "Limited (3-4)",
    details: "9+ complete pages including Services, Portfolio, and Blog systems.",
  },
  {
    feature: "No Broken Links",
    aetheris: true,
    typical: false,
    details: "Every route and internal link is fully functional and resolved.",
  },
  {
    feature: "Portfolio Case Studies",
    aetheris: true,
    typical: false,
    details: "High-quality, detailed studies with real industry insights.",
  },
  {
    feature: "Full Blog System",
    aetheris: true,
    typical: "Static layout only",
    details: "Dynamic routing, category filtering, and rich content management ready.",
  },
  {
    feature: "Dark/Light Mode Fully Styled",
    aetheris: true,
    typical: "Partial/None",
    details: "Seamless, persisted theme switching with refined contrast ratios.",
  },
  {
    feature: "SEO-Ready",
    aetheris: true,
    typical: "Basic tags only",
    details: "JSON-LD, Dynamic Metadata API, Sitemap, and Robots.txt included.",
  },
  {
    feature: "Premium Animations",
    aetheris: true,
    typical: "Basic CSS",
    details: "Professional Framer Motion orchestrations for scroll, hover, and state.",
  },
  {
    feature: "Clean Scalable Code",
    aetheris: true,
    typical: false,
    details: "Strict TypeScript, modular components, and enterprise-grade architecture.",
  },
  {
    feature: "Production Ready",
    aetheris: true,
    typical: "Beta/Unfinished",
    details: "Pixel-perfect responsiveness and performance optimized for launch.",
  },
]

export function Comparison() {
  return (
    <Section className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary uppercase tracking-widest"
          >
            <ShieldCheck className="size-4" />
            The Quality Benchmark
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-foreground"
          >
            NOT ALL AGENCIES <br />
            ARE CREATED <span className="text-primary">EQUAL</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
          >
            Most agencies provide visual shells. Aetheris is a fully engineered digital ecosystem designed for performance, credibility, and long-term scalability.
          </motion.p>
        </div>

        <div className="relative overflow-hidden rounded-[3rem] border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border dark:border-white/10 bg-muted/50 dark:bg-white/5">
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">Core Feature</th>
                  <th className="p-8 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xl font-black tracking-tighter text-foreground dark:text-white">AETHERIS</span>
                      <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mt-1">Our Standard</span>
                    </div>
                  </th>
                  <th className="p-8 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-xl font-black tracking-tighter text-muted-foreground">LUMINA</span>
                      <span className="text-[10px] font-bold text-muted-foreground/60 tracking-[0.3em] uppercase mt-1">Competitor</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={item.feature} 
                    className={cn(
                      "group border-b border-border dark:border-white/5 transition-colors hover:bg-muted/50 dark:hover:bg-white/[0.02]",
                      index === comparisonData.length - 1 && "border-0"
                    )}
                  >
                    <td className="p-8">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-foreground dark:text-white mb-1">{item.feature}</span>
                        <span className="text-sm text-muted-foreground leading-relaxed max-w-xs">{item.details}</span>
                      </div>
                    </td>
                    <td className="p-8 text-center bg-primary/5">
                      <div className="flex justify-center">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                          <CircleCheckBig className="size-6" />
                        </div>
                      </div>
                    </td>
                    <td className="p-8 text-center">
                      <div className="flex justify-center">
                        {typeof item.typical === "boolean" ? (
                          item.typical ? (
                            <CircleCheckBig className="size-6 text-muted-foreground/30" />
                          ) : (
                            <div className="flex size-10 items-center justify-center rounded-xl bg-muted dark:bg-white/5 text-muted-foreground/20">
                              <CircleX className="size-6" />
                            </div>
                          )
                        ) : (
                          <span className="text-sm font-bold text-muted-foreground/70 italic">{item.typical}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-10 bg-muted/30 dark:bg-white/5 border-t border-border dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
                <CircleHelp className="size-6" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground dark:text-white">Have questions about specific features?</p>
                <p className="text-sm text-muted-foreground">Our technical team is available for elite consultation.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-primary uppercase">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              Verified Premium Standard
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
