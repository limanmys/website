"use client"

import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ContactForm } from "../contact-form"
import { Card, CardContent } from "../ui/card"

export default function ContactSection({ className }: { className?: string }) {
  return (
    <section id="contact" className={cn("border-t", className)}>
      <div className="container py-12">
        <div className="grid-cols-5 gap-8 md:grid">
          <div className="col-span-2 flex flex-col justify-center">
            <h5
              className={cn(
                "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-heading text-4xl leading-[3rem] text-transparent",
                fontHeading.variable
              )}
            >
              Bizimle <br />
              iletişime geçin
            </h5>

            <p className="mb-5 mt-6 leading-relaxed text-muted-foreground md:mb-0">
              Sorunsuz bir BT süreci için kavram ispat çalışmamızla ücretsiz
              demoyu sizlere sunuyoruz! İhtiyacınıza uygun eklentilerimizi 30
              gün boyunca ücretsiz deneme sürecine hemen başlayabilirsiniz.
            </p>

            <p className="mt-6 hidden leading-relaxed text-muted-foreground lg:block">
              Liman Merkezi Yönetim Sistemi, modern iş dünyasında bilgi
              teknolojileri hizmetlerini etkili bir şekilde yönetmeye yönelik
              kapsamlı bir yaklaşım sunmaktadır. BT hizmetlerinizin kontrolünü
              elinizde tutabilir ve sürekli gelişen iş ortamında rekabet
              avantajı elde edebilirsiniz.
            </p>
          </div>
          <div className="col-span-3">
            <Card className="shadow shadow-accent">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="mb-5 font-semibold tracking-tight text-foreground">
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
