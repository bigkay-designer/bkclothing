import React, {useState,useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Menu, Storefront, ShoppingBasketOutlined, SearchOutlined, Close, PersonAddOutlined, PersonOutlined, Person,} from '@material-ui/icons'
import {CartContext} from '../contextApi/cartContext'
import { goToHome, goToMen, goToWomen, goToSkirts, goToJackets , goToShirts} from '../pageLinks'
import NavAuth from './NavAuth'
import './css/largeNav.css'
function LargeNav() {
    const [openMenu, setOpenMenu] = useState(false)
    const {itemCount} = useContext(CartContext)
    const [men, setMen] = useState(true)
    const [women, setWomen] = useState(false)
    let history = useHistory()
    /// flashing color 

    useEffect(()=> {
        men && setWomen(false)
        women && setMen(false)
    }, [])

    /// close men and open women
    const openWomenMenuHandler = () => {
        setMen(false)
        setWomen(true)
        goToWomen(history)
    }
    const openMenuHandler = () => {
        setMen(true)
        setWomen(false)
        goToMen(history)
    }
    return (
        <div className="large__nav">
            <div className="container">
                <div className="wrapper">
                    <div className="gender__title">
                        <ul>
                            <li className={`${men && "men__li"}`} onClick={openMenuHandler}>mens</li>
                            <li className={`${women && "women__li"}`} onClick={openWomenMenuHandler}>womens</li>
                        </ul>
                    </div>
                    <div className="logo">
                        <Storefront />
                        <Link to="/"> <h3>bkclothing</h3> </Link>
                    </div>
                    <div className="cart__div">
                        <div className="larger__screen__auth">
                            <NavAuth openMenu={openMenu} setOpenMenu={setOpenMenu} />
                        </div>
                        <div className="group">
                            <div onMouseEnter={()=> setOpenMenu(true)} className="person__icon">
                                <Person />
                            </div>
                            <SearchOutlined className="icon search" />
                            <div onClick={()=> history.push('/checkout')} className="cart__body__div">
                                <ShoppingBasketOutlined className="icon cart" />
                                {
                                    itemCount > 0 ? <p>{itemCount}</p> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`men__menu menu ${men && 'show__men__menu'}`}>
                    <ul>
                        <li onClick={()=> goToHome(history)}>Home</li>
                        <li onClick={()=> goToShirts(history)}>shirts</li>
                        <li>tracksuits</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={`women__menu menu ${women && 'show__women__menu'}`}>
                    <ul>
                        <li onClick={()=> goToHome(history)}>Home</li>
                        <li onClick={()=> goToJackets(history)} >jackets</li>
                        <li onClick={()=> goToSkirts(history)} >skirts</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LargeNav
