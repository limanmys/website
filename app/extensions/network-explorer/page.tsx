import { Metadata } from "next"
import Image from "next/image"
import NetexDark from "@/public/images/NetexDark.jpg"
import NetexWhite from "@/public/images/NetexWhite.jpg"
import { Bug, Eye, List, MonitorCheck, Scan, ShieldAlert } from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import AppWindow from "@/components/ui/window"
import SpotlightStack from "@/components/spotlight-stack"

export const metadata: Metadata = {
  title: "Ağ Keşif Eklentisi",
  description:
    "Organizasyonunuzda bulunan aktif varlıklarınızı otomatik keşfedin ve güncel envanter bilginize erişin.",
}

const FeatureList = [
  {
    icon: Scan,
    title: "Aktif Varlık Keşfi",
    description:
      "Organizasyonunuzda bulunan aktif olan varlıklarınızı otomatik olarak keşfedin ve otomatik envanter listesinizi oluşturun. Donanım özellikleri, modeli, seri numarası ve diğer ilgili bilgilere kolaylıkla erişin.",
  },
  {
    icon: List,
    title: "Otomatik Güncel Envanter Listesi",
    description:
      "Bir sürü farklı kaynaktan gelen verilerle analiz yaparak otomatik keşif özelliğimizle her zaman güncel envanter bilginize erişin.",
  },
  {
    icon: Bug,
    title: "Anomali Tespiti",
    description:
      "Organizasyonunuzda bulunan aktif olan varlıklarınızdaki IP, MAC ve port anomalilerini tespit edin. anomali alarmları ile hızlıca aksiyon almanıza yardımcı olur.",
  },
  {
    icon: MonitorCheck,
    title: "Varlık Yönetimi",
    description:
      "Varlıklarınız yaşam döngüsünü takip edin ve yenileme veya güncelleme ihtiyaçlarınızı belirleyin.",
  },

  {
    icon: ShieldAlert,
    title: "İzinsiz Cihaz Tespiti",
    description:
      "Organizasyonunuzda bulunan aktif olan varlıklarınızdaki izinsiz cihazları tespit edin.",
  },
  {
    icon: Eye,
    title: "Raporlama ve İnceleme",
    description:
      "Kurum içi izlenebilirliğinin ve takibinin artırılmasına olanak sağlar.",
  },
]

export default function NetworkExplorerPage() {
  return (
    <>
      <section className="container mt-[15vh] flex flex-col items-center">
        <h1
          className={cn(
            "bg-gradient-to-r from-primary-light to-primary bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
            fontHeading.variable
          )}
        >
          Ağ Keşif Eklentisi
        </h1>

        <p className="mt-5 max-w-5xl text-center text-muted-foreground">
          Organizasyonunuzda bulunan aktif varlıklarınızı otomatik keşfedin ve
          güncel envanter bilginize erişin.
        </p>
      </section>

      <SpotlightStack items={FeatureList} cols="lg:grid-cols-3" />

      <section className="container">
        <AppWindow className="mb-10">
          <Image
            src={NetexWhite}
            className="block dark:hidden"
            alt="Ağ Keşif Eklentisi"
            quality={80}
            placeholder="blur"
            width={1920}
            height={1080}
          />
          <Image
            src={NetexDark}
            className="hidden dark:block"
            alt="Ağ Keşif Eklentisi"
            quality={80}
            placeholder="blur"
            width={1920}
            height={1080}
          />
        </AppWindow>
      </section>
    </>
  )
}
