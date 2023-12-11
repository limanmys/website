import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Aciklab } from "./logos/aciklab"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="z-50 w-full border-y bg-background/5 py-10 backdrop-blur">
        <div className="md:h-18 container flex flex-col items-center justify-between gap-8 md:flex-row md:py-0">
          <Link
            className="flex flex-col md:gap-2 md:px-0"
            href="https://aciklab.org"
            target="_blank"
          >
            <Aciklab className="h-7 w-auto" />
          </Link>
          <Link
            className="flex flex-col md:gap-2 md:px-0"
            href="https://havelsan.com.tr"
            target="_blank"
          >
            <p className="text-center text-xs font-semibold leading-loose md:text-left">
              {new Date().getFullYear()} © HAVELSAN A.Ş.
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
