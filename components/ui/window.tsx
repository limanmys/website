import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export default function AppWindow({
  children,
  className,
}: {
  children?: ReactNode
  className?: any
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border shadow shadow-accent",
        className
      )}
    >
      <div className="flex h-8 items-center gap-2 border-b bg-foreground/5">
        <div className="ml-1"></div>
        <div className="h-3 w-3 rounded-full bg-red-500 transition-all hover:bg-red-600"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 transition-all hover:bg-yellow-600"></div>
        <div className="h-3 w-3 rounded-full bg-green-500 transition-all hover:bg-green-600"></div>
      </div>

      {children}
    </div>
  )
}
