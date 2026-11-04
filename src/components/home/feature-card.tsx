import {
  CalendarCheck,
  Clock,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

import type { FeatureIconName } from "@/types/home"
import type { FeatureCardProps } from "@/types/components"

const featureIcons: Record<FeatureIconName, LucideIcon> = {
  shield: ShieldCheck,
  calendar: CalendarCheck,
  clock: Clock,
  users: Users,
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = featureIcons[feature.icon]

  return (
    <div className="rounded-2xl border bg-card p-6">
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
    </div>
  )
}
