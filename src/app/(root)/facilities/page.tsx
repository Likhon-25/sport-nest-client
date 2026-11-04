import FacilityCard from "@/components/home/facilityCard"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import type { Facility } from "@/types/facility"

const AllFacilities = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL

  if (!serverUrl) {
    return (
      <Container className="py-16">
        <p className="text-center text-muted-foreground">
          Facility service is not configured.
        </p>
      </Container>
    )
  }

  let data: Facility[] = []

  try {
    const res = await fetch(`${serverUrl}/facilities`, {
      cache: "no-store",
    })

    if (res.ok) {
      data = (await res.json()) as Facility[]
    }
  } catch {
    data = []
  }

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