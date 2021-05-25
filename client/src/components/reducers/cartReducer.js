export const cartInitialState = {
    cart: [],
    cartTotal: 0
}

export const getCartTotal = (cart) => {
    return cart?.reduce((amount, item) => item.productPrice + amount, 0 )
}

const cartReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
            return {
                cart: [...state.cart, action.item],
            }
        case "REMOVE_FROM_CART": 
            const filterItem = state.cart.filter(item => item.id !== action.id && item.productSize !== action.size);
            let newBasket = [...state.cart]
            if(filterItem >= 0){
                newBasket.splice(filterItem, 1)
            }else{
                console.log(`Can't remove product(id: ${action.id} as its not in cart)`)
            }
            return {
                ...state,
                cart: newBasket
            }
        default: 
            return state    
    }
}

export default cartReducer