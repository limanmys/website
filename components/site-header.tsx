"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import { ModeToggle } from "./mode-toggle"

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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="https://github.com/limanmys"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
