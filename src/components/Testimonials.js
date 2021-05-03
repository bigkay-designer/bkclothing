import React, {useState, useRef} from 'react'
import {ArrowBackIos, ArrowForwardIos, EmojiEmotions, Star} from '@material-ui/icons'

import './css/Testimonials.css'
import { Button } from '@material-ui/core'

function Testimonials (){
    const [itemsLength, setItemsLength] = useState()
    const relElement = useRef(null)
    let count = 1;
    const scrollRightHandler = (moveRight) =>{
        setTimeout(()=>{
            relElement.current.scrollLeft += moveRight
        }, 200)
    }

    const scrollLeftHandler = (moveLeft) =>{
        setItemsLength(relElement.current.children[0].children.length)
        count = count + 1

        if(count >= itemsLength){
            count = 0;
            return relElement.current.scrollLeft = 0
        }else{
            setTimeout(()=>{
                relElement.current.scrollLeft += moveLeft
            }, 200)
        }
    }
    return (
        <div className="testimonials">
                <div className="title">
                    <h2>Testimonials</h2>
                    <div className="icon__div">
                        <Star className="star__icon" />
                        <Star className="star__icon" />
                        <Star className="star__icon" />
                        <Star className="star__icon" />
                        <Star className="star__icon" />
                    </div>
                </div>
               <div className="container" ref={relElement}>
                   <div className="wrapper">
                    <div className="content">
                        <div className="icon__div">
                            <EmojiEmotions className="icon" />
                        </div>
                        <div className="body">
                            <h3>Khalid Fuad</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae consequatur delectus esse dolores eum veniam illum velit exercitationem culpa.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon__div">
                            <EmojiEmotions className="icon" />
                        </div>
                        <div className="body">
                            <h3>jamil salah</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae consequatur delectus esse dolores eum veniam illum velit exercitationem culpa.</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="icon__div">
                            <EmojiEmotions className="icon" />
                        </div>
                        <div className="body">
                            <h3>abdi ahmed</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae consequatur delectus esse dolores eum veniam illum velit exercitationem culpa.</p>
                        </div>
                    </div>
                   </div>
               </div>
               <div className="nav__btn">
                   <div onClick={()=> scrollRightHandler(-365)} className="btn">
                       <ArrowBackIos className="icon" />
                       <Button className="prev">Prev</Button>
                   </div>
                   <div onClick={()=> scrollLeftHandler(365)} className="btn">
                       <Button className="next">next</Button>
                       <ArrowForwardIos className="icon" />
                   </div>
               </div>
        </div>
    )
}

export default Testimonials

