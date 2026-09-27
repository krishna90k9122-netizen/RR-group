"use client"

import Image from "next/image"
import Link from "next/link"
import { Zap, ShieldCheck, BarChart3, Handshake, ArrowRight } from "lucide-react"

const whyFeatures = [
  {
    icon: Zap,
    title: "Faster to market",
    description:
      "Rapid sprint architectures and reusable enterprise modules bring your platforms to life in weeks, not months.",
    accent: "bg-[#EAF3FF] text-[#1769FF]",
  },
  {
    icon: ShieldCheck,
    title: "Security built in",
    description:
      "Role-based access control, cryptographic data protection, and SOC-ready enterprise compliance standards from day one.",
    accent: "bg-[#E6F8F0] text-[#289E73]",
  },
  {
    icon: BarChart3,
    title: "Decisions with data",
    description:
      "Every workflow, UX screen, and advertising dollar is measured with integrated analytics to drive measurable ROI.",
    accent: "bg-[#FFF3E6] text-[#D97924]",
  },
  {
    icon: Handshake,
    title: "A partner, not a vendor",
    description:
      "We embed alongside your leadership team, offering continuous technical advisory, scaling support, and long-term care.",
    accent: "bg-[#F3EBFD] text-[#7C55E8]",
  },
]

export function WhyUsSection() {
  return (
    <section className="relative bg-[#FBF7EF] py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Story & 4 Features */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
              Why RR Group
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
              One team for your
              <br />
              entire digital stack
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#53627A]">
              Rather than managing fragmented vendors across <strong>Strategy</strong>, <strong>Design</strong>,{" "}
              <strong>Development</strong>, and <strong>Marketing</strong>, RR GROUP acts as your unified technology engine.
              We build seamless pipelines where custom software directly accelerates revenue and operational efficiency.
            </p>

            {/* 4 Feature Items Grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {whyFeatures.map((feat) => {
                const IconComponent = feat.icon
                return (
                  <div
                    key={feat.title}
                    className="group rounded-2xl border border-[#E9E1D4] bg-white p-5 shadow-[0_8px_25px_rgba(30,50,80,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#1769FF]/40 hover:shadow-[0_12px_30px_rgba(30,50,80,0.08)]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.accent} transition-transform group-hover:scale-110`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-[#071B3A]">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#53627A]">
                      {feat.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: High Quality Business Office Image */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[500px]">
              <div className="relative overflow-hidden rounded-[28px] border border-[#E9E1D4] bg-white p-2 shadow-[0_20px_50px_rgba(30,50,80,0.07)]">
                <div className="relative h-[420px] w-full overflow-hidden rounded-[22px] sm:h-[480px]">
                  <Image
                    src="/why-us-office.jpg"
                    alt="RR GROUP Executive Strategy & Collaborative Tech Session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Floating Stat Badge */}
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-[#E9E1D4] bg-white/95 p-4 shadow-[0_12px_30px_rgba(30,50,80,0.08)] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#53627A]">
                      Execution Standard
                    </div>
                    <div className="text-base font-extrabold text-[#071B3A]">
                      Zero-friction handoff from concept to live production
                    </div>
                  </div>
                  <Link
                    href="/about"
                    className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1769FF] text-white shadow-sm transition hover:bg-[#1258D9]"
                    aria-label="About RR Group"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
