const storeUser = (user) => {
    const newUser = !user ? user : []
    localStorage.setItem('user', JSON.stringify(newUser))
}
const authReducer = (state, action) => {
    console.log(action)
    console.log(state)
    switch(action.type){
        
        case "ADD_USER": 
            if(!state.user.find(user => user.id === action.payload.id)){
                state.user.push({
                    ...action.payload,
                })
                localStorage.setItem('user', JSON.stringify(state.user))
            }
            return {
                ...state,
                user: [...state.user],
            }

        default:
            return state
    }
}

export default authReducer