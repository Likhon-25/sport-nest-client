import { SportIcon } from "@/components/common/sport-icon"
import type { Sport } from "@/types/home"

type SportCardProps = {
  sport: Sport
}

export function SportCard({ sport }: SportCardProps) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border bg-card p-5 text-center transition-colors hover:border-primary/30 hover:bg-primary/5">
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <SportIcon name={sport.icon} className="size-6" />
      </span>
      <h3 className="mt-4 text-sm font-semibold text-foreground">
        {sport.name}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        {sport.facilityCount} facilities
      </p>
    </div>
  )
}
