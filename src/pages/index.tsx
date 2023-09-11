import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import styles from '../styles/home.module.scss'
import { Header } from '../components/Header'
import { Item } from '../components/Items/Item'
import { useContext, useEffect, useState } from 'react'
import Api from '../service/Api'
import { createOffers } from '../functions/createOffers'
import {ItemModel} from '../core/item'
import { BannerColumn } from '../components/Banners'
import { CategoryModel } from '../core/category'
import { createCategories } from '../functions/createCategories'
import { createCategoriesOffers } from '../functions/createOffersCategories'
import StoreModel from '../core/store'
import { createStores } from '../functions/createStores'
import { LeftSide } from '../components/LeftSide'
import { Stores } from '../components/Stores'
import { CategoriesContext } from '../contexts/CategoriesContext'
import { Items } from '../components/Items'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [offers, setOffers] = useState<ItemModel[]>([])
  const {categoriesOffers} = useContext(CategoriesContext)
  // const [categories, setCategories] = useContext<CategoryModel[]>([])
  const [stores, setStores] = useState<StoreModel[]>([])

  // const getOffers = async () => {
  //   const {data} = await Api.getOffersStore()
  //   return data
  // }
  async function upOffers() {
    // const categoriesFinded = await createCategories()

    const newOffers = await createOffers()
    // const categoriesOffers = await createOffersCategories(newCategories => {
    //   return [
    //     ...categories,
    //     newCategories

    //   ]
    // })
    // setCategories(categories)
    setOffers(newOffers)
  }

  async function upStores() {
    const stores = await createStores()
    setStores(stores)
  }

//   async function upCategories() {
//     const categories = await Api.getCategories()
//     setCategories('categoriesSelected', categories)
// }

  
  useEffect(() => {
    upStores()
    // upOffers()
    // upCategories()
  }, [])

  useEffect(() => {
    console.log('INDEX categoriesOffers: ', Object.values(categoriesOffers))
  }, [categoriesOffers])
  
  // useEffect(() => {
  //   console.log('Stores: ', stores)
  // }, [stores])

  if (!stores && !offers) {
    return <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      color: 'white'
    }}>Carregando...</div>
  }
  
  return (
    <>
        <Header />
        <Stores stores={stores} />
        <div className={styles.content}>
            <LeftSide />
            <div className={styles.center}>
              <div className={styles.banner}></div>
              {/* <div className={styles.items}>
                  <Items />   
                </div> */}
              <Items />   
            </div>
            <div className={styles.sideRight}>
              <BannerColumn />
            </div>
        </div>
        
    </>
  )
}
