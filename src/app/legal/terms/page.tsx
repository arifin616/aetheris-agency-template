"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { FileText, Shield, Scale, Clock } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 px-4 py-1.5 rounded-full border border-border dark:border-white/10 bg-white/5 backdrop-blur-md text-sm font-bold text-indigo-400"
            >
              LEGAL DOCUMENTATION
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-tight"
            >
              TERMS OF <br />
              <span className="text-primary"> SERVICE </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-muted-foreground font-medium"
            >
              Last updated: February 1, 2026. Please read these terms carefully before using our services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2 space-y-16">
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: "By accessing and using Aetheris's services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use this website or our services. We reserve the right to update these terms at any time without prior notice."
                },
                {
                  title: "2. Description of Service",
                  content: "Aetheris provides premium digital templates, web development services, and design assets for high-performance teams. All services are subject to these terms and any specific agreements signed between Aetheris and the client."
                },
                {
                  title: "3. User Responsibilities",
                  content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate, current, and complete information during the registration process."
                },
                {
                  title: "4. Intellectual Property",
                  content: "All content, designs, code, and assets provided by Aetheris are the intellectual property of Aetheris or its licensors. Users are granted a limited, non-exclusive license to use the purchased assets according to the specific license type acquired."
                },
                {
                  title: "5. Limitation of Liability",
                  content: "Aetheris shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service. We provide our services on an 'as is' and 'as available' basis."
                }
              ].map((section, i) => (
                <motion.section 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-black tracking-tight uppercase text-foreground">{section.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </motion.section>
              ))}
            </div>

            <aside className="space-y-8">
              <div className="p-8 rounded-[2.5rem] border border-border dark:border-white/10 bg-white/5 backdrop-blur-xl sticky top-32 shadow-xl shadow-primary/5">
                <h3 className="text-xl font-bold mb-6 tracking-tight">Quick Navigation</h3>
                <nav className="space-y-4">
                  {[
                    { icon: Scale, label: "Compliance" },
                    { icon: Shield, label: "Security" },
                    { icon: Clock, label: "Updates" },
                    { icon: FileText, label: "License" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white/90 transition-all">
                        <item.icon className="size-5" />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-widest text-muted-foreground group-hover:text-foreground">{item.label}</span>
                    </div>
                  ))}
                </nav>
                <div className="mt-10 pt-8 border-t border-border dark:border-white/10">
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    Have questions about our terms? Contact our legal team at <span className="text-primary">legal@aetheris-global.com</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
