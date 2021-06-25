const storeCart = (cart) => {
    const newCart = cart.length > 0 ? cart : []
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const sumItems = cart => {
    storeCart(cart)
    return {
        itemCount: cart.reduce((total, prod) => total + prod.productQuantity ,0),
        total: cart.reduce((total, prod)=> total + (prod.productPrice * prod.productQuantity) , 0)
    }
}

const cartReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
        if(!state.cart.find(item => item.id === action.payload.id && item.productSize === action.payload.productSize )){
            state.cart.push({
                ...action.payload,
                productQuantity: 1,
            })
            return {
                ...state,
                cart: [...state.cart],
                ...sumItems(state.cart)
            }
        }

        case "REMOVE_FROM_CART": 
        let test =  state.cart.find(item => item.id === action.payload.id && item.productSize === action.payload.productSize )
        const newCart = state.cart.filter(item => item.id !== test.id && item.productSize !== test.productSize)
        console.log(newCart)
        return {
            ...state, 
            cart: [...newCart],
            ...sumItems(newCart)
        }

        default:
            return state
    }
}

export default cartReducer