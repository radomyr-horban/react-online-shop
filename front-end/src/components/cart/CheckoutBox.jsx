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
        disabled={cart.length ? false : true}
        form='userInfo'
        id='submit-btn'
        readOnly
        type='submit'
      />
    </div>
  )
}

export default CheckoutBox
