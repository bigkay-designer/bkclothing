import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons'
import './css/Products.css'

function Products({id, image, productPrice, productName}) {

    return (
        <div className="item">
            <div className="img">
                <Link to={`/get/product/${productName}/${id}`}>
                    <img src={image} alt=""/>
                </Link>
                <div className="purchase__icon">
                    <FavoriteBorder className="hover__fill" />
                </div>
            </div>
            <div className="body">
                <Link to={`/get/product/${productName}/${id}`} >
                    <p>{productName}</p>
                    <p>£{productPrice}</p>
                </Link>
            </div>
        </div>
    )
}

export default Products
