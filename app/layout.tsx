import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SessionProvider from "./components/SessionProvider"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

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
          <main className="mx-auto max-w-5xl text-2xl flex gap-2">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
