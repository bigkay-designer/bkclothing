import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'
import '../../css/canceled.css'
import { Cancel } from '@material-ui/icons'
function Canceled() {
    let history = useHistory()

    useEffect(()=> {
        sessionStorage.removeItem('stripe_session_id')
    }, [])
    return (
        <div className="canceled">
            <div className="container">
                <div className="canceled__icon">
                    <Cancel />
                </div>
                <h2>payment not processed</h2>
                <div className="btn">
                    <Button onClick={()=> history.push('/')}>
                    Continue shopping
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Canceled
