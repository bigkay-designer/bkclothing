import React, {useState,useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Menu, Storefront, ShoppingBasketOutlined, SearchOutlined, Close, ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'
import {CartContext} from '../contextApi/cartContext'
import { goToHome, goToSkirts, goToJackets , goToShirts, goToSuits} from '../pageLinks'
import NavAuth from './NavAuth'
import './css/smallNav.css'
function SmallNav() {
    const [openMenu, SetOpenMenu] = useState(false)
    const [menMenu, setMenMenu] = useState(false)
    const [womenMenu, setWomenMenu] = useState(false)
    const {itemCount} = useContext(CartContext)
    const history = useHistory();

    /// flashing color 
    return (
        <div className="small__nav">
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
                            <li>
                                <div onClick={() => setMenMenu(true)} className="title">
                                    <h3>men</h3>
                                    <ArrowForwardIos onClick={() => setMenMenu(true)} />
                                </div>
                                <div className={`group ${menMenu && "show__group"}`}>
                                    <ArrowBackIos onClick={()=> setMenMenu(false)} />
                                    <p onClick={()=> goToShirts(history, SetOpenMenu(false))}>shirts</p>
                                    <p onClick={()=> goToSuits(history, SetOpenMenu(false))}>suits</p>
                                </div>
                            </li>
                            <li>
                                <div onClick={() => setWomenMenu(true)} className="title">
                                    <h3>women</h3>
                                    <ArrowForwardIos onClick={() => setWomenMenu(true)} />
                                </div>
                                <div className={`group ${womenMenu && "show__group"}`}>
                                    <ArrowBackIos onClick={()=> setWomenMenu(false)} />
                                    <p onClick={()=> goToSkirts(history, SetOpenMenu(false))}>skirts</p>
                                    <p onClick={()=> goToJackets(history, SetOpenMenu(false))}>jackets</p>
                                </div>
                            </li>

                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="smaller__screen__auth">
                        <NavAuth setOpenMenu={SetOpenMenu} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallNav
