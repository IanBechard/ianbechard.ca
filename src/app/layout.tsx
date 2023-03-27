import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ianbechard.ca',
  description: 'A personal portfolio website created by and for Ian Bechard',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
