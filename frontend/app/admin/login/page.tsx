import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { AdminLoginForm } from "@/components/auth/admin-login-form"
import { ArrowLeft, Home, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Login — RR GROUP",
  description: "Staff and admin access to the RR GROUP management panel.",
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Top Navigation Row: Back to Home */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-xs transition hover:bg-[#1769FF] hover:text-white hover:border-[#1769FF]"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-foreground/80 hover:text-foreground"
          >
            <div className="relative h-6 w-6 overflow-hidden rounded-md border border-border bg-white p-0.5">
              <Image src="/assets/rr-mark.png" alt="RR GROUP" fill className="object-contain" sizes="24px" />
            </div>
            <span>RR GROUP</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <div className="mb-6 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-emerald-600 font-display text-lg font-bold text-white shadow-sm">
              <ShieldCheck className="size-6" />
            </span>
            <h1 className="mt-4 font-display text-2xl font-bold tracking-tight">Admin Access</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Staff and administrator login. Customer accounts cannot access this panel.
            </p>
          </div>

          <AdminLoginForm />

          <div className="mt-6 flex flex-col gap-2.5 border-t border-border pt-5 text-center text-sm text-muted-foreground">
            <p>
              Not staff?{" "}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Sign in as customer
              </Link>
            </p>
            <p>
              Need an admin account?{" "}
              <Link href="/admin/signup" className="font-semibold text-emerald-600 hover:underline dark:text-emerald-400">
                Register here
              </Link>
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition"
              >
                <Home className="size-3.5" />
                <span>Return to Website Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}