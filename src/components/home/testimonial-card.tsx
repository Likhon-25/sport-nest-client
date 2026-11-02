import { Quote } from "lucide-react"

import { RatingStars } from "@/components/common/rating-stars"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/types/home"

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Quote className="size-6 text-primary/40" aria-hidden="true" />
        <RatingStars rating={testimonial.rating} />
        <p className="text-sm leading-relaxed text-muted-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-2">
          <Avatar>
            <AvatarFallback>{testimonial.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {testimonial.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
