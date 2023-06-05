import React, { useContext, useState } from 'react'

import CheckoutBox from '../components/cart/CheckoutBox'
import CheckoutContainer from '../containers/cart/CheckoutContainer'
import calculateTotalAmount from '../services/calculateTotalAmount'
import { CartContext } from '../App'

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [totalOrderPrice, setTotalOrderPrice] = useState(
    calculateTotalAmount(cart)
  )

  return (
    <>
      <CheckoutContainer
        totalOrderPrice={totalOrderPrice}
        setTotalOrderPrice={setTotalOrderPrice}
      />
      <CheckoutBox
        totalOrderPrice={totalOrderPrice}
        setTotalOrderPrice={setTotalOrderPrice}
      />
    </>
  )
}

export default Cart
