import type { Metadata } from "next"
import { BlogNav } from "@/components/blog/blog-nav"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import { BlogFooter } from "@/components/blog/blog-footer"
import { BackgroundCurves } from "@/components/home/background-curves"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Blog & Insights — RR GROUP | Digital & Business Solutions",
  description:
    "Practical thinking on building software, running operations and growing revenue from the RR GROUP team.",
  openGraph: {
    title: "Blog & Insights — RR GROUP | Digital & Business Solutions",
    description:
      "Practical thinking on building software, running operations and growing revenue from the RR GROUP team.",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#071A3A] selection:bg-[#EAF2FF] selection:text-[#1769FF]">
      {/* Subtle organic flowing background lines matching Home & Services */}
      <BackgroundCurves />

      {/* 1. Single Floating Navbar matching Home visual language with Blog active */}
      <BlogNav />

      {/* 2. Hero Section: Split layout with editorial laptop & 3 floating info cards */}
      <BlogHero />

      {/* 3. Category Filter Pills + 6 Premium Article Cards Grid */}
      <BlogGrid />

      {/* 4. Stay In The Loop Newsletter CTA */}
      <BlogCta />

      {/* 5. Corporate Warm Cream Footer matching Home */}
      <BlogFooter />
    </div>
  )
}
