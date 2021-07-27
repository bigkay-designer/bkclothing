import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import men from '../images/men.jpg'
import women from '../images/women.jpg'
// import kids from '../images/kids.jpg'
import {goToMen, goToWomen } from '../pageLinks'
import '../css/MainProducts.css'
function MainProducts() {
    let history = useHistory()
    return (
        <div className="main__products">
            <div className="product men">
                <img onClick={() => goToMen(history)} src={men} alt=""/>
                <Link to='/pages/mens'>men</Link>
            </div>
            <div className="product women">
                <img onClick={() => goToWomen(history)} src={women} alt=""/>
                <Link to='/pages/womens'>women</Link>
            </div>
            {/* <div className="product kids">
                <img src={kids} alt=""/>
                <Link to='men'>kids</Link>
            </div> */}
        </div>
    )
}

export default MainProducts
