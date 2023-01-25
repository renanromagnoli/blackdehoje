import { useContext, useEffect } from "react"
import {CategoriesContext} from "../../../contexts/CategoriesContext"
import Api from "../../../service/Api"
import Button from "./Button"

import styles from './styles.module.scss'

export function Categories() {
    const {categories, setCategories, categoriesSelected} = useContext(CategoriesContext)

    useEffect(() => {
        async function getCategories() {
            const categories = await Api.getCategories()
            setCategories(categories)
        }
        getCategories()
    }, [])

    return (
        <div className={styles.categoriesContainer}>
            {
                categories.map((category, i) => {
                    if(categoriesSelected.includes(category) == false) {
                        return <Button key={i} category={category}/>
                    }
                })
            }
        </div>
    )
}