import Link from "next/link"
import { Trophy } from "lucide-react"
import { cn } from "cn"
import type { LogoProps } from "@/types/components"

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      data-slot="logo"
      className={cn("flex items-center gap-2 font-semibold", className)}
      aria-label="SportsNest home"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Trophy className="size-5" aria-hidden="true" />
      </span>
      <span className="text-lg tracking-tight text-foreground">SportsNest</span>
    </Link>
  )
}
