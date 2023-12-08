import Image from 'next/image'
import styles from './page.module.css'
import Gutter from '@/components/Gutter/Gutter'
export default function Home() {
  return (
    <div className={styles.container}>
      <Gutter />
      
    </div>
  )
}
