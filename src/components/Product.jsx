import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,rating,price,img}) {
    const[state,dispatch] = useStateValue();
    const addToBasket = ()=>{
         dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                title : title,
                image :img,
                price : price,
                rating : rating,
            }
         })
    }
  return (      
        <div className="product">
            <div className="product_Info">
                <p className="title">{title}</p>
                <p className="product_Price"><small>&#8377;</small><strong>{price}</strong></p>
                <div className="product_Rating">
                    {Array(rating)
                    .fill()
                    .map((r,index)=>(
                    <p key = {index} className='rate'>&#9733;</p>
                    ))
                    }
                </div>
            </div>
            <img src = {img} alt='' />
            <button onClick={addToBasket}> Add To Basket</button>
        </div>
    
  )
}

export default Product