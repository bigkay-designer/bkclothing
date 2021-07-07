import React, {useEffect, useState, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import axios from '../../../containers/axios'
import { AuthContext } from '../../contextApi/authContext'

function MyAccount() {
    const [error, setError] = useState(false)
    const {user} = useContext(AuthContext)
    const [userData, setUserData] = useState([])
    /// get user 
    const fetchData = async () => {
        await axios.get('/user', {headers:{"authorization": user}}) 
        .then(res => {
            setUserData(res.data)
        })
        .catch(error => {
            error.response.data.msg === 'token is invalid' || 'Acess Denied' 
            && setError(true)
        })
    }
    useEffect(()=> {
        fetchData()
    }, [])
    // reload page
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="my__account">
            {
                error &&
                <Redirect to="/login" />
            }
            <div className="container">
                <p>{userData.name}</p>
            </div>
        </div>
    )
}

export default MyAccount
