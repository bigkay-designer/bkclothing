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




// ================
try{
    session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: 'payment',
        line_items,
        customer_email,
        success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${YOUR_DOMAIN}/canceled`,
        shipping_address_collection: {allowed_countries: ['GB', 'US']}

    })
    if(session.payment_status !== "unpaid"){
        const newProduct = new orders({cart: cart, paymentId: session.id})
        newProduct.save()
        .then(resData => {
            console.log('db: ', resData)
            console.log("session: ", session)
            res.status(200).json({db: resData, sessionId: session.id})
        })
        .catch(err => res.status(500).json({error: err.message}))
    }
    res.status(200).json({sessionId: session.id})

}catch (error){
    console.log(error)
    res.status(400).json({error: "error occured"})
}
})




// ================== success
    
    // Cart update function
    const updateCart = useCallback (() => {
        const fetchData = async () => {
            await fetchFromApiPut(`api/order/post/${sessionIdUri}`, {
                body: {cart}
            })
            .then((res)=> {
                sessionStorage.setItem('success', 'paid')
                clearCart()
            })
            .catch(error => {
                console.log(`error from updateCart ${error}`)
            })
        }
        return  fetchData()
}, [cart, sessionIdUri, clearCart])


// get then update cart function
const getData = useCallback(()=> {
    const fetchData = async () => {
        await axios.get(`/get/orders/${sessionIdUri}`,)
        .then(res => {
            const resData = res.data[0];
            if(!resData) {
                sessionStorage.removeItem('stripe_session_id')
                sessionStorage.removeItem('success')
                history.push('')
            };

            if(resData){

                if(resData.paymentStatus === 'paid' && !resData.cart && resData){
                    updateCart()
                }
                if(resData?.cart){
                    setOrderCart(resData?.cart[0])
                }
                setOrderId(resData.paymentIntent)
                setTotal(resData.amountTotal / 100)
                setAddress(resData.shippingInfo.address)
                // setSessionId(resData.sessionId)
                setCustomerName(resData.shippingInfo.name)
            }
        })
        .catch(error => console.log(`error from getData ${error}`))
    }
    fetchData()
}, [sessionIdUri, updateCart, history])


///// media queries 


Min-width: 320px (smaller phone viewpoints)
Min-width: 480px (small devices and most phones)
Min-width: 768px (most tablets)
Min-width: 992px (smaller desktop viewpoints)
Min-width: 1200px (large devices and wide screens)