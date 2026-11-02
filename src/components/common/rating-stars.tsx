import { Star } from "lucide-react"
import { cn } from "cn"

type RatingStarsProps = {
  rating: number
  showValue?: boolean
  className?: string
}

export function RatingStars({
  rating,
  showValue = false,
  className,
}: RatingStarsProps) {
  const filledStars = Math.round(rating)

  return (
    <div
      data-slot="rating-stars"
      className={cn("flex items-center gap-1.5", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            aria-hidden="true"
            className={cn(
              "size-3.5",
              index < filledStars
                ? "fill-primary text-primary"
                : "fill-transparent text-muted-foreground/30"
            )}
          />
        ))}
      </div>
      {showValue ? (
        <span className="text-xs font-medium text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      ) : null}
    </div>
  )
}
