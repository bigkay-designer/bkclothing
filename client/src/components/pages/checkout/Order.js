import React from 'react'
import '../../css/order.css'

function Order({id,index,productName,
    productType,
    productBrand,
    productDesc,
    productPrice,
    productImage,
    productQuantity,
    productSize}) {
    return (
        <div className="orders__items">
            <div className="item">
                <div className="img">
                    <div className="img__container">
                        <img src={productImage} alt=""/>
                    </div>
                </div>
                <div className="body">

                    <div className="body__title">
                        <h3>{productName}</h3>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>uk size:</th>
                                <td>{productSize}</td>
                            </tr>
                            <tr>
                                <th>quantity:</th>
                                <td>{productQuantity}</td>
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

export default Order
