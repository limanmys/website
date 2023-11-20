"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import HeroPictureDark from "../../public/images/NewLimanDark.png"
import HeroPictureWhite from "../../public/images/NewLimanWhite.png"
import Particles from "../ui/particles"
import AppWindow from "../ui/window"

const variants = {
  hidden: { opacity: 0, y: -150 },
  visible: { opacity: 1, y: 0 },
}
export default function Hero() {
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <section className="mt-[10vh] space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <Particles className="absolute -z-20 h-[40vh] w-full" />
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="#contact"
            className="group/herobtn hover:group-hover/herobtn flex items-center gap-2 rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium transition-all"
          >
            Detaylı bilgi için iletişime geçin{" "}
            <div className="max-w-5 w-5 overflow-hidden">
              <ArrowRight className="inline-flex h-4 w-4 transition-all group-hover/herobtn:ml-1" />
            </div>
          </Link>
          <h1
            className={cn(
              "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-heading text-3xl text-transparent sm:text-5xl md:text-6xl lg:text-7xl",
              fontHeading.variable
            )}
          >
            Açık Kaynak
            <br /> Merkezi Yönetim Sistemi.
          </h1>
          <p className="mt-6 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <b>Liman Merkezi Yönetim Sistemi</b> bilgi teknolojisi
            süreçlerinizde bulunan <b>sunucu</b>, <b>istemci</b> (Windows,
            Linux), <b>ağ cihazları</b> (router, switch) ve
            <b> yazıcıları</b> uzaktan, kararlı, güvenli ve genişletilebilir
            yöntemler ile merkezi olarak yönetmenizi sağlar.
          </p>

          <AppWindow className="relative mt-10">
            <Image
              src={HeroPictureWhite}
              className="block dark:hidden"
              alt="Liman Merkezi Yönetim Sistemi"
              quality={100}
              placeholder="blur"
              width={1024}
              height={614}
            />
            <Image
              src={HeroPictureDark}
              className="hidden dark:block"
              alt="Liman Merkezi Yönetim Sistemi"
              quality={100}
              placeholder="blur"
              width={1024}
              height={614}
            />
          </AppWindow>
        </div>
      </section>
    </motion.div>
  )
}
