import React, {useState, useEffect} from 'react'
import axios from '../../containers/axios'
import { Link, useLocation, useHistory } from 'react-router-dom'
import {Button} from '@material-ui/core'
import '../css/ProductDetail.css'
import { AddShoppingCart, ArrowBackIos } from '@material-ui/icons'
import { useStateValue } from '../contextApi/cartContext'

function ProductDetail() {
    const [currentImgTap, setCurrentImgTap] = useState(0)
    const [productDetails, setProductDetails] = useState([])
    const location = useLocation()
    const locationHistory = useHistory()
    const [sizeValue, setSizeValue] = useState('')
    const [{cart}, dispatch] = useStateValue()

    const productImg = [
        {
            id:'img1',
            img:productDetails.productImage
        }, 
        {
            id:'img2',
            img:"https://images.pexels.com/photos/3891071/pexels-photo-3891071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:'img3',
            img:'https://images.pexels.com/photos/7462545/pexels-photo-7462545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ]

    const imgTapHandler = (index) =>{
        setCurrentImgTap(index)
    }

    useEffect(()=> {
        axios.get(location.pathname)
        .then(res => {
            setProductDetails(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    // add to basket context
    console.log(cart)
    const addToBasketHandler = (e) => {
        e.preventDefault()
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:productDetails._id,
                productName: productDetails.productName,
                productType: productDetails.productType,
                productBrand: productDetails.productBrand,
                productDesc: productDetails.productDesc,
                productPrice: productDetails.productPrice,
                productImage: productDetails.productImage,
                productSize: sizeValue
            }
        })
    }

    return (
        <div className="product__detail">
            <div className="product__title">
                <h3>{productDetails.productName}</h3>
                <p onClick={()=> locationHistory.goBack()}> <ArrowBackIos /> <span>back</span></p>
            </div>  
            <div className="product__container">
                <div className="img">
                        <div className="default__img">
                            <img src={productImg[currentImgTap].img} alt=""/>
                        </div>
                    <div className="img__container">
                        {productImg.map((img, index) =>(
                            <div className="display__img" key={index}>
                                <img onClick={() => imgTapHandler(index)} src={img.img} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="price">
                    <p>£{productDetails.productPrice} <span>VAT included</span></p>
                </div>
                <form onSubmit={addToBasketHandler}>
                    <div className="size__options">
                        <select name="size" id="" onChange={(e)=> setSizeValue(e.target.value)} required> 
                            <option value="">select size</option>
                            <option value="s">s</option>
                            <option value="m">m</option>
                            <option value="xl">xl</option>
                        </select>
                    </div>
                    <div className="add__to__cart">
                        <Button type="submit"><AddShoppingCart /> add to cart</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetail
