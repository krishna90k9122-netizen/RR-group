"use client"

import { ArrowRight } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Understand",
    description: "We learn about your goals and challenges.",
  },
  {
    step: "02",
    title: "Plan",
    description: "We create a clear strategy and roadmap.",
  },
  {
    step: "03",
    title: "Build",
    description: "We design, develop and iterate with you.",
  },
  {
    step: "04",
    title: "Grow",
    description: "We measure results and keep improving.",
  },
]

export function ServicesProcess() {
  return (
    <section className="relative bg-[#FBF7EF] py-16 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
            <span className="h-[2px] w-6 bg-[#2563EB]" />
            <span>Our Process</span>
            <span className="text-[14px] leading-none">✢</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071A3A] sm:text-4xl lg:text-5xl">
            A simple and transparent process
          </h2>
        </div>

        {/* 4 Connected Process Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
          {processSteps.map((item, idx) => (
            <div key={item.step} className="relative flex items-center">
              {/* Process Card */}
              <div className="group w-full rounded-2xl border border-[#E9E1D4] bg-white p-6 shadow-[0_6px_20px_rgba(30,50,80,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_12px_28px_rgba(30,50,80,0.07)]">
                {/* Number Circle Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] text-xs font-black text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                  {item.step}
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-[#071A3A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#53627A]">
                  {item.description}
                </p>
              </div>

              {/* Connecting Arrow for Desktop (between cards) */}
              {idx < processSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:flex absolute -right-3.5 z-20 h-7 w-7 items-center justify-center rounded-full bg-[#FBF7EF] text-[#2563EB] border border-[#E9E1D4]/60 shadow-sm"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
