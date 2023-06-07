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
      <img src={require(`../../assets/img/${img}`)} alt={name} />
      <div className='cart-item-box-info'>
        <i onClick={removeItem} className='bi bi-x-lg'></i>
        <p>{name}</p>
        <div>
          <span className='price'>{price}</span>
          <span>$</span>
        </div>
        <input
          id={`input-${id}`}
          type='number'
          min='1'
          value={itemQuantity}
          className='cart-item-quantity'
          name='cart-item'
          onChange={(e) => handleItemChange(e)}
          form='userInfo'
        />
      </div>
    </div>
  )
}

export default CartItem
