"use client"

import { Globe, Users, Database, Megaphone, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function EcosystemSection() {
  const satellites = [
    {
      title: "Website",
      desc: "Fast, modern client portal & store",
      icon: Globe,
      accent: "bg-[#EAF3FF] text-[#1769FF] border-[#1769FF]/30",
      positionClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-4 sm:-translate-y-6",
    },
    {
      title: "CRM",
      desc: "Lead pipeline & customer lifecycle",
      icon: Users,
      accent: "bg-[#FFF3E6] text-[#F2A65A] border-[#F2A65A]/30",
      positionClass: "right-0 top-1/2 translate-x-4 sm:translate-x-6 -translate-y-1/2",
    },
    {
      title: "ERP",
      desc: "Inventory, finance & warehouse flow",
      icon: Database,
      accent: "bg-[#E6F8F0] text-[#67C9A0] border-[#67C9A0]/30",
      positionClass: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4 sm:translate-y-6",
    },
    {
      title: "Digital Marketing",
      desc: "Omnichannel campaigns & ads",
      icon: Megaphone,
      accent: "bg-[#F3EBFD] text-[#A78BFA] border-[#A78BFA]/30",
      positionClass: "left-0 top-1/2 -translate-x-4 sm:-translate-x-6 -translate-y-1/2",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#FAF5EB] py-20 sm:py-28">
      {/* Decorative Warm Cream & Gold Ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8C98A]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
            Digital Ecosystem
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
            Everything connected.
            <br />
            Nothing fragmented.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#53627A]">
            Eliminate data silos. When your website, CRM, marketing campaigns, and ERP all synchronize
            in real time, your business scales with effortless clarity.
          </p>
        </div>

        {/* Central Ecosystem Diagram */}
        <div className="mt-16 flex justify-center overflow-x-hidden">
          <div className="relative h-[440px] w-[440px] sm:h-[520px] sm:w-[520px] shrink-0">
            {/* SVG Connecting Curves */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 520 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Dashed Orbit */}
              <circle
                cx="260"
                cy="260"
                r="190"
                stroke="#E9E1D4"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <circle
                cx="260"
                cy="260"
                r="130"
                stroke="#1769FF"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.25"
              />

              {/* Elegant curved connector lines to 4 satellites */}
              <path
                d="M260 200 C 260 160, 260 120, 260 80"
                stroke="#1769FF"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.5"
              />
              <path
                d="M320 260 C 360 260, 400 260, 440 260"
                stroke="#F2A65A"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.5"
              />
              <path
                d="M260 320 C 260 360, 260 400, 260 440"
                stroke="#67C9A0"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.5"
              />
              <path
                d="M200 260 C 160 260, 120 260, 80 260"
                stroke="#A78BFA"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.5"
              />
            </svg>

            {/* Central RR Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="group relative flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-full border-2 border-[#1769FF]/20 bg-white p-2 text-center shadow-[0_15px_40px_rgba(23,105,255,0.12)] transition-all hover:scale-105">
                {/* Subtle blue pulse ring */}
                <div className="absolute inset-0 rounded-full border border-[#1769FF]/30 animate-ping opacity-25" />
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-2xl border border-[#E9E1D4] bg-[#FFFDF8] p-1 shadow-xs">
                  <Image
                    src="/assets/rr-mark.png"
                    alt="RR GROUP"
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
                <span className="mt-1 font-display text-[11px] sm:text-xs font-bold text-[#071B3A]">
                  RR GROUP
                </span>
                <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-[#53627A]">
                  Central Hub
                </span>
              </div>
            </div>

            {/* 4 Satellites */}
            {satellites.map((sat) => {
              const IconComp = sat.icon
              return (
                <div
                  key={sat.title}
                  className={`absolute z-10 ${sat.positionClass}`}
                >
                  <div className="group flex max-w-[140px] sm:max-w-[160px] flex-col items-center rounded-2xl border border-[#E9E1D4] bg-white p-3 text-center shadow-[0_8px_25px_rgba(30,50,80,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(30,50,80,0.1)]">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${sat.accent} transition-transform group-hover:scale-110`}
                    >
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="mt-2 font-display text-xs font-bold text-[#071B3A]">
                      {sat.title}
                    </span>
                    <span className="hidden text-[10px] leading-tight text-[#53627A] sm:block mt-0.5">
                      {sat.desc}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Feature Checkpoints */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-[#071B3A]">
          <div className="flex items-center gap-2 rounded-full border border-[#E9E1D4] bg-white px-4 py-2 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-[#1769FF]" />
            <span>Single Source of Truth</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E9E1D4] bg-white px-4 py-2 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-[#67C9A0]" />
            <span>Real-time API Webhooks</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E9E1D4] bg-white px-4 py-2 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-[#F2A65A]" />
            <span>Zero Manual Data Re-entry</span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1769FF] hover:underline"
          >
            <span>Learn how we architect custom integrations</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
