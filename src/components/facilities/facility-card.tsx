import Link from "next/link"
import { MapPin, Users } from "lucide-react"
import { cn } from "cn"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Facility } from "@/types/facility"

type FacilityCardProps = {
  facility: Facility
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {facility.imageUrl ? (
          // User-provided URLs can come from any host, so a plain image is simpler and safer than next/image here.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={facility.imageUrl}
            alt={facility.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image
          </div>
        )}
        <Badge className="absolute top-3 left-3">{facility.sportType}</Badge>
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
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {facility.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 text-muted-foreground">
            <Users className="size-4" aria-hidden="true" />
            {facility.capacity} players
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
          href={`/facilities/${facility._id}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
