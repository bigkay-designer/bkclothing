import React, {useRef} from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import {ArrowForwardIos, ArrowBackIos} from '@material-ui/icons'
import LandingProductItems from './LandingProductItems'
import item1 from '../images/trending1.jpg'
import item2 from '../images/trending2.jpg'
import item3 from '../images/trending3.jpg'
import '../css/LandingProducts.css'
function Trending({leftArrow, rightArrow, refEle}) {
    
    const relElement = useRef(null)
    console.log(relElement.current)

    const RightArrowHandler = (moveRight) =>{
        setTimeout(() => {
            return relElement.current.container.current.scrollLeft += moveRight
        }, 200);
    }
    const leftArrowHandler = (moveLeft) =>{
        setTimeout(() => {
            return relElement.current.container.current.scrollLeft += moveLeft
        }, 200);
    }

    return (
        <div className="wrapper">
            <div onClick={()=> leftArrowHandler(372)}  className="arrow1">
                <ArrowForwardIos className="icon" />
            </div>
        
            <ScrollContainer className="trending landing__product" ref={relElement}>
                <div className="container">
                    <LandingProductItems 
                        productName="Gucci Jacket"
                        productPrice="£98.00"
                        image={item3}
                    />
                    <LandingProductItems 
                        productName="Hoodie"
                        productPrice="£98.00"
                        image={item2}
                    />
                    <LandingProductItems 
                        productName="Glasses"
                        productPrice="£29.00"
                        image={item1}
                    />
                    <LandingProductItems 
                        productName="Glasses"
                        productPrice="£29.00"
                        image={item3}
                    />
                    <LandingProductItems 
                        productName="Glasses"
                        productPrice="£29.00"
                        image={item3}
                    />
                </div>
            </ScrollContainer>
            <div onClick={()=> RightArrowHandler(-372)} className="arrow2">
                <ArrowBackIos className="icon" />
            </div>
        </div>
    )
}

export default Trending
