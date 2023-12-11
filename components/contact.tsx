"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import ContactSection from "./home/contact"

export default function Contact() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdX36UeAAAAALStl0KL5co3B-dU6gTnx_osvTWJ"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ContactSection className="border-t-0" />
    </GoogleReCaptchaProvider>
  )
}
