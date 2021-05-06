import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ProductDetail.css'
function ProductDetail() {
    return (
        <div className="product__detail">
            <div className="product__title">
                <h3>product name</h3>
                <Link>category</Link>
            </div>  
            <div className="product__container">
                <div className="img">
                    <div className="default__img">
                        <img src="https://images.pexels.com/photos/2473710/pexels-photo-2473710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    </div>
                    <div className="img__container">
                        <div className="display__img">
                            <img src="https://images.pexels.com/photos/2473710/pexels-photo-2473710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        </div>
                        <div className="display__img">
                            <img src="https://images.pexels.com/photos/2473710/pexels-photo-2473710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        </div>
                        <div className="display__img">
                            <img src="https://images.pexels.com/photos/2473710/pexels-photo-2473710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <p>£129.99 <span>VAT included</span></p>
                </div>
                <div className="size__options">
                    <select name="size">
                        <option value="eu">eu</option>
                        <option value="us">us</option>
                        <option value="uk">uk</option>
                    </select>
                </div>
                <form>
                    <fieldset className="fieldset">
                        <legend className="legend__hidden" >select a size</legend>
                        <div className="fieldset__group">
                            <label htmlFor="xs">xs</label>
                            <input id="xs" type="radio" name="xs" required value="xs" />
                        </div>
                        <div className="fieldset__group">
                            <label htmlFor="xl">xl</label>
                            <input id="xl" type="radio" name="xl" required value="xl" />
                        </div>
                        <div className="fieldset__group">
                            <label htmlFor="xxl">xxl</label>
                            <input id="xxl" type="radio" name="xxl" required value="xxl" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ProductDetail
