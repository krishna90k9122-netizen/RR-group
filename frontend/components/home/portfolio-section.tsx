"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  "All",
  "Web Development",
  "ERP Solutions",
  "CRM Solutions",
  "Digital Marketing",
]

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    client: "Retail & Consumer Brand",
    results: "+240% Checkout Conversion Rate",
    description:
      "A headless Next.js digital storefront with sub-second page loads, automated inventory sync, and multi-currency payment routing.",
    image: "/project-ecommerce.jpg",
    tags: ["Next.js", "Shopify Headless", "Tailwind CSS", "Stripe"],
    slug: "e-commerce-platform",
  },
  {
    title: "ERP for Manufacturing",
    category: "ERP Solutions",
    client: "Precision Industrial Corp",
    results: "-38% Production Idle Hours",
    description:
      "Custom operations ERP orchestrating multi-floor assembly lines, automated bill of materials, supplier invoicing, and dispatch tracking.",
    image: "/project-erp.jpg",
    tags: ["Custom ERP", "PostgreSQL", "Node.js", "Warehouse Sync"],
    slug: "manufacturing-erp",
  },
  {
    title: "CRM for Real Estate",
    category: "CRM Solutions",
    client: "Apex Realty Group",
    results: "3.2x Faster Lead Response",
    description:
      "Omnichannel real estate pipeline automating WhatsApp inquiries, site tour scheduling, broker commissions, and client KYC tracking.",
    image: "/project-crm.jpg",
    tags: ["Custom CRM", "WhatsApp API", "Automated Pipelines", "Analytics"],
    slug: "real-estate-crm",
  },
  {
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    client: "Fintech Venture",
    results: "410% Return on Ad Spend (ROAS)",
    description:
      "Multi-channel paid acquisition, technical SEO overhaul, and high-converting landing page optimization driving qualified signups.",
    image: "/project-marketing.jpg",
    tags: ["Google Ads", "Technical SEO", "Landing Page CRO", "Attribution"],
    slug: "digital-marketing-campaign",
  },
]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative bg-[#FBF7EF] py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
              Selected Work
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
              Digital products built
              <br />
              for real business outcomes.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#53627A]">
              Explore how we engineer competitive advantages for ambitious companies across manufacturing,
              real estate, retail, and digital services.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[#E9E1D4] bg-white px-5 py-2.5 text-xs font-bold text-[#071B3A] shadow-sm transition hover:bg-[#F8F2E6] hover:border-[#1769FF]/30"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === category
                  ? "bg-[#071B3A] text-white shadow-sm"
                  : "border border-[#E9E1D4] bg-white text-[#53627A] hover:bg-[#F8F2E6] hover:text-[#071B3A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 4 Project Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-[26px] border border-[#E9E1D4] bg-white shadow-[0_10px_30px_rgba(30,50,80,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(30,50,80,0.09)] hover:border-[#1769FF]/30"
            >
              {/* Product Visual */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#FAF5EB]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 650px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/60 via-transparent to-transparent opacity-80" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-[11px] font-bold text-[#071B3A] backdrop-blur-md">
                  {project.category}
                </div>

                {/* Metric pill */}
                <div className="absolute bottom-4 left-4 rounded-full bg-[#1769FF] px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                  {project.results}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#53627A]">
                    {project.client}
                  </div>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#071B3A] group-hover:text-[#1769FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#53627A]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E9E1D4]/60">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#E9E1D4] bg-[#FFFDF8] px-2.5 py-1 text-[10px] font-semibold text-[#53627A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1769FF] group-hover:underline">
                      Explore Case Study
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1769FF] transition-transform group-hover:scale-110">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
