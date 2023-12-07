import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import Spotlight, { SpotlightCard } from "./ui/spotlight"

export default function SpotlightStack({
  items,
  cols = "lg:grid-cols-3",
}: {
  items: any
  cols?: string
}) {
  return (
    <div className="container py-4 lg:py-16">
      <Spotlight
        className={cn("group grid place-items-center items-start gap-6", cols)}
      >
        {items.map((item: any, i: any) => (
          <SpotlightCard key={i}>
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-background p-6 pb-8">
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                aria-hidden="true"
              >
                <div className="translate-z-0 absolute inset-0 rounded-full bg-blue-50 blur-[80px] dark:bg-slate-900"></div>
              </div>
              <div className="flex h-full flex-col items-center text-center">
                <div className="icon mb-4 opacity-80">
                  <div className="rounded-full bg-foreground/5 p-3 shadow-lg shadow-blue-500/5">
                    <div className="border-foreground/2 rounded-full border bg-foreground/5 p-3">
                      <div className="border-foreground/2 rounded-full border bg-foreground/5 p-3">
                        <item.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow">
                  <h3
                    className={cn(
                      "mb-3 font-heading text-xl font-bold",
                      fontHeading.variable
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-normal text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </Spotlight>
    </div>
  )
}
