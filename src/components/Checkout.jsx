import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
import './Checkout.css'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{basket},dispatch] = useStateValue()
  return (
    <div className='checkout'>
        <div className="chechout_Left">
            <img src="https://as1.ftcdn.net/v2/jpg/03/58/21/68/1000_F_358216841_QgPzTCBgijR2hAzGLcVyCopJusvUVcfl.jpg" alt="" className="chechout_Ad" />
            <h2 className='checkout_Title'> Your Shopping Basket</h2>
            <hr/>
            {
              basket.map((item)=><CheckoutProduct id= {item.id} title={item.title} image ={item.image} price ={item.price} rating = {item.rating} />)
            }

        </div>
        <div className="chechout_Right">
            <SubTotal/>
        </div>
    </div>
  )
}

export default Checkout