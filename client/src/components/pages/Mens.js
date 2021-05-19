import React, {useEffect, useState} from 'react'
import Products from '../Products'
import axios from '../../containers/axios'
import item1 from '../images/trending1.jpg'
import item2 from '../images/trending2.jpg'
import item3 from '../images/trending3.jpg'
function Mens() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=> {
        axios.get('/get')
        .then(res => {
            setProducts(res.data)
        })
    }, [])
    return (
        <div className="product__wrapper">
            <div className="products__section">
                <div className="container">
                    {products.map(product => (
                        <Products 
                            productName={product.productName}
                            productPrice={product.productPrice}
                            image={product.productImage}
                            productGender= {product.productGender}
                            productType= {product.productType}
                            productBrand= {product.productBrand}
                            productDesc= {product.productDesc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mens
