import React, { useContext, useState } from 'react'

import CheckoutBox from '../components/cart/CheckoutBox'
import CheckoutContainer from '../containers/cart/CheckoutContainer'
import calculateTotalAmount from '../utils/calculateTotalAmount'
import { CartContext } from '../App'

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [totalOrderPrice, setTotalOrderPrice] = useState(
    calculateTotalAmount(cart)
  )

  return (
    <>
      <CheckoutContainer
        setTotalOrderPrice={setTotalOrderPrice}
        totalOrderPrice={totalOrderPrice}
      />
      <CheckoutBox
        setTotalOrderPrice={setTotalOrderPrice}
        totalOrderPrice={totalOrderPrice}
      />
    </>
  )
}

export default Cart
