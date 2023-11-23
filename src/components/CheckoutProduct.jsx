import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image,id,title,rating,price}) {
  const [{basket},dispatch] = useStateValue()
  const removeBasket = ()=>{
    dispatch({
      type : "Remove_Basket",
      id:id,
    })
  }
  return (
    <div className='CheckoutProduct'>
      <img src= {image} alt="" className="checkout_Img" />
      <div className="product_Info">
        <p className='productTitle'>{title}</p>
        <p className='productPrice'><small>&#8377;</small> <strong>{price}</strong></p>
        <div className="productRating">{
          Array(rating)
          .fill()
          .map((r,index)=>(
            <p key={index}>&#9733;</p>
          ))
        }</div>
        <button onClick={removeBasket}>Remove From Basket</button>

      </div>

    </div>
  )
}

export default CheckoutProduct