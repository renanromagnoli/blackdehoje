import { CategoryModel } from "../core/category";
import {createContext, useState, useEffect} from 'react'
import Api from "../service/Api";
import OfferModel from "../core/offer";

interface DataProps {
    categories: CategoryModel[]
    categoriesSelected: CategoryModel[]
    // setCategoriesOffers(): (categoriesOffers: OfferModel[]) => void
}

const data = {
    categories: [],
    categoriesOffers: {},
    categoriesSelected: []
}

export const CategoriesContext = createContext(data)

function CategoriesContextStructure(props) {
    const [state, setState] = useState(data)

    useEffect(() => {
        console.log('state categoriesContext: ', state)
    }, [state])

    // useEffect(() => {
    //     async function getCategories() {
    //         const categories = await Api.getCategories()
    //         updateState('categoriesSelected', categories)
    //     }
    //     getCategories()
    // }, [])

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <CategoriesContext.Provider value={{
            categories: state.categories,
            setCategories: categories => updateState('categories', categories),

            categoriesSelected: state.categoriesSelected,
            setCategoriesSelected: categoriesSelected => updateState('categoriesSelected', categoriesSelected),

            categoriesOffers: state.categoriesOffers,
            setCategoriesOffers: categoriesOffers => {
                console.log('setCategoriesOffers categoriesOffers: ', categoriesOffers)
                updateState('categoriesOffers', categoriesOffers)
            }
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContextStructure