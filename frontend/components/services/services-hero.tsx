"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Headphones, Layers, TrendingUp } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] pt-6 pb-16 sm:pb-20 lg:pt-10 lg:pb-24">
      {/* Decorative Warm Cream & Gold Aura matching Reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#E8C98A]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-[#2563EB]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 min-h-[68vh]">
          {/* Left Column: Heading, Copy, Buttons & Trust Proof */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              <span className="h-[2px] w-6 bg-[#2563EB]" />
              <span>Our Services</span>
              <span className="text-[14px] leading-none">✢</span>
            </div>

            {/* Headline */}
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#071A3A] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Services designed
              <br />
              to drive{" "}
              <span className="relative inline-block text-[#2563EB]">
                measurable growth
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#2563EB]/30"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  height="6"
                >
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#53627A] sm:text-lg">
              Four focused solutions — web development, ERP, CRM and digital marketing — that work
              together as one connected system for your business.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,99,235,0.28)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_12px_28px_rgba(37,99,235,0.36)] hover:-translate-y-0.5"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E9E1D4] bg-white px-6 py-3.5 text-sm font-semibold text-[#071A3A] shadow-[0_2px_8px_rgba(30,50,80,0.04)] transition-all hover:bg-[#F8F2E6] hover:border-[#071A3A]/20"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Overlapping Client Avatars & Trust Text */}
            <div className="mt-9 flex items-center gap-3.5">
              <div className="flex -space-x-2.5">
                {[
                  { name: "Rahul", bg: "bg-blue-600", text: "RS" },
                  { name: "Pooja", bg: "bg-indigo-600", text: "PS" },
                  { name: "Anil", bg: "bg-emerald-600", text: "AV" },
                  { name: "Meera", bg: "bg-amber-600", text: "MK" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFDF8] ${avatar.bg} text-xs font-bold text-white shadow-sm`}
                    title={avatar.name}
                  >
                    {avatar.text}
                  </div>
                ))}
              </div>
              <div className="text-xs leading-snug">
                <div className="font-display font-extrabold text-[#071A3A]">200+ businesses</div>
                <div className="text-[#53627A]">trust our services</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & 4 Floating Cards */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[580px]">
              {/* Organic Curved Backdrop Shape */}
              <div className="absolute -inset-3 -rotate-1 rounded-[34px] bg-gradient-to-tr from-[#E8C98A]/30 via-white/50 to-[#2563EB]/12 blur-sm -z-10" />

              {/* Main Image Frame with warm daylight / laptop environment */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#E9E1D4] bg-white p-2.5 shadow-[0_20px_50px_rgba(30,50,80,0.08)]">
                <div className="relative h-[340px] w-full overflow-hidden rounded-[22px] sm:h-[440px] lg:h-[460px]">
                  <Image
                    src="/hero-desk.jpg"
                    alt="RR GROUP Digital Business Solutions and Analytics Dashboard"
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Card 1: Complete Digital Solutions (Top-Left) */}
              <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Complete Digital Solutions</div>
                  <div className="text-[10px] text-[#53627A]">Unified Stack</div>
                </div>
              </div>

              {/* Floating Card 2: Custom & Scalable (Top-Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Custom &amp; Scalable</div>
                  <div className="text-[10px] text-[#53627A]">Tailored Architecture</div>
                </div>
              </div>

              {/* Floating Card 3: Business Growth (Bottom-Left) */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Business Growth</div>
                  <div className="text-[10px] text-[#53627A]">Measurable ROI</div>
                </div>
              </div>

              {/* Floating Card 4: Dedicated Support (Bottom-Right) */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#2563EB]">
                  <Headphones className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="font-display text-xs font-extrabold text-[#071A3A]">Dedicated Support</div>
                  <div className="text-[10px] text-[#53627A]">24/7 Monitoring</div>
                </div>
              </div>
            </div>

            {/* Mobile-Only Clean Card Grid (Prevents Overlap on Small Screens) */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:hidden">
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <Layers className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">Complete Digital</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <TrendingUp className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">Custom &amp; Scalable</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <BarChart3 className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">Business Growth</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E9E1D4] bg-white p-2.5 shadow-sm">
                <Headphones className="h-4 w-4 text-[#2563EB] shrink-0" />
                <span className="text-[11px] font-bold text-[#071A3A]">Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
