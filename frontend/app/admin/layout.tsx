import type { ReactNode } from "react"
import Link from "next/link"
import { AdminNav } from "@/components/admin/admin-nav"
import { StaffGuard } from "@/components/auth/staff-guard"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <StaffGuard>
      <div className="min-h-svh bg-muted/30">
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="flex h-14 items-center justify-between gap-4 px-4 lg:px-6">
            <div className="flex items-center gap-3">
              <div className="relative size-8 overflow-hidden rounded-lg border border-[#E9E1D4] bg-[#FFFDF8] p-0.5 shadow-xs">
                <img src="/assets/rr-mark.png" alt="RR GROUP" width={32} height={32} className="size-full object-contain" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-tight">RR GROUP Admin</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Management Console
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-[#1769FF]/30 text-[#1769FF] hover:bg-[#1769FF] hover:text-white transition")}
              >
                <ArrowLeft className="size-3.5" /> Back to Home
              </Link>
              <Link
                href="/shop"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              >
                Store
              </Link>
            </div>
          </div>
        </header>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
          <aside className="shrink-0 lg:w-56">
            <AdminNav />
          </aside>
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </StaffGuard>
  )
}