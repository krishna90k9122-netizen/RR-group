"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CareersCta() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] py-12 sm:py-16">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Banner Container: Royal Blue to Electric Blue gradient matching Home / Services / Portfolio */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#104CC4] via-[#2563EB] to-[#3B82F6] p-7 sm:p-10 lg:p-12 text-white shadow-[0_20px_50px_rgba(37,99,235,0.28)]">
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

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Let&apos;s Connect —
              </span>
              <h2 className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl text-white">
                Prefer a direct conversation?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                Whatever the question — services, careers or partnerships — it starts with a quick chat.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <a
                href="https://wa.me/919938844331?text=Hi%20RR%20GROUP,%20I%20would%20like%20to%20have%20a%20direct%20conversation."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#071A3A] shadow-md transition-all hover:bg-[#FBF7EF] hover:-translate-y-0.5"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F8F0] text-[#16A34A]">
                  <MessageCircle className="h-3 w-3 fill-current" />
                </span>
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#071A3A] hover:-translate-y-0.5"
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
