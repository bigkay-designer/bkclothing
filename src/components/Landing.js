import React from 'react'
import MainProducts from './MainProducts'
import Showcase from './ShowCase'
import Testimonials from './Testimonials'
import Trending from './Trending'
function Landing() {
    return (
        <div className="landing">
            <Showcase />
            <MainProducts />
            <Trending />
            <Testimonials />
        </div>
    )
}

export default Landing
