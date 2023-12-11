"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTop(true)
      } else {
        setTop(false)
      }
    }
    handleScroll()

    window.onscroll = handleScroll

    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full",
        !top &&
          "border-b bg-background/95 backdrop-blur transition-all supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div
        className={cn(
          "container flex h-28 items-center space-x-4 transition-all sm:justify-between sm:space-x-0",
          !top && "h-16"
        )}
      >
        <MainNav />
      </div>
    </header>
  )
}
