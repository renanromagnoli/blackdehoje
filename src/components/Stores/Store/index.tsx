import { useContext } from "react";
import { StoresContext } from "../../../contexts/StoresContext";
import StoreModel from "../../../core/store";
import styles from './styles.module.scss'

interface StoreProps {
    store: StoreModel
}

export function Store({store}: StoreProps) {

    const contextStores = useContext(StoresContext)

    function setStore(selected: StoreModel) {
        contextStores.setStateStoreContext({
            // ...context.state,
            listSelectedStores: [...contextStores.stateStoreContext.listSelectedStores, selected]
        })
    }

    return (
        <div className={styles.storeCard} onClick={() => setStore(store)}>
            <div className={styles.logo}>
                <img className={styles.img} src={store.thumbnail} alt={`Imagem ${store.name}`} title={store.name}/>
            </div>
        </div>
    )
}