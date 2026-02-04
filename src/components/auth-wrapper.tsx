"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface AuthWrapperProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function AuthWrapper({ children, title, subtitle }: AuthWrapperProps) {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center relative py-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10 animate-pulse delay-700" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl px-4"
        >
          <div className="rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -z-10 transition-all group-hover:bg-primary/30" />
            
            <div className="text-center mb-12">
              <Link href="/" className="inline-flex items-center space-x-2 group/logo mb-8">
                <div className="size-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover/logo:scale-110 transition-transform">
                  <span className="text-2xl font-black text-white">L</span>
                </div>
              </Link>
              <h1 className="text-4xl font-black tracking-tighter mb-4 uppercase">{title}</h1>
              <p className="text-muted-foreground font-medium">{subtitle}</p>
            </div>

            {children}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  )
}
