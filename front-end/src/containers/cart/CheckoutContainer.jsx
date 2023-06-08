import React from 'react'

import ShoppingCart from './ShoppingCart'
import OrderForm from '../../components/cart/OrderForm'

const CheckoutContainer = ({ totalOrderPrice, setTotalOrderPrice }) => {
  return (
    <div className='checkout-container'>
      <OrderForm
        setTotalOrderPrice={setTotalOrderPrice}
        totalOrderPrice={totalOrderPrice}
      />
      <ShoppingCart
        setTotalOrderPrice={setTotalOrderPrice}
        totalOrderPrice={totalOrderPrice}
      />
    </div>
  )
}

export default CheckoutContainer
