import React, { useContext, useState, useEffect } from 'react'

import { CartContext } from '../../App'
import getTotalCartItems from '../../utils/calculateTotalCartItemsQuantity'
import calculateTotalAmount from '../../utils/calculateTotalAmount'

const CartItem = ({ data, setTotalOrderPrice }) => {
  const { id, name, price, img, quantity } = data
  const { cart, setCart, setTotalCartItems } = useContext(CartContext)
  const [itemQuantity, setItemQuantity] = useState(quantity)

  useEffect(() => {
    updateCart()
  }, [itemQuantity])

  const updateCartAndTotal = (updatedCart) => {
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setTotalCartItems(getTotalCartItems(updatedCart))
    setTotalOrderPrice(calculateTotalAmount(updatedCart))
  }

  const updateCart = () => {
    const updatedCart = cart.map((item) => {
      return item.id === id ? { ...item, quantity: itemQuantity } : item
    })
    updateCartAndTotal(updatedCart)
  }

  const removeItem = () => {
    const updatedCart = cart.filter((item) => item.id !== id)
    updateCartAndTotal(updatedCart)
  }

  const handleItemChange = (e) => {
    let newValue = parseInt(e.target.value)
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1
    }
    setItemQuantity(newValue)
  }

  return (
    <div className='cart-item-box' id={id} key={id}>
      <img alt={name} src={require(`../../assets/img/${img}`)} />
      <div className='cart-item-box-info'>
        <i className='bi bi-x-lg' onClick={removeItem}></i>
        <p>{name}</p>
        <div>
          <span className='price'>{price}</span>
          <span>$</span>
        </div>
        <input
          className='cart-item-quantity'
          form='userInfo'
          id={`input-${id}`}
          min='1'
          name='cart-item'
          onChange={(e) => handleItemChange(e)}
          type='number'
          value={itemQuantity}
        />
      </div>
    </div>
  )
}

export default CartItem
