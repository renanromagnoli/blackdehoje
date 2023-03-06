import { useContext } from 'react'
import { Value } from 'sass'
import { CategoriesContext } from '../../../contexts/CategoriesContext'
import { StoresContext } from '../../../contexts/StoresContext'
import { CategoryFilter } from './CategoryFilter'
import { StoreFilter } from './StoreFilter'
import styles from './styles.module.scss'

export function Filters() {

    const {categoriesSelected, setCategoriesSelected, categoriesOffers, setCategoriesOffers, categoriesState, setCategoriesState} = useContext(CategoriesContext)
    const {listSelectedStores, setListSelectedStores} = useContext(StoresContext)

    function allShowOff() {
        let ctgsOffers = categoriesOffers
        console.log('ctgsOffers: ', Object.keys(ctgsOffers))
        for(const value of Object.keys(ctgsOffers)) {
            console.log('VALUE: ', value)
            ctgsOffers = {
                ...ctgsOffers,
                [value]: {
                    ...ctgsOffers[value],
                    show: false
                }
            }
            console.log('ctgsOffers: ', ctgsOffers)
        }
        console.log('ctgsOffers FINAL: ', ctgsOffers)
        return ctgsOffers
    }
    
    function clearFilters() {
        // setCategoriesSelected([])
        setListSelectedStores([])
        setCategoriesState({
            ...categoriesState,
            categoriesOffers: allShowOff(),
            categoriesSelected: []

        })
        
        // setCategoriesOffers(allShowOff())
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