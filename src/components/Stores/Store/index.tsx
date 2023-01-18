import StoreModel from "../../../core/store";
import styles from './styles.module.scss'

interface StoreProps {
    store: StoreModel
}

export function Store({store}:StoreProps) {
    return (
        <div className={styles.storeCard} >
            <div className={styles.logo}>
                <img className={styles.img} src={store.thumbnail} alt={`Imagem ${store.name}`} title={store.name}/>
            </div>
        </div>
    )
}