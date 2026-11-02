import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { SportCard } from "@/components/home/sport-card"
import { popularSports } from "@/data/home"

export function PopularSports() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Find your game"
          title="Popular Sports"
          description="Choose from a range of sports and find the right facility for your next session."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {popularSports.map((sport) => (
            <SportCard key={sport.name} sport={sport} />
          ))}
        </div>
      </Container>
    </section>
  )
}
