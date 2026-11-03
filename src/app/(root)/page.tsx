import { Banner } from "@/components/home/banner"
import { PopularSports } from "@/components/home/popular-sports"
import { FeaturedFacilities } from "@/components/home/featured-facilities"
import { WhyChoose } from "@/components/home/why-choose"
import { Testimonials } from "@/components/home/testimonials"
import { Cta } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Banner />
      <PopularSports />
      <FeaturedFacilities />
      <WhyChoose />
      <Testimonials />
      <Cta />
    </>
  )
}
