import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ContactForm } from "../contact-form"
import { Card, CardContent } from "../ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2 flex flex-col justify-center">
            <h5
              className={cn(
                "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-heading text-4xl text-transparent",
                fontHeading.variable
              )}
            >
              Bizimle <br />
              iletişime geçin
            </h5>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ücretsiz Demo İsteyin! BT süreçlerinizde aksaklığa sebep olmadan
              kavram ispat çalışması sunuyoruz. Sistem yönetimi projenizin ilk
              adımını risk almadan Liman Merkezi Yönetim Sistemi ile
              başlayabilirsiniz. Kavram ispat çalışması sonrası 30 gün ücretsiz
              deneme sürümünü sizler de test edebilirsiniz. <br /> <br />
              Liman Merkezi Yönetim Sistemi halihazırda bulunan sisteminize
              kesinti yaşatmadan entegre olabilmektedir. Bileşen olarak Cihaz
              Yöneticisi, Ağ Keşif, Ağ İzleme, Domain Yöneticisi ve
              Konfigürasyon Yöneticimizi talep edebilirsiniz. Modüler yapımız
              sayesinde ihtiyacınız olan bileşenleri seçerek PoC talep
              edebilirsiniz.
            </p>
          </div>
          <div className="col-span-3">
            <Card className="shadow shadow-accent">
              <CardContent className="p-8">
                <div className="mb-5 font-semibold leading-none tracking-tight text-foreground">
                  Aşağıdaki formu doldurun ve takımımız sizinle iletişime
                  geçsin.
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
