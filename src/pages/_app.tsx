// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/slider.scss'

import { StoresContext, data } from '../contexts/StoresContext'
import { useEffect, useState } from 'react'
import StoreModel from '../core/store'

export default function App({ Component, pageProps }: AppProps) {

  const [stateStoreContext, setStateStoreContext] = useState(data)
  

  useEffect(() => {
    console.log('state (listSelectedStores): ', stateStoreContext.listSelectedStores)
  }, [stateStoreContext])

  return (
    <StoresContext.Provider value={{stateStoreContext, setStateStoreContext}}>
      <Component {...pageProps} />
    </StoresContext.Provider>
  )
}