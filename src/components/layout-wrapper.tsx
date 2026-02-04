import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean
  children?: React.ReactNode
  className?: string
}

export function Section({
  children,
  className,
  container = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-12 md:py-24 lg:py-32", className)}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export function Container({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("container mx-auto px-4 md:px-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}
