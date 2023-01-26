import { useContext } from 'react'
import { CategoriesContext } from '../../../contexts/CategoriesContext'
import { StoresContext } from '../../../contexts/StoresContext'
import { CategoryFilter } from './CategoryFilter'
import { StoreFilter } from './StoreFilter'
import styles from './styles.module.scss'

export function Filters() {

    const {categoriesSelected, setCategoriesSelected} = useContext(CategoriesContext)
    const {listSelectedStores, setListSelectedStores} = useContext(StoresContext)

    function clearFilters() {
        setCategoriesSelected([])
        setListSelectedStores([])
    }

    if(categoriesSelected.length > 0 || listSelectedStores.length > 0) {
        return (
            
            <div className={styles.filtersContainer}>
                <div className={styles.title}>Filtros</div>
                {listSelectedStores.length > 0 && 
                    <div className={styles.filterStores}>
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
                <button className={styles.clear} onClick={() => clearFilters()}>Limpar filtros</button>
            </div>
        )
    }
}