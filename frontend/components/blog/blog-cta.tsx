"use client"

import { useState } from "react"
import { Check, Mail } from "lucide-react"

export function BlogCta() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return
    setSubscribed(true)
  }

  return (
    <section className="relative overflow-hidden bg-[#FBF7EF] py-12 sm:py-16">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Banner Container: Royal Blue to Electric Blue gradient matching Reference */}
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
            {/* Left: Heading & Description */}
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Stay Updated —
              </span>
              <h2 className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl text-white">
                Stay in the loop
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                Product launches, exclusive deals and business tips — straight to your inbox.
              </p>
            </div>

            {/* Right: Newsletter Input & Subscribe Button */}
            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2.5 rounded-full bg-white/15 px-5 py-3 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
                >
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-full border border-white/20 bg-white px-4 py-3 text-xs text-[#071A3A] placeholder:text-[#53627A]/70 shadow-inner outline-none transition focus:border-white focus:ring-2 focus:ring-white/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-xs font-bold text-[#071A3A] shadow-md transition-all hover:bg-[#FBF7EF] hover:-translate-y-0.5 shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
