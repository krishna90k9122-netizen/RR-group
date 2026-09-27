"use client"

import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand your goals & requirements",
    description:
      "Deep discovery into your business workflows, user pain points, system architecture, and commercial targets to construct an actionable technical roadmap.",
    icon: Search,
    accent: "bg-[#EAF3FF] text-[#1769FF]",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Create strategy and UI/UX",
    description:
      "Interactive wireframes, refined design systems, database schemas, and API contracts architected for frictionless customer adoption.",
    icon: PenTool,
    accent: "bg-[#FFF3E6] text-[#F2A65A]",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Develop, test and iterate",
    description:
      "High-performance frontend and backend development with continuous integration, automated QA testing, and sprint-based client demos.",
    icon: Code2,
    accent: "bg-[#E6F8F0] text-[#289E73]",
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Deploy and provide support",
    description:
      "Zero-downtime production deployment, security hardening, user training, and proactive maintenance with enterprise SLAs.",
    icon: Rocket,
    accent: "bg-[#F3EBFD] text-[#7C55E8]",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#F8F2E6] py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
            How We Work
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            From idea to impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#53627A]">
            A transparent, agile execution framework engineered to eliminate guesswork, mitigate project risk, and deliver high-velocity results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-16 sm:mt-24">
          {/* Desktop Connected Line */}
          <div
            aria-hidden="true"
            className="absolute top-12 left-16 right-16 hidden h-0.5 bg-gradient-to-r from-[#1769FF]/20 via-[#1769FF]/50 to-[#1769FF]/20 lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.step}
                  className="group relative flex flex-col rounded-3xl border border-[#E9E1D4] bg-white p-6 shadow-[0_10px_30px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(30,50,80,0.08)] hover:border-[#1769FF]/30"
                >
                  {/* Step Number & Icon Pin */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ${item.accent} shadow-sm transition-transform group-hover:scale-110`}
                    >
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="font-display text-2xl font-black text-[#E8C98A]">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 font-display text-xl font-bold text-[#071B3A]">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-[#1769FF]">
                    {item.subtitle}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[#53627A]">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E9E1D4]/60">
                    <span className="text-[11px] font-bold text-[#53627A]">
                      Phase {idx + 1} Milestone
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#E9E1D4] bg-white px-5 py-2.5 text-xs font-bold text-[#071B3A] shadow-sm transition hover:bg-[#FBF7EF] hover:border-[#1769FF]/40"
          >
            <span>Start your discovery sprint today</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#1769FF]" />
          </Link>
        </div>
      </div>
    </section>
  )
}
