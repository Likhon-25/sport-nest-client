import Link from "next/link"
import { ArrowLeft, type LucideIcon } from "lucide-react"
import { cn } from "cn"

import { Container } from "@/components/common/container"
import { buttonVariants } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

type PagePlaceholderProps = {
  title: string
  description: string
  icon: LucideIcon
}

export function PagePlaceholder({
  title,
  description,
  icon: Icon,
}: PagePlaceholderProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-muted-foreground">{description}</p>

          <Empty className="mt-10 border bg-card">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Icon />
              </EmptyMedia>
              <EmptyTitle>Coming soon</EmptyTitle>
              <EmptyDescription>
                We&apos;re still building this page. In the meantime, explore
                the featured facilities on the home page.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
              >
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
            </EmptyContent>
          </Empty>
        </div>
      </Container>
    </section>
  )
}
