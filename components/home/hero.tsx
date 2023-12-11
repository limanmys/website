"use client"

import dynamic from "next/dynamic"
import Image from "next/image"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import Hook from "../../public/images/hook.png"
import HeroPictureDark from "../../public/images/NewLimanDark.jpg"
import HeroPictureWhite from "../../public/images/NewLimanWhite.jpg"
import AppWindow from "../ui/window"

const Particles = dynamic(() => import("../ui/particles"), {
  ssr: false,
})

export default function Hero() {
  return (
    <section className="relative mt-[8vh] space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <Particles className="absolute -z-20 h-[40vh] w-full" />
      <div className="container relative flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1
          className={cn(
            "bg-gradient-to-r from-primary-light to-primary bg-clip-text font-heading text-3xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl",
            fontHeading.variable
          )}
        >
          Açık Kaynak
          <br /> Merkezi Yönetim Sistemi.
        </h1>
        <p className="mt-6 max-w-[42rem] text-base leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          <b>Liman Merkezi Yönetim Sistemi</b>, organizasyonunuz{" "}
          <b>Bilgi Teknolojileri Hizmetlerini</b> etkili bir şekilde yönetmenize
          yardımcı olur. <b>Bilgi Teknolojileri (BT)</b> süreçlerinizde bulunan
          bütün bileşenlerinizi uzaktan, kararlı, güvenli ve genişletilebilir
          yöntemler ile merkezi olarak yönetebilirsiniz.
        </p>
        <Image
          src={Hook}
          alt="Liman Merkezi Yönetim Sistemi"
          quality={80}
          width={250}
          height={100}
          priority={true}
          loading="eager"
          className="pointer-events-none absolute bottom-[0vh] left-[-3vw] z-10 hidden md:block"
        />
        <AppWindow className="relative -m-5 mt-10">
          <Image
            src={HeroPictureWhite}
            className="block dark:hidden"
            alt="Liman Merkezi Yönetim Sistemi"
            quality={80}
            width={1024}
            height={614}
            priority={true}
            loading="eager"
          />
          <Image
            src={HeroPictureDark}
            className="hidden dark:block"
            alt="Liman Merkezi Yönetim Sistemi"
            quality={80}
            width={1024}
            height={614}
            priority={true}
            loading="eager"
          />
        </AppWindow>
      </div>
    </section>
  )
}
