import {
  BarChart3,
  Coins,
  Scaling,
  ShieldCheck,
  Sparkles,
  UserCheck2,
} from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import Spotlight, { SpotlightCard } from "../ui/spotlight"

/*

    1. Süreç Optimizasyonu:
    • BT hizmet yönetimi süreçlerinizi optimize ederek verimliliğinizi arttırmanızı sağlar.
    • BT süreçlerinizdeki geliştirmeler ve iyileştirmeler sayesinde hizmet kesintilerini en aza indirir. 
    2. Müşteri Memnuniyeti:
    • Kullanıcı dostu arayüzleri ve hızlı çözüm sağlama yetenekleriyle müşteri memnuniyetini artırır.
    • Organizasyonunuzdaki kullanıcıların sorunlarına daha hızlı çözüm sağlamanıza yardımcı olur.
    3.  Güvenlik ve Uyum:
    • Bilgi güvenliği standartlarına uygun çözümler sunarak organizasyonların verilerini güvence altına alır.
    • Uyumluluk izleme ve raporlama özellikleri ile regülasyonlara uyum sağlar.
    4.  Esneklik ve Ölçeklenebilirlik:
    • Büyüyen organizasyonunuz yapısına kolayca adapte olabilir ve yönetebilirsiniz.
    • Kullanıcı dostu arayüzü ve esnek özellikleri ile hem küçük ölçekli işletmelerin hem de büyük kuruluşların ihtiyaçlarına uyum sağlar.
    5.  Veri Analitiği ve Raporlama:
    • Çeşitli analitik araçlar ve raporlama özellikleri ile  verileri anlamlı bilgilere dönüştürmenize yardımcı olur.
    • Karar alıcılara, hizmet performansını ve süreç verimliliğini daha iyi anlamaları için ihtiyaç duyulan bilgileri sunar.
    6. Maliyet Tasarrufu:
    • Süreç otomasyonu ve verimliliği artırma özellikleri ile organizasyonlara maliyet tasarrufu sağlar.
    • İnsan kaynakları ve zaman yönetimi açısından optimize edilmiş süreçlerle bütçe etkinliği artırılır.
*/

const FeatureList = [
  {
    icon: Sparkles,
    title: "Süreç Optimizasyonu",
    description:
      "BT hizmet yönetimi süreçlerinizi optimize ederek verimliliğinizi arttırmanızı ve iyileştirmeler sayesinde hizmet kesintilerini en aza indirmenizi sağlar.",
  },
  {
    icon: UserCheck2,
    title: "Müşteri Memnuniyeti",
    description:
      "Kullanıcı dostu arayüzleri ve hızlı çözüm sağlama yetenekleriyle organizasyonunuzdaki kullanıcıların sorunlarını çözmenize yardımcı olur.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik ve Uyum",
    description:
      "Bilgi güvenliği standartlarına uygun çözümler sunarak ve uyumluluk izleme, raporlama özellikleriyle regülasyonlara uyum sağlar.",
  },
  {
    icon: Scaling,
    title: "Esneklik ve Ölçeklenebilirlik",
    description:
      "Kullanıcı dostu arayüzü ve esnek özellikleri ile hem küçük ölçekli işletmelerin hem de büyük kuruluşların ihtiyaçlarına uyum sağlar.",
  },
  {
    icon: BarChart3,
    title: "Veri Analitiği ve Raporlama",
    description:
      "Çeşitli analitik araçlar ve raporlama özellikleri ile verileri anlamlı bilgilere dönüştürmenize yardımcı olur ve karar alıcıları destekleyici bilgiler sunar.",
  },
  {
    icon: Coins,
    title: "Maliyet Tasarrufu",
    description:
      "Süreç otomasyonu ve verimliliği artırma özellikleri ile organizasyonunuzdaki insan kaynakları ve zaman yönetimi açısından maliyet tasarrufu sağlar.",
  },
]

export default function Features() {
  return (
    <section id="features" className="border-t">
      <div className="container py-4 lg:py-16">
        <Spotlight className="group grid items-start gap-6 lg:grid-cols-3">
          {FeatureList.map((feature, i) => (
            <SpotlightCard key={i}>
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-background p-6 pb-8">
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                  aria-hidden="true"
                >
                  <div className="translate-z-0 absolute inset-0 rounded-full bg-blue-50 blur-[80px] dark:bg-slate-900"></div>
                </div>
                <div className="flex h-full flex-col items-center text-center">
                  <div className="icon mb-4 opacity-80">
                    <div className="rounded-full bg-foreground/5 p-3 shadow-lg shadow-blue-500/5">
                      <div className="border-foreground/2 rounded-full border bg-foreground/5 p-3">
                        <div className="border-foreground/2 rounded-full border bg-foreground/5 p-3">
                          <feature.icon className="h-8 w-8" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grow">
                    <h3
                      className={cn(
                        "mb-3 font-heading text-xl font-bold",
                        fontHeading.variable
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </Spotlight>
      </div>
    </section>
  )
}
