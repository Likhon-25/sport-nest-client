import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "cn"

import { Container } from "@/components/common/container"
import { buttonVariants } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#071a24] px-6 py-12 text-center text-white sm:px-12 md:py-16">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.3),transparent_50%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Ready to Book Your Next Game?
            </h2>
            <p className="mt-3 text-white/70">
              Find a facility, pick a time, and get back to playing. Your next
              session is only a few clicks away.
            </p>
            <Link
              href="/facilities"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2")}
            >
              Browse Facilities
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
