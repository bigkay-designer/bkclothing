import React, {useState,useEffect, useContext} from 'react'
import axios from '../containers/axios'
import {useHistory} from 'react-router-dom'
import {PersonAddOutlined, PersonOutlined,} from '@material-ui/icons'
import './css/Nav.css'
import { Button } from '@material-ui/core'
import {goToSignup, goToLogin, logoutHandler, goToMyAccount } from './pageLinks'
function NavAuth({SetOpenMenu}) {
    const [user, setUser] = useState([])
    const history = useHistory();

    // get logged in user
    const getLoggedInUser = () => {
        if(localStorage.getItem('authorization')){
            const fetchData = async () => {
                await axios.get('/user', {headers:{"authorization": localStorage.getItem('authorization')}})
                .then(res => {
                    setUser(res.data)
                    
                })
                .catch(error => {
                    if(error.response.data.msg === 'token is invalid'){
                        localStorage.removeItem('authorization')
                    }
                })
            }
            fetchData()
        }
    }
    useEffect(()=> {
        getLoggedInUser()
    }, [])

    /// flashing color 
    return (
        <div className="auth__pages">
            {
                localStorage.getItem('authorization') ? 
                <div className="user">
                    <div className="wrapper">
                        <div className="group">
                            <h4 onClick={()=> goToMyAccount(history, SetOpenMenu(false))}>hello {user.name}</h4>
                        </div>
                        <Button onClick={()=> logoutHandler(history, SetOpenMenu(false))}>logout</Button>
                    </div>
                    <div className="my__account">
                        <PersonOutlined />
                        <Button onClick={()=> goToMyAccount(history, SetOpenMenu(false))}>my account</Button>
                    </div>
                </div>
                :
                <div onClick={()=> goToLogin(history, SetOpenMenu(false))} className="btn">
                    <PersonOutlined />
                    <Button>login</Button>
                </div>

            }
            {
                !localStorage.getItem('authorization') && 
                <div onClick={()=> goToSignup(history, SetOpenMenu(false))} className="btn signup">
                    <PersonAddOutlined />
                    <Button>signup</Button>
                </div>
            }
        </div>
    )
}

export default NavAuth
