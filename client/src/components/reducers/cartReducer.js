export const cartInitialState = {
    cart: [],
}

export const getCartTotal = (cart) => {
    return cart?.reduce((prev, item)=>{
        return prev + (item.productPrice * item.productQuantity)
    }, 0)
}

const cartReducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
            state.cart.map(item => {
                if(item.id === action.item.id && item.productSize === action.item.productSize){
                    return item.productQuantity += action.item.productQuantity
                }
            })
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
        case "UPDATE_CART": 
        // const filterItem = state.cart.filter(item => item.id !== action.id && item.productSize !== action.size);
            return {
                ...state,
                cart: state.cart.map((item, index) => 
                    item.id === action.item.id && index == action.item.index
                    ?{
                        ...item, 
                        productQuantity: action.item.productQuantity, 
                        productSize: action.item.productSize
                        
                    }
                    :item
                ),
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