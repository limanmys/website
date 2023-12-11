import { Metadata } from "next"
import Image from "next/image"
import DevMgrDark from "@/public/images/DevMgrDark.jpg"
import DevMgrWhite from "@/public/images/DevMgrWhite.jpg"
import {
  CloudCog,
  Component,
  Eye,
  Gauge,
  LandPlot,
  MonitorCheck,
  MonitorUp,
  ShieldCheck,
} from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import AppWindow from "@/components/ui/window"
import SpotlightStack from "@/components/spotlight-stack"

export const metadata: Metadata = {
  title: "Cihaz Yöneticisi",
  description:
    "Windows ve Linux cihazlarınıza görevler gönderin, yazılım ve donanım envanter bilgilerinizi görüntüleyin, paket ve yama yönetiminizi yapın, dinamik koleksiyonlarla hızlıca yönetin.",
}

const FeatureList = [
  {
    icon: MonitorCheck,
    title: "Donanım Envanter Yönetimi",
    description:
      "Organizasyonun sahip olduğu tüm BT cihazlarını izleyerek bir envanterinizi oluşturun. Donanım bilgilerini toplayarak, cihazların özelliklerini ve durumlarını takip edin.",
  },

  {
    icon: Component,
    title: "Yazılım Envanter Yönetimi",
    description:
      "Yazılım bilgilerini toplayarak, cihazların özelliklerini ve durumlarını takip edin. Lisans yönetimi için kullanılabilir ve organizasyonun lisans uygumluluğunu takip edin.",
  },

  {
    icon: MonitorUp,
    title: "Uzaktan Yönetim ve Kontrol",
    description:
      "Uzaktan cihazları kontrol etme, güncelleme, anlık müdahele ile sorun giderme ve yapılandırma gibi işlemleri uzaktan gerçekleştirmeye olanak tanır.",
  },

  {
    icon: LandPlot,
    title: "Yazılım Dağıtımı ve Takibi",
    description:
      "Yazılım dağıtımını ve güncelleme süreçlerini otomatikleştirin. Güvenlik yamaları, yeni sürümler veya uygulama güncellemeleri gibi yazılım değişikliklerini cihazlara güvenli bir şekilde dağıtın.",
  },

  {
    icon: Gauge,
    title: "İzleme ve Performans Analizi",
    description:
      "Sağlık, kullanılabilirlik, CPU, bellek ve disk kullanımı dahil olmak üzere kritik sunucu ve uç noktalarınızın performansı izleyin ve analiz edin. Donanım kaynaklarının kullanımını, ağ trafiğini ve diğer metrikleri değerlendirerek sorunları önceden tespit edin.",
  },

  {
    icon: CloudCog,
    title: "Güncelleme Takibi",
    description:
      "Belirli bir yazılıma ait güvenlik yamalarını ve güncellemeleri otomatik olarak dağıtarak sistemlerin güncel kalmasını sağlayın. Kritik güvenlik güncellemelerini ve düzeltmelerini zamanında ve hatasız bir şekilde uygulayın.",
  },

  {
    icon: ShieldCheck,
    title: "Güvenlik Yönetimi",
    description:
      "Ağ güvenliğini sıkılaştırmak ve ağ saldırılarını önlemek için güvenlik duvarı kurallarını, günlüklerini, ilkelerini ve yapılandırmalarını yönetin. Kulandığınız ürünlerde güvenlik açıkları tespit edildiğinde, bu",
  },

  {
    icon: Eye,
    title: "Uyum İzleme ve Raporlama",
    description:
      "Belirli bir zaman dilimi içinde hangi sistemlerin güncel olduğunu ve hangilerinin güncellenmeye ihtiyaç duyduğunu izleyin. Uyumluluk izleme ve raporlama özellikleri ile regülasyonlara uyum sağlayın. Kurum içi izlenebilirliğinin ve süreç takibinizi arttırın.",
  },
]

export default function DeviceManagerPage() {
  return (
    <>
      <section className="container mt-[15vh] flex flex-col items-center">
        <h1
          className={cn(
            "bg-gradient-to-r from-primary-light to-primary bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
            fontHeading.variable
          )}
        >
          Cihaz Yöneticisi
        </h1>

        <p className="mt-5 max-w-5xl text-center text-muted-foreground">
          Windows ve Linux cihazlarınıza görevler gönderin, yazılım ve donanım
          envanter bilgilerinizi görüntüleyin, paket ve yama yönetiminizi yapın,
          dinamik koleksiyonlarla hızlıca yönetin.
        </p>
      </section>
      <SpotlightStack items={FeatureList} cols="lg:grid-cols-4" />

      <section className="container">
        <AppWindow className="mb-10">
          <Image
            src={DevMgrWhite}
            className="block dark:hidden"
            alt="Cihaz Yöneticisi"
            quality={80}
            placeholder="blur"
            width={1920}
            height={1080}
          />
          <Image
            src={DevMgrDark}
            className="hidden dark:block"
            alt="Cihaz Yöneticisi"
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
