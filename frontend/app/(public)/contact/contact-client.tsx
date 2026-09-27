"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Boxes,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  Star,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { ServiceContent } from "@/lib/content-data"
import { submitContact } from "@/lib/services/api"
import { whatsappUrl } from "@/lib/whatsapp"

type FormState = "idle" | "submitting" | "success" | "error"

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "contact@rrgroup.example",
    href: "mailto:contact@rrgroup.example",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 9938844331",
    href: "tel:+919938844331",
  },
  {
    icon: MapPin,
    label: "OFFICE",
    value: "27/817, Nuasahi, Nayapalli, Bhubaneswar, Odisha 751012, India",
    href: undefined,
  },
  {
    icon: Clock,
    label: "RESPONSE TIME",
    value: "Within one business day",
    href: undefined,
  },
]

const servicesOffered = [
  { name: "Web Development", href: "/services/web-development", icon: Globe },
  { name: "CRM Solutions", href: "/services/crm-solutions", icon: Users },
  { name: "ERP Solutions", href: "/services/erp-solutions", icon: Boxes },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
]

export function ContactClient({ services }: { services: ServiceContent[] }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })
  const [state, setState] = useState<FormState>("idle")
  const [error, setError] = useState("")

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState("submitting")
    setError("")
    try {
      await submitContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.service || "General inquiry",
        message: form.message,
      })
      setState("success")
    } catch (err) {
      setState("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  function handleReset() {
    setForm({ name: "", email: "", phone: "", service: "", message: "" })
    setState("idle")
    setError("")
  }

  return (
    <div className="relative min-h-screen bg-[#FCF9F3] text-[#17233D] selection:bg-[#EEF5FF] selection:text-[#2563EB] overflow-x-hidden">
      {/* Subtle organic flowing background lines matching RR GROUP Home aesthetic */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-[860px] w-full opacity-40"
          viewBox="0 0 1440 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 180 C 260 70, 560 290, 1060 140 C 1280 80, 1460 200, 1600 180"
            stroke="#E8C98A"
            strokeWidth="1.4"
            strokeDasharray="4 6"
            opacity="0.55"
          />
          <path
            d="M-50 440 C 280 530, 740 280, 1200 400 C 1400 450, 1540 360, 1650 380"
            stroke="#2563EB"
            strokeWidth="0.9"
            opacity="0.22"
          />
          <path
            d="M-80 680 C 400 610, 800 730, 1280 620 C 1440 580, 1580 640, 1680 610"
            stroke="#E8C98A"
            strokeWidth="1"
            opacity="0.32"
          />
        </svg>

        {/* Ambient soft auras */}
        <div className="absolute -top-32 -left-32 h-[440px] w-[440px] rounded-full bg-[#E8C98A]/20 blur-[120px]" />
        <div className="absolute top-52 -right-28 h-[460px] w-[460px] rounded-full bg-[#2563EB]/8 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            3. CONTACT HERO (Split Layout)
            ================================================== */}
        <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Eyebrow, Heading, Paragraph, Actions, Avatars */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="inline-block">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                  Contact
                </span>
              </div>

              <h1 className="mt-3.5 font-display text-4xl font-extrabold tracking-tight text-[#0F1B36] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                Tell us what you&apos;re
                <br />
                trying to <span className="text-[#2563EB]">build</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#53627A] sm:text-lg">
                A conversation is free and usually useful. Reach out and we&apos;ll respond within one business day.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_12px_26px_rgba(37,99,235,0.36)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="h-4 w-4" />
                  <span>Send a Message →</span>
                </a>

                <a
                  href={whatsappUrl("Hi RR GROUP, I'd like to talk about a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#0F1B36] shadow-[0_2px_8px_rgba(30,50,80,0.04)] transition-all hover:bg-[#F9FAFB] hover:border-[#25D366]/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="flex h-5 w-5 items-center justify-center text-[#25D366]">
                    <MessageCircle className="h-5 w-5 fill-current" />
                  </span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Team Avatars & Social Proof */}
              <div className="mt-8 flex items-center gap-3.5">
                <div className="flex -space-x-2">
                  {["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg", "avatar-4.jpg", "avatar-5.jpg"].map((file, i) => (
                    <div
                      key={i}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-xs"
                    >
                      <Image
                        src={`/avatars/${file}`}
                        alt="RR GROUP team member"
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs font-semibold leading-tight text-[#0F1B36]">
                  <div>Join hundreds of businesses</div>
                  <div className="text-[#53627A] font-normal">building with RR GROUP</div>
                </div>
              </div>
            </div>

            {/* Right Column: Rounded Office Image & 3 Floating Stat Cards */}
            <div className="relative lg:col-span-6 xl:col-span-6">
              <div className="relative mx-auto w-full max-w-[560px]">
                {/* Main Office Image Frame */}
                <div className="relative overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white p-2.5 shadow-[0_20px_50px_rgba(30,50,80,0.08)]">
                  <div className="relative h-[320px] w-full overflow-hidden rounded-[22px] sm:h-[400px] lg:h-[420px]">
                    <Image
                      src="/contact-hero-office.jpg"
                      alt="Modern RR GROUP Technology Workspace"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 560px"
                    />
                    {/* Soft subtle warm gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B36]/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Stat 1: Quick Response (Top-Left) */}
                <div className="hidden sm:flex absolute -top-3.5 -left-3.5 z-20 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#2563EB]">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-[#0F1B36]">Quick Response</div>
                    <div className="text-[11px] font-medium text-[#53627A]">Within 1 business day</div>
                  </div>
                </div>

                {/* Floating Stat 2: Trusted by 200+ Businesses (Top-Right) */}
                <div className="hidden sm:flex absolute -top-3.5 -right-3.5 z-20 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#2563EB]">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-[#0F1B36]">Trusted by</div>
                    <div className="text-[11px] font-medium text-[#53627A]">200+ Businesses</div>
                  </div>
                </div>

                {/* Floating Stat 3: End-to-End Support (Bottom-Right) */}
                <div className="hidden sm:flex absolute -bottom-3.5 -right-3.5 z-20 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white/95 px-4 py-2.5 shadow-[0_10px_25px_rgba(30,50,80,0.08)] backdrop-blur-md transition-transform hover:-translate-y-0.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#2563EB]">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-[#0F1B36]">End-to-End Support</div>
                    <div className="text-[11px] font-medium text-[#53627A]">From idea to growth</div>
                  </div>
                </div>
              </div>

              {/* Mobile-Only Stat Row (Prevents text overlap on small screens <= 640px) */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
                <div className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white p-2.5 text-center shadow-xs">
                  <MessageSquare className="h-4 w-4 text-[#2563EB] mb-1" />
                  <span className="font-display text-xs font-bold text-[#0F1B36]">1 Day</span>
                  <span className="text-[9px] text-[#53627A]">Response</span>
                </div>
                <div className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white p-2.5 text-center shadow-xs">
                  <Users className="h-4 w-4 text-[#2563EB] mb-1" />
                  <span className="font-display text-xs font-bold text-[#0F1B36]">200+</span>
                  <span className="text-[9px] text-[#53627A]">Businesses</span>
                </div>
                <div className="flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-white p-2.5 text-center shadow-xs">
                  <Star className="h-4 w-4 text-[#2563EB] mb-1" />
                  <span className="font-display text-xs font-bold text-[#0F1B36]">End-to-End</span>
                  <span className="text-[9px] text-[#53627A]">Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            4. CONTACT FORM + 5, 6, 7. DETAILS & CHANNELS
            ================================================== */}
        <section id="contact-form" className="scroll-mt-24 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
            {/* LEFT: Larger Form Card */}
            <div className="lg:col-span-7 xl:col-span-7">
              {state === "success" ? (
                <div className="flex h-full flex-col items-center justify-center rounded-[24px] border border-[#E5E7EB] bg-white p-8 sm:p-12 text-center shadow-[0_10px_30px_rgba(30,50,80,0.04)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF8F0] text-[#12B76A]">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-[#0F1B36]">Message sent successfully</h2>
                  <p className="mt-2 max-w-md text-sm text-[#53627A] leading-relaxed">
                    Thanks, <span className="font-semibold text-[#0F1B36]">{form.name.split(" ")[0] || "there"}</span>!
                    We&apos;ve received your message and our team will get back to you at{" "}
                    <span className="font-semibold text-[#2563EB]">{form.email}</span> within one business day.
                  </p>
                  {form.service && (
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#EEF5FF] px-4 py-1 text-xs font-medium text-[#2563EB]">
                      <span>Regarding:</span>
                      <span className="font-semibold">{form.service}</span>
                    </div>
                  )}
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="mt-6 rounded-full border-[#E5E7EB] px-6 text-sm font-semibold text-[#0F1B36] hover:bg-[#F9FAFB]"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_10px_30px_rgba(30,50,80,0.04)]"
                >
                  <h2 className="font-display text-2xl font-bold tracking-tight text-[#0F1B36]">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-sm text-[#53627A]">
                    All fields marked * are required.
                  </p>

                  <div className="mt-6 space-y-4">
                    {/* Row 1: Name and Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B36]">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleInput}
                          placeholder="Your full name"
                          required
                          className="h-11 rounded-xl border-[#E5E7EB] bg-white px-3.5 text-sm text-[#0F1B36] placeholder:text-[#53627A]/50 focus-visible:border-[#2563EB] focus-visible:ring-2 focus-visible:ring-[#2563EB]/20"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B36]">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleInput}
                          placeholder="you@example.com"
                          required
                          className="h-11 rounded-xl border-[#E5E7EB] bg-white px-3.5 text-sm text-[#0F1B36] placeholder:text-[#53627A]/50 focus-visible:border-[#2563EB] focus-visible:ring-2 focus-visible:ring-[#2563EB]/20"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone and Service Dropdown */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B36]">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleInput}
                          placeholder="+91 98765 43210"
                          className="h-11 rounded-xl border-[#E5E7EB] bg-white px-3.5 text-sm text-[#0F1B36] placeholder:text-[#53627A]/50 focus-visible:border-[#2563EB] focus-visible:ring-2 focus-visible:ring-[#2563EB]/20"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B36]">
                          What can we help with?
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleInput}
                            className="flex h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-2.5 pr-8 text-sm text-[#0F1B36] shadow-xs outline-none transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                          >
                            <option value="">Select a service (optional)</option>
                            <option value="Web Development">Web Development</option>
                            <option value="ERP Solutions">ERP Solutions</option>
                            <option value="CRM Solutions">CRM Solutions</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            {services
                              .filter(
                                (s) =>
                                  !["Web Development", "ERP Solutions", "CRM Solutions", "Digital Marketing"].includes(
                                    s.name,
                                  ),
                              )
                              .map((s) => (
                                <option key={s.slug} value={s.name}>
                                  {s.name}
                                </option>
                              ))}
                            <option value="Something else">Something else</option>
                          </select>
                          <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-[#53627A]" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Message Textarea */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#0F1B36]">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleInput}
                        placeholder="Tell us about your project, timeline, budget or the problem you're facing."
                        required
                        rows={4}
                        className="rounded-xl border-[#E5E7EB] bg-white px-3.5 py-3 text-sm text-[#0F1B36] placeholder:text-[#53627A]/50 focus-visible:border-[#2563EB] focus-visible:ring-2 focus-visible:ring-[#2563EB]/20"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <div className="mt-6">
                    <Button
                      type="submit"
                      disabled={state === "submitting"}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#2563EB] px-8 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_8px_22px_rgba(37,99,235,0.36)] disabled:opacity-70"
                    >
                      {state === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending message…</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message →</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: Stack of 3 Information Cards */}
            <aside className="space-y-5 lg:col-span-5 xl:col-span-5">
              {/* 5. CONTACT DETAILS CARD */}
              <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(30,50,80,0.04)]">
                <h3 className="font-display text-lg font-bold text-[#0F1B36]">
                  Contact details
                </h3>
                <ul className="mt-5 space-y-4">
                  {contactDetails.map((c) => (
                    <li key={c.label} className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5FF] text-[#2563EB]">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#53627A]">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="mt-0.5 block truncate text-sm font-medium text-[#0F1B36] transition-colors hover:text-[#2563EB]"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-[#0F1B36] leading-snug">
                            {c.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. WHATSAPP CARD */}
              <a
                href={whatsappUrl("Hi RR GROUP, I'd like to talk about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(30,50,80,0.04)] transition-all hover:border-[#25D366]/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs transition-transform group-hover:scale-105">
                    <MessageCircle className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0F1B36] transition-colors group-hover:text-[#25D366]">
                      Prefer WhatsApp?
                    </h4>
                    <p className="mt-0.5 text-xs text-[#53627A] leading-relaxed">
                      Get faster responses and share files, screenshots or detailed requirements directly.
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-[#53627A] transition-transform group-hover:translate-x-1" />
              </a>

              {/* 7. WHAT WE OFFER CARD */}
              <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(30,50,80,0.04)]">
                <h3 className="font-display text-sm font-bold text-[#0F1B36]">
                  What we offer
                </h3>
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  {servicesOffered.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="group flex items-center gap-2 rounded-xl p-2 text-xs font-semibold text-[#0F1B36] transition-colors hover:bg-[#EEF5FF] hover:text-[#2563EB]"
                    >
                      <s.icon className="h-4 w-4 shrink-0 text-[#2563EB] transition-transform group-hover:scale-110" />
                      <span className="truncate">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  )
}
