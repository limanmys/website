export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Liman Merkezi Yönetim Sistemi",
  description: "HAVELSAN Liman Merkezi Yönetim Sistemi",
  mainNav: [
    {
      title: "Dokümantasyon",
      href: "https://docs.liman.dev",
      target: "_blank",
    },
    {
      title: "Kurulum",
      href: "https://docs.liman.dev/baslangic/kurulum/ubuntu-20.04",
      target: "_blank",
    },
    {
      title: "Açıklab",
      href: "https://aciklab.org",
      target: "_blank",
    },
    {
      title: "GitHub",
      href: "https://github.com/limanmys",
      target: "_blank",
    },
    {
      title: "İletişim",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/limanmys",
    documentation: "https://docs.liman.dev",
    install: "https://docs.liman.dev/baslangic/kurulum/ubuntu-20.04",
  },
}
