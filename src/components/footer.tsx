import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/contact" },
    { name: "API Docs", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t bg-background/50 backdrop-blur-xl overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Parallax Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -bottom-24 -left-24 size-96 bg-indigo-500/20 blur-[100px] rounded-full" />
        <div className="absolute -top-24 -right-24 size-96 bg-purple-500/20 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold text-white">{siteConfig.logo[0]}</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-foreground">{siteConfig.name}</span>
            </Link>
            <p className="mt-6 max-w-xs text-base text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white/90 transition-all border-border dark:border-white/10" asChild>
                <Link href={siteConfig.links.twitter} target="_blank" aria-label="Twitter">
                  <Twitter className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white/90 transition-all border-border dark:border-white/10" asChild>
                <Link href={siteConfig.links.github} target="_blank" aria-label="GitHub">
                  <Github className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-white/90 transition-all border-border dark:border-white/10" asChild>
                <Link href={siteConfig.links.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 col-span-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Product</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Company</h3>
              <ul className="mt-6 space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Stay Updated</h3>
            <p className="mt-6 text-sm text-muted-foreground">Join our newsletter for the latest updates.</p>
            <div className="mt-4 flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full rounded-lg border border-border dark:border-white/10 bg-muted/50 dark:bg-white/5 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm shadow-primary/10"
              />
              <Button variant="shiny" size="sm" className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-border dark:border-white/5 pt-10 text-center md:flex md:items-center md:justify-between shadow-[0_-1px_0_0_rgba(99,102,241,0.1)]">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name} Global. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center space-x-8 md:mt-0">
            <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
