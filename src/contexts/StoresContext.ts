import { createContext } from "react"
import StoreModel from "../core/store"

interface StoresContextProps {
    listSelectedStores: StoreModel[]

}


// export interface stateStoreContextProps {
//     stateStoreContext: StoresContextProps, 
//     setStateStoreContext(): () => void
// }

export const data: StoresContextProps = {
    listSelectedStores: []
}

export const StoresContext = createContext(data)