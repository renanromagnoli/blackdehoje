import StoreModel from '../../../../core/store'
import styles from './styles.module.scss'

interface StoreFilterProps {
    store: StoreModel
}

export function StoreFilter({store}: StoreFilterProps) {
    return (
        <div className={styles.storesFilterContent}>
            <div className={styles.button}>X</div>
            <img src={store.thumbnail} alt={store.name} />
        </div>
    )
}