import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { FeatureCard } from "@/components/home/feature-card"
import { features } from "@/data/home"

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why SportsNest"
          title="Why Choose SportsNest"
          description="A simple booking experience built around the things that matter to players."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}
