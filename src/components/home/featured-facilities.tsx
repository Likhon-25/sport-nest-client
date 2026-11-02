import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import { FacilityCard } from "@/components/home/facility-card"
import { featuredFacilities } from "@/data/home"

export function FeaturedFacilities() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Top picks"
          title="Featured Facilities"
          description="A few of the most popular places to play, chosen for their quality and convenience."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </Container>
    </section>
  )
}
