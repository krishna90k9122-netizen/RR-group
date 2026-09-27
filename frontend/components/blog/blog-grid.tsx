"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const categories = [
  "All",
  "Business",
  "Technology",
  "Marketing",
  "Development",
  "AI & Automation",
  "Tips & Guides",
  "Case Studies",
] as const

export type CategoryType = (typeof categories)[number]

export interface Article {
  slug: string
  title: string
  category: string
  categoryPill: string
  filterCategory: CategoryType[]
  publishedAt: string
  readMinutes: number
  description: string
  image: string
  badgeBg: string
}

export const articles: Article[] = [
  {
    slug: "why-your-business-needs-an-erp-now",
    title: "Why Your Business Needs an ERP — Now",
    category: "Business",
    categoryPill: "Business",
    filterCategory: ["Business", "Technology", "Case Studies"],
    publishedAt: "28 Aug 2026",
    readMinutes: 6,
    description:
      "Scattered tools and manual processes quietly cost growing businesses more than most finance teams realize. Here's how a connected ERP changes that.",
    image: "/project-erp.jpg",
    badgeBg: "bg-[#EAF2FF] text-[#1769FF]",
  },
  {
    slug: "how-crm-improves-sales-retention",
    title: "How a CRM Turns Follow-ups Into Revenue and Retention",
    category: "Sales",
    categoryPill: "Sales",
    filterCategory: ["Business", "Technology", "Tips & Guides"],
    publishedAt: "14 Aug 2026",
    readMinutes: 5,
    description:
      "Most revenue leakage isn't bad products — it's missed follow-ups. Here's the pipeline discipline a modern CRM enforces.",
    image: "/project-crm.jpg",
    badgeBg: "bg-[#F3EBFD] text-[#8B5CF6]",
  },
  {
    slug: "seo-tips-for-b2b-websites",
    title: "SEO Tips for B2B Websites That Actually Generate Leads",
    category: "Marketing",
    categoryPill: "Marketing",
    filterCategory: ["Marketing", "Tips & Guides"],
    publishedAt: "30 Jul 2026",
    readMinutes: 7,
    description:
      "Ranking is one thing; ranking for the pages buyers search when they're ready to purchase is another. Here's how to do both.",
    image: "/blog-seo.jpg",
    badgeBg: "bg-[#FFF3E6] text-[#F59E0B]",
  },
  {
    slug: "ai-customer-support-copilots-that-work",
    title: "AI Support Copilots That Work (Not Just Chatbots)",
    category: "AI & Automation",
    categoryPill: "AI & Automation",
    filterCategory: ["AI & Automation", "Technology", "Business"],
    publishedAt: "16 Jul 2026",
    readMinutes: 6,
    description:
      "The difference between a gimmick AI chatbot and one that cuts support costs is access to your real data. Here's what we've learned shipping them.",
    image: "/portfolio-ai-bot.jpg",
    badgeBg: "bg-[#FCE7F3] text-[#EC4899]",
  },
  {
    slug: "b2b-marketing-on-small-budget",
    title: "B2B Marketing on a Small Budget: Where Every Rupee Should Go",
    category: "Marketing",
    categoryPill: "Marketing",
    filterCategory: ["Marketing", "Business", "Tips & Guides"],
    publishedAt: "28 Jun 2026",
    readMinutes: 5,
    description:
      "You don't need a six-figure budget to grow. You need disciplined targeting, sharp funnels and ruthless measurement.",
    image: "/portfolio-marketing.jpg",
    badgeBg: "bg-[#E6F8F0] text-[#10B981]",
  },
  {
    slug: "web-app-vs-mobile-app-for-your-business",
    title: "Web App vs Mobile App: Which Does Your Business Actually Need?",
    category: "Development",
    categoryPill: "Development",
    filterCategory: ["Development", "Technology"],
    publishedAt: "12 Jun 2026",
    readMinutes: 6,
    description:
      "Mobile-first doesn't always mean native. We break down when a web app wins, when native wins, and what the decision really costs.",
    image: "/blog-mobile.jpg",
    badgeBg: "bg-[#EAF2FF] text-[#1769FF]",
  },
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All")

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (item) =>
            item.category === activeCategory ||
            item.filterCategory.includes(activeCategory)
        )

  return (
    <section id="articles" className="relative bg-[#FBF7EF] py-8 sm:py-12">
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
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#1769FF] text-white shadow-[0_4px_14px_rgba(23,105,255,0.28)]"
                    : "border border-[#E9E1D4] bg-white text-[#53627A] hover:bg-[#F8F2E6] hover:text-[#071A3A]"
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* 3-Column Article Grid */}
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E9E1D4] bg-white shadow-[0_4px_20px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769FF]/40 hover:shadow-[0_16px_36px_rgba(30,50,80,0.1)]"
            >
              {/* Card Image 16:9 */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F4EEE2]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />

                {/* Floating Category Pill on Image */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold shadow-sm backdrop-blur-md ${post.badgeBg}`}
                  >
                    {post.categoryPill}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Meta Row: Date + Read time */}
                <div className="flex items-center gap-4 text-xs font-medium text-[#53627A]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#53627A]/80" />
                    <span>{post.publishedAt}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#53627A]/80" />
                    <span>{post.readMinutes} min read</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-3.5 font-display text-lg font-bold leading-snug text-[#071A3A] transition-colors group-hover:text-[#1769FF] sm:text-xl">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#53627A]">
                  {post.description}
                </p>

                {/* Read Article Link */}
                <div className="mt-5 pt-2 border-t border-[#F4EEE2]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
