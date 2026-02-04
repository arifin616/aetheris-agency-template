import { render, screen } from "@testing-library/react"
import { Hero } from "@/components/sections/hero"
import "@testing-library/jest-dom"

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />)
    expect(screen.getByText(/THE PREMIER/i)).toBeInTheDocument()
    expect(screen.getByText(/DIGITAL EXPERIENCE/i)).toBeInTheDocument()
  })

  it("shows different CTA when showPricing is false", () => {
    render(<Hero showPricing={false} />)
    expect(screen.getByText(/Contact for Pricing/i)).toBeInTheDocument()
  })
})
