import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import type {
  Feature,
  Facility,
  Sport,
  SportIconName,
  Testimonial,
} from "@/types/home"

export type FacilityCardProps = {
  facility: Facility
}

export type FeatureCardProps = {
  feature: Feature
}

export type SportCardProps = {
  sport: Sport
}

export type TestimonialCardProps = {
  testimonial: Testimonial
}

export type RatingStarsProps = {
  rating: number
  showValue?: boolean
  className?: string
}

export type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export type PagePlaceholderProps = {
  title: string
  description: string
  icon: LucideIcon
}

export type LogoProps = {
  className?: string
}

export type SportIconProps = {
  name: SportIconName
  className?: string
}

export type ChildrenProps = {
  children: ReactNode
}

export type SidebarNavProps = {
  onNavigate?: () => void
}
