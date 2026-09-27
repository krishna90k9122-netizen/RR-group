"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, Play, TrendingUp } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] pt-6 pb-10 sm:pb-14 lg:pt-8 lg:pb-16">
      {/* Decorative Warm Cream & Gold Aura matching Home */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#E8C98A]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-[#1769FF]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 min-h-[460px]">
          {/* Left Column: Heading, Copy, Buttons & Trust Proof */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              <span className="text-base leading-none">→</span>
              <span>Insights</span>
            </div>

            {/* Headline */}
            <h1 className="mt-3.5 font-display text-4xl font-extrabold tracking-tight text-[#071A3A] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              The RR GROUP{" "}
              <span className="relative inline-block text-[#1769FF]">
                blog
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#1769FF]/30"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  height="6"
                >
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#53627A] sm:text-lg">
              Practical thinking on building software, running operations and growing revenue.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href="#articles"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258DB] hover:shadow-[0_12px_28px_rgba(23,105,255,0.36)] hover:-translate-y-0.5"
              >
                <span>Explore Articles</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#articles"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E9E1D4] bg-white px-5 py-3 text-sm font-semibold text-[#071A3A] shadow-[0_2px_8px_rgba(30,50,80,0.04)] transition-all hover:bg-[#F8F2E6] hover:border-[#071A3A]/20"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF2FF] text-[#1769FF] transition group-hover:scale-110">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                <span>Watch Video</span>
              </a>
            </div>

            {/* Overlapping Client Avatars & Trust Text */}
            <div className="mt-8 flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {[
                  { name: "Rahul", bg: "bg-blue-600", text: "RS" },
                  { name: "Pooja", bg: "bg-indigo-600", text: "PS" },
                  { name: "Anil", bg: "bg-emerald-600", text: "AV" },
                  { name: "Meera", bg: "bg-amber-600", text: "MK" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#FFFDF8] ${avatar.bg} text-xs font-bold text-white shadow-sm`}
                    title={avatar.name}
                  >
                    {avatar.text}
                  </div>
                ))}
              </div>
              <div className="text-xs leading-snug">
                <div className="font-display font-extrabold text-[#071A3A]">200+ businesses</div>
                <div className="text-[#53627A]">trust our journey</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Laptop Image + 3 Floating Info Cards */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Organic Curved Backdrop Shape */}
              <div className="absolute -inset-2.5 -rotate-1 rounded-[32px] bg-gradient-to-tr from-[#E8C98A]/30 via-white/50 to-[#1769FF]/12 blur-sm -z-10" />

              {/* Main Image Frame (Laptop on Clean Desk with Insights screen) */}
              <div className="relative overflow-hidden rounded-[26px] border border-[#E9E1D4] bg-white p-2 shadow-[0_18px_45px_rgba(30,50,80,0.08)]">
                <div className="relative h-[290px] w-full overflow-hidden rounded-[20px] sm:h-[360px] lg:h-[370px]">
                  <Image
                    src="/blog-hero.jpg"
                    alt="RR GROUP Blog and Technology Insights"
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/25 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Card 1: Latest / Industry Insights (Top-Left) */}
              <div className="hidden sm:flex absolute -top-3.5 -left-3.5 z-20 items-center gap-2.5 rounded-2xl border border-[#E9E1D4] bg-white/95 px-3.5 py-2 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1769FF]">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Latest</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Industry Insights</div>
                </div>
              </div>

              {/* Floating Card 2: Actionable / Strategies (Top-Right) */}
              <div className="hidden sm:flex absolute -top-3.5 -right-3.5 z-20 items-center gap-2.5 rounded-2xl border border-[#E9E1D4] bg-white/95 px-3.5 py-2 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1769FF]">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Actionable</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Strategies</div>
                </div>
              </div>

              {/* Floating Card 3: Expert / Knowledge (Bottom-Left) */}
              <div className="hidden sm:flex absolute -bottom-3.5 left-4 z-20 items-center gap-2.5 rounded-2xl border border-[#E9E1D4] bg-white/95 px-3.5 py-2 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFF3E6] text-[#F59E0B]">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Expert</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Knowledge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
