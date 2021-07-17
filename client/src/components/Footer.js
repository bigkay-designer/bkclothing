import { Storefront } from '@material-ui/icons'
import React from 'react'
import './css/Footer.css'
function Footer() {
    return (
        <div className="footer">
            <footer className="container">
                <div className="logo">
                    <Storefront />
                    <h3>bkclothing</h3>
                </div>
                <div className="group">
                    <section className="section__men content">
                        <h3>Shop men</h3>
                        <ul>
                            <li>clothing fashion</li>
                            <li>winter</li>
                            <li>summer</li>
                            <li>formal</li>
                        </ul>
                    </section>
                    <section className="section__women content">
                        <h3>Shop women</h3>
                        <ul>
                            <li>clothing fashion</li>
                            <li>winter</li>
                            <li>summer</li>
                            <li>formal</li>
                        </ul>
                    </section>
                    <section className="section__baby content">
                        <h3>Baby collection</h3>
                        <ul>
                            <li>clothing fashion</li>
                            <li>winter</li>
                            <li>summer</li>
                            <li>formal</li>
                        </ul>
                    </section>
                    <section className="other__links content">
                        <h3>quick links content</h3>
                        <ul>
                            <li>clothing fashion</li>
                            <li>winter</li>
                            <li>summer</li>
                            <li>formal</li>
                        </ul>
                    </section>
                </div>
                <section className="copyright">
                    <p>Copyright ©2021 All rights reserved | made with love by <a href="https://bkdesignplus.com/" target="_blank" rel="noreferrer">bkdesignplus</a></p>
                </section>
            </footer>
            
        </div>
    )
}

export default Footer
