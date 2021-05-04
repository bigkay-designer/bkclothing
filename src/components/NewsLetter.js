import { Button } from '@material-ui/core'
import { Facebook, Instagram, YouTube } from '@material-ui/icons'
import React from 'react'
import './css/NewsLetter.css'
function NewsLetter() {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="title">
                    <h2>subscribe newsletter</h2>
                    <p>Subscribe newsletter to get 20% on all products.</p>
                </div>
                <div className="input">
                    <form >
                        <input type="email" required placeholder="Enter your email"/>
                        <Button>subscribe</Button>
                    </form>
                </div>
                <div className="socials">
                    <Facebook  className="icon" />
                    <Instagram  className="icon" />
                    <YouTube  className="icon" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
