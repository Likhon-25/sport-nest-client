import type { Facility, Feature, Sport, Testimonial } from "@/types/home"

export const popularSports: Sport[] = [
  { name: "Football", icon: "football", facilityCount: 24 },
  { name: "Cricket", icon: "cricket", facilityCount: 18 },
  { name: "Basketball", icon: "basketball", facilityCount: 15 },
  { name: "Tennis", icon: "tennis", facilityCount: 12 },
  { name: "Badminton", icon: "badminton", facilityCount: 20 },
  { name: "Swimming", icon: "swimming", facilityCount: 9 },
]

export const featuredFacilities: Facility[] = [
  {
    id: "greenfield-football-arena",
    name: "Greenfield Football Arena",
    sport: "Football",
    location: "Downtown",
    pricePerHour: 40,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Green football field with white markings",
  },
  {
    id: "ace-tennis-club",
    name: "Ace Tennis Club",
    sport: "Tennis",
    location: "Riverside",
    pricePerHour: 25,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tennis court with a net and green surroundings",
  },
  {
    id: "aqua-center",
    name: "Aqua Center",
    sport: "Swimming",
    location: "Northside",
    pricePerHour: 15,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Indoor swimming pool with clear blue water",
  },
  {
    id: "smash-badminton-hall",
    name: "Smash Badminton Hall",
    sport: "Badminton",
    location: "Eastside",
    pricePerHour: 20,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Badminton court with a net and wooden flooring",
  },
]

export const features: Feature[] = [
  {
    title: "Verified Facilities",
    description:
      "Every venue is reviewed so you can book with confidence.",
    icon: "shield",
  },
  {
    title: "Easy Booking",
    description:
      "Find a facility and reserve your spot in a few simple steps.",
    icon: "calendar",
  },
  {
    title: "Flexible Schedules",
    description:
      "Choose from morning, afternoon, and evening time slots.",
    icon: "clock",
  },
  {
    title: "Trusted by Athletes",
    description:
      "Join a growing community of players and sports lovers.",
    icon: "users",
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Booking a court used to take forever. SportsNest made it simple — I found a facility near me and booked in under two minutes.",
    name: "Sarah Ahmed",
    role: "Football Player",
    initials: "SA",
    rating: 5,
  },
  {
    quote:
      "The facility details and photos are accurate, and the booking process is straightforward. I play tennis here every weekend.",
    name: "Daniel Kim",
    role: "Tennis Player",
    initials: "DK",
    rating: 5,
  },
  {
    quote:
      "Great experience from start to finish. The swimming pool was clean, and the staff were helpful.",
    name: "Maria Lopez",
    role: "Swimmer",
    initials: "ML",
    rating: 5,
  },
]
