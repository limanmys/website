import { Metadata } from "next"

import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Sorunsuz bir BT süreci için kavram ispat çalışmamızla ücretsiz demoyu sizlere sunuyoruz! İhtiyacınıza uygun eklentilerimizi 30 gün boyunca ücretsiz deneme sürecine hemen başlayabilirsiniz.",
}

export default function ContactPage() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <Contact />
    </section>
  )
}
