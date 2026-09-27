"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, CheckCircle2, Play, Rocket, Users } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] pt-6 pb-16 sm:pb-20 lg:pt-10 lg:pb-24">
      {/* Decorative Warm Cream & Gold Aura matching Reference 4 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#E8C98A]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-[#1769FF]/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 min-h-[70vh]">
          {/* Left Column: Heading, Story & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E9E1D4] bg-white/80 px-4 py-1.5 shadow-[0_2px_10px_rgba(30,50,80,0.04)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#1769FF] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#071B3A]">
                About RR Group
              </span>
            </div>

            {/* Headline matching Reference 4 editorial typography */}
            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#071B3A] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Building digital
              <br />
              solutions for{" "}
              <span className="relative inline-block text-[#1769FF]">
                real business growth
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

            {/* Subheading / Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#53627A] sm:text-lg">
              RR GROUP is a digital technology and business solutions company. We help businesses
              build, automate and grow with the right combination of technology, strategy and
              marketing — all under one roof.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#story"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258D9] hover:shadow-[0_12px_28px_rgba(23,105,255,0.36)] hover:-translate-y-0.5"
              >
                <span>Our Story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#principles"
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E9E1D4] bg-white px-6 py-3.5 text-sm font-semibold text-[#071B3A] shadow-[0_2px_8px_rgba(30,50,80,0.04)] transition-all hover:bg-[#F8F2E6] hover:border-[#071B3A]/20"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF3FF] text-[#1769FF] transition group-hover:scale-110">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                <span>Watch Video</span>
              </a>
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
                <div className="font-display font-extrabold text-[#071B3A]">200+ businesses</div>
                <div className="text-[#53627A]">trust our journey</div>
              </div>
            </div>

            {/* Checkpoint Highlights */}
            <div className="mt-7 flex flex-wrap items-center gap-6 text-xs font-medium text-[#53627A]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#67C9A0]" />
                <span>Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#67C9A0]" />
                <span>Dedicated Tech Team</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#67C9A0]" />
                <span>Long-term Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Office Visual & Floating Cards */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[580px]">
              {/* Organic Curved Backdrop Shape */}
              <div className="absolute -inset-3 -rotate-1 rounded-[34px] bg-gradient-to-tr from-[#E8C98A]/30 via-white/50 to-[#1769FF]/12 blur-sm -z-10" />

              {/* Main Image Frame with warm daylight / corporate environment */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#E9E1D4] bg-white p-2.5 shadow-[0_20px_50px_rgba(30,50,80,0.08)]">
                <div className="relative h-[340px] w-full overflow-hidden rounded-[22px] sm:h-[440px] lg:h-[460px]">
                  <Image
                    src="/about-office-hero.jpg"
                    alt="RR GROUP Corporate Office Lobby & Conference Space"
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                  {/* Soft Warm Gradient Overlay for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Stat 1: 4+ Years Experience (Top-Left) */}
              <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1769FF]">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-extrabold text-[#071B3A]">4+</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Years Experience</div>
                </div>
              </div>

              {/* Floating Stat 2: 200+ Happy Clients (Top-Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#1769FF]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-extrabold text-[#071B3A]">200+</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Happy Clients</div>
                </div>
              </div>

              {/* Floating Stat 3: 500+ Projects Delivered (Bottom-Right) */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-3 rounded-2xl border border-[#E9E1D4] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF3E6] text-[#F2A65A]">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-extrabold text-[#071B3A]">500+</div>
                  <div className="text-[10px] font-semibold text-[#53627A]">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Mobile-Only Clean Stat Row (Prevents Text Overlap On Small Screens) */}
            <div className="mt-5 grid grid-cols-3 gap-2.5 sm:hidden">
              <div className="flex flex-col items-center rounded-2xl border border-[#E9E1D4] bg-white p-3 text-center shadow-sm">
                <span className="font-display text-base font-extrabold text-[#071B3A]">4+</span>
                <span className="text-[9px] font-semibold text-[#53627A]">Years Exp</span>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#E9E1D4] bg-white p-3 text-center shadow-sm">
                <span className="font-display text-base font-extrabold text-[#071B3A]">200+</span>
                <span className="text-[9px] font-semibold text-[#53627A]">Clients</span>
              </div>
              <div className="flex flex-col items-center rounded-2xl border border-[#E9E1D4] bg-white p-3 text-center shadow-sm">
                <span className="font-display text-base font-extrabold text-[#071B3A]">500+</span>
                <span className="text-[9px] font-semibold text-[#53627A]">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
