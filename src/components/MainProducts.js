import React from 'react'
import men from './images/men.jpg'
import women from './images/women.jpg'
import kids from './images/kids.jpg'
import './css/MainProducts.css'
function MainProducts() {
    return (
        <div className="main__products">
            <div className="product men">
                <img src={men} alt=""/>
                <a href="#">men</a>
            </div>
            <div className="product women">
                <img src={women} alt=""/>
                <a href="#">women</a>
            </div>
            <div className="product kids">
                <img src={kids} alt=""/>
                <a  href="#">kids</a>
            </div>
        </div>
    )
}

export default MainProducts
