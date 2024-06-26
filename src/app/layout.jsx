import { Inter } from 'next/font/google'
import './globals.css'
import './animation.css'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asian Elevators - Lift/Elevators Suppliers & Services in Delhi, India',
  description: 'Asian Elevators Control & Automation Manufacturer, Suppliers & Services in Delhi, India for Passenger Elevators, Goods Elevators, Chair Lifts, Hospital Lifts, Car Lifts, Industrial Elevators.',
  keywords: ['Asian', 'Elevators', 'Monarch', 'Inovance', 'Lift', 'IoT', 'Motor', 'Drive', 'Services'],
  authors: [{ name: 'Siddharth Singh', url: 'https://www.asianelevo.com' }],
  icons: {
    icon: '/icon.webp',
    shortcut: '/icon.webp',
    apple: '/icon.webp',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.webp',
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
    // images: '/opengraph-image.webp',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-TT6WYDVHH1" />
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
