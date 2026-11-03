import type { Metadata } from "next"
import { Building2 } from "lucide-react"

import { PagePlaceholder } from "@/components/common/page-placeholder"

export const metadata: Metadata = {
  title: "All Facilities | SportsNest",
  description: "Browse sports facilities available on SportsNest.",
}

export default function FacilitiesPage() {
  return (
    <PagePlaceholder
      title="All Facilities"
      description="Browse sports facilities and find the perfect place to play."
      icon={Building2}
    />
  )
}
