import { useContext } from 'react'
import { CategoriesContext } from '../../../../contexts/CategoriesContext'
import { CategoryModel } from '../../../../core/category'
import styles from './styles.module.scss'

interface CategoryFilterProps {
    category: CategoryModel
}

export function CategoryFilter({category}: CategoryFilterProps) {

    const {categoriesSelected, setCategoriesSelected, categoriesOffers, setCategoriesOffers} = useContext(CategoriesContext)

    function removeCategory(category: CategoryModel) {
        let index = categoriesSelected.indexOf(category)
        categoriesSelected.splice(index, 1)
        setCategoriesSelected([...categoriesSelected])
        setCategoriesOffers({
            ...categoriesOffers,
            [category.name]: {
                ...categoriesOffers[category.name],
                show: false
            }
        })
    }
    return (
        <div className={styles.categoryFilterContainer}>
            <div className={styles.categoryName}>{category.name}</div>
            <button onClick={() => removeCategory(category)}>X</button>
        </div>
    )
}