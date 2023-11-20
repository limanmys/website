"use client"

import { useCallback, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { AlertCircle, ArrowRight, Loader2, MailCheck } from "lucide-react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  "kurum-adi": z
    .string()
    .min(2, {
      message: "Kurum adı en az 2 karakter olmalıdır.",
    })
    .max(255, {
      message: "Kurum adı en fazla 255 karakter olmalıdır.",
    }),
  name: z
    .string()
    .min(2, {
      message: "İsim en az 2 karakter olmalıdır.",
    })
    .max(255, {
      message: "İsim en fazla 255 karakter olmalıdır.",
    }),
  email: z
    .string()
    .email({
      message: "Geçerli bir e-posta adresi giriniz.",
    })
    .max(255, {
      message: "E-posta adresi en fazla 255 karakter olmalıdır.",
    }),
  telefon: z
    .string()
    .min(2, {
      message: "Telefon en az 2 karakter olmalıdır.",
    })
    .max(255, {
      message: "Telefon en fazla 255 karakter olmalıdır.",
    }),
  aciklama: z
    .string()
    .min(2, {
      message: "Açıklama en az 2 karakter olmalıdır.",
    })
    .max(500, {
      message: "Açıklama en fazla 500 karakter olmalıdır.",
    }),
})

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "kurum-adi": "",
      name: "",
      email: "",
      telefon: "",
      aciklama: "",
    },
  })

  const handleOnSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      setLoading(true)
      if (!executeRecaptcha) {
        setError(true)
        setMessage(
          "Bot kontrolü yapılırken bir hata oluştu. Biraz bekledikten sonra tekrar deneyin."
        )

        return
      }

      executeRecaptcha("subscribe_newsletter").then((token) => {
        submitForm(values, token)
      })
    },
    [executeRecaptcha]
  )

  function submitForm(values: z.infer<typeof formSchema>, token: string) {
    axios
      .post<string>(
        "https://ws.aciklab.org/contact_liman",
        {
          ...values,
          token,
          action: "subscribe_newsletter",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(({ status, data }) => {
        if (status != 200) {
          setError(true)
        } else {
          setError(false)
        }

        setMessage(data)
      })
      .catch(() => {
        setError(true)
        setMessage("Bir hata oluştu. Lütfen tekrar deneyin.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="w-full space-y-8"
      >
        {message && (
          <Alert variant={!error ? "default" : "destructive"}>
            {!error ? (
              <MailCheck className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertTitle>{!error ? "Bilgilendirme" : "Hata"}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  İsim
                  <span className="ml-1 font-bold text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  E-posta
                  <span className="ml-1 font-bold text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="liman@aciklab.org" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="kurum-adi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Kurum Adı
                  <span className="ml-1 font-bold text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="HAVELSAN A.Ş." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Telefon
                  <span className="ml-1 font-bold text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="+90 500 000 00 00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="aciklama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Açıklama<span className="ml-1 font-bold text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="İhtiyacınızı ve isteklerinizi belirtebilirsiniz..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading}>
          Gönder
          {!loading ? (
            <ArrowRight className="ml-2 h-4 w-4" />
          ) : (
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          )}
        </Button>
      </form>
      <small className="mt-3 block w-full text-muted-foreground/70">
        Bu iletişim formu reCAPTCHA from Google ile korunmaktadır.
        <br />
        <a href="https://policies.google.com/privacy" className="mr-2">
          Gizlilik Politikası
        </a>
        <a href="https://policies.google.com/terms">Hizmet Koşulları</a>
      </small>
    </Form>
  )
}
