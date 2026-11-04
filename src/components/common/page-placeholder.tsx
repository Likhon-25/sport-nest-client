import { Container } from "@/components/common/container"
import type { PagePlaceholderProps } from "@/types/components"

export function PagePlaceholder({
  title,
  description,
  icon: Icon,
}: PagePlaceholderProps) {
  return (
    <Container className="py-16 text-center">
      <Icon className="mx-auto size-10 text-primary" aria-hidden="true" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Container>
  )
}
