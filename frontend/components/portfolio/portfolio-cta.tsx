"use client"

import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export function PortfolioCta() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] py-16 sm:py-24">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Banner Container: Royal Blue to Electric Blue gradient matching Reference */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#104CC4] via-[#2563EB] to-[#3B82F6] p-8 sm:p-12 lg:p-14 text-white shadow-[0_20px_50px_rgba(37,99,235,0.28)]">
          {/* Subtle wave & glow texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Let&apos;s Build Together —
              </span>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                Tell us the outcome you need — we&apos;ll show you how we&apos;d build it.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <a
                href="https://wa.me/919438000000?text=Hi%20RR%20GROUP,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-[#071A3A] shadow-md transition-all hover:bg-[#FBF7EF] hover:-translate-y-0.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F8F0] text-[#16A34A]">
                  <MessageSquare className="h-3 w-3 fill-current" />
                </span>
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#071A3A] hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
