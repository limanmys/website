"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import ContactSection from "@/components/home/contact"
import Hero from "@/components/home/hero"
import References from "@/components/home/references"
import Showcase from "@/components/home/showcase"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Showcase />
      <References />
      <GoogleReCaptchaProvider
        reCaptchaKey="6LdX36UeAAAAALStl0KL5co3B-dU6gTnx_osvTWJ"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <ContactSection />
      </GoogleReCaptchaProvider>
    </>
  )
}
