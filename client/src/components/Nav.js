import React, {useState,useEffect, useContext} from 'react'
import axios from '../containers/axios'
import {Link, useHistory} from 'react-router-dom'
import {Menu, Storefront, ShoppingBasketOutlined, SearchOutlined, Close, PersonAddOutlined, PersonOutlined,} from '@material-ui/icons'
import {CartContext} from './contextApi/cartContext'
import './css/Nav.css'
import { Button } from '@material-ui/core'
import { goToHome, goToSignup, goToLogin, goToMen, goToWomen, logoutHandler, goToMyAccount } from './pageLinks'
import NavAuth from './NavAuth'
function Nav() {
    const [openMenu, SetOpenMenu] = useState(false)
    const {itemCount} = useContext(CartContext)
    const [user, setUser] = useState([])
    const [flashingColor, setFlashingColor] = useState(false)
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
                        <div className="bigger__screen__auth">
                            <NavAuth />
                        </div>
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
                            <li onClick={()=> goToHome(history, SetOpenMenu(false))}>Home</li>
                            <li onClick={()=> goToMen(history, SetOpenMenu(false))}>Men</li>
                            <li onClick={()=> goToWomen(history, SetOpenMenu(false))}>Women</li>
                            <li>Kids</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="smaller__screen__auth">
                        <NavAuth SetOpenMenu={SetOpenMenu} />
                    </div>
                </div>
                <div className="flash__sale">
                    <p className={`${flashingColor && "flashing__color"}`}> Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link to="/">Shop Now</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Nav
