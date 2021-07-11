import React, {createContext, useEffect, useState} from 'react';
import axios from '../../containers/axios';


export const AuthContext = createContext();

function AuthContextProvider({children}) {

    const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
    const [user, setUser] = useState(userFromStorage)
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(true);
    const [userError, setUserError] = useState(null);

    // // /// get user 
    const fetchUserData = async () => {
    await axios.get('/user', {headers:{"authorization": localStorage.getItem('authorization')}}) 
    .then(res => {
        res.status === 403 && setUserError('Please login first')

        if(res.status === 200){
            localStorage.setItem('user', JSON.stringify(res.data))
        }
    })
    .catch(error => {
        if (error.response.data.msg === ('token is invalid' || 'Acess Denied')){
            setUserError( error.response.data.msg)
            localStorage.removeItem('authorization')
        }
    });
    };

    useEffect(()=> {
        fetchUserData();
    }, [isLoading]);


    return (
        <AuthContext.Provider value={{user, userError, isLoading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
