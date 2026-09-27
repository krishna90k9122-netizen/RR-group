import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { ArrowLeft, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Forgot Password — RR GROUP Store",
  description: "Reset your RR GROUP account password.",
}

export default function ForgotPasswordPage() {
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
          <div className="mb-8 text-center">
            <div className="relative mx-auto mb-3 h-12 w-12 overflow-hidden rounded-2xl border border-[#E9E1D4] bg-[#FFFDF8] p-1.5 shadow-xs">
              <Image src="/assets/rr-mark.png" alt="RR GROUP" fill className="object-contain" sizes="48px" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight">Forgot password</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your email and we&apos;ll send you a reset link.
            </p>
          </div>

          <ForgotPasswordForm />

          <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 text-center text-sm text-muted-foreground">
            <p>
              Remembered it?{" "}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Back to sign in
              </Link>
            </p>
            <div className="pt-1">
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