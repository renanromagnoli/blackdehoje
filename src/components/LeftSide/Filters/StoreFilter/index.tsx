import { useContext } from 'react'
import { StoresContext } from '../../../../contexts/StoresContext'
import StoreModel from '../../../../core/store'
import styles from './styles.module.scss'

interface StoreFilterProps {
    store: StoreModel
}

export function StoreFilter({store}: StoreFilterProps) {

    const {listSelectedStores, setListSelectedStores} = useContext(StoresContext)

    function removeStore(store) {
        let index = listSelectedStores.indexOf(store)
        listSelectedStores.splice(index, 1)
        setListSelectedStores([...listSelectedStores])
    }

    return (
        <div className={styles.storesFilterContent}>
            <div className={styles.button} onClick={() => removeStore(store)}>X</div>
            <img src={store.thumbnail} alt={store.name} />
        </div>
    )
}