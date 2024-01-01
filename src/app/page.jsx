import Image from 'next/image'
import styles from './page.module.css'
import Gutter from '@/components/Gutter/Gutter'
import Carousel from '@/components/Carousel/Carousel'
import AboutUsHighlights from '@/components/AboutUsHighlights/AboutUsHightlights'
import ProductsHighlights from '@/components/ProductsHighlights/ProductsHighlights'
import FAQ from '@/components/FAQ/FAQ'
import ReachUsHighlights from '@/components/ReachUsHighlights/ReachUsHighlights'
import ServicesHighlights from '@/components/ServicesHighlights/ServicesHighlights'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Carousel />
      <AboutUsHighlights />
      <ProductsHighlights />
      <ServicesHighlights />
      <FAQ />
      <ReachUsHighlights />
    </div>
  )
}
