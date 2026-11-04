export type Facility = {
  _id: string
  name: string
  sportType: string
  imageUrl: string
  location: string
  pricePerHour: string
  capacity: string
  description: string
}

export type FacilityDetailsProps = {
  params: Promise<{
    id: string
  }>
}
