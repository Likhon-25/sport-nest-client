export type SportIconName =
  | "football"
  | "cricket"
  | "basketball"
  | "tennis"
  | "badminton"
  | "swimming"

export type Sport = {
  name: string
  icon: SportIconName
  facilityCount: number
}

export type Facility = {
  id: string
  name: string
  sport: string
  location: string
  pricePerHour: number
  rating: number
  image: string
  imageAlt: string
}

export type FeatureIconName = "shield" | "calendar" | "clock" | "users"

export type Feature = {
  title: string
  description: string
  icon: FeatureIconName
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
  rating: number
}
