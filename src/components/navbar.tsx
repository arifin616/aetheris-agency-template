"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-2xl border backdrop-blur-md",
        scrolled
          ? "bg-background/80 border-border py-2 shadow-lg"
          : "bg-background/40 border-border dark:border-white/10 py-4 shadow-none"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold text-white">{siteConfig.logo[0]}</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button size="sm" variant="shiny" asChild>
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t bg-background/95 backdrop-blur-xl px-4 pb-6 pt-2 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary px-2 py-1 rounded-lg hover:bg-white/5",
                    pathname === link.href ? "text-primary bg-white/5" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full h-12 text-lg font-bold" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Work With Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
