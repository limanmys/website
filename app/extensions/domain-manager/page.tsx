import { Metadata } from "next"
import Image from "next/image"
import DomainDark from "@/public/images/DomainDark.jpg"
import DomainWhite from "@/public/images/DomainWhite.jpg"
import {
  FolderTree,
  KeyRound,
  ScanEye,
  Siren,
  SquareAsterisk,
  Users2,
} from "lucide-react"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import AppWindow from "@/components/ui/window"
import SpotlightStack from "@/components/spotlight-stack"

export const metadata: Metadata = {
  title: "Domain ve Politika Yöneticisi",
  description:
    "Microsoft Aktif Dizin ve SAMBA etki alanlarınızı ve etki alanızdaki organizsayon bileşenlerinizi merkezi olarak yönetin.",
}

const FeatureList = [
  {
    icon: Users2,
    title: "Kullanıcı, Grup, Organizasyon Birimi Yönetimi",
    description:
      "Kullanıcıların ve kullanıcı gruplarının oluşturulması, düzenlenmesi ve yönetilmesini sağlayın. Kullanıcı hesaplarını oluşturmak, düzenlemek, silmek ve kullanıcı grupları oluşturmak gibi işlemleri kolaylıkla yapın.",
  },
  {
    icon: FolderTree,
    title: "GNU/Linux Domain Yönetimi",
    description:
      "Etki alanınızda bulunmayan GNU/Linux cihazları uzaktan etki alanınıza (MS Aktif Dizin ve SAMBA) ekleyerek kurumsal süreçlerinize dahil edin.",
  },
  {
    icon: Siren,
    title: "GNU/Linux Politika Yönetimi",
    description:
      "Organizasyonuzda bulunan Linux Cihazların güvenlik ve yapılandırma politikalarını belirleme ve yönetme yeteneği sunar. Bilgisayarlar, kullanıcılar ve diğer kaynaklar üzerinde 1000’nin üzerinde politika objeleri ile politika yönetiminizi yapın.",
  },
  {
    icon: SquareAsterisk,
    title: "Veri Erişim Kontrolü",
    description:
      "Politika yönetimi, kullanıcılara ve gruplara belirli veri kaynaklarına erişim sağlama veya kısıtlama yeteneği sunar. Dosya ve klasör düzeyinde erişim izinleri, paylaşılan ağ kaynaklarına erişim kontrolü gibi özellikleri içerir.",
  },
  {
    icon: ScanEye,
    title: "Kimlik Doğrulama ve Yetkilendirme",
    description:
      "Domain yönetimi, kullanıcıların kimlik doğrulama süreçlerini yönetir ve kullanıcıların belirli kaynaklara erişim yetkilerini belirleyin. Şifre politikaları, çok faktörlü kimlik doğrulama gibi güvenlik özelliklerini sağlayın.",
  },
  {
    icon: KeyRound,
    title: "Single Sign-On (Tek Oturum Açma)",
    description:
      "Domain ve politika yönetimi ürünleri, kullanıcılara tek bir oturum açma (Single Sign-On - SSO) yeteneği sağlayın. Kullanıcıların bir defa oturum açmalarıyla birden fazla uygulamaya erişmelerine izin verin.",
  },
]

export default function DomainManagerPage() {
  return (
    <>
      <section className="container mt-[15vh] flex flex-col items-center">
        <h1
          className={cn(
            "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center font-heading text-2xl text-transparent sm:text-3xl md:text-4xl lg:text-5xl",
            fontHeading.variable
          )}
        >
          Domain ve Politika Yöneticisi
        </h1>

        <p className="mt-5 max-w-5xl text-center text-muted-foreground">
          Microsoft Aktif Dizin ve SAMBA etki alanlarınızı ve etki alanızdaki
          organizsayon bileşenlerinizi merkezi olarak yönetin.
        </p>
      </section>

      <SpotlightStack items={FeatureList} cols="lg:grid-cols-3" />

      <section className="container">
        <AppWindow className="mb-10">
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
      </section>
    </>
  )
}
