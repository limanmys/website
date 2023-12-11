import { Metadata } from "next"
import Image from "next/image"
import NetworkDark from "@/public/images/NetworkDark.jpg"
import NetworkWhite from "@/public/images/NetworkWhite.jpg"
import {
  AlarmCheck,
  AreaChart,
  ArrowDownUp,
  Bug,
  Share2,
  UserCog2,
} from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import AppWindow from "@/components/ui/window"
import Contact from "@/components/contact"
import SpotlightStack from "@/components/spotlight-stack"

export const metadata: Metadata = {
  title: "Ağ İzleme Eklentisi",
  description:
    "Organizasyonunuzda bulunan ağ cihazlarınızı performanslarını, sağlık durumlarını izleyin ve genel ağ sağlığınızı günçlendirin.",
}

const FeatureList = [
  {
    icon: AreaChart,
    title: "Ağ Performans İzleme",
    description:
      "Ağ cihazlarınızın ve bağlantıların performansını sürekli olarak izleyin. Bant genişliği kullanımı, paket kaybı, gecikme süreleri ve diğer performans metriklerinizi takip edin.",
  },
  {
    icon: Bug,
    title: "Hata ve Sorun Tespiti",
    description:
      "Ağlarınızdaki hataları ve sorunları belirleyerek operasyonel sorunların hızlı bir şekilde tanımlanmasına yardımcı olur. Kesintiler, bağlantı sorunları, ağ cihazlarında performans düşüşleri gibi sorunları tespit edin.",
  },
  {
    icon: Share2,
    title: "Ağ Haritası ve Topoloji Oluşturma",
    description:
      "Ağdaki cihazları ve bağlantıları haritalar ve topolojiler aracılığıyla görselleştiririn. Ağdaki cihazların birbirleriyle olan ilişkilerini anlayın. Çoğrafi konuma göre kabinetler oluşturulup kabinetlerin içerisindeki cihazların sağlık durumlarını takip edin.",
  },
  {
    icon: AlarmCheck,
    title: "Anlık Bildirimler ve Alarm",
    description:
      "Ağdaki önemli olayları belirleyerek tanımladığınız eşik değerlere göre anlık bildirimler ve alarmlar alın ve ağlarınızı proaktif izleyin. Performans düşüşleri, ağ trafiği anormallikleri veya güvenlik ihlalleri gibi durumlardan anlık haberdar olun.",
  },
  {
    icon: UserCog2,
    title: "Arayüz Özelleştirilmesi",
    description:
      "Arayüzlerinizi kendi ihtiyaçlarınıza ve tercihlerinze göre özelleştirirerek daha etkili ve kişiselleştirilmiş bir deneyim elde edin.",
  },
  {
    icon: ArrowDownUp,
    title: "Trafik Optimizasyonu",
    description:
      "Bant genişliği kullanımı, paket kaybı, gecikme süreleri ve diğer performans metriklerinizi takip edin ve ağ trafiğinizi optimize edin.",
  },
]

export default function NetworkMonitorPage() {
  return (
    <>
      <section className="container mt-[15vh] flex flex-col items-center">
        <h1
          className={cn(
            "bg-gradient-to-r from-primary-light to-primary bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
            fontHeading.variable
          )}
        >
          Ağ İzleme Eklentisi
        </h1>

        <p className="mt-5 max-w-5xl text-center text-muted-foreground">
          Organizasyonunuzda bulunan ağ cihazlarınızı performanslarını, sağlık
          durumlarını izleyin ve genel ağ sağlığınızı güçlendirin.
        </p>
      </section>

      <SpotlightStack items={FeatureList} cols="lg:grid-cols-3" />

      <section className="container">
        <AppWindow className="mb-10">
          <Image
            src={NetworkWhite}
            className="block dark:hidden"
            alt="Ağ İzleme Eklentisi"
            quality={80}
            placeholder="blur"
            width={1920}
            height={1080}
          />
          <Image
            src={NetworkDark}
            className="hidden dark:block"
            alt="Ağ İzleme Eklentisi"
            quality={80}
            placeholder="blur"
            width={1920}
            height={1080}
          />
        </AppWindow>
      </section>
      <Contact />
    </>
  )
}
