import { useContext } from 'react'
import { CategoriesContext } from '../../../contexts/CategoriesContext'
import { StoresContext } from '../../../contexts/StoresContext'
import { CategoryFilter } from './CategoryFilter'
import { StoreFilter } from './StoreFilter'
import styles from './styles.module.scss'

export function Filters() {

    const {categoriesSelected} = useContext(CategoriesContext)
    const {listSelectedStores} = useContext(StoresContext)

    return (
        <div className={styles.filtersContainer}>
            {listSelectedStores.length > 0 && 
                <div className={styles.filterStores}>
                    <div className={styles.title}>Lojas Filtradas:</div>
                    <div className={styles.storesFilter}>
                        {listSelectedStores?.map((store, i) => {
                            return <StoreFilter key={i} store={store}/>
                        })}
                    </div>
                </div>
            }
            <div className={styles.filterCategories}>
                {categoriesSelected?.map((category, i) => {
                    return <CategoryFilter key={i} category={category}/>
                })}
            </div>
        </div>
    )
}