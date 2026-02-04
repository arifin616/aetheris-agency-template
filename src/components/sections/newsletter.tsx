"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"

export function Newsletter() {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Stay Updated
        </h2>
        <p className="mt-4 max-w-[600px] text-primary-foreground/80 md:text-xl">
          Subscribe to our newsletter to receive the latest updates, news, and exclusive offers directly in your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 flex-1 rounded-md border-none bg-primary-foreground/10 px-4 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="h-12 px-8 font-bold"
          >
            Subscribe <Send className="ml-2 size-4" />
          </Button>
        </form>
        <p className="mt-4 text-xs text-primary-foreground/60">
          We care about your data. Read our privacy policy.
        </p>
      </div>
    </Section>
  )
}
