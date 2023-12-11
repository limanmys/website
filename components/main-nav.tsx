import { MonitorCheck } from "lucide-react"
import Link from "next/link"
import React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav"

import { Logo } from "./logos/logo"

interface MainNavProps {
  items?: NavItem[]
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
        href="/"
        className="flex items-center space-x-2 transition-opacity hover:opacity-80"
      >
        <Logo className="h-7 w-auto" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Eklentiler</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/extensions/device-manager"
                    >
                      <MonitorCheck className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Cihaz Yöneticisi
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Organizasyonunuzda bulunan cihazlarınızı etkili bir
                        şekilde yönetin.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/extensions/network-explorer"
                  title="Ağ Keşif Eklentisi"
                >
                  Aktif varlıklarınızı otomatik keşfedin ve güncel envanter
                  bilginize erişin.
                </ListItem>
                <ListItem
                  href="/extensions/network-monitor"
                  title="Ağ İzleme Eklentisi"
                >
                  Ağ cihazlarınızı performanslarını, sağlık durumlarını izleyin
                  ve genel ağ sağlığınızı güçlendirin.
                </ListItem>
                <ListItem
                  href="/extensions/domain-manager"
                  title="Domain Yöneticisi"
                >
                  Aktif Dizin ve SAMBA etki alanlarınızı ve etki alanızdaki
                  organizasyon bileşenlerinizi merkezi olarak yönetin.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dokümantasyon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <ListItem
                  title="Dokümantasyon"
                  href="https://docs.liman.dev"
                  target="_blank"
                >
                  Tüm Liman dokümantasyonuna erişebilirsiniz.
                </ListItem>
                <ListItem
                  title="Kullanım Kılavuzu"
                  href="https://docs.liman.dev/kullanim-kilavuzu/"
                  target="_blank"
                >
                  Liman kullanımı için hazırlanan kullanım kılavuzu.
                </ListItem>
                <ListItem
                  title="Kurulum"
                  href="https://docs.liman.dev/baslangic/kurulum"
                  target="_blank"
                >
                  Liman kurulumu için gerekli adımları takip edin.
                </ListItem>
                <ListItem
                  title="Güvenlik"
                  href="https://docs.liman.dev/baslangic/guvenlik"
                  target="_blank"
                >
                  Liman için yayınlanmış güvenlik yama notları.
                </ListItem>
                <ListItem
                  title="Eklenti Geliştirme"
                  href="https://docs.liman.dev/eklenti-gelistirme/"
                  target="_blank"
                >
                  Liman için eklenti geliştirme kılavuzu. Sistemlerle entegre
                  olun.
                </ListItem>
                <ListItem
                  title="Kavram İspat Çalışması"
                  href="https://docs.liman.dev/liman-poc"
                  target="_blank"
                >
                  Kavram ispat çalışması için gerekli kurulum dokümanları ve
                  yönergeler.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/datasheet.pdf" legacyBehavior passHref>
              <NavigationMenuLink
                target="_blank"
                className={navigationMenuTriggerStyle()}
              >
                Datasheet
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://aciklab.org" legacyBehavior passHref>
              <NavigationMenuLink
                target="_blank"
                className={navigationMenuTriggerStyle()}
              >
                Açıklab
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
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
