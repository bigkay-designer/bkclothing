import React, {useState, useRef} from 'react'
import item1 from './images/trending1.jpg'
import item2 from './images/trending2.jpg'
import item3 from './images/trending3.jpg'
import {ArrowForwardIos, ArrowBackIos} from '@material-ui/icons'
import './css/Trending.css'
function Trending() {
    const relElement = useRef(null)
    const [itemsLength, setItemsLength] = useState()
    let count = 1
    const scrollRightHandler = (moveright) =>{
        setTimeout(()=>{
            relElement.current.scrollLeft += moveright
        }, 200)
    }
    const scrollLeftHandler = (moveleft) =>{
        count = count + 1
        setItemsLength(relElement.current.children[0].children.length)

        if(count >= itemsLength){
            count = 0
            return relElement.current.scrollLeft = 0
        }else{
            setTimeout(()=>{
                return relElement.current.scrollLeft += moveleft
            }, 200)
        }

    }
    return (
        <div className="trending">
            <div className="title">
                <h2>Trending This Week</h2>
            </div>
            <div className="arrows">
                <div onClick={()=> scrollRightHandler(-372)} className="arrow2">
                    <ArrowBackIos className="icon" />
                </div>
                <div onClick={()=> scrollLeftHandler(372)}  className="arrow1">
                    <ArrowForwardIos className="icon" />
                </div>
            </div>
            <div className="wrapper" ref={relElement}>
                <div className="container" >
                    <div className="item">
                        <div className="img">
                            <img src={item1} alt=""/>
                        </div>
                        <div className="body">
                            <p>Gucci jacket</p>
                            <p>£98.00</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={item2} alt=""/>
                        </div>
                        <div className="body">
                            <p>Addidas hat</p>
                            <p>£8.00</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={item3} alt=""/>
                        </div>
                        <div className="body">
                            <p>Hoodie</p>
                            <p>£129.00</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={item3} alt=""/>
                        </div>
                        <div className="body">
                            <p>Hoodie</p>
                            <p>£129.00</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={item2} alt=""/>
                        </div>
                        <div className="body">
                            <p>Addidas hat</p>
                            <p>£8.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
