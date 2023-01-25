import { CategoryModel } from '../../../../core/category'
import styles from './styles.module.scss'

interface CategoryFilterProps {
    category: CategoryModel
}

export function CategoryFilter({category}: CategoryFilterProps) {
    return (
        <div className={styles.categoryFilterContainer}>
            <div className={styles.categoryName}>{category.name}</div>
            <button>X</button>
        </div>
    )
}