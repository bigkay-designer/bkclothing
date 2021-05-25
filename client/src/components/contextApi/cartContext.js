import React, {useReducer, createContext, useContext} from 'react'

//create the data layer (ContextAPi)
export const CartContext = createContext()

//Wrap app and provide the data layer 
export const CartContextProvider = ({cartReducer, cartInitialState, children}) => {
    return (
        <CartContext.Provider value={useReducer(cartReducer, cartInitialState)}>
            {children}
        </CartContext.Provider>
    )
}

//Pull information from data layer
export const useStateValue = () => useContext(CartContext)
