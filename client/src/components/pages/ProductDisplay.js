import React, {useEffect, useState, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import Products from '../Products'
import axios from '../../containers/axios'
// import item1 from '../images/trending1.jpg'
// import item2 from '../images/trending2.jpg'
// import item3 from '../images/trending3.jpg'
import { FilterContext } from '../contextApi/filterContext'

function Mens() {
    // const [genderTitle, setGenderTitle] = useState('')
    const {filter} = useContext(FilterContext)
    const [products, setProducts] = useState([])
    const location = useLocation()

    // When visit page go to the top
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    useEffect(()=> {      
        const multiFilter = (item, condition) => {
            const filterKeys = Object.keys(condition);
            return item.filter((eachObj) => {
              return filterKeys.every(eachKey => {
                if (!condition[eachKey].length) {
                  return true; // passing an empty filter means that filter is ignored.
                }
                return (condition[eachKey].toString()).toLowerCase().includes((eachObj[eachKey].toString()).toLowerCase());
              });
            });
          };
        setProducts(multiFilter(products, filter))
    }, [filter])

    /// male and female products page
    useEffect(()=> {
        if(location.pathname === '/all/men'){
            axios.get(`/get/all/male`)
            .then(res => {
                setProducts(res.data)
            })
        }else if(location.pathname === '/all/women'){
            axios.get(`/get/all/female`)
            .then(res => {
                setProducts(res.data)
            })
        }else{
            return null
        }
    }, [])
    

    return (
        <div className="men product__wrapper">
            <div className="products__section">
                <div className="container">
                    {products.map(product => (
                        <Products 
                            key={product._id}
                            id={product._id}
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
