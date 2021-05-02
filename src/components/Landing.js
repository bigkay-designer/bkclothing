import React from 'react'
import MainProducts from './MainProducts'
import Showcase from './ShowCase'
import Trending from './Trending'
function Landing() {
    return (
        <div className="landing">
            <Showcase />
            <MainProducts />
            <Trending />
        </div>
    )
}

export default Landing
