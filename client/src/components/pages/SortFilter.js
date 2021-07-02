import React, {useState, useRef, useContext} from 'react'
import {select, productBrand} from './SortFilterData.json'
import {Button} from '@material-ui/core'
import { Add, Close, Sort, Remove } from '@material-ui/icons'
import '../css/SortFilter.css'
import { FilterContext } from '../contextApi/filterContext'
function SortFilter() {
    const [openFilter, setOpenFilter] = useState(false)
    const [productNameElm, setProductNameElm] = useState({
        state: false,
        title: "productName"
    })
    // const [productTypeEle, setProductTyprEle] = useState(false)
    const [brandEle, setBrandEle] = useState(false)
    ////////
    const {filter, dispatch} = useContext(FilterContext)
    let uniqueName = [...new Set(filter.productName.map(item => item))]
    let uniqueRand = [...new Set(filter.productBrand.map(item => item))]
    /// filter states
    const inputChecked = useRef([])
    inputChecked.current = productBrand.map(
        (ref, index)=> inputChecked.current[index] = React.createRef()
    )

    const openFilterHandler = ()=>{
        setTimeout(()=>{
            setOpenFilter(true)
            document.body.style.overflowY = "hidden"
        }, 200)
    }
    const closeFilterHandler = ()=>{
        setTimeout(()=>{
            setOpenFilter(false)
            document.body.style.overflowY = "scroll"
        }, 200)
    }

    ////

    let productTitle = {
        productName:["skirt", 'jacket'],
        productBrand:["boohoo", 'gucci', 'adidas', 'nike'],

    }

    // handlers

    // const chooseFilterHandler = (e) => {
    //     dispatch({
    //         type: "CHOSEN_OPTION_NAME",
    //         filter:e.target.innerText
    //     })
    // }
    const inputChosenOptionHandler = (e, index, filter) => {
        if (e.target.nodeName === 'INPUT' && inputChecked.current[index].current.checked === true){
            return dispatch({type: "CHOSEN_OPTION_BRAND", filter:e.target.value})
        }else if (e.target.nodeName === 'INPUT' && inputChecked.current[index].current.checked === false) {
            dispatch({type: 'REMOVE_CHOSEN_OPTION_BRAND', filter})
        }else{
            return null
        }
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
                    <Close className="close__icons" onClick={closeFilterHandler} />
                </div>
                <div className="wrapper">
                    <div className="chosen__options">
                        {uniqueName.map((filter, index)=>(
                            <div onClick={() => dispatch({type: 'REMOVE_CHOSEN_OPTION', filter}) } className="body__content" key={index}>
                                <p>{filter}</p>
                                <Close />
                            </div>
                        ))}
                        {uniqueRand.map((filter, index)=>(
                            <div onClick={() => dispatch({type: 'REMOVE_CHOSEN_OPTION_BRAND', filter}) } className="body__content" key={index}>
                                <p>{filter}</p>
                                <Close />
                            </div>
                        ))}
                        
                    </div>
                    <div className="sort">
                        <h3>sort by</h3>
                        <div className="options">
                            <select className="select" name="sort">
                                {select.optionNames.map((optionName, index)=>(
                                    <option value={optionName} key={index}>{optionName}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="filter">
                        <h3>filter by</h3>
                        <div className="gender filter__options">
                            <div className="title" onClick={()=> setProductNameElm({...productNameElm, state: !productNameElm.state})} >
                                <h3>product name</h3>
                                <Add className={`${productNameElm.state && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${productNameElm.state && "show__remove__icon"}`} />
                            </div>
                            <div className={`body ${productNameElm.state && "show__body"}`}>
                                {productTitle.productName.map((data, index)=>(
                                    <div value="productName" className="body__content" key={index}>
                                        <p onClick={(e) => dispatch({type:"CHOSEN_OPTION_NAME", filter:e.target.innerText})} ><span>{data}</span><span>(3848)</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="brand filter__options">
                            <div className="title" onClick={()=> setBrandEle(!brandEle)} >
                                <h3>product brand</h3>
                                <Add className={`${brandEle && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${brandEle && "show__remove__icon"}`} />

                            </div>
                            <div className={`body ${brandEle && "show__body"}`}>
                                <form>
                                    {productTitle.productBrand.map((data, index)=>(
                                        <div className="input" key={index}>
                                            <input onClick={(e)=> inputChosenOptionHandler(e, index, data)} type="checkbox" ref={inputChecked.current[index]} name={data} value={data}/>
                                            <label className="label" htmlFor="adidas"> {data} </label>
                                            <span> (298)</span>
                                        </div>
                                    ))}
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
