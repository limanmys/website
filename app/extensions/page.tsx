import { Metadata } from "next"

import Showcase from "@/components/home/showcase"

export const metadata: Metadata = {
  title: "Eklentilerimiz",
  description:
    "Liman Merkezi Yönetim Sistemi, genişletilebilir yapısı sayesinde eklentileriyle yetenek ve özellik kümesinin artırımına imkan tanır. Bu eklentiler aracılığıyla Liman, kullanıcıların ihtiyaçlarına uygun şekilde özelleştirilebilir. HAVELSAN A.Ş. olarak geliştirdiğimiz öne çıkan eklentiler şunlardır.",
}

export default function ExtensionIndexPage() {
  return (
    <>
      <Showcase />
    </>
  )
}
