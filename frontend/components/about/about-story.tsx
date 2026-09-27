"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export function AboutStory() {
  return (
    <section id="story" className="relative bg-[#FAF5EB] py-16 sm:py-24">
      {/* Decorative Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#E8C98A]/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Story Copy & Narrative */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E9E1D4] bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1769FF] shadow-sm">
              Our Story
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#071B3A] sm:text-4xl lg:text-5xl">
              From an idea to a
              <br />
              <span className="text-[#1769FF]">growth partner</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#53627A]">
              We started with a simple vision — to help businesses grow with technology that actually solves
              real problems. Today, RR GROUP works with companies across India to build websites, ERP,
              CRM and digital marketing solutions that create measurable impact.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#53627A]">
              Instead of passing your requirements through fragmented agencies and disjointed freelancers,
              our multidisciplinary engineering and strategy units operate as an extension of your own leadership.
            </p>

            {/* Checkpoints */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B3A]">
                <CheckCircle2 className="h-4 w-4 text-[#67C9A0] shrink-0" />
                <span>Founded with a clear mission to bridge business strategy and modern code</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B3A]">
                <CheckCircle2 className="h-4 w-4 text-[#67C9A0] shrink-0" />
                <span>Over 120+ live client deployments across diverse Indian &amp; global industries</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#071B3A]">
                <CheckCircle2 className="h-4 w-4 text-[#67C9A0] shrink-0" />
                <span>Continuous engineering, enterprise security, and proactive maintenance</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-7 py-3.5 text-xs font-bold text-white shadow-[0_6px_20px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258D9] hover:-translate-y-0.5"
              >
                <span>More About Us</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: High Quality Team Photo + Floating Quote Card */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              {/* Organic Curved Backdrop Shape */}
              <div className="absolute -inset-3 rotate-1 rounded-[34px] bg-gradient-to-tr from-[#1769FF]/12 via-white/50 to-[#E8C98A]/25 blur-sm -z-10" />

              {/* Team Image Container */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#E9E1D4] bg-white p-2.5 shadow-[0_20px_50px_rgba(30,50,80,0.08)]">
                <div className="relative h-[320px] w-full overflow-hidden rounded-[22px] sm:h-[420px]">
                  <Image
                    src="/about-team-story.jpg"
                    alt="RR GROUP Cross-Functional Engineering and Growth Team"
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Quote Card (Over top-left of image on desktop, neat below on mobile) */}
              <div className="static mt-4 sm:absolute sm:-top-5 sm:-left-5 sm:mt-0 z-20 max-w-[280px] rounded-2xl border border-[#E9E1D4] bg-white/95 p-4 shadow-[0_12px_32px_rgba(30,50,80,0.09)] backdrop-blur-md">
                <div className="flex items-center gap-1.5 text-[#1769FF]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#53627A]">
                    Our Philosophy
                  </span>
                </div>
                <p className="mt-2 font-display text-xs font-bold leading-snug text-[#071B3A]">
                  &ldquo;We build technology that creates real impact for businesses.&rdquo;
                </p>
                {/* Subtle blue squiggly curve */}
                <div className="mt-2.5 flex items-center gap-2">
                  <svg
                    className="h-2 w-12 text-[#1769FF]"
                    viewBox="0 0 40 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4C6 1 10 7 15 4C20 1 24 7 29 4C34 1 37 6 39 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-[9px] font-bold text-[#53627A]">RR GROUP Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
