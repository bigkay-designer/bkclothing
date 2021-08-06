import React, {useState,useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Storefront, ShoppingBasketOutlined, SearchOutlined, Person,} from '@material-ui/icons'
import {CartContext} from '../contextApi/cartContext'
import { goToHome, goToMen, goToWomen, goToSkirts, goToJackets , goToShirts, goToSuits} from '../pageLinks'
import NavAuth from './NavAuth'
import './css/largeNav.css'
function LargeNav() {
    const [openMenu, setOpenMenu] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const {itemCount} = useContext(CartContext)
    const [men, setMen] = useState(true)
    const [women, setWomen] = useState(false)
    let history = useHistory()
    /// flashing color 

    useEffect(()=> {
        men && setWomen(false)
        women && setMen(false)
    }, [men, women])

    /// close men and open women
    const openWomenMenuHandler = () => {
        setMen(false)
        setWomen(true)
        goToWomen(history)
    }
    const openMenMenuuHandler = () => {
        setMen(true)
        setWomen(false)
        goToMen(history)
    }

    const openMenuHandler = () => {
        setOpenMenu(!openMenu)
        setOverlay(true)
    }
    return (
        <div className="large__nav">
            <div onClick={()=> ((setOverlay(false), setOpenMenu(false)))} className={`${overlay && "overlay"}`}></div>
            <div className="container">
                <div className="wrapper">
                    <div className="gender__title">
                        <ul>
                            <li className={`${men && "men__li"}`} onClick={openMenMenuuHandler}>mens</li>
                            <li className={`${women && "women__li"}`} onClick={openWomenMenuHandler}>womens</li>
                        </ul>
                    </div>
                    <div className="logo">
                        <Storefront />
                        <Link to="/"> <h3>bkclothing</h3> </Link>
                    </div>
                    <div className="cart__div">
                        <div className="larger__screen__auth">
                            <NavAuth openMenu={openMenu} setOpenMenu={setOpenMenu} setOverlay={setOverlay} />
                        </div>
                        <div className="group">
                            <div onClick={openMenuHandler} className="person__icon">
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
                        <li onClick={()=> goToSuits(history)}>suits</li>
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
