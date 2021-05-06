import React from 'react'
import {Link} from 'react-router-dom'

import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons'
import './css/Products.css'

function Products({image, productPrice, productName}) {
    return (
        <div className="item">
            <div className="img">
                <Link to="/productDetail">
                    <img src={image} alt=""/>
                    <div className="purchase__icon">
                        <ShoppingCartOutlined />
                        <FavoriteBorder />
                    </div>
                </Link>
            </div>
            <Link to="/productDetail">
                <div className="body">
                    <p>{productName}</p>
                    <p>{productPrice}</p>
                </div>
            </Link>
        </div>
    )
}

export default Products
