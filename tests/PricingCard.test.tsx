import { render, screen } from "@testing-library/react"
import { PricingCard } from "@/components/ui/PricingCard"
import "@testing-library/jest-dom"

const mockTier = {
  name: "Pro",
  price: "$99",
  description: "Ideal for growing teams.",
  features: ["Feature 1", "Feature 2"],
  cta: "Start Trial",
  featured: true,
  badge: "MOST ELITE",
}

describe("PricingCard", () => {
  it("renders correctly with tier data", () => {
    render(<PricingCard tier={mockTier} index={0} />)
    
    expect(screen.getByText("Pro")).toBeInTheDocument()
    expect(screen.getByText("$99")).toBeInTheDocument()
    expect(screen.getByText("MOST ELITE")).toBeInTheDocument()
    expect(screen.getByText("Feature 1")).toBeInTheDocument()
  })

  it("applies featured styles when featured is true", () => {
    const { container } = render(<PricingCard tier={mockTier} index={0} />)
    const card = container.firstChild as HTMLElement
    expect(card.className).toContain("border-primary")
  })
})
