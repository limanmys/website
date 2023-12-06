import { Metadata } from "next"
import Image from "next/image"
import NetworkDark from "@/public/images/NetworkDark.jpg"
import NetworkWhite from "@/public/images/NetworkWhite.jpg"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import AppWindow from "@/components/ui/window"

export const metadata: Metadata = {
  title: "Ağ İzleme Eklentisi",
  description:
    "Organizasyonunuzda bulunan ağ cihazlarınızı performanslarını, sağlık durumlarını izleyin ve genel ağ sağlığınızı günçlendirin.",
}

export default function NetworkMonitorPage() {
  return (
    <section id="extension-landing" className="container mt-[15vh]">
      <h1
        className={cn(
          "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
          fontHeading.variable
        )}
      >
        Ağ İzleme Eklentisi
      </h1>

      <p className="mt-5 text-center">
        Organizasyonunuzda bulunan ağ cihazlarınızı performanslarını, sağlık
        durumlarını izleyin ve genel ağ sağlığınızı günçlendirin.
      </p>

      <AppWindow className="mt-10">
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

      <Card className="my-10 p-5">
        <article
          className="prose dark:prose-invert sm:prose lg:prose-lg xl:prose-xl"
          style={{
            maxWidth: "100%",
          }}
        >
          <ol>
            <li>
              Ağ Performans İzleme
              <ul>
                <li>
                  Ağ cihazlarınızın ve bağlantıların performansını sürekli
                  olarak izleyin.
                </li>
                <li>
                  Bant genişliği kullanımı, paket kaybı, gecikme süreleri ve
                  diğer performans metriklerinizi takip edin.
                </li>
              </ul>
            </li>
            <li>
              Hata ve Sorun Tespiti
              <ul>
                <li>
                  Ağlarınızdaki hataları ve sorunları belirleyerek operasyonel
                  sorunların hızlı bir şekilde tanımlanmasına yardımcı olur.
                </li>
                <li>
                  Kesintiler, bağlantı sorunları, ağ cihazlarında performans
                  düşüşleri gibi sorunları tespit edin.
                </li>
              </ul>
            </li>
            <li>
              Ağ Haritası ve Topoloji Oluşturma
              <ul>
                <li>
                  Ağdaki cihazları ve bağlantıları haritalar ve topolojiler
                  aracılığıyla görselleştiririn.
                </li>
                <li>
                  Ağdaki cihazların birbirleriyle olan ilişkilerini anlayın.
                </li>
                <li>
                  Çoğrafi konuma göre kabinetler oluşturulup kabinetlerin
                  içerisindeki cihazların sağlık durumlarını takip edin.
                </li>
              </ul>
            </li>
            <li>
              Güvenlik İzleme
              <ul>
                <li>Güvenlik olaylarını ve anormallikleri tespit edin.</li>
                <li>
                  Güvenlik tehditlerini belirlemek ve kötü niyetli aktiviteleri
                  izlemek için loglarınızı analiz edin.
                </li>
              </ul>
            </li>
            <li>
              Anlık Bildirimler ve Alarm
              <ul>
                <li>
                  Ağdaki önemli olayları belirleyerek tanımladığınız eşik
                  değerlere göre anlık bildirimler ve alarmlar alın ve
                  ağlarınızı proaktif izleyin.
                </li>
                <li>
                  Performans düşüşleri, ağ trafiği anormallikleri veya güvenlik
                  ihlalleri gibi durumlardan anlık haberdar olun.
                </li>
              </ul>
            </li>
            <li>
              Arayüz Özelleştirilmesi
              <ul>
                <li>
                  Arayüzlerinizi kendi ihtiyaçlarınıza ve tercihlerinze göre
                  özelleştirirerek daha etkili ve kişiselleştirilmiş bir deneyim
                  elde edin.
                </li>
              </ul>
            </li>
            <li>
              Trafik Optimizasyonu
              <ul>
                <li>
                  Bant genişliği kullanımı, paket kaybı, gecikme süreleri ve
                  diğer performans metriklerinizi takip edin ve ağ trafiğinizi
                  optimize edin.
                </li>
              </ul>
            </li>
          </ol>
        </article>
      </Card>
    </section>
  )
}
