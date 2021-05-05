import React from 'react'
import './css/LandingProductItems.css'
function LandingProductContainer({productName, productPrice, image}) {

    return (
        <div className="item">
            <div className="img">
                <img src={image} alt=""/>
            </div>
            <div className="body">
                <p>{productName}</p>
                <p>{productPrice}</p>
            </div>
        </div>
    )
}

export default LandingProductContainer
