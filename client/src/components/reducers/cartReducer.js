export const initialState = {
    basket: []
}

export const cartReducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_BASKET": 
            return {
                ...state, 
                basket: [...state.basket, action.item]
            }
    }
}
