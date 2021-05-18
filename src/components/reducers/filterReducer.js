export const filterReducer = (state, action) => {
    switch(action.type){
        case "CHOSEN_OPTION": 
        return [...state, {
            title: action.filter.title
        }]
        case "CHOSEN_OPTION_INPUT": 
        return [...state, {
            title: action.filter.title
        }]

        case "REMOVE_CHOSEN_OPTION": 
        return state.filter(filterItem => filterItem.title !== action.title)

        default: 
        return state
    }
}