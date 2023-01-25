import { CategoryModel } from "../core/category";
import {createContext, useState, useEffect} from 'react'

interface DataProps {
    categoriesSelected: CategoryModel[]
}

const data = {
    categoriesSelected: []
}

export const CategoriesContext = createContext(data)

function CategoriesContextStructure(props) {
    const [state, setState] = useState(data)

    useEffect(() => {
        console.log('state categoriesContext: ', state)
    }, [state])

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <CategoriesContext.Provider value={{
            categoriesSelected: state.categoriesSelected,
            setCategoriesSelected: categoriesSelected => updateState('categoriesSelected', categoriesSelected)
        }}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContextStructure