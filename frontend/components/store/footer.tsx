"use client"

import Link from "next/link"
import { AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeNewsletter } from "@/lib/services/api"
import { useStore } from "@/components/store/store-provider"
import { whatsappUrl, isWhatsAppConfigured } from "@/lib/whatsapp"

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop/products" },
      { label: "Categories", href: "/shop/categories" },
      { label: "Best Sellers", href: "/shop/products?sort=popular" },
      { label: "New Arrivals", href: "/shop/products?sort=new" },
      { label: "Deals", href: "/shop/products?sort=discount" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Track Order", href: "/dashboard/orders" },
      { label: "Returns", href: "/returns" },
      { label: "Shipping", href: "/shipping" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
]

const socials = [
  ...(isWhatsAppConfigured
    ? [
        {
          icon: MessageCircle,
          label: "WhatsApp",
          href: whatsappUrl("Hi RR GROUP, I found your website."),
        },
      ]
    : []),
  { icon: Mail, label: "Email", href: "mailto:rrgroup.official@zohomail.in" },
  { icon: AtSign, label: "Contact", href: "/contact" },
]

export function Footer() {
  const { toast } = useStore()

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Newsletter */}
        <div className="relative overflow-hidden mb-12 flex flex-col items-start justify-between gap-6 rounded-[24px] bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] p-6 sm:p-8 text-white shadow-[0_12px_32px_rgba(37,99,235,0.2)] md:flex-row md:items-center">
          {/* Subtle grid/curve pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
          />
          <div className="relative max-w-md">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">Stay in the loop</h2>
            <p className="mt-1 text-sm text-white/80">
              Product launches, exclusive deals and business tips — straight to your inbox.
            </p>
          </div>
          <form
            className="relative flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center"
            onSubmit={async (e) => {
              e.preventDefault()
              const email = new FormData(e.currentTarget).get("email")?.toString() ?? ""
              try {
                await subscribeNewsletter(email)
                toast("Subscribed! Check your inbox to confirm.")
                ;(e.target as HTMLFormElement).reset()
              } catch {
                toast("Couldn't subscribe right now. Please try again later.")
              }
            }}
          >
            <Input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
              className="h-11 rounded-full border border-white/20 bg-white/95 px-4 text-sm text-[#0F1B36] placeholder:text-[#53627A] shadow-inner outline-none focus-visible:ring-2 focus-visible:ring-white"
            />
            <Button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-white px-6 font-semibold text-[#0F1B36] shadow-sm hover:bg-[#F9FAFB] hover:text-[#2563EB] transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="/shop" className="flex items-center gap-2">
              <div className="relative size-9 overflow-hidden rounded-lg border border-[#E9E1D4] bg-[#FFFDF8] p-1 shadow-xs">
                <img src="/assets/rr-mark.png" alt="RR GROUP" width={36} height={36} className="size-full object-contain" />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                RR GROUP
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Business software, hardware and cloud services trusted by growing teams across India.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 text-primary mt-0.5" /> 27/817, Nuasahi, Nayapalli, Bhubaneswar, Odisha 751012, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> <a href="tel:+919938844331" className="hover:text-primary hover:underline">+91 9938844331</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" /> rrgroup.official@zohomail.in
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RR GROUP. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {socials.map((s) =>
              s.href.startsWith("/") ? (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <s.icon className="size-4" />
                </Link>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
