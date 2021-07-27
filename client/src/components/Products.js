import React from 'react'
import {Link} from 'react-router-dom'
import { FavoriteBorder, } from '@material-ui/icons'
import './css/Products.css'

function Products({id, image, productPrice, productName}) {
    return (
        <li className="item">
            <div className="img">
                <div className="img__container">
                    <Link to={`/get/product/${productName}/${id}`}>
                        <img src={image} alt=""/>
                    </Link>
                </div>
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
        </li>
    )
}

export default Products
