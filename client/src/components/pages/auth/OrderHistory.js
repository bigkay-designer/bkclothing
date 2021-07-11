import React, {useState, useEffect} from 'react'

function OrderHistory({data}) {
    
        useEffect(()=> {
            console.log(data)
        }, [])
    return (
        <div className="order__history__comp">
            <div className="container">

            </div>
        </div>
    )
}

export default OrderHistory
