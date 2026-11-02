import type { Metadata } from "next"
import { CalendarDays } from "lucide-react"

import { PagePlaceholder } from "@/components/common/page-placeholder"

export const metadata: Metadata = {
  title: "My Bookings | SportsNest",
  description: "View and manage your SportsNest bookings.",
}

export default function BookingsPage() {
  return (
    <PagePlaceholder
      title="My Bookings"
      description="Your upcoming and past bookings will appear here."
      icon={CalendarDays}
    />
  )
}
