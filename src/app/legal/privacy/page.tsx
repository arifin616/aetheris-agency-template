"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { Shield, Eye, Lock, Globe } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 px-4 py-1.5 rounded-full border border-border dark:border-white/10 bg-white/5 backdrop-blur-md text-sm font-bold text-purple-400"
            >
              PRIVACY PROTECTION
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-tight"
            >
              PRIVACY <br />
              <span className="text-primary"> POLICY </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg text-muted-foreground font-medium"
            >
              Your privacy is our priority. Learn how Aetheris protects and manages your personal data.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2 space-y-16">
              {[
                {
                  title: "1. Information Collection",
                  content: "We collect information that you provide directly to us, such as when you create an account, purchase a service, or communicate with our support team. This may include your name, email address, and payment information."
                },
                {
                  title: "2. How We Use Information",
                  content: "We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about updates, security alerts, and support messages."
                },
                {
                  title: "3. Data Sharing",
                  content: "We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf, or when required by law."
                },
                {
                  title: "4. Data Security",
                  content: "We implement robust security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure."
                },
                {
                  title: "5. Your Choices",
                  content: "You have the right to access, update, or delete your personal information. You can manage your account settings or contact us directly to exercise these rights at any time."
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
                <h3 className="text-xl font-bold mb-6 tracking-tight">Our Commitment</h3>
                <div className="space-y-6">
                  {[
                    { icon: Eye, title: "Transparency", desc: "Clear data practices" },
                    { icon: Lock, title: "Security", desc: "Enterprise encryption" },
                    { icon: Globe, title: "GDPR Ready", desc: "Global compliance" },
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
                    Concerned about your data? Reach out to our Data Protection Officer at <span className="text-primary">privacy@aetheris-global.com</span>
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
