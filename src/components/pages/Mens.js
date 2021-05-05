import React from 'react'
import Products from '../Products'
import item1 from '../images/trending1.jpg'
import item2 from '../images/trending2.jpg'
import item3 from '../images/trending3.jpg'
function Mens() {
    return (
        <div className="men">
            <Products 
                productName="Gucci Jacket"
                productPrice="£98.00"
                image={item1}
            />
            <Products 
                productName="Hoodie"
                productPrice="£98.00"
                image={item2}
            />
            <Products 
                productName="Glasses"
                productPrice="£29.00"
                image={item3}
            />
        </div>
    )
}

export default Mens
