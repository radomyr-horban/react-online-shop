import React, { useContext } from 'react'

import { CartContext } from '../../App'

const CheckoutBox = ({ totalOrderPrice }) => {
  const { cart } = useContext(CartContext)

  return (
    <div className='checkout'>
      <p id='total-price'>
        Total price: <span>{totalOrderPrice} $</span>
      </p>
      <input
        type='submit'
        value='Submit'
        form='userInfo'
        id='submit-btn'
        disabled={cart.length ? false : true}
      />
    </div>
  )
}

export default CheckoutBox
