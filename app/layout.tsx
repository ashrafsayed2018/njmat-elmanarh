import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import SocialSidebar from "@/components/social-sidebar"

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "نجمه المناره للمطابخ - مطابخ ألمنيوم حديثة",
  description: "نجمه المناره للمطابخ - متخصصون في تصميم وتركيب وصيانة مطابخ الألمنيوم الحديثة بأعلى جودة وأفضل الأسعار",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Header />
        <SocialSidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}


import './globals.css'