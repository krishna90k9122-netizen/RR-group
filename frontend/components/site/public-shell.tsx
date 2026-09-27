"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { SiteNavbar } from "@/components/site/site-navbar"
import { Footer } from "@/components/store/footer"
import { Chatbot } from "@/components/store/chatbot"
import { WhatsAppButton } from "@/components/site/whatsapp-button"

export function PublicShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const cleanPath = (pathname || "").toLowerCase().replace(/\/+$/, "") || "/"
  const isCustomShell =
    cleanPath === "/" ||
    cleanPath === "/about" ||
    cleanPath === "/services" ||
    cleanPath === "/portfolio" ||
    cleanPath === "/blog" ||
    cleanPath === "/careers"

  return (
    <div className="flex min-h-svh flex-col">
      {!isCustomShell && <SiteNavbar />}
      <main className="flex-1">{children}</main>
      {!isCustomShell && <Footer />}
      <Chatbot />
      <WhatsAppButton />
    </div>
  )
}
