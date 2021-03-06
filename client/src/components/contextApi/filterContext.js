import React, {useReducer, createContext} from 'react'
import { filterReducer, initialState } from '../reducers/filterReducer'

export const FilterContext = createContext()

const FilterContextProvider = (props) => {
    const [filter, dispatch] = useReducer(filterReducer, initialState)
    return (
        <FilterContext.Provider value={{filter, dispatch}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider