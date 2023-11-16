import localFont from "next/font/local"

export const fontSans = localFont({
  src: "../assets/fonts/Inter-roman.var.woff2",
  variable: "--font-sans",
})

export const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
