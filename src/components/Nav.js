import React, {useState} from 'react'
import {Menu, Storefront, ShoppingBasketOutlined, SearchOutlined} from '@material-ui/icons'
import './css/Nav.css'
function Nav() {
    const [openMenu, SetOpenMenu] = useState(false)
    return (
        <div className="nav">
            <div className="container">
                <div className="wrapper">
                    <div className="menu__icon">
                        <Menu onClick={()=> SetOpenMenu(!openMenu)} className="icon" />
                    </div>
                    <div className="logo">
                        <Storefront />
                        <h3>bkclothing</h3>
                    </div>
                    <div className="cart__div">
                        <SearchOutlined className="icon search" />
                        <ShoppingBasketOutlined className="icon cart" />
                    </div>
                </div>
                <div className="menu">
                    <div className={`menu__list ${openMenu && 'show__menu'}`}>
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, numquam. <a href="#">Shop Now</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Nav
