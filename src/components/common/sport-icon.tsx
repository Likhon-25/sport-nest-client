import {
  CircleDot,
  Goal,
  Target,
  Trophy,
  Volleyball,
  Waves,
  type LucideIcon,
} from "lucide-react"

import type { SportIconName } from "@/types/home"
import type { SportIconProps } from "@/types/components"

const sportIcons: Record<SportIconName, LucideIcon> = {
  football: Goal,
  cricket: Target,
  basketball: CircleDot,
  tennis: Trophy,
  badminton: Volleyball,
  swimming: Waves,
}

export function SportIcon({ name, className }: SportIconProps) {
  const Icon = sportIcons[name]

  return <Icon aria-hidden="true" className={className} />
}
