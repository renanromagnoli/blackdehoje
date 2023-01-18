import styles from './styles.module.scss'
import StoreModel from "../../core/store";
import { Store } from './Store';

interface StoresProps {
    stores: StoreModel[]
}

export function Stores({stores}: StoresProps) {
    return (
        <div className={styles.storesContent}>
            {stores.map(store => {
                if(store.hasOffer !== 0) {
                    return <Store key={store.id} store={store}/>
                }      
            })}
        </div>
    )
}