import FacilityCard from "@/components/home/facilityCard"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import type { Facility } from "@/types/facility"

const AllFacilities = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
    cache: "no-store",
  })
  const data: Facility[] = await res.json()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Find a place to play"
          title="All Facilities"
          description="Browse all available sports facilities."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((facility) => (
            <FacilityCard
              key={facility._id}
              facility={{
                id: facility._id,
                name: facility.name,
                sport: facility.sportType,
                location: facility.location,
                pricePerHour: Number(facility.pricePerHour),
                rating: 0,
                image: facility.imageUrl,
                imageAlt: facility.name,
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AllFacilities