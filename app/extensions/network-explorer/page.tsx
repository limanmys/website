import { Metadata } from "next"
import Image from "next/image"
import NetexDark from "@/public/images/NetexDark.jpg"
import NetexWhite from "@/public/images/NetexWhite.jpg"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import AppWindow from "@/components/ui/window"

export const metadata: Metadata = {
  title: "Ağ Keşif Eklentisi",
  description:
    "Organizasyonunuzda bulunan aktif varlıklarınızı otomatik keşfedin ve güncel envanter bilginize erişin.",
}

export default function NetworkExplorerPage() {
  return (
    <section id="extension-landing" className="container mt-[15vh]">
      <h1
        className={cn(
          "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
          fontHeading.variable
        )}
      >
        Ağ Keşif Eklentisi
      </h1>

      <p className="mt-5 text-center">
        Organizasyonunuzda bulunan aktif varlıklarınızı otomatik keşfedin ve
        güncel envanter bilginize erişin.
      </p>

      <AppWindow className="mt-10">
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

      <Card className="my-10 p-5">
        <article
          className="prose dark:prose-invert sm:prose lg:prose-lg xl:prose-xl"
          style={{
            maxWidth: "100%",
          }}
        >
          <ol>
            <li>
              Aktif Varlık Keşfi
              <ul>
                <li>
                  Organizasyonunuzda bulunan aktif olan varlıklarınızı (IP
                  alabilen) otomatize edilmiş süreçler ile keşfedin ve otomatik
                  envanter listesinizi oluşturun.
                </li>
                <li>
                  Donanım özellikleri, modeli, seri numarası ve diğer ilgili
                  bilgilere kolaylıkla erişin.
                </li>
              </ul>
            </li>
            <li>
              Otomatik Güncel Envanter Listesi
              <ul>
                <li>
                  Bir sürü farklı kaynaktan gelen verilerle analiz yaparak
                  otomatik keşif özelliğimizle her zaman güncel envanter
                  bilginize erişin.
                </li>
              </ul>
            </li>
            <li>
              Varlık Yönetimi
              <ul>
                <li>
                  Varlıklarınız yaşam döngüsünü takip edin ve yenileme veya
                  güncelleme ihtiyaçlarınızı belirleyin.
                </li>
              </ul>
            </li>
            <li>
              Anamoli Tespiti
              <ul>
                <li>
                  Organizasyonunuzda bulunan aktif olan varlıklarınızdaki IP,
                  MAC ve port anamolilerini tespit edin.
                </li>
                <li>
                  Anamoli alarmları ile hızlıca aksiyon olmanıza yardımcı olur.
                </li>
              </ul>
            </li>
            <li>
              Raporlama ve İnceleme
              <ul>
                <li>
                  Kurum içi izlenebilirliğinin ve takibinin artırılmasına olanak
                  sağlar.
                </li>
              </ul>
            </li>
          </ol>
        </article>
      </Card>
    </section>
  )
}
