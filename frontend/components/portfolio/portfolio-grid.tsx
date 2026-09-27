"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Building, Cloud, Cpu, ShoppingBag, ShoppingCart, TrendingUp, Zap } from "lucide-react"

export const categories = [
  "All",
  "Software Development",
  "AI Solutions",
  "IT Solutions",
  "Digital Marketing",
  "Real Estate",
] as const

export type CategoryType = (typeof categories)[number]

export const caseStudies = [
  {
    title: "Unified ERP Platform",
    category: "Software Development",
    categoryTag: "SOFTWARE DEVELOPMENT",
    industry: "Manufacturing",
    industryIcon: Building,
    metric: "60% Operational Efficiency",
    metricIcon: TrendingUp,
    metricColor: "text-[#10B981]",
    description:
      "A custom ERP system to unify finance, inventory, sales and procurement for a multi-branch manufacturing group.",
    image: "/portfolio-manufacturing.jpg",
    slug: "unified-erp-platform",
    badgeBg: "bg-[#EAF2FF] text-[#2563EB]",
  },
  {
    title: "Commerce CRM Suite",
    category: "Software Development",
    categoryTag: "SOFTWARE DEVELOPMENT",
    industry: "Retail",
    industryIcon: ShoppingBag,
    metric: "3x Online Sales",
    metricIcon: ShoppingCart,
    metricColor: "text-[#10B981]",
    description:
      "A CRM and order-management platform that unified sales, support and marketing for an omnichannel retailer.",
    image: "/portfolio-commerce.jpg",
    slug: "commerce-crm-suite",
    badgeBg: "bg-[#EAF2FF] text-[#2563EB]",
  },
  {
    title: "AI Support Copilot",
    category: "AI Solutions",
    categoryTag: "AI SOLUTIONS",
    industry: "SaaS",
    industryIcon: Cpu,
    metric: "85% Faster Support",
    metricIcon: Zap,
    metricColor: "text-[#2563EB]",
    description:
      "An AI chatbot that answers customer questions and routes complex tickets using their own knowledge base.",
    image: "/portfolio-ai-bot.jpg",
    slug: "ai-support-copilot",
    badgeBg: "bg-[#F3EBFD] text-[#8B5CF6]",
  },
  {
    title: "IT Infrastructure Modernization",
    category: "IT Solutions",
    categoryTag: "IT SOLUTIONS",
    industry: "Finance",
    industryIcon: Cloud,
    metric: "99.9% Uptime Achieved",
    metricIcon: TrendingUp,
    metricColor: "text-[#10B981]",
    description:
      "Cloud migration and security hardening for a regulated financial services firm.",
    image: "/portfolio-cloud-it.jpg",
    slug: "it-infrastructure-modernization",
    badgeBg: "bg-[#FFF3E6] text-[#F59E0B]",
  },
  {
    title: "B2B Lead Generation Engine",
    category: "Digital Marketing",
    categoryTag: "DIGITAL MARKETING",
    industry: "B2B",
    industryIcon: BarChart3,
    metric: "+200% Qualified Leads",
    metricIcon: TrendingUp,
    metricColor: "text-[#10B981]",
    description:
      "A full-funnel SEO and paid search program that turned a website into a consistent pipeline source.",
    image: "/portfolio-marketing.jpg",
    slug: "b2b-lead-generation-engine",
    badgeBg: "bg-[#E6F8F0] text-[#10B981]",
  },
  {
    title: "Residential Project Portal",
    category: "Real Estate",
    categoryTag: "REAL ESTATE",
    industry: "Real Estate",
    industryIcon: Building,
    metric: "+3x Bookings",
    metricIcon: Zap,
    metricColor: "text-[#2563EB]",
    description:
      "A property listing and booking platform with virtual tours, lead management and CRM integration.",
    image: "/portfolio-realestate.jpg",
    slug: "residential-project-portal",
    badgeBg: "bg-[#FCE7F3] text-[#EC4899]",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All")

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory)

  return (
    <section id="case-studies" className="relative bg-[#FBF7EF] py-8 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 sm:flex-wrap no-scrollbar">
          {categories.map((c) => {
            const isActive = activeCategory === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-[0_4px_14px_rgba(37,99,235,0.28)]"
                    : "border border-[#E9E1D4] bg-white text-[#53627A] hover:bg-[#F8F2E6] hover:text-[#071A3A]"
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* 6 Premium Case Study Cards Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const MetricIcon = item.metricIcon
            const IndustryIcon = item.industryIcon

            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E9E1D4] bg-white shadow-[0_8px_30px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(30,50,80,0.08)] hover:border-[#2563EB]/35"
              >
                <div>
                  {/* Visual Frame */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-[#FAF5EB]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/40 via-transparent to-transparent" />

                    {/* Metric Badge on Top-Left */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-xl border border-white/60 bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-md">
                      <MetricIcon className={`h-4 w-4 ${item.metricColor}`} />
                      <span className="font-display text-xs font-bold text-[#071A3A]">
                        {item.metric}
                      </span>
                    </div>

                    {/* Industry Pill on Bottom-Right */}
                    <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-md">
                      <IndustryIcon className="h-3 w-3 text-[#2563EB]" />
                      <span className="text-[10px] font-bold text-[#071A3A]">
                        {item.industry}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <span className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${item.badgeBg}`}>
                      {item.categoryTag}
                    </span>

                    <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-[#071A3A] group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xs leading-relaxed text-[#53627A]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
                  >
                    <span>View case study</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
