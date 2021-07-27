import React, {useState, useEffect, useContext, useCallback} from 'react'
import {CartContext} from '../contextApi/cartContext'
import axios from '../../containers/axios'
import {useLocation, useHistory, useParams } from 'react-router-dom'
import {Button} from '@material-ui/core'
import '../css/ProductDetail.css'
import { AddShoppingCart, ArrowBackIos } from '@material-ui/icons'
import {isInCart} from '../helpers'

function ProductDetail() {
    const [currentImgTap, setCurrentImgTap] = useState(0)
    const [productDetails, setProductDetails] = useState([])
    const location = useLocation()
    const locationHistory = useHistory()
    const [sizeValue, setSizeValue] = useState('')
    ///
    const {addProduct,increaseQuan, cart} = useContext(CartContext)

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
    // getData 
    const fetchData = useCallback(async ()=> {
        await axios.get(location.pathname)
        .then((res) => {
            setProductDetails(res.data)
        })
        .catch(err => console.log(err))
    }, [location.pathname])

    useEffect(()=> {
        fetchData()
    }, [fetchData])


    // add to basket context
    const product = {
        id:productDetails._id,
        productName: productDetails.productName,
        productType: productDetails.productType,
        productBrand: productDetails.productBrand,
        productDesc: productDetails.productDesc,
        productPrice: productDetails.productPrice,
        productImage: productDetails.productImage,
        productSize: sizeValue,
    }
    const addToBasketHandler = (e,) => {
        e.preventDefault()
        if(!isInCart(product, cart)){
            return addProduct(product)
        }else if (isInCart(product, cart)){
            increaseQuan(product)
        }
    }
    return (
        <div className="product__detail">
            <div className="back__arrow" onClick={()=> locationHistory.goBack()}> <ArrowBackIos /> <span>back</span></div>
            <div className="product__container">
                <div className="product__title">
                    <div className="group">
                        <p>{productDetails.productName}</p>
                    </div>
                </div> 
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
                        {
                            !isInCart(product, cart) &&
                            <Button className="add__to__cart--btn" type="submit"><AddShoppingCart /> add to cart</Button>
                        }
                        {
                            isInCart(product, cart) &&
                            <div className="add__more__div">
                                <Button className="add__to__cart--btn" type="submit"><AddShoppingCart /> add more</Button>
                                <Button className="to__checkout--btn" onClick={()=> locationHistory.push('/checkout')} ><AddShoppingCart /> process to checkout</Button>
                            </div>
                        }
                    </div>
                </form>
                <div className="product__desc">
                    <h3>Details</h3>
                    <p>{productDetails.productDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
