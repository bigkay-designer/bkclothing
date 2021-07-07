
const authReducer = (state, action) => {
    switch(action.type){
        
        case "ADD_USER": 
            if(!state.user.find(user => user.id === action.payload.id)){
                state.user.push({
                    ...action.payload,
                })
            }
            return {
                ...state,
                user: [...state.user]
            }

        default:
            return state
    }
}

export default authReducer