<Router>
{/* <Nav /> */}
<Switch>
  <Route exact path="/"></Route>
  <FilterContextProvider>
    <Route path={`/all/:gender`}>
      <SortFilter />
      <ProductDisplay />
    </Route>
  </FilterContextProvider>
  {/* stripe element router */}
  <Route path="/checkout"> 
    <Elements stripe={promise}>
      <Checkout />
    </Elements>
  </Route>
  <Route path="/canceled"><Canceled /></Route>
  <Route path="/success"><Success /></Route>
  <Route path="/get/product"><ProductDetail /></Route>
  <Route path="*"><NotFound /></Route>
</Switch>
{/* <NewsLetter />
<Footer /> */}
</Router>


// ================
// export const cartInitialState = {
//     cart: [],
// }

const storeCartItems = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : [];
    return localStorage.setItem('cart', JSON.stringify(cart));
}

// Selector
export const getCartTotal = (cart) => {
    return cart?.reduce((prev, item)=>{
        return prev + (item.productPrice * item.productQuantity)
    }, 0)
}

const cartReducer = (state, action) => {
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
            const filterItem = state.cart.filter(item => item.id !== action.id);
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


// ===============
// import React, {useReducer, createContext, useContext} from 'react'

// //create the data layer (ContextAPi)
// export const CartContext = createContext()

// //Wrap app and provide the data layer 
// export const CartContextProvider = ({cartReducer, cartInitialState, children}) => {
//     return (
//         <CartContext.Provider value={useReducer(cartReducer, cartInitialState)}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// //Pull information from data layer
// export const useStateValue = () => useContext(CartContext)

// Diffrent type