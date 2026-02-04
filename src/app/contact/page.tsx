"use client"

import React from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    console.log("Submitting contact form:", data)
    
    // Simulate API call
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setIsSubmitted(true)
        reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
                    READY TO <br />
                    <span className="text-primary">ELEVATE?</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                    Whether you have a specific project in mind or just want to explore possibilities, our team is ready to bring your vision to life.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="size-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-border dark:border-white/10 shadow-md shadow-indigo-500/10">
                        <Mail className="size-6 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Us</div>
                        <div className="text-lg font-bold">hello@aetheris.agency</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="size-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-border dark:border-white/10 shadow-md shadow-purple-500/10">
                        <Phone className="size-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Call Us</div>
                        <div className="text-lg font-bold">+1 (555) 000-AETHER</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="size-14 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-border dark:border-white/10 shadow-md shadow-pink-500/10">
                        <MapPin className="size-6 text-pink-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Office</div>
                        <div className="text-lg font-bold">New York, NY 10001</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-20" />
                  <div className="relative bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl shadow-xl shadow-primary/5">
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                      >
                        <div className="size-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/50">
                          <CheckCircle2 className="size-10 text-green-400" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter uppercase mb-4">Message Received!</h2>
                        <p className="text-muted-foreground">Our elite team will review your inquiry and get back to you within 24 hours.</p>
                        <Button 
                          variant="outline" 
                          className="mt-8 rounded-xl border-border dark:border-white/10"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <>
                        <div className="mb-10">
                          <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">Let's Start <span className="text-primary">A Conversation</span></h2>
                          <p className="text-muted-foreground">Fill out the form below and we'll be in touch.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                          <input
                            {...register("name")}
                            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="text-xs text-red-400 ml-1">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                          <input
                            {...register("email")}
                            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-xs text-red-400 ml-1">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                          <input
                            {...register("subject")}
                            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="How can we help?"
                          />
                          {errors.subject && <p className="text-xs text-red-400 ml-1">{errors.subject.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                          <textarea
                            {...register("message")}
                            className="w-full min-h-[150px] bg-white/5 border border-white/10 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Tell us about your project..."
                          />
                          {errors.message && <p className="text-xs text-red-400 ml-1">{errors.message.message}</p>}
                        </div>
                        <Button 
                          type="submit" 
                          variant="shiny" 
                          className="w-full h-14 rounded-2xl text-lg font-bold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 size-5" />
                        </Button>
                      </form>
                    </>
                    )}
                  </div>
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
