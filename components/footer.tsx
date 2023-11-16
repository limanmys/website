import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Aciklab } from "./logos/aciklab"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="z-50 w-full border-y bg-background/5 py-10 backdrop-blur">
        <div className="container flex flex-col items-center justify-between md:h-24 md:flex-row md:py-0">
          <Link
            className="flex flex-col gap-4 md:gap-2 md:px-0"
            href="https://havelsan.com.tr"
            target="_blank"
          >
            <Aciklab className="h-8 w-auto" />

            <p className="text-center text-xs font-semibold leading-loose md:text-left">
              {new Date().getFullYear()} © HAVELSAN A.Ş.
            </p>
          </Link>
          <Link
            className="flex items-center gap-4"
            href="https://tskgv.org.tr"
            target="_blank"
          >
            <Image
              src="/images/tskgv.png"
              alt="HAVELSAN"
              width={34}
              height={40}
            />
            <p className="text-center text-xs font-medium">
              HAVELSAN A.Ş. Türk Silahlı Kuvvetlerini
              <br />
              Güçlendirme Vakfı&apos;nın bir kuruluşudur.
            </p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
