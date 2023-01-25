import { useContext } from 'react'
import { CategoriesContext } from '../../../contexts/CategoriesContext'
import { CategoryFilter } from './CategoryFilter'
import styles from './styles.module.scss'

export function Filters() {

    const {categoriesSelected} = useContext(CategoriesContext)

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filterStores}>
                stores
            </div>
            <div className={styles.filterCategories}>
                {categoriesSelected?.map((category, i) => {
                    return <CategoryFilter key={i} category={category}/>
                })}
            </div>
        </div>
    )
}