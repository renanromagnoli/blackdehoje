// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/slider.scss'

// import Stores, { StoresContext, data } from '../contexts/StoresContext'
import StoresContextStructure from '../contexts/StoresContext'
import { useEffect, useState, useContext } from 'react'
import StoreModel from '../core/store'

export default function App({ Component, pageProps }: AppProps) {

  // const [stateStoreContext, setStateStoreContext] = useState(data)
  // const {listSelectedStores, setSelectedStores} = useContext(StoresContext)
 
  

  // useEffect(() => {
  //   console.log('state (listSelectedStores): ', stateStoreContext.listSelectedStores)
  // }, [stateStoreContext])

  return (
    <StoresContextStructure>
      {/* <StoresContext.Provider value={{stateStoreContext, setStateStoreContext}}> */}
        <Component {...pageProps} />
      {/* </StoresContext.Provider> */}
    </StoresContextStructure>
  )
}