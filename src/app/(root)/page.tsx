import { Banner } from "@/components/home/banner"
import { PopularSports } from "@/components/home/popular-sports"
import { FeaturedFacilities } from "@/components/home/featured-facilities"
import { WhyChoose } from "@/components/home/why-choose"
import { Testimonials } from "@/components/home/testimonials"
import { Cta } from "@/components/home/cta"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <Banner />
      <PopularSports />
      <Suspense
        fallback={
          <p className="py-16 text-center text-muted-foreground">
            Loading facilities...
          </p>
        }
      >
        <FeaturedFacilities />
      </Suspense>
      <WhyChoose />
      <Testimonials />
      <Cta />
    </>
  )
}
