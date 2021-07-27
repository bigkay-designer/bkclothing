import React, {useEffect, useState, useContext, useCallback} from 'react'
import {useLocation, useParams, useHistory} from 'react-router-dom'
import Products from '../Products'
import axios from '../../containers/axios'
// import item1 from '../images/trending1.jpg'
// import item2 from '../images/trending2.jpg'
// import item3 from '../images/trending3.jpg'
import { FilterContext } from '../contextApi/filterContext'

function Mens() {
    // const [genderTitle, setGenderTitle] = useState('')
    const [linkTitile, setLinkTitle] = useState(['/page/mens', '/page/womens', '/page/womens/skirts', '/page/womens/jackets', '/page/mens/shirts'])
    const [urlPath, setUrlPath] = useState([])
    const [urlState, setUrlState] = useState(false)
    const {filter} = useContext(FilterContext)
    const [products, setProducts] = useState([])
    const location = useLocation()
    let history = useHistory()
    const paramsGender = useParams()
    // When visit page go to the top
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

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
    useEffect(()=> {      
        setProducts(prod => multiFilter(prod, filter))
    }, [filter,])

    /// male and female products page
    const fetchData = useCallback (async ()=> {
        if(location.pathname === '/page/mens'){
            await axios.get(`/get/all/male`)
            .then(res => {
                setProducts(res.data)
            })
        }else if(location.pathname === '/page/womens'){
            await axios.get(`/get/all/female`)
            .then(res => {
                setProducts(res.data)
            })
        }else if(location.pathname === '/page/womens/skirts'){
            await axios.get(`/get/skirt`)
            .then(res => {
                setProducts(res.data)
            })
        }else if(location.pathname === '/page/womens/jackets'){
            await axios.get(`/get/jacket`)
            .then(res => {
                setProducts(res.data)
            })
        }else if(location.pathname === '/page/mens/shirts'){
            await axios.get(`/get/shirt`)
            .then(res => {
                setProducts(res.data)
            })
        }else{
            return setUrlState(true)
        }
    }, [location.pathname,])

    useEffect(()=> {
        fetchData()
    }, [fetchData])
    return (
        <div className="product__wrapper">
            {
                urlState && history.goBack()
            }
            <div className="products__section">
                <ul className="container">
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
                </ul>
            </div>
        </div>
    )
}

export default Mens
