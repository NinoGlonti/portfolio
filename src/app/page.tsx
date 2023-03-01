import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import Link from 'next/link';
import ContactPage from '@/pages/contact';
import WorkPage from '@/pages/work';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={styles.main}>
     <div id={styles['stars']}></div>
     <div id={styles['stars2']}></div>
     <div id={styles['stars3']}></div>
     <p>Hey I am Nino Glonti, you can call me Nitsa.</p>
     <p>Born in Tbilisi, Georgia and lived several years in Germany.</p>
     <p>Influenced by the culture of both countries. Especially by the cities of Tbilisi and Berlin.</p>
     <p>Mainly worked as a frontend developer in last three years and deepening my knowledge in backend development right now.</p>
     <div className={styles["nav-links"]}>
      <Link href="/about">About</Link>
     <Link href="/work"> Work </Link>
     <Link href="/contact">Contact</Link>
     </div>
     

    </main>
  )
}


//https://codepen.io/sarazond/pen/LYGbwj
