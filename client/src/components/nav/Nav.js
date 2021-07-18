import React, {useState,useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import LargeNav from './LargeNav'
import SmallNav from './SmallNav'
import './css/nav.css'
function Nav() {
    const [flashingColor, setFlashingColor] = useState(false)
    return (
        <div className="nav">
            <div className="container">
                <div className="small__screen__nav">
                    <SmallNav />
                </div>
                <div className="large__screen__nav">
                    <LargeNav />
                </div>
                <div className="flash__sale">
                    <p className={`${flashingColor && "flashing__color"}`}> Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link to="/">Shop Now</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Nav
