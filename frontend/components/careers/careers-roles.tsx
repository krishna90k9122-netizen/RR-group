"use client"

import { useState } from "react"
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Code,
  Database,
  Layers,
  Loader2,
  MapPin,
  Megaphone,
  Palette,
  Send,
  Sparkles,
  X,
} from "lucide-react"
import { submitJobApplication } from "@/lib/services/api"

export interface CareerRole {
  id: string
  title: string
  category: string
  location: string
  type: string
  experience: string
  salaryRange: string
  description: string
  tags: string[]
  icon: typeof Code
}

const roles: CareerRole[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    category: "Engineering",
    location: "Hybrid · Mumbai",
    type: "Full-time",
    experience: "1–5 years",
    salaryRange: "₹8–16 LPA",
    description:
      "Build client-facing web applications and internal platforms using modern React and Node.js stacks.",
    tags: ["JavaScript", "TypeScript", "React.js", "Node.js", "Next.js"],
    icon: Code,
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    category: "Design",
    location: "On-site · Mumbai",
    type: "Full-time",
    experience: "2–6 years",
    salaryRange: "₹6–14 LPA",
    description:
      "Own the interface and experience of websites, dashboards and mobile-first products for our clients.",
    tags: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
    icon: Palette,
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    category: "Marketing",
    location: "Hybrid · Mumbai",
    type: "Full-time",
    experience: "1–4 years",
    salaryRange: "₹5–9 LPA",
    description:
      "Plan and execute SEO, paid search and social campaigns that turn traffic into pipeline.",
    tags: ["Google Ads", "GA4", "SEO", "Content Marketing", "Analytics"],
    icon: Megaphone,
  },
  {
    id: "erp-consultant",
    title: "ERP Consultant",
    category: "Consulting",
    location: "On-site · Mumbai",
    type: "Full-time",
    experience: "3–8 years",
    salaryRange: "₹10–22 LPA",
    description:
      "Lead ERP discovery, configuration and rollout for enterprise clients across manufacturing and trade.",
    tags: ["ERP/CRM", "Business Analysis", "Process Mapping", "Stakeholder Management"],
    icon: Database,
  },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function CareersRoles() {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null)
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    coverLetter: "",
  })
  const [state, setState] = useState<FormState>("idle")
  const [error, setError] = useState("")

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedRole) return
    setState("submitting")
    setError("")
    try {
      await submitJobApplication({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        location: form.location,
        position: selectedRole.title,
        experience: form.experience,
        coverLetter: form.coverLetter,
      })
      setState("success")
    } catch (err) {
      setState("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const openApplication = (role: CareerRole) => {
    setSelectedRole(role)
    setState("idle")
    setError("")
  }

  return (
    <section id="open-roles" className="relative bg-[#FBF7EF] py-10 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1769FF]">
              <span>Open Roles</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#071A3A] sm:text-4xl">
              Open positions
            </h2>
          </div>
          <div className="rounded-full border border-[#E9E1D4] bg-white px-4 py-1.5 text-xs font-semibold text-[#53627A] shadow-sm">
            4 positions open
          </div>
        </div>

        {/* 2-Column Job Cards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {roles.map((job) => {
            const IconComp = job.icon
            return (
              <div
                key={job.id}
                className="group relative flex flex-col justify-between rounded-[22px] border border-[#E9E1D4] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(30,50,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769FF]/50 hover:shadow-[0_16px_36px_rgba(23,105,255,0.08)]"
              >
                <div>
                  {/* Top Row: Icon + Title & Salary Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#1769FF] shadow-sm">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[#071A3A] transition-colors group-hover:text-[#1769FF]">
                          {job.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="font-display text-sm sm:text-base font-extrabold text-[#071A3A]">
                        {job.salaryRange}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row: Category · Location · Type · Experience */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-[#53627A]">
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#1769FF]" />
                      <span>{job.category}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#53627A]/80" />
                      <span>{job.location}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#53627A]/80" />
                      <span>{job.type}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-[#53627A]/80" />
                      <span>{job.experience}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-sm leading-relaxed text-[#53627A]">
                    {job.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#F4EEE2]/70 px-2.5 py-1 text-[11px] font-semibold text-[#071A3A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Now Button Row */}
                <div className="mt-6 pt-4 border-t border-[#F4EEE2] flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => openApplication(job)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#1769FF] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(23,105,255,0.28)] transition-all hover:bg-[#1258DB] hover:shadow-[0_6px_20px_rgba(23,105,255,0.36)] hover:-translate-y-0.5"
                  >
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Application Modal */}
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-[#E9E1D4] bg-[#FFFDF8] p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#E9E1D4] bg-white text-[#53627A] transition hover:bg-[#F8F2E6] hover:text-[#071A3A]"
              >
                <X className="h-4 w-4" />
              </button>

              {state === "success" ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E6F8F0] text-[#10B981]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-[#071A3A]">
                    Application received!
                  </h3>
                  <p className="mt-2 text-sm text-[#53627A] leading-relaxed">
                    Thanks, {form.fullName.split(" ")[0] || "there"}! We&apos;ve received your application for{" "}
                    <strong className="text-[#071A3A]">{selectedRole.title}</strong>. Our team will review your details and get back to you within 2–3 working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="mt-6 rounded-full bg-[#1769FF] px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#1258DB]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1769FF]">
                      Job Application —
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold text-[#071A3A]">
                      Apply for {selectedRole.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#53627A]">
                      {selectedRole.location} • {selectedRole.salaryRange}
                    </p>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-[#071A3A]">Full name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleInput}
                        required
                        placeholder="Your full name"
                        className="mt-1 w-full rounded-xl border border-[#E9E1D4] bg-white px-3.5 py-2.5 text-xs text-[#071A3A] outline-none focus:border-[#1769FF]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#071A3A]">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInput}
                        required
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-xl border border-[#E9E1D4] bg-white px-3.5 py-2.5 text-xs text-[#071A3A] outline-none focus:border-[#1769FF]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-[#071A3A]">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleInput}
                        required
                        placeholder="+91 98765 43210"
                        className="mt-1 w-full rounded-xl border border-[#E9E1D4] bg-white px-3.5 py-2.5 text-xs text-[#071A3A] outline-none focus:border-[#1769FF]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#071A3A]">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleInput}
                        required
                        placeholder="City, India"
                        className="mt-1 w-full rounded-xl border border-[#E9E1D4] bg-white px-3.5 py-2.5 text-xs text-[#071A3A] outline-none focus:border-[#1769FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#071A3A]">Experience *</label>
                    <input
                      type="text"
                      name="experience"
                      value={form.experience}
                      onChange={handleInput}
                      required
                      placeholder="e.g. 3 years of React and Node.js development"
                      className="mt-1 w-full rounded-xl border border-[#E9E1D4] bg-white px-3.5 py-2.5 text-xs text-[#071A3A] outline-none focus:border-[#1769FF]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#071A3A]">
                      Why are you a good fit? *
                    </label>
                    <textarea
                      name="coverLetter"
                      value={form.coverLetter}
                      onChange={handleInput}
                      required
                      rows={3}
                      placeholder="Tell us about your experience and what you'd bring to this role."
                      className="mt-1 w-full rounded-xl border border-[#E9E1D4] bg-white px-3.5 py-2.5 text-xs text-[#071A3A] outline-none focus:border-[#1769FF]"
                    />
                  </div>

                  {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      className="rounded-full border border-[#E9E1D4] bg-white px-5 py-2.5 text-xs font-semibold text-[#53627A] hover:bg-[#F8F2E6]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#1769FF] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#1258DB] disabled:opacity-50"
                    >
                      {state === "submitting" ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Submitting…</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
