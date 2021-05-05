import React, {useState, useRef} from 'react'
import MainProducts from './MainProducts'
import Process from './Process'
import Showcase from './ShowCase'
import Suggested from './Suggested'
import Testimonials from './Testimonials'
import Trending from './Trending'
import './css/Landing.css'
function Landing() {
    
    return (
        <div className="landing">
            <Showcase />
            <MainProducts />
            <div className="title">
                <h2>Trending</h2>
            </div>
            <Trending />
            <Testimonials />
            <div className="title">
                <h2>You may like</h2>
            </div>
            <Suggested />            
            <Process />
        </div>
    )
}

export default Landing
