import React from 'react'
import MainProducts from './MainProducts'
import Process from './Process'
import Showcase from './ShowCase'
import Suggested from './Suggested'
import Testimonials from './Testimonials'
import Trending from './Trending'
function Landing() {
    return (
        <div className="landing">
            <Showcase />
            <MainProducts />
            <Trending />
            <Testimonials />
            <Suggested />
            <Process />
        </div>
    )
}

export default Landing
