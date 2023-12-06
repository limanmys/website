import { Metadata } from "next"
import Image from "next/image"
import DevMgrDark from "@/public/images/DevMgrDark.jpg"
import DevMgrWhite from "@/public/images/DevMgrWhite.jpg"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import AppWindow from "@/components/ui/window"

export const metadata: Metadata = {
  title: "Cihaz Yöneticisi",
  description:
    "Windows ve Linux cihazlarınıza görevler gönderin, yazılım ve donanım envanter bilgilerinizi görüntüleyin, paket ve yama yönetiminizi yapın, dinamik koleksiyonlarla hızlıca yönetin.",
}

export default function DeviceManagerPage() {
  return (
    <section id="extension-landing" className="container mt-[15vh]">
      <h1
        className={cn(
          "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
          fontHeading.variable
        )}
      >
        Cihaz Yöneticisi
      </h1>

      <p className="mt-5 text-center">
        Organizasyonunuzda bulunan cihazlarınızı etkili bir şekilde yönetin.
      </p>

      <AppWindow className="mt-10">
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

      <Card className="my-10 p-5">
        <article
          className="prose dark:prose-invert sm:prose lg:prose-lg xl:prose-xl"
          style={{
            maxWidth: "100%",
          }}
        >
          <ol>
            <li>
              Donanım Envanter Yönetimi
              <ul>
                <li>
                  Organizasyonun sahip olduğu tüm BT cihazlarını izleyerek bir
                  envanterinizi oluşturun.
                </li>
                <li>
                  Donanım bilgilerini toplayarak, cihazların özelliklerini ve
                  durumlarını takip edin.
                </li>
              </ul>
            </li>
            <li>
              Yazılım Envanter Yönetimi
              <ul>
                <li>
                  Yazılım bilgilerini toplayarak, cihazların özelliklerini ve
                  durumlarını takip edin.
                </li>
                <li>
                  Lisans yönetimi için kullanılabilir ve organizasyonun lisans
                  uygumluluğunu takip edin.
                </li>
              </ul>
            </li>
            <li>
              Uzaktan Yönetim ve Kontrol
              <ul>
                <li>
                  Uzaktan cihazları kontrol etme, güncelleme, anlık müdahele ile
                  sorun giderme ve yapılandırma gibi işlemleri uzaktan
                  gerçekleştirmeye olanak tanır.
                </li>
              </ul>
            </li>

            <li>
              Yazılım Dağıtımı ve Takibi
              <ul>
                <li>
                  Yazılım dağıtımını ve güncelleme süreçlerini otomatikleştirin.
                </li>
                <li>
                  Güvenlik yamaları, yeni sürümler veya uygulama güncellemeleri
                  gibi yazılım değişikliklerini cihazlara güvenli bir şekilde
                  dağıtın.
                </li>
              </ul>
            </li>

            <li>
              Güncelle Takibi
              <ul>
                <li>
                  Belirli bir yazılıma ait güvenlik yamalarını ve güncellemeleri
                  otomatik olarak dağıtarak sistemlerin güncel kalmasını
                  sağlayın.
                </li>
                <li>
                  Kritik güvenlik güncellemelerini ve düzeltmelerini zamanında
                  ve hatasız bir şekilde uygulayın.
                </li>
              </ul>
            </li>

            <li>
              Güvenlik Yönetimi
              <ul>
                <li>
                  Ağ güvenliğini sıkılaştırmak ve ağ saldırılarını önlemek için
                  güvenlik duvarı kurallarını, günlüklerini, ilkelerini ve
                  yapılandırmalarını yönetin.
                </li>
                <li>
                  Kulandığınız ürünlerde güvenlik açıkları tespit edildiğinde,
                  bunların hızlı bir şekilde kapatılmasını sağlayın.
                </li>
                <li>
                  Sistemlerde ve uygulamalarda potansiyel güvenlik açıklarını
                  tespit edin.
                </li>
                <li>
                  Bilgisayar korsanlarının kötü amaçlı yazılımları ve siber
                  saldırıları için kullanabilecekleri zayıf noktaları
                  belirleyin.
                </li>
              </ul>
            </li>

            <li>
              İzleme ve Performans Analizi
              <ul>
                <li>
                  Sağlık, kullanılabilirlik, CPU, bellek ve disk kullanımı dahil
                  olmak üzere kritik fiziksel ve sanal sunucu, uç noktalarınızın
                  performansı izleyin ve analiz edin.
                </li>
                <li>
                  Donanım kaynaklarının kullanımını, ağ trafiğini ve diğer
                  performans metriklerini değerlendirerek sorunları önceden
                  tespit edin.
                </li>
              </ul>
            </li>

            <li>
              Uyum İzleme ve Raporlama
              <ul>
                <li>
                  Organizasyonun belirli bir zaman dilimi içinde hangi
                  sistemlerin güncel olduğunu ve hangilerinin güncellenmeye
                  ihtiyaç duyduğunu izleyin.
                </li>
                <li>
                  Uyumluluk izleme ve raporlama özellikleri ile regülasyonlara
                  uyum sağlayın ve organizasyonun güvenlik durumunu
                  değerlendirin.
                </li>
                <li>
                  Kurum içi izlenebilirliğinin ve süreç takibinizi arttırın.
                </li>
              </ul>
            </li>
          </ol>
        </article>
      </Card>
    </section>
  )
}
