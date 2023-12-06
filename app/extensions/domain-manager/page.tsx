import { Metadata } from "next"
import Image from "next/image"
import DomainDark from "@/public/images/DomainDark.jpg"
import DomainWhite from "@/public/images/DomainWhite.jpg"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import AppWindow from "@/components/ui/window"

export const metadata: Metadata = {
  title: "Domain ve Politika Yöneticisi",
  description:
    "Microsoft Aktif Dizin ve SAMBA etki alanlarınızı ve etki alanızdaki organizsayon bileşenlerinizi merkezi olarak yönetin.",
}
export default function DomainManagerPage() {
  return (
    <section id="extension-landing" className="container mt-[15vh]">
      <h1
        className={cn(
          "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
          fontHeading.variable
        )}
      >
        Domain ve Politika Yöneticisi
      </h1>

      <p className="mt-5 text-center">
        Microsoft Aktif Dizin ve SAMBA etki alanlarınızı ve etki alanızdaki
        organizsayon bileşenlerinizi merkezi olarak yönetin.
      </p>

      <AppWindow className="mt-10">
        <Image
          src={DomainWhite}
          className="block dark:hidden"
          alt="Domain ve Politika Yöneticisi"
          quality={80}
          placeholder="blur"
          width={1920}
          height={1080}
        />
        <Image
          src={DomainDark}
          className="hidden dark:block"
          alt="Domain ve Politika Yöneticisi"
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
              Kullanıcı, Grup, Organizasyon Birimi Yönetimi
              <ul>
                <li>
                  Kullanıcıların ve kullanıcı gruplarının oluşturulması,
                  düzenlenmesi ve yönetilmesini sağlayın.
                </li>
                <li>
                  Kullanıcı hesaplarını oluşturmak, düzenlemek, silmek ve
                  kullanıcı grupları oluşturmak gibi işlemleri kolaylıkla yapın.
                </li>
              </ul>
            </li>
            <li>
              GNU/Linux Domain Yönetimi
              <ul>
                <li>
                  Etki alanınızda bulunmayan GNU/Linux cihazları uzaktan etki
                  alanınıza (MS Aktif Dizin ve SAMBA) ekleyerek kurumsal
                  süreçlerinize dahil edin.
                </li>
              </ul>
            </li>
            <li>
              GNU/Linux Politika Yönetimi
              <ul>
                <li>
                  Organizasyonuzda bulunan Linux Cihazların güvenlik ve
                  yapılandırma politikalarını belirleme ve yönetme yeteneği
                  sunar.
                </li>
                <li>
                  Bilgisayarlar, kullanıcılar ve diğer kaynaklar üzerinde
                  1000’nin üzerinde politika objeleri ile politika yönetiminizi
                  yapın.
                </li>
              </ul>
            </li>
            <li>
              Veri Erişim Kontrolü:
              <ul>
                <li>
                  Politika yönetimi, kullanıcılara ve gruplara belirli veri
                  kaynaklarına erişim sağlama veya kısıtlama yeteneği sunar.
                </li>
                <li>
                  Dosya ve klasör düzeyinde erişim izinleri, paylaşılan ağ
                  kaynaklarına erişim kontrolü gibi özellikleri içerir.
                </li>
              </ul>
            </li>
            <li>
              Kimlik Doğrulama ve Yetkilendirme:
              <ul>
                <li>
                  Domain yönetimi, kullanıcıların kimlik doğrulama süreçlerini
                  yönetir ve kullanıcıların belirli kaynaklara erişim
                  yetkilerini belirleyin.
                </li>
                <li>
                  Şifre politikaları, çok faktörlü kimlik doğrulama gibi
                  güvenlik özelliklerini sağlayın.
                </li>
              </ul>
            </li>
            <li>
              Single Sign-On (Tek Oturum Açma):
              <ul>
                <li>
                  Domain ve politika yönetimi ürünleri, kullanıcılara tek bir
                  oturum açma (Single Sign-On - SSO) yeteneği sağlayın.
                </li>
                <li>
                  Kullanıcıların bir defa oturum açmalarıyla birden fazla
                  uygulamaya erişmelerine izin verin.
                </li>
              </ul>
            </li>
          </ol>
        </article>
      </Card>
    </section>
  )
}
