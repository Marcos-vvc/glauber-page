import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Sidebar } from './components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '700'],
})

export const metadata: Metadata = {
  title: 'Glauber Aguiar',
  description: 'Lading Page Glauber Aguiar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} scrollbar-thumb-gb-25 scrollbar-track-transparent scrollbar-thin overflow-y-scroll`}
    >
      <link rel="icon" type="image/svg+xml" href="/Logo.png" />

      <body className="bg-black ">
        <div className="min-h-screen overflow-hidden">
          <Sidebar />
          <main className="max-w-[100vw]">{children}</main>
        </div>
      </body>
    </html>
  )
}
