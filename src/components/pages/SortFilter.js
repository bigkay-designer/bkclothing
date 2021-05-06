import React, {useState, useRef} from 'react'
import {Button} from '@material-ui/core'
import { Add, Close, Sort, Remove } from '@material-ui/icons'
import '../css/SortFilter.css'
function SortFilter() {
    const [openFilter, setOpenFilter] = useState(false)
    const [genderEle, setGenderEle] = useState(false)
    const [productTypeEle, setProductTyprEle] = useState(false)
    const [brandEle, setBrandEle] = useState(false)

    const openFilterHandler = ()=>{
        setTimeout(()=>{
            setOpenFilter(true)
        }, 200)
    }
    return (
        <div className="sort__filter">
            <div onClick={openFilterHandler} className="sort__filter--btn">
                <Sort />
                <Button>Filter & Sort</Button>

            </div>
            <div className={`container ${openFilter && "show__filter__container"}`}>
                <div className="sub__title">
                    <h3>Filter & Sort</h3>
                    <Close className="close__icons" onClick={()=> setOpenFilter(false)} />
                </div>
                <div className="wrapper">
                    <div className="sort">
                        <h3>sort by</h3>
                        <div className="options">
                            <select className="select" name="sort">
                                <option value="initialResult">initial Result</option>
                                <option value="Alphabetical">Alphabetical (A-Z) </option>
                                <option value="newArrivals">new Arrivals</option>
                                <option value="priceLow">price (low to high) </option>
                                <option value="priceHigh">price (high to low) </option>
                                <option value="brand">brand names (A-Z)</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter">
                        <h3>filter by</h3>
                        <div className="gender filter__options">
                            <div className="title" onClick={()=> setGenderEle(!genderEle)} >
                                <h3>gender</h3>
                                <Add className={`${genderEle && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${genderEle && "show__remove__icon"}`} />
                            </div>
                            <div className={`body ${genderEle && "show__body"}`}>
                                <p>men <span>(2000)</span> </p>
                                <p>women <span>(1879)</span> </p>
                            </div>
                        </div>
                        <div className="product__type filter__options">
                            <div className="title" onClick={() => setProductTyprEle(!productTypeEle)} >
                                <h3>product type</h3>
                                <Add className={`${productTypeEle && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${productTypeEle && "show__remove__icon"}`} />

                            </div>
                            <div className={`body ${productTypeEle && "show__body"}`}>
                                <p>shoes <span>(2980)</span> </p>
                                <p>clothing <span>(3400)</span> </p>
                                <p>Accessories <span>(1745)</span> </p>
                            </div>
                        </div>
                        <div className="brand filter__options">
                            <div className="title" onClick={()=> setBrandEle(!brandEle)} >
                                <h3>brand</h3>
                                <Add className={`${brandEle && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${brandEle && "show__remove__icon"}`} />

                            </div>
                            <div className={`body ${brandEle && "show__body"}`}>
                                <form>
                                    <div className="input">
                                        <input type="checkbox" name="adidas"/>
                                        <label className="label" htmlFor="adidas">adidas (1293)</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" name="jordan"/>
                                        <label className="label" htmlFor="jordan">jordan (143)</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" name="gucci"/>
                                        <label className="label" htmlFor="gucci">gucci (1393)</label>
                                    </div>
                                    <div className="input">
                                        <input type="checkbox" name="nike"/>
                                        <label className="label" htmlFor="nike">nike (1293)</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="done__btn">
                    <Button className="clear__all">clear all</Button>
                    <Button className="done">done</Button>
                </div>
            </div>
        </div>
    )
}

export default SortFilter
