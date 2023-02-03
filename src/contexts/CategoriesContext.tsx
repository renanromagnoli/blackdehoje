import { CategoryModel } from "../core/category";
import {createContext, useState, useEffect} from 'react'
import Api from "../service/Api";

interface DataProps {
    categories: CategoryModel[]
    categoriesSelected: CategoryModel[]
}

const data = {
    categories: [],
    categoriesOffers: [],
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
            categoriesSelected: state.categoriesSelected,
            setCategories: categories => updateState('categories', categories),
            setCategoriesSelected: categoriesSelected => updateState('categoriesSelected', categoriesSelected)
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContextStructure