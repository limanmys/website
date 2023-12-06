import "@/styles/globals.css"

import { Metadata, Viewport } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Bg from "@/components/ui/bg"
import { SiteFooter } from "@/components/footer"
import Lines from "@/components/lines"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Liman Merkezi Yönetim Sistemi | HAVELSAN Açıklab",
    template: `%s - Liman Merkezi Yönetim Sistemi`,
  },
  description:
    "Liman Merkezi Yönetim Sistemi, organizasyonunuz Bilgi Teknolojileri Hizmetlerini etkili bir şekilde yönetmenize yardımcı olur. Bilgi Teknolojileri (BT) süreçlerinizde bulunan bütün bileşenlerinizi uzaktan, kararlı, güvenli ve genişletilebilir yöntemler ile merkezi olarak yönetebilirsiniz.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="tr" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Lines />

            <div className="relative flex min-h-screen flex-col ">
              <Bg />

              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <SiteFooter />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
