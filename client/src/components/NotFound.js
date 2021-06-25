import React from 'react'
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'
import './css/notFound.css'
function NotFound() {
    let history = useHistory()
    return (
        <div className="not__found">
           <div className="container">
               <h1>404</h1>
               <h3>oops, this page is not found !</h3>
               <div className="btn">
                   <Button onClick={()=> history.push('/')}>
                       go back home
                   </Button>
               </div>
           </div>
        </div>
    )
}

export default NotFound
