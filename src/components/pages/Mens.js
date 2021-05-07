import React, {useEffect} from 'react'
import Products from '../Products'
import item1 from '../images/trending1.jpg'
import item2 from '../images/trending2.jpg'
import item3 from '../images/trending3.jpg'
import SortFilter from './SortFilter'
function Mens() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="men product__wrapper">
            <SortFilter />
            <div className="products__section">
                <div className="container">
                    <Products 
                        productName="Gucci Jacket"
                        productPrice="£98.00"
                        image={item1}
                        productGender="female"
                        productType="clothing"
                        productBrand="gucci"
                        productDesc="jacket"
                    />
                    <Products 
                        productName="Hoodie"
                        productPrice="£98.00"
                        image={item2}
                        productGender="male"
                        productType="clothing"
                        productBrand="adidas"
                        productDesc="hoodie"
                    />
                    <Products 
                        productName="Glasses"
                        productPrice="£29.00"
                        image={item3}
                        productGender="female"
                        productType="clothing"
                        productBrand="jordan"
                        productDesc="t-shirt"
                    />

                </div>
            </div>
        </div>
    )
}

export default Mens
