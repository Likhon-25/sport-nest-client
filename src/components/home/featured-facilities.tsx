import FacilityCard from "@/components/home/facilityCard"
import { Container } from "@/components/common/container"
import { SectionHeading } from "@/components/common/section-heading"
import type { Facility } from "@/types/facility"

export async function FeaturedFacilities() {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
  const res = serverUrl
    ? await fetch(`${serverUrl}/facilities`, {
        cache: "no-store",
      }).catch(() => null)
    : null

  const facilities: Facility[] =
    res && res.ok ? await res.json() : []
  const loadFailed = !res || !res.ok

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Top picks"
          title="Featured Facilities"
          description="Explore a few popular places to play near you."
        />

        {loadFailed ? (
          <p className="mt-10 text-center text-muted-foreground">
            We could not load the facilities. Please try again later.
          </p>
        ) : facilities.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No facilities have been added yet.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.slice(0, 3).map((facility) => (
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
        )}
      </Container>
    </section>
  )
}
