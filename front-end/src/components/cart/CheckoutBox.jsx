import React, { useContext } from 'react'

import { CartContext } from '../../App'

const CheckoutBox = ({ totalOrderPrice }) => {
  const { cart } = useContext(CartContext)

  return (
    <div className='checkout-panel'>
      <p id='total-price'>
        Total price: <span>{totalOrderPrice} $</span>
      </p>
      <input
        type='submit'
        form='userInfo'
        id='submit-btn'
        disabled={cart.length ? false : true}
        readOnly
      />
    </div>
  )
}

export default CheckoutBox
