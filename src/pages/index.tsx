import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import styles from '../styles/home.module.scss'
import { Header } from '../components/Header'
import { Item } from '../components/Item'
import { useEffect, useState } from 'react'
import Api from '../service/Api'
import { createOffers } from '../functions/createOffers'
import {ItemModel} from '../core/item'
import { Offers } from '../components/Offers'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [offers, setOffers] = useState<ItemModel[]>([])

  // const getOffers = async () => {
  //   const {data} = await Api.getOffersStore()
  //   return data
  // }
  
  useEffect(() => {
    async function upOffers() {
      const newOffers = await createOffers()
      setOffers(newOffers)
    }
    upOffers()
  }, [])
  
  return (
    <>
        <Header />
        <div className={styles.content}>
          
          <div className={styles.Features}>
            <div className={styles.sideLeft}></div>
            <main>
              <div className={styles.banner}></div>
              <div className={styles.items}>
                
                  {
                    offers.map((offer: ItemModel) => {
                      return <Item 
                                key={offer.id}
                                id={offer.id} 
                                name={offer.name} 
                                price={offer.price}  
                                thumbnail={offer.thumbnail}
                                oldPrice={offer.oldPrice}
                              />
                    })
                  } 
                    
                
              </div>
            </main>
          </div>
        </div>
        <aside className={styles.sideRight}></aside>
    </>
  )
}
