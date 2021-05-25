import React from 'react'
import { Delete, FavoriteBorder } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import '../css/checkoutItems.css'
import { Button } from '@material-ui/core'
function CheckItems({id, productName, productPrice, image, size, removeFromCartHandler}) {
    return (
        <div className="checkout__items">
            <div className="item">
                <div className="img">
                    <div className="img__container">
                        <Link to={`/get/product/${productName}/${id}`}>
                            <img src={image} alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="body">
                    <Link to={`/get/product/${productName}/${id}`} >
                        <div className="body__title">
                            <h2>{productName}</h2>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>size:</th>
                                    <td>{size}</td>
                                </tr>
                                <tr>
                                    <th>price:</th>
                                    <td>£{productPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Link>
                    <div onClick={()=> removeFromCartHandler(id, size)} className="remove__item">
                        <Delete />
                        <p>remove</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckItems
