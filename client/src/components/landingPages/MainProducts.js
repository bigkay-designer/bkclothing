import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import men from '../images/men.jpg'
import women from '../images/women.jpg'
// import kids from '../images/kids.jpg'
import '../css/MainProducts.css'
function MainProducts() {
    let history = useHistory()

    const goToMen = () => {
        history.push('/all/men')
    }
    const goToWomen = () => {
        history.push('/all/women')
    }
    return (
        <div className="main__products">
            <div className="product men">
                
                <img onClick={goToMen} src={men} alt=""/>
                <Link to='/all/men'>men</Link>
            </div>
            <div className="product women">
                <img onClick={goToWomen} src={women} alt=""/>
                <Link to='/all/women'>women</Link>
            </div>
            {/* <div className="product kids">
                <img src={kids} alt=""/>
                <Link to='men'>kids</Link>
            </div> */}
        </div>
    )
}

export default MainProducts
