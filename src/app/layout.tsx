"use client"
import Wide from '@/components/Containers/Wide'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Open_Sans, Russo_One } from "next/font/google"
import "./globals.css"

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo-one",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${russoOne.variable} ${openSans.variable} antialiased`}
      >
        <Wide>
          <Header />
          {children}
          <Footer />
        </Wide>
      </body>
    </html>
  )
}
