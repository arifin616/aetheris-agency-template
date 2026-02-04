"use client"

import Link from "next/link"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"
import { siteConfig } from "@/data/site"
import React from "react"

interface HeroProps {
  showPricing?: boolean
}

export function Hero({ showPricing = true }: HeroProps) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  }

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 blur-[140px] rounded-full" 
        />
        <div className="absolute inset-0 bg-grid opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="px-4 py-1.5 rounded-full border border-border dark:border-white/10 bg-muted/50 dark:bg-white/5 backdrop-blur-md text-sm font-medium text-primary dark:text-indigo-400 shadow-2xl">
              ✨ {siteConfig.name}: The New Standard of Web Excellence
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] max-w-full lg:max-w-4xl uppercase text-foreground"
          >
            THE PREMIER <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DIGITAL EXPERIENCE
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 max-w-xs sm:max-w-md md:max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-6 sm:flex-row"
          >
            {showPricing ? (
              <Button size="lg" variant="shiny" className="h-14 px-10 text-lg rounded-2xl" asChild>
                <Link href="/contact">
                  Get Started Now <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            ) : (
              <Button size="lg" variant="shiny" className="h-14 px-10 text-lg rounded-2xl" asChild>
                <Link href="/contact">
                  Contact for Pricing <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            )}
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-2xl border-border dark:border-white/10 hover:bg-accent dark:hover:bg-white/5 transition-all" asChild>
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </motion.div>

          {/* Floating Element Preview */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            className="mt-24 relative w-full max-w-6xl mx-auto group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-border dark:border-white/10 bg-muted dark:bg-slate-950 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-indigo-500/5 z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-8xl text-primary">
                  {siteConfig.name.split(' ').map((word, idx) => word[0]).join('').substring(0, 3)}
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="size-20 bg-primary/20 dark:bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-border dark:border-white/10 cursor-pointer"
                  >
                    <Play className="size-8 text-primary dark:text-indigo-400 fill-current ml-1" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground dark:text-white uppercase tracking-tight">Watch {siteConfig.name} in Action</h3>
                  <p className="text-muted-foreground mt-2">See why global enterprises choose our platform.</p>
                </div>
              </div>
            </div>

            {/* Floating Orbs */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 size-32 bg-indigo-500/30 blur-3xl rounded-full" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 size-40 bg-purple-500/20 blur-3xl rounded-full" 
            />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
