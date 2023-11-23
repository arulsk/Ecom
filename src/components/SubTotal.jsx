import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './SubTotal.css'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
function SubTotal() {
  const [{basket},dispatch] = useStateValue()
  return (
    <div className='subTotal'>
   <CurrencyFormat renderText={(value) => (
    <>
    <p>
        SubTotal ({basket.length} items) : <strong>&#8377; {value}</strong>
    </p>
    <small className='subtotal_gift'>
        <input type='checkbox'/> This order contains a gift
    </small>
    </>
   )} 
   decimalScale={2}
   value = {getBasketTotal(basket)}
   displayType = "text"
   thousandSeparator = {true}
   
   />
   <button>Product to Checkout</button>
    </div>
  )
}

export default SubTotal