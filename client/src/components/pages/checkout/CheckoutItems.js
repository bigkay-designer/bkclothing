import React, {useState } from 'react'
import {Delete, Edit } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import '../../css/checkoutItems.css'
import { Button } from '@material-ui/core'
function CheckItems({id,index,productName,
    productType,
    productBrand,
    productDesc,
    productPrice,
    productImage,
    productQuantity,
    productSize, updateProduct, removeProduct}) {
    const [sizeValue, setSizeValue] = useState('')
    const [inputVal, setInputVal] = useState(1)
    const [formDisplay, setFormDisplay] = useState(false)

    const product = {
        id,
        index,
        productName,
        productType,
        productBrand,
        productDesc,
        productPrice,
        productImage,
        productSize: sizeValue || productSize,
        productQuantity: parseInt(inputVal) || productQuantity
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        updateProduct(product)
        setFormDisplay(false)
    }
    return (
        <div className="checkout__items">
            <div className="item">
                <div className="img">
                    <div className="img__container">
                        <Link to={`/get/product/${productName}/${id}`}>
                            <img src={productImage} alt=""/>
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
                    <div className="edit__div">
                        <div onClick={() => removeProduct(product)} className="remove__item">
                            <p><Delete /> <span>remove</span> </p>
                        </div>
                        <div onClick={()=> setFormDisplay(true)} className="edit">
                            <p> <Edit /> <span>edit</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`edit__form ${formDisplay && "display__form"}`}>
                <form onSubmit={onSubmitHandler} >
                    <div className="form__group">
                        <div className="size__options">
                            <label htmlFor="size">size*</label>
                            <select name="size" id="" onChange={(e)=> setSizeValue(e.target.value)} required> 
                                <option value="">select size</option>
                                <option value="s">s</option>
                                <option value="m">m</option>
                                <option value="xl">xl</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="quantity">qty*</label>
                            <input onChange={(e)=> setInputVal(e.target.value)} type="number" required value={inputVal} autoComplete="off" />
                        </div>
                    </div>
                    <div className="btn">
                        <Button className="save__btn" type="submit">save</Button>
                        <Button onClick={()=> setFormDisplay(false)} className="cancel__btn" >cancel</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CheckItems
