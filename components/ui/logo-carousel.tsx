import Image from "next/image"
import GAMER from "@/public/references/GAMER.png"
import HAVELSAN from "@/public/references/HAVELSAN.webp"
import Icisleri from "@/public/references/Icisleri.png"
import KiyiEmniyeti from "@/public/references/KiyiEmniyeti.webp"
import Kizilay from "@/public/references/Kizilay.png"
import MSB from "@/public/references/MilliSavunmaBakanligi.png"
import TarimOrmanBakanligi from "@/public/references/TarimOrmanBakanligi.png"
import TCMB from "@/public/references/TCMB.svg"
import YSK from "@/public/references/YSK.png"
import ZiraatKatilim from "@/public/references/ZiraatKatilim.png"

import { cn } from "@/lib/utils"

export default function LogoCarousel() {
  const logos = [
    {
      src: YSK,
      alt: "Yüksek Seçim Kurulu",
      noFilter: true,
      className: "w-auto h-[64px]",
    },
    {
      src: KiyiEmniyeti,
      alt: "Kıyı Emniyeti Genel Müdürlüğü",
      noFilter: true,
      className: "w-auto h-[64px]",
    },
    { src: GAMER, alt: "GAMER, İçişleri Bakanlığı" },
    { src: HAVELSAN, alt: "HAVELSAN" },
    { src: Icisleri, alt: "T.C. İçişleri Bakanlığı", className: "h-[42px]" },
    { src: Kizilay, alt: "Kızılay", className: "h-[42px]" },
    { src: MSB, alt: "Milli Savunma Bakanlığı", className: "h-[50px]" },
    {
      src: TarimOrmanBakanligi,
      alt: "Tarım ve Orman Bakanlığı",
      className: "h-[42px]",
    },
    { src: TCMB, alt: "Türkiye Cumhuriyet Merkez Bankası" },
    { src: ZiraatKatilim, alt: "Ziraat Katılım" },
  ]

  return (
    <div className="flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex shrink-0 animate-infinite-scroll items-center gap-12">
        {logos.map((logo, index) => (
          <li key={index}>
            <LogoImage {...logo} />
          </li>
        ))}
      </ul>
      <ul
        className="ml-8 flex shrink-0 animate-infinite-scroll items-center gap-12"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <LogoImage {...logo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function LogoImage({
  src,
  alt,
  className = "h-[42px]",
  noFilter = false,
}: {
  src: any
  alt: string
  className?: string
  noFilter?: boolean
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        !noFilter && "w-auto brightness-0 invert-[25%] dark:invert-[75%]",
        className
      )}
      quality={100}
    />
  )
}
