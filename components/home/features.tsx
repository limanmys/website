import {
  BarChart3,
  Coins,
  Scaling,
  ShieldCheck,
  Sparkles,
  UserCheck2,
} from "lucide-react"

import SpotlightStack from "../spotlight-stack"

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
      <SpotlightStack items={FeatureList} />
    </section>
  )
}
