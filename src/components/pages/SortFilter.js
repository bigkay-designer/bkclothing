import React, {useState, useRef} from 'react'
import {select, gender, productType, brand} from './SortFilterData.json'
import {Button} from '@material-ui/core'
import { Add, Close, Sort, Remove } from '@material-ui/icons'
import '../css/SortFilter.css'
function SortFilter() {
    const [openFilter, setOpenFilter] = useState(false)
    const [genderEle, setGenderEle] = useState(false)
    const [productTypeEle, setProductTyprEle] = useState(false)
    const [brandEle, setBrandEle] = useState(false)

    /// filter states
    const [chosenOption, setChosenOption] = useState([])
    let unique = [...new Set(chosenOption)]
    const inputChecked = useRef([])
    inputChecked.current = brand.map(
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
    const chosenOptionHandler = (e, index) => {
        // console.log()       
        if (e.target.nodeName === 'SPAN') {
            return setChosenOption([...chosenOption, e.target.previousSibling.innerHTML])
        } else if(e.target.nodeName == "P"){
            return setChosenOption([...chosenOption, e.target.innerHTML])
        }
        else{
            return null
        }
    }

   const inputChosenOptionHandler = (e, index, title) => {
        if (e.target.nodeName === 'INPUT' && inputChecked.current[index].current.checked === true){
            return setChosenOption([...chosenOption, e.target.value])
        }else if (e.target.nodeName === 'INPUT' && inputChecked.current[index].current.checked === false) {
            let removeArr = unique.filter((elm) => elm !== title)
            setChosenOption(removeArr)
        }else{
            return null
        }
    }
    
    const removeChosenOptionHandler = (title, index) => {
        let removeArr = unique.filter(elm => elm !== title)
        setChosenOption(removeArr)
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
                        {unique.map((data, index)=>(
                            <div onClick={() => removeChosenOptionHandler(data, unique.length) } className="body__content" key={index}>
                                <p>{data}</p>
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
                            <div className="title" onClick={()=> setGenderEle(!genderEle)} >
                                <h3>gender</h3>
                                <Add className={`${genderEle && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${genderEle && "show__remove__icon"}`} />
                            </div>
                            <div className={`body ${genderEle && "show__body"}`}>
                                {gender.map((data, index)=>(
                                    <div onClick={(e)=> chosenOptionHandler(e, index)} className="body__content" key={index}>
                                        <p>{data.title}</p>
                                        <span>({data.quantity})</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product__type filter__options">
                            <div className="title" onClick={() => setProductTyprEle(!productTypeEle)} >
                                <h3>product type</h3>
                                <Add className={`${productTypeEle && "show__add__icon" }`} />
                                <Remove className={`remove__icon ${productTypeEle && "show__remove__icon"}`} />

                            </div>
                            <div className={`body ${productTypeEle && "show__body"}`}>
                                {productType.map((data, index)=> (
                                    <div onClick={(e)=> chosenOptionHandler(e, index)}  className="body__content" key={index}>
                                        <p>{data.title}</p>
                                        <span>({data.quantity})</span>
                                    </div>

                                ))}
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
                                    {brand.map((data, index)=>(
                                        <div className="input" key={index}>
                                            <input onClick={(e)=> inputChosenOptionHandler(e, index, data.title)} type="checkbox" ref={inputChecked.current[index]} name={data.title} value={data.title}/>
                                            <label className="label" htmlFor="adidas"> {data.title} </label>
                                            <span> ({data.quantity})</span>
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
