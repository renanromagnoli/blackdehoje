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
import { BannerColumn } from '../components/Banners'


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
            <div className={styles.sideLeft}>
              <nav>
                <ul>
                  <li>Categoria 1</li>
                  <li>Categoria 2</li>
                  <li>Categoria 3</li>
                  <li>Categoria 4</li>
                  <li>Categoria 5</li>
                </ul>
              </nav>
            </div>
            <div className={styles.center}>
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
                                storeThumb={offer.storeThumb}
                                link={offer.link}
                              />
                    })
                  }   
              </div>
            </div>
            <div className={styles.sideRight}>
              <BannerColumn />
            </div>
        </div>
        
    </>
  )
}
