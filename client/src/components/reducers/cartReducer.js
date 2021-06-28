const storeCart = (cart) => {
    const newCart = cart.length > 0 ? cart : []
    localStorage.setItem('cart', JSON.stringify(newCart))
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

        case "INCREASE": 
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id && item.productSize === action.payload.productSize)
            state.cart[itemIndex].productQuantity++

            return{
                ...state,
                cart: [...state.cart],
                ...sumItems(state.cart)
            }

        case "UPDATE": 
            const updateItemIndex = state.cart.findIndex((item, index) => item.id === action.payload.id && index == action.payload.index )
            state.cart[updateItemIndex].productQuantity = action.payload.productQuantity
            state.cart[updateItemIndex].productSize = action.payload.productSize


            return {
                ...state, 
                cart: [...state.cart],
                ...sumItems(state.cart)
            }

        case "REMOVE_FROM_CART": 
            const index = state.cart.findIndex((item, index) => item.id === action.payload.id && index == action.payload.index )
            let newCart = [...state.cart]

            if(index >= 0){
                newCart.splice(index, 1)
            }else{
                console.log(`Can't remove product(id: ${action.payload.id} as its not in cart)`)
            }
            return {
                ...state, 
                cart: newCart,
                ...sumItems(newCart)
            }

        case "CLEAR": 
            localStorage.removeItem('cart')
            return{
                cart: [],
                itemCount: 0,
                total: 0,
            }

        default:
            return state
    }
}

export default cartReducer