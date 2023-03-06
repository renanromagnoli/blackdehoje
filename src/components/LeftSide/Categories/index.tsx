import { useContext, useEffect } from "react"
import {CategoriesContext} from "../../../contexts/CategoriesContext"
import { upOffersInCategoriesContext } from "../../../functions/createOffers"
import Api from "../../../service/Api"
import Button from "./Button"

import styles from './styles.module.scss'

export function Categories() {
    const {categories, setCategories, categoriesSelected, categoriesOffers, setCategoriesOffers} = useContext(CategoriesContext)

    useEffect(() => {
        async function getCategories() {
            const categories = await Api.getCategories()
            setCategories(categories)
        }
        getCategories()
    }, [])

    useEffect(() => {
        // upOffersInCategoriesContext(categoriesSelected, categoriesOffers, setCategoriesOffers)
        async function upOffers() {
            const newOffers = await upOffersInCategoriesContext(categoriesSelected, categoriesOffers)
            // console.log('NEWcategoriesOffers: ', newOffers)
            if(newOffers) {
                // console.log('entrou NEWOFFERS')
                setCategoriesOffers(newOffers)
            }
        }
        upOffers()
    }, [categoriesSelected])

    useEffect(() => {
        console.log('CHANGEDcategoriesOffers: ', categoriesOffers)
    }, [categoriesOffers])

    return (
        <div className={styles.categoriesContainer}>
            {
                categories?.map((category, i) => {
                    if(categoriesSelected.includes(category) == false) {
                        return <Button key={i} category={category}/>
                    }
                })
            }
        </div>
    )
}