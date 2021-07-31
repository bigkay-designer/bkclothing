import React, {useEffect, useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import axios from '../../../containers/axios'
import './css/myAccount.css'
function MyAccount() {
    let history = useHistory()
    const [emptyData, setEmptyData] = useState(false)
    const [user, setUser] = useState([])
    //address section
    // const [address, setAddress] = useState([])
    // const [customerName, setCustomerName] = useState('')
    // //order sesction
    // const [orderCart, setOrderCart] = useState([])
    // const [orderId, setOrderId] = useState(null)
    // // const [sessionId, setSessionId] = useState('')
    // const [total, setTotal] = useState(null)
    
    // logout func
    const logoutHandler = () => {
        localStorage.removeItem('authorization')
        history.push('/')
    }

    const fetchUserData = async () => {
        await axios.get('/user', {headers:{"authorization": localStorage.getItem('authorization')}}) 
        .then(res => {
            if(res.status === 200){
                localStorage.setItem('user', JSON.stringify(res.data))
                setUser(res.data)
            }
        })
        .catch(error => {
            if (error.response.data.msg === ('token is invalid' || 'Acess Denied')){
                setEmptyData(true)
                localStorage.removeItem('authorization')
            }
        });
    };
    
    useEffect(()=> {
        fetchUserData();
    }, []);

    return (
        <div className="my__account">
            {
                emptyData &&
                <Redirect to="/login" />
            }
            <div className="container">
                <header className="header">
                    <h2>my account</h2>
                    <div className="group">
                        <p>{`${user ? `Welcome back, ${user.name} ` : ""}`}</p>
                        <span onClick={logoutHandler}>logout</span>
                    </div>
                </header>
                <section className="account__details">
                    <div className="title">
                        <h3>account details</h3>
                    </div>
                    <div className="content">
                        <ul>
                            {/* <li>{address.line1}</li>
                            <li>{address.line2}</li>
                            <li className="postal__code">{address.postal_code}</li>
                            <li>{address.country}</li>
                            <li>{address.city}</li>
                            <li>{address.state}</li> */}
                        </ul>
                    </div>
                </section>
                <section className="order__history">
                    <div className="title">
                        <h3>order history</h3>
                    </div>
                    <div className="content">
                        {
                            emptyData && <p className="empty_order">Your order history is empty</p>
                        }
                        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyAccount
