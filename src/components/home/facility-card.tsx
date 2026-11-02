import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { cn } from "cn"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Facility } from "@/types/home"

type FacilityCardProps = {
  facility: Facility
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={facility.image}
          alt={facility.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover/card:scale-105"
        />
        <Badge className="absolute top-3 left-3">{facility.sport}</Badge>
      </div>

      <CardContent className="space-y-3">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {facility.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            {facility.location}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 font-medium text-foreground">
            <Star
              className="size-4 fill-primary text-primary"
              aria-hidden="true"
            />
            {facility.rating.toFixed(1)}
          </span>
          <span className="text-muted-foreground">
            <span className="font-semibold text-foreground">
              ${facility.pricePerHour}
            </span>
            /hour
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href="/facilities"
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
