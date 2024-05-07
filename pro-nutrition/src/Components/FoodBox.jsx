import React, { useState } from 'react'

const FoodBox = (props) =>{
    let {data,index} = props
    let {cal,id,img,name} = data

    const[input,setInput] = useState(0)
    const[quantity,setQuantity] = useState(0)

    const quantityHandler=()=>{
        setQuantity(input)
    }

    return(
        <div className='foodbox-main' key={index}>
            {/* left section */}
            <div className="foodbox-main-left">
                <img src={img} alt="" />
                <div className="foodbox-main-left-1">
                    <h1>{name}</h1>
                    <h2>{cal}</h2>
                </div>
                <div className="foodbox-main-left-2">
                    <input type="number" min={0} onChange={(e)=>{
                        setInput(e.target.value)
                    }} value={input}/>
                    <button className='add' onClick={quantityHandler}>+</button>
                </div>
            </div>
            <div className="foodbox-main-right">
                <h4> {name} &times; {quantity} = {quantity * cal} calories</h4>
                <button className='reset' onClick={()=>{
                    setQuantity(0)
                    setInput(0)
                }}>R E S E T</button>
            </div>
        </div>
    )
}

export default FoodBox