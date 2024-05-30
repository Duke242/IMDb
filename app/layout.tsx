import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SessionProvider from "./components/SessionProvider"
import { getServerSession } from "next-auth"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider {...session}>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
