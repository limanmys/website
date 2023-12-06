import dynamic from "next/dynamic"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import LogoCarousel from "../ui/logo-carousel"

const Particles = dynamic(() => import("../ui/particles"), {
  ssr: false,
})

export default function References() {
  return (
    <div className="pointer-events-none relative border-t bg-background py-10">
      <Particles className="absolute w-full" />
      <div className="container flex flex-col items-center gap-5">
        <h5
          className={cn(
            "bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text font-heading text-sm font-semibold text-transparent",
            fontHeading.variable
          )}
        >
          Kurumlar tarafından güveniliyor
        </h5>
        <LogoCarousel />
      </div>
    </div>
  )
}
