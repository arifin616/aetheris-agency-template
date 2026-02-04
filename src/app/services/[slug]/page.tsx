import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout-wrapper";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getServiceBySlug } from '@/lib/blog';
import { Service } from '@/data/services';

// 2️⃣ Update Page function props
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Section className="py-24">
          <div className="container mx-auto px-4">
            <Link 
              href="/services" 
              className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft className="mr-2 size-4" /> Back to Services
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  {service.description}
                </p>
                <Button size="lg" variant="shiny" className="h-14 px-10 rounded-2xl" asChild>
                  <Link href="/contact">Work with us on this</Link>
                </Button>
              </div>

              <div className="bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-[3rem] p-12 backdrop-blur-xl shadow-xl shadow-primary/5">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Key Features</h3>
                <ul className="space-y-6">
                  {service.features.map((feature: string) => (
                    <li key={feature} className="flex items-center text-lg font-medium">
                      <div className="mr-4 flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Check className="size-5 stroke-[3]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
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
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.title,
    description: service.description,
  };
}
