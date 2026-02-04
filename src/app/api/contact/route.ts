import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("CONTACT FORM SUBMISSION:", body)

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("CONTACT API ERROR:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
