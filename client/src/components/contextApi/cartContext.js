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
    const increaseQuan = (product) => dispatch({type: 'INCREASE', payload: product});
    const updateProduct = (product) => dispatch({type: 'UPDATE', payload: product})
    const removeProduct  = (product) => dispatch({type: "REMOVE_FROM_CART", payload: product}); 
    const clearCart = () => dispatch({type: 'CLEAR'})

    const contextValues = {
        ...state,
        addProduct,
        increaseQuan,
        updateProduct,
        removeProduct,
        clearCart
    }
    
    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
