import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Link from "next/link"

import { Section } from "@/components/layout-wrapper"
import { blogPosts } from "@/data/blog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft className="mr-2 size-4" /> Back to Blog
            </Link>

            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-bold uppercase tracking-widest">
                  <Calendar className="size-3" />
                  {post.date}
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 border-b border-border dark:border-white/10 pb-8">
                <div className="size-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-border dark:border-white/10">
                  <User className="size-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Written by</div>
                  <div className="text-sm font-bold text-foreground">{post.author}</div>
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] bg-muted dark:bg-slate-900 rounded-[2.5rem] mb-12 overflow-hidden border border-border dark:border-white/10 relative shadow-xl shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/5 z-0" />
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-8xl text-primary">
                  {post.title.split(' ').map((word, idx) => word[0]).join('').substring(0, 3)}
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-foreground font-medium mb-12 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-8">
                <p>{post.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
