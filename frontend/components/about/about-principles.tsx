"use client"

import { ShieldCheck, BarChart3, Users, Globe } from "lucide-react"

const principles = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "We ship what we promise, with clear timelines and honest architecture.",
    tag: "Integrity",
  },
  {
    icon: BarChart3,
    title: "Outcomes",
    description: "Every engagement is measured by the business result, not the deliverables.",
    tag: "ROI Focus",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build for the long term — your success metrics are our success metrics.",
    tag: "Collaboration",
  },
  {
    icon: Globe,
    title: "Craft",
    description: "Clean design and engineering are not optional; they're how software survives.",
    tag: "Excellence",
  },
]

export function AboutPrinciples() {
  return (
    <section id="principles" className="relative bg-[#FAF5EB] py-16 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
            Our Principles
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            What we believe
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#53627A]">
            Core operational values that govern how our engineers, designers, and strategists work every single day.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => {
            const IconComp = item.icon
            return (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-[24px] border border-[#E9E1D4] bg-white p-6 shadow-[0_8px_25px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769FF]/40 hover:shadow-[0_16px_36px_rgba(30,50,80,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3FF] text-[#1769FF] transition-transform duration-200 group-hover:scale-110 shadow-sm">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-[#E9E1D4] bg-[#FFFDF8] px-2.5 py-0.5 text-[10px] font-bold text-[#53627A]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-[#071B3A]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#53627A]">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
