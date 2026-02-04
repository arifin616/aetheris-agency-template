"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { PageHeader } from "@/components/ui/page-header"
import { services } from "@/data/services"
import { ArrowRight, Navigation, LayoutDashboard, Terminal, Rocket, Cpu, ShieldPlus } from "lucide-react"

const iconMap = {
  Navigation,
  LayoutDashboard,
  Terminal,
  Rocket,
  Cpu,
  ShieldPlus,
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <PageHeader 
            badge="OUR EXPERTISE"
            title="PREMIUM SOLUTIONS"
            subtitle="We offer a wide range of services to help you build, launch, and scale your digital products with elite precision."
          />

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Terminal
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-[2.5rem] border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 p-10 backdrop-blur-xl transition-all hover:bg-accent dark:hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="mb-8 flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white/90 group-hover:scale-110">
                    <Icon className="size-8" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight uppercase text-foreground">{service.title}</h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all"
                    >
                      Explore Service <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
