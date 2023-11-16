"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import { ModeToggle } from "./mode-toggle"

const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
}

export function SiteHeader() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY === 0) {
        setTop(true)
      } else {
        setTop(false)
      }
    }

    return () => {
      window.onscroll = null
    }
  }, [])

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <header
        className={cn(
          "fixed top-0 z-50 w-full ",
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
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.github}
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
    </motion.div>
  )
}
