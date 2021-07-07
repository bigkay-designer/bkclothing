import React, {useState,useEffect, useContext} from 'react'
import axios from '../containers/axios'
import {Link, useHistory} from 'react-router-dom'
import {Menu, Storefront, ShoppingBasketOutlined, SearchOutlined, Close, PersonAddOutlined, PersonOutlined,} from '@material-ui/icons'
import {CartContext} from './contextApi/cartContext'
import './css/Nav.css'
import { Button } from '@material-ui/core'
function Nav() {
    const [openMenu, SetOpenMenu] = useState(false)
    const {itemCount} = useContext(CartContext)
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
    /// login and signup redirect routes
    const goToLogin = () => {
        SetOpenMenu(false)
        return history.push('/login')
    }
    const goToSignup = () => {
        SetOpenMenu(false)
        return history.push('/signup')
    }
    /// logout Func
    const logoutHandler = () => {
        localStorage.removeItem('authorization')
        SetOpenMenu(false)
        history.push('/')
    }

    // my account route
    const goToMyAccount = () => {
        SetOpenMenu(false)
        return history.push('/myAccount')
    }
    return (
        <div className="nav">
            <div className="container">
                <div onClick={()=> SetOpenMenu(false)} className={`${openMenu && "overlay"}`}></div>
                <div className="wrapper">
                    <div className="menu__icon">
                        <Menu onClick={()=> SetOpenMenu(!openMenu)} className="icon" />
                    </div>
                    <div className="logo">
                        <Storefront />

                        <Link to="/"> <h3>bkclothing</h3> </Link>
                    </div>
                    <div className="cart__div">
                        <SearchOutlined className="icon search" />
                        <Link to="/checkout">
                            <div className="cart__body__div">
                                <ShoppingBasketOutlined className="icon cart" />
                                {
                                    itemCount > 0 ? <p>{itemCount}</p> : null
                                }
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`menu ${openMenu && 'show__menu'}`}>
                    <div className="icon__div">
                        <Close onClick={()=> SetOpenMenu(false)} />
                    </div>
                    <div className={`menu__list`}>
                        <ul>
                            <li>Home</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="auth__pages">
                        {
                            localStorage.getItem('authorization') ? 
                            <div className="user">
                                <div className="wrapper">
                                    <div className="group">
                                        <h4 onClick={goToMyAccount}>hello {user.name}</h4>
                                    </div>
                                    <Button onClick={logoutHandler}>logout</Button>
                                </div>
                                <div className="my__account">
                                    <PersonOutlined />
                                    <Button onClick={goToMyAccount}>my account</Button>
                                </div>
                            </div>
                            :
                            <div onClick={goToLogin} className="btn">
                                <PersonOutlined />
                                <Button>login</Button>
                            </div>

                        }
                        {
                            !localStorage.getItem('authorization') && 
                            <div onClick={goToSignup} className="btn">
                                <PersonAddOutlined />
                                <Button>signup</Button>
                            </div>
                        }
                    </div>
                </div>
                <div className="flash__sale">
                    <p> Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link to="/">Shop Now</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Nav
