import React, {useReducer, createContext} from 'react'
import cartReducer, {sumItems} from '../reducers/cartReducer'

export const CartContext = createContext()

const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const cartInitialState = {
    cart: cartFromStorage,
    ...sumItems(cartFromStorage)
}

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const addProduct = (product) => dispatch({type:"ADD_TO_CART", payload: product});
    const removeProduct  = (product) => dispatch({type: "REMOVE_FROM_CART", payload: product}); 

    const contextValues = {
        ...state,
        addProduct,
        removeProduct
    }
    
    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
