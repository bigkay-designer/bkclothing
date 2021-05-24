export const initialState = {
    productName: [],
    productBrand: [],
}
export const filterReducer = (state, action) => {
    // console.log(action)

    switch(action.type){
        case "CHOSEN_OPTION_NAME":
            return {
                ...state,
                productName: [...state.productName, action.filter]
            }
        case "CHOSEN_OPTION_BRAND": 
            return{
                ...state, 
                productBrand: [...state.productBrand, action.filter]
            }

        case "REMOVE_CHOSEN_OPTION": 
            return {
                ...state,
                productName: state.productName.filter(filterItem => filterItem !== action.filter )
            }
        case "REMOVE_CHOSEN_OPTION_BRAND": 
            return {
                ...state,
                productBrand: state.productBrand.filter(filterItem => filterItem !== action.filter )
            }

        default: 
            return state
    }
}
