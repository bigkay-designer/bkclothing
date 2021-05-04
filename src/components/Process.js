import React from 'react'
import shipped from './images/shipped.png'
import creditCard from './images/credit-card.png'
import moneyBack from './images/money-back.png'
import service from './images/service.png'
import './css/Process.css'
function Process (){
    return (
        <div className="process">
            <div className="container">
                <div className="content">
                    <div className="icon">
                        <img src={shipped} alt="shipping svg"/>
                    </div>
                    <div className="body">
                        <h3>Fast & free Delivery </h3>
                        <p>Free delivery on all orders over £20</p>
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src={creditCard} alt="payment svg"/>
                    </div>
                    <div className="body">
                        <h3>secure payment</h3>
                        <p>Free delivery on all orders over £20</p>
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src={moneyBack} alt="monyback svg"/>
                    </div>
                    <div className="body">
                        <h3>money back gurentee</h3>
                        <p>Free delivery on all orders over £20</p>
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src={service} alt="service svg"/>
                    </div>
                    <div className="body">
                        <h3>online support</h3>
                        <p>Free delivery on all orders over £20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process