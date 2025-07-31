// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ganesh Sapkota Portfolio',
  description: 'QA Architect · Automation Specialist · Entrepreneur',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-24 px-6 sm:px-12">{children}</main>
      </body>
    </html>
  )
}
