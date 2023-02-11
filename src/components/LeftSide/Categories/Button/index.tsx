import { memo, useContext } from 'react'
import { CategoriesContext } from '../../../../contexts/CategoriesContext'
import { CategoryModel } from '../../../../core/category'
import { upCategoryOffersContext } from '../../../../functions/createOffers'
import styles from './styles.module.scss'

interface ButtonProps {
    category: CategoryModel
}


function Button({category}: ButtonProps) {

    const {categoriesSelected, setCategoriesSelected, categoriesOffers, setCategoriesOffers} = useContext(CategoriesContext)

    function setCategories(category: CategoryModel) {
        if(categoriesSelected.includes(category) === false) {
        setCategoriesSelected([...categoriesSelected, category])
        }
    }

    async function upOffers(category: CategoryModel) {
        const newOffers = await upCategoryOffersContext(category, categoriesOffers)
        setCategoriesOffers(newOffers)
        console.log('newOffers: ', newOffers)
    }

    async function upDate(category) {
        if(categoriesSelected.includes(category) === false) {
            await upOffers(category)
            setCategories(category)
        }
    }

    return (
        <div className={styles.buttonContainer} onClick={() => setCategories(category)}>
            <div className={styles.title}>{category.name}</div>
        </div>
    )
}

export default memo(Button)