"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

import { Icons } from "./icons"
import { Logo } from "./logos/logo"
import { ModeToggle } from "./mode-toggle"
import Navigation from "./navigation"
import { buttonVariants } from "./ui/button"

export function MainNav() {
  const { theme } = useTheme()

  return (
    <div className="flex w-full justify-between gap-6 md:gap-10">
      <Link
        href="/"
        className="flex items-center space-x-2 transition-opacity hover:opacity-80"
      >
        {theme === "light" ? (
          <Icons.logoLight className="h-9 w-auto" />
        ) : (
          <Logo className="h-9 w-auto" />
        )}
      </Link>
      <Navigation />
      <div className="flex items-center space-x-4">
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
  )
}
