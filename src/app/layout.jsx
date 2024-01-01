import { Inter } from 'next/font/google'
import './globals.css'
import './animation.css'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Footer from '@/components/Footer/Footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asian Elevators Control And Automation',
  description: 'Asian Elevators Control And Automation',
  keywords: ['Asian', 'Elevators', 'Monarch', 'Lift', 'IoT', 'Motor', 'Drive'],
  authors: [{ name: 'Siddharth Singh', url: 'https://www.asianelevo.com' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.png',
    },
  },
  metadataBase: new URL('https://www.asianelevo.com'),
  // metadataBase: new URL('http://localhost:3000/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
