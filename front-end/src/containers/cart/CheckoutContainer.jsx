import React from 'react'

import ShoppingCart from './ShoppingCart'
import OrderForm from '../../components/cart/OrderForm'

const CheckoutContainer = ({ totalOrderPrice, setTotalOrderPrice }) => {
  return (
    <div className='container'>
      <OrderForm
        totalOrderPrice={totalOrderPrice}
        setTotalOrderPrice={setTotalOrderPrice}
      />
      <ShoppingCart
        totalOrderPrice={totalOrderPrice}
        setTotalOrderPrice={setTotalOrderPrice}
      />
    </div>
  )
}

export default CheckoutContainer
