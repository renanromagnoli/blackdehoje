import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import styles from '../styles/home.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
    <>
      <Head>
        <title>Black de Hoje</title>
        <meta name="description" content="Black de Hoje" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header>
              logo
              search
        </header>
        <div className={styles.content}>
          
          <div className={styles.Features}>
            <div className={styles.sideLeft}></div>
            <main>
              <div className={styles.banner}></div>
              <div className={styles.items}>
                items
              </div>
            </main>
          </div>
        </div>
        <aside className={styles.sideRight}></aside>
    </>
  )
}
