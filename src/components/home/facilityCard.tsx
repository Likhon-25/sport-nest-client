import { MapPin, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "cn"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { FacilityCardProps } from "@/types/components"

const  FacilityCard = ({ facility }: FacilityCardProps) => {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {facility.image ? (
          // User-provided image URLs can use any host.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={facility.image}
            alt={facility.imageAlt || facility.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image
          </div>
        )}

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
          href={`/facilities/${facility.id}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
export default FacilityCard
