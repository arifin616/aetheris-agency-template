"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Section } from "@/components/layout-wrapper"
import { blogPosts } from "@/data/blog"

export function BlogPreview() {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <Section className="py-24 bg-background/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-foreground"
          >
            LATEST <br />
            <span className="text-primary">INSIGHTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Deep dives into the technology, design, and strategy shaping the future of the digital world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl border border-border dark:border-white/10 bg-card/50 dark:bg-white/5 overflow-hidden hover:bg-accent/50 dark:hover:bg-white/10 transition-colors"
            >
              <div className="aspect-[16/9] bg-muted dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 hidden dark:block" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 font-bold uppercase tracking-widest">
                  <Calendar className="size-3" />
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-sm font-bold text-foreground dark:text-white hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    Read Full Article <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
