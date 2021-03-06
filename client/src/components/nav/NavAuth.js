import React, {useState,useEffect} from 'react'
import axios from '../../containers/axios'
import {useHistory} from 'react-router-dom'
import {PersonAddOutlined, PersonOutlined,} from '@material-ui/icons'
import './css/navAuth.css'
import { Button } from '@material-ui/core'
import {goToSignup, goToLogin, logoutHandler, goToMyAccount } from '../pageLinks'
function NavAuth({openMenu, setOpenMenu, setOverlay}) {
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
                        localStorage.removeItem('user')
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
        <div className={`auth__pages ${openMenu && "show__auth__pages"}`}>
            {
                localStorage.getItem('authorization') ? 
                <div className="user">
                    <div className="wrapper">
                        <div className="group">
                            <h4 onClick={()=> ((goToMyAccount(history, setOpenMenu(false)), setOverlay(false)))}>hello {user.name}</h4>
                        </div>
                        <Button onClick={()=> ((logoutHandler(history, setOpenMenu(false)), setOverlay(false)))}>logout</Button>
                    </div>
                    <div onClick={()=> ((goToMyAccount(history, setOpenMenu(false)), setOverlay(false)))} className="my__account">
                        <PersonOutlined />
                        <Button>my account</Button>
                    </div>
                </div>
                :
                <div onClick={()=> ((goToLogin(history, setOpenMenu(false)), setOverlay(false)))} className="btn">
                    <PersonOutlined />
                    <Button>login</Button>
                </div>

            }
            {
                !localStorage.getItem('authorization') && 
                <div onClick={()=> ((goToSignup(history, setOpenMenu(false)), setOverlay(false)))} className="btn signup__btn">
                    <PersonAddOutlined />
                    <Button>signup</Button>
                </div>
            }
        </div>
    )
}

export default NavAuth
