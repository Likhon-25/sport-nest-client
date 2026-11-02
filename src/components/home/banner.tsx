import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { cn } from "cn"

import { Container } from "@/components/common/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

export function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#071a24] text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_45%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <Container className="relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <Badge className="bg-accent text-accent-foreground">
            Your next game starts here
          </Badge>

          <h1 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Book your favourite sports facility in minutes.
          </h1>

          <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
            From football turfs to swimming pools, find a place to play, check
            availability, and reserve your spot — all in one simple platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/facilities"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Browse Facilities
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/bookings"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              View My Bookings
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80"
              alt="Indoor basketball court ready for a game"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 text-foreground shadow-xl sm:left-8">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Star className="size-5 fill-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold">4.9 average rating</p>
              <p className="text-xs text-muted-foreground">
                From 1,200+ happy athletes
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
