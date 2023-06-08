import React, { useContext, useState } from 'react'

import { CartContext } from '../../App'
import calculateTotalAmount from '../../utils/calculateTotalAmount'
import getTotalCartItems from '../../utils/calculateTotalCartItemsQuantity'

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
      totalOrderPrice
    }

    const response = await fetch(
      `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/cart` ||
        'http://localhost:4000/cart',
      {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setUserName('Your name')
      setUserEmail('Your email')
      setUserPhone('Your phone')
      setUserAddress('Your address')
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
        className='order-form-container'
        id='userInfo'
        onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          name='name'
          onChange={(e) => setUserName(e.target.value)}
          placeholder={userName}
          required
          type='text'
        />

        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder={userEmail}
          required
          type='email'
        />

        <label htmlFor='phone'>Phone:</label>
        <input
          id='phone'
          name='phone'
          onChange={(e) => setUserPhone(e.target.value)}
          placeholder={userPhone}
          required
          type='tel'
        />

        <label htmlFor='address'>Address:</label>
        <input
          id='address'
          name='address'
          onChange={(e) => setUserAddress(e.target.value)}
          placeholder={userAddress}
          required
          type='text'
        />
      </form>
      {error && <div>{error}</div>}
    </>
  )
}

export default OrderForm
