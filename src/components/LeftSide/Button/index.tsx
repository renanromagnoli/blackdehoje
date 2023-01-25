import { memo, useContext } from 'react'
import { CategoriesContext } from '../../../contexts/CategoriesContext'
import styles from './styles.module.scss'

interface ButtonProps {
    title: string
}


function Button({title}: ButtonProps) {

    const {categoriesSelected, setCategoriesSelected} = useContext(CategoriesContext)

    function setCategories(category) {
        setCategoriesSelected([...categoriesSelected, category])
    }

    return (
        <div className={styles.buttonContainer} onClick={() => setCategories(title)}>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default memo(Button)