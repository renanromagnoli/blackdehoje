import { createContext, ReactNode, useState, useEffect } from "react"
import StoreModel from "../core/store"


// export interface stateStoreContextProps {
//     stateStoreContext: StoresContextProps, 
//     setStateStoreContext(): () => void
// }

// interface StoreProps {
//     children: ReactNode

// }
// interface StoresContextProps {
//     listSelectedStores: StoreModel[],
//     setListSelectedStores: (selectedStores: StoresContextProps) => void
// }

// interface StoresProps {
//     listSelectedStores: StoresContextProps
//     setListSelectedStores: (selectedStores: StoresContextProps) => void
//     children: ReactNode
// }

interface DataStoresProps {
    listSelectedStores: StoreModel[]
}
interface StoresContextStructureProps {
    children: ReactNode
}

const data = {
    listSelectedStores: []
}

export const StoresContext = createContext(data)

const StoresContextStructure = (props: StoresContextStructureProps) => {
    const [state, setState] = useState<DataStoresProps>(data)
    
    useEffect(() => {
        console.log('state StoresContextStructure: ', state)
    }, [state])

    function updateState(key: string, value: StoreModel[]) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <StoresContext.Provider value={{
            listSelectedStores: state.listSelectedStores,
            setListSelectedStores: (selectedStores: StoreModel[]) => updateState('listSelectedStores', selectedStores)
        }}>
            {props.children}
        </StoresContext.Provider>
    )
}

export default StoresContextStructure