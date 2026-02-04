"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { PageHeader } from "@/components/ui/page-header"
import { team } from "@/data/team"
import { Target, Rocket, Award, ShieldCheck, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <PageHeader 
            badge="OUR STORY"
            title="BEYOND THE ORDINARY"
            subtitle="Founded on the principle of uncompromising quality, Aetheris bridges the gap between complex enterprise requirements and elegant digital experiences. We partner with visionaries to build systems that aren't just functional—they're transformative."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              { icon: Target, title: "Our Mission", text: "To empower global enterprises with the digital architecture needed to solve the world's most complex challenges." },
              { icon: Rocket, title: "Our Vision", text: "To be the silent engine behind the world's most influential and enduring digital platforms." },
              { icon: Award, title: "Our Values", text: "Precision, Innovation, Integrity, and Velocity. We architect the standards that others follow." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-xl hover:bg-accent dark:hover:bg-white/10 transition-all"
              >
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <item.icon className="size-7" />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4 uppercase text-foreground">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-48">
            <div className="flex flex-col items-center text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground">The <span className="text-primary">Elite</span> Team</h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">The brilliant minds behind Aetheris's technological supremacy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-xl mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-indigo-500/5 z-0" />
                    <div className="flex h-full items-center justify-center">
                      <member.icon className="size-24 text-primary opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-foreground">{member.name}</h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1">{member.role}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-48 p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-indigo-500 to-purple-700 text-white/90 dark:text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8 uppercase">
                  WE BUILD <br /> FOR THE <br /> 1%
                </h2>
                <p className="text-xl text-white/80 dark:text-white/90 leading-relaxed mb-10">
                  Aetheris isn't for everyone. It's for those who refuse to compromise on quality, performance, or design. It's for the visionaries building the future.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <Award className="size-6" />
                    <span className="font-bold">Award Winning UI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="size-6" />
                    <span className="font-bold">Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="size-6" />
                    <span className="font-bold">Passion Driven</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square bg-white/10 rounded-[3rem] backdrop-blur-xl border border-white/20 flex items-center justify-center">
                 <Rocket className="size-32 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
