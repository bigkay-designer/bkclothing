import React, {useEffect, useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import axios from '../../../containers/axios'
import './css/myAccount.css'
function MyAccount() {
    let history = useHistory()
    const [error, setError] = useState(false)
    const [userData, setUserData] = useState([])

    // /// get user 
    const fetchData = async () => {
      await axios.get('/user', {headers:{"authorization": localStorage.getItem('authorization')}}) 
      .then(res => {
          setUserData(res.data)
      })
      .catch(error => {
        error.response.data.msg === ('token is invalid' || 'Acess Denied')
        && setError(true)
        !localStorage.getItem('authorization') && setError(true)
      })
    }
    useEffect(()=> {
        fetchData()
    }, [])

    // logout func
    const logoutHandler = () => {
        localStorage.removeItem('authorization')
        history.push('/')
    }
    
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
                <header className="header">
                    <h2>my account</h2>
                    <div className="group">
                        <p>{`${userData.name ? `Welcome back, ${userData.name} ` : ""}`}</p>
                        <span onClick={logoutHandler}>logout</span>
                    </div>
                </header>
                <section className="account__details">
                    <div className="title">
                        <h3>account details</h3>
                    </div>
                    <ul>
                        <li>flat 32 arrowhead</li>
                        <li>LU4 8FF</li>
                        <li>Laporte Way</li>
                        <li>Luton</li>
                        <li>UK</li>
                    </ul>
                </section>
                <section className="order__history">
                    <div className="title">
                        <h3>order history</h3>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyAccount
