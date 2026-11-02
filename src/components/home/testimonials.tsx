import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { TestimonialCard } from "@/components/home/testimonial-card"
import { testimonials } from "@/data/home"

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Community"
          title="What Athletes Say"
          description="Hear from players who use SportsNest to find their next game."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
