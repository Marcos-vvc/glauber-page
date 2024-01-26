import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-black ">
        <div className="min-h-screen overflow-hidden">
          <Header />
          <main className="max-w-[100vw]">{children}</main>
        </div>
      </body>
    </html>
  )
}
