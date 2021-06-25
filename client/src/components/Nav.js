import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Storefront, ShoppingBasketOutlined, SearchOutlined, Close} from '@material-ui/icons'
import {CartContext} from './contextApi/cartContext'
import './css/Nav.css'
function Nav() {
    const [openMenu, SetOpenMenu] = useState(false)
    const {itemCount} = useContext(CartContext)
    console.log(itemCount)
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
                </div>
                <div className="flash__sale">
                    <p> Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <a href="#">Shop Now</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Nav
