import React, {useReducer, useEffect, createContext} from 'react'
import { filterReducer } from '../reducers/filterReducer'

export const FilterContext = createContext()

const FilterContextProvider = (props) => {
    const [filter, dispatch] = useReducer(filterReducer, [])
    return (
        <FilterContext.Provider value={{filter, dispatch}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider