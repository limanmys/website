"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Aciklab } from "./logos/aciklab"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

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
            <p className="text-center text-xs font-semibold leading-loose md:text-left">
              {new Date().getFullYear()} © HAVELSAN A.Ş.
            </p>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/extensions" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Eklentiler
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="https://docs.liman.dev" legacyBehavior passHref>
                  <NavigationMenuLink
                    target="_blank"
                    className={navigationMenuTriggerStyle()}
                  >
                    Dokümantasyon
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/datasheet.pdf" legacyBehavior passHref>
                  <NavigationMenuLink
                    target="_blank"
                    className={navigationMenuTriggerStyle()}
                  >
                    Teknik Doküman
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    İletişim
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer>
  )
}
