import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Code, Target, Shield, TrendingUp, Clock, Users } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout-wrapper";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { getPortfolioItemBySlug } from '@/lib/blog';
import { CaseStudy } from '@/data/portfolio';

// 2️⃣ Update Page function props
export default async function PortfolioCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) return notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft className="mr-2 size-4" /> Back to Portfolio
            </Link>

            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest mb-4 block">
                    {item.category}
                  </span>
                  <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                    {item.title}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl">
                    {item.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Client</div>
                  <div className="text-2xl font-bold">{item.client}</div>
                </div>
              </div>

              {/* Key Results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-y border-border dark:border-white/10 py-8 md:py-12">
                {item.results.map((res: { label: string; value: string }, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-primary mb-2">{res.value}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-16">
                
                {/* Project Overview */}
                <section>
                  <h2 className="text-3xl font-black tracking-tight uppercase mb-8 flex items-center gap-4">
                    <Target className="size-8 text-primary" />
                    Project Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {item.overview}
                    </p>
                  </div>
                </section>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
                  <section>
                    <h2 className="text-2xl font-black tracking-tight uppercase mb-6 flex items-center gap-3">
                      <Shield className="size-6 text-primary" />
                      Key Challenges
                    </h2>
                    <ul className="space-y-3">
                      {item.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-black tracking-tight uppercase mb-6 flex items-center gap-3">
                      <TrendingUp className="size-6 text-primary" />
                      Our Solutions
                    </h2>
                    <ul className="space-y-3">
                      {item.solutions.map((solution: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Technology Stack */}
                <section>
                  <h2 className="text-3xl font-black tracking-tight uppercase mb-8 flex items-center gap-4">
                    <Code className="size-8 text-primary" />
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {item.technologies.map((tech: string, index: number) => (
                      <div key={index} className="px-4 py-2 rounded-xl bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-sm">
                        <span className="font-bold text-primary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Content */}
                <section>
                  <h2 className="text-3xl font-black tracking-tight uppercase mb-8">Project Deep Dive</h2>
                  <div className="prose prose-invert max-w-none bg-card/30 dark:bg-white/5 rounded-[2rem] p-8 border border-border dark:border-white/10">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                
                {/* Project Timeline */}
                <div className="bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-[2rem] p-6 backdrop-blur-xl shadow-xl shadow-primary/5">
                  <h3 className="text-xl font-bold mb-6 uppercase tracking-tight flex items-center gap-3">
                    <Clock className="size-5 text-primary" />
                    Project Timeline
                  </h3>
                  <div className="space-y-4">
                    {item.timeline.map((phase: { phase: string; duration: string; description: string }, index: number) => (
                      <div key={index} className="relative pl-6 pb-4 last:pb-0">
                        <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary"></div>
                        <div className="text-sm font-bold text-primary uppercase tracking-widest">{phase.phase}</div>
                        <div className="text-xs text-muted-foreground mb-1">{phase.duration}</div>
                        <div className="text-sm text-muted-foreground">{phase.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Composition */}
                <div className="bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-[2rem] p-6 backdrop-blur-xl shadow-xl shadow-primary/5">
                  <h3 className="text-xl font-bold mb-6 uppercase tracking-tight flex items-center gap-3">
                    <Users className="size-5 text-primary" />
                    Team Composition
                  </h3>
                  <div className="space-y-3">
                    {item.team.map((member: { role: string; members: number }, index: number) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 dark:border-white/5 last:border-0">
                        <span className="text-sm font-medium">{member.role}</span>
                        <span className="text-sm text-primary font-bold">{member.members} {member.members === 1 ? 'Member' : 'Members'}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-primary/20 to-indigo-500/20 border border-primary/30 rounded-[2rem] p-6 backdrop-blur-xl">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Ready to Start Your Project?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Let's discuss how we can transform your vision into a digital masterpiece.
                  </p>
                  <Button className="w-full h-12 rounded-xl font-bold" variant="shiny" asChild>
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

// 3️⃣ Optional: generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);
  if (!item) return { title: 'Portfolio Item Not Found' };

  return {
    title: item.title,
    description: item.description,
  };
}