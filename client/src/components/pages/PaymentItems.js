import React from 'react'
import { Link } from 'react-router-dom'

import '../css/checkoutItems.css'
function PaymentItems({id, productName, productPrice, image, size, quantity}) {
    return (
        <div className="payment__items">
            <div className="item">
                <div className="img">
                    <div className="img__container">
                        <Link to={`/get/product/${productName}/${id}`}>
                            <img src={image} alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="body">

                    <div className="body__title">
                        <h2>{productName}</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>uk size:</th>
                                <td>{size}</td>
                            </tr>
                            <tr>
                                <th>quantity:</th>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <th>price:</th>
                                <td>£{productPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentItems
