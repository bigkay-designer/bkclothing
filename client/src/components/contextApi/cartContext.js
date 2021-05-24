import React, {useReducer, useContext, createContext} from 'react'
import {cartReducer, initialState} from '../reducers/cartReducer'
export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={cart, dispatch}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider