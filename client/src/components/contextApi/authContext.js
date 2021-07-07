import React, {useReducer, createContext} from 'react'
import authReducer from '../reducers/authReducer'


export const AuthContext = createContext()

const userFromStorage = localStorage.getItem('authorization') || []

const authInitialState = {
    user: userFromStorage
}


function AuthContextProvider({children}) {

    const [state, dispatch] = useReducer(authReducer, authInitialState);
    const addUser = (user => dispatch({type: 'ADD_USER', payload: user}))
    
    const authContextValue = {
        ...state, 
        addUser,
    }
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
