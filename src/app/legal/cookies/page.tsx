"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { Cookie, Info, Settings, ShieldCheck } from "lucide-react"

export default function CookiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 px-4 py-1.5 rounded-full border border-border dark:border-white/10 bg-white/5 backdrop-blur-md text-sm font-bold text-emerald-400"
            >
              COOKIE SETTINGS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-tight"
            >
              COOKIE <br />
              <span className="text-primary"> POLICY </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-muted-foreground font-medium"
            >
              How we use cookies and similar technologies to enhance your experience on our platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2 space-y-16">
              {[
                {
                  title: "1. What are Cookies?",
                  content: "Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device and provide a more personalized experience."
                },
                {
                  title: "2. Types of Cookies We Use",
                  content: "We use essential cookies for the website to function, analytical cookies to understand how you use our site, and functional cookies to remember your preferences."
                },
                {
                  title: "3. Third-Party Cookies",
                  content: "Some cookies are placed by third-party services that appear on our pages. We do not control the use of these cookies and suggest you check the third party's website for more information."
                },
                {
                  title: "4. Managing Cookies",
                  content: "Most web browsers allow you to control cookies through their settings. You can block or delete cookies, but this may affect your ability to use certain features of our website."
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
                <h3 className="text-xl font-bold mb-6 tracking-tight">Cookie Insight</h3>
                <div className="space-y-6">
                  {[
                    { icon: ShieldCheck, title: "Necessary", desc: "Core site functions" },
                    { icon: Info, title: "Analytics", desc: "Usage monitoring" },
                    { icon: Settings, title: "Preferences", desc: "Customized UI" },
                    { icon: Cookie, title: "Marketing", desc: "Targeted ads" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <item.icon className="size-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground uppercase text-xs tracking-widest">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-border dark:border-white/10">
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    Want to reset your cookie preferences? Visit our <span className="text-primary cursor-pointer underline">Consent Manager</span>
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
