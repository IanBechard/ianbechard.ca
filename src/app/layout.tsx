import Navbar from '@/components/navbar'
import './globals.css'

export const metadata = {
  title: 'ianbechard.ca',
  description: 'A personal portfolio website created by and for Ian Bechard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
