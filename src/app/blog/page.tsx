"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/ui/page-header"
import { blogPosts } from "@/data/blog"
import { Calendar, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <PageHeader 
            badge="INSIGHTS & NEWS"
            title="ELITE PERSPECTIVES"
            subtitle="Explore our blog for the latest trends, insights, and expert perspectives on modern web development and design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.article 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col p-8 rounded-[2.5rem] border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 backdrop-blur-xl transition-all hover:bg-accent dark:hover:bg-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-border dark:border-white/10 bg-muted dark:bg-slate-900 mb-8 relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/5 z-0" />
                   <div className="absolute inset-0 flex items-center justify-center z-10 opacity-10 group-hover:opacity-20 transition-opacity">
                     <div className="text-6xl text-primary">
                       {post.title.split(' ').map((word, idx) => word[0]).join('').substring(0, 2)}
                     </div>
                   </div>
                   <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/30">
                      {post.category}
                   </div>
                </div>
                
                <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground mb-4 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3" /> {post.date}
                  </div>
                </div>

                <h2 className="text-2xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors leading-tight uppercase text-foreground">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-8 line-clamp-2 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground dark:text-white hover:text-primary transition-colors"
                  >
                    Read Full Story <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  )
}
