# Aetheris — Elite Agency Next.js Template

Aetheris is a **premium, high-performance, production-ready agency template** built with **Next.js 15+, Tailwind CSS v4, TypeScript, and Framer Motion**.  
Designed for **digital agencies, studios, SaaS teams, and high-ticket service providers** who want conversion-focused UI, elite animations, and flawless performance.

> Built to sell. Built to scale. Built for premium buyers.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (advanced micro-interactions)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Theme:** Light & Dark Mode (Next Themes)
- **SEO:** Metadata API, JSON-LD, Sitemap, Robots.txt
- **Deployment Ready:** Vercel optimized

---

## ✨ Core Features

### 🎨 Design & UX
- Elite agency-grade UI
- Glassmorphism & premium gradients
- Smooth page transitions & scroll animations
- Pixel-perfect responsiveness (mobile → ultra-wide)
- Dark / Light mode with smooth transition

### 🧱 Pages Included (NO 404s)
- Home
- About Agency
- Services (with dynamic detail pages)
- Portfolio / Case Studies (detail pages included)
- Blog
  - Blog Listing
  - Blog Detail (Read Full Story works)
- Contact (interactive form states)
- Pricing (optional – included)
- Legal Pages
  - Privacy Policy
  - Terms of Service
  - Cookie Policy
- Custom 404 Page

### ⚙️ Functionality
- Fully working internal routing
- All buttons, CTAs & links connected
- SEO-ready structure
- Modular & scalable architecture
- Clean, well-documented code

---

## 📂 Project Structure
src/
├─ app/
│ ├─ (public-pages)
│ ├─ blog/
│ │ └─ [slug]/
│ ├─ services/
│ │ └─ [slug]/
│ ├─ portfolio/
│ │ └─ [slug]/
│ ├─ layout.tsx
│ └─ page.tsx
│
├─ components/
│ ├─ ui/
│ ├─ sections/
│ └─ animations/
│
├─ lib/
│ ├─ seo.ts
│ ├─ constants.ts
│ └─ utils.ts
│
├─ styles/
├─ hooks/
└─ data/

## 🛠️ How to Run Locally

### Install Dependencies
```bash
npm install
##Run Development Server
  npm run dev
##Open browser:
  http://localhost:3000
##Production Build:
   npm run build
##Run Production Server:
   npm start

