import React, { useContext, useState } from 'react'

import { CartContext } from '../../App'
import calculateTotalAmount from '../../services/calculateTotalAmount'
import getTotalCartItems from '../../services/getTotalCartItems'

const OrderForm = ({ totalOrderPrice, setTotalOrderPrice }) => {
  const { cart, setCart, setTotalCartItems } = useContext(CartContext)

  const [userName, setUserName] = useState('Your name')
  const [userEmail, setUserEmail] = useState('Your email')
  const [userPhone, setUserPhone] = useState('Your phone')
  const [userAddress, setUserAddress] = useState('Your address')

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const orderData = {
      userName,
      userEmail,
      userPhone,
      userAddress,
      userOrder: cart,
      totalOrderPrice: totalOrderPrice,
    }

    const response = await fetch(
      `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/cart` ||
        'http://localhost:4000/cart',
      {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setUserName('')
      setUserEmail('')
      setUserPhone('')
      setUserAddress('')
      setError(null)
      console.log('Order was sent', json)
    }

    if (cart.length) {
      alert('Thank you for your purchase!')
      const updatedCart = []
      localStorage.setItem('cart', JSON.stringify(cart))

      setCart(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      setTotalCartItems(getTotalCartItems(updatedCart))
      setTotalOrderPrice(calculateTotalAmount(updatedCart))
    }

    e.target.reset()
  }

  return (
    <>
      <form
        action='/cart'
        className='flexbox-form'
        id='userInfo'
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name:</label>
        <input
          required
          type='text'
          id='name'
          name='name'
          placeholder={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor='email'>Email:</label>
        <input
          required
          type='email'
          id='email'
          name='email'
          placeholder={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label htmlFor='phone'>Phone:</label>
        <input
          required
          type='tel'
          id='phone'
          name='phone'
          placeholder={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />

        <label htmlFor='address'>Address:</label>
        <input
          required
          type='text'
          id='address'
          name='address'
          placeholder={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />

        <input type='text' id='user-order' name='user_order' value='' />
      </form>
      {error && <div>{error}</div>}
    </>
  )
}

export default OrderForm
