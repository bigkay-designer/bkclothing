import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import './css/Products.css'

function Products({image, productPrice, productName}) {
    return (
        <div className="products">
            <div className="container">
                <div className="item">
                    <div className="img">
                        <img src={image} alt=""/>
                        <div className="purchase__icon">
                            <ShoppingCartOutlined />
                            <FavoriteBorder />
                            <Search />
                        </div>
                    </div>
                    <div className="body">
                        <p>{productName}</p>
                        <p>{productPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
