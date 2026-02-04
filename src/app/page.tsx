import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Comparison } from "@/components/sections/comparison";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { BlogPreview } from "@/components/sections/blog-preview";

export default function Home() {
  const showPricing = process.env.NEXT_PUBLIC_SHOW_PRICING !== "false";

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero showPricing={showPricing} />
      <Features />
      <Comparison />
      <PortfolioGrid />
      <Testimonials />
      {showPricing && <Pricing />}
      <BlogPreview />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
