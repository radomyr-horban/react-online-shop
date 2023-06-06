import React, { useContext, useState } from 'react'

import { CartContext } from '../../App'
import getTotalCartItems from '../../services/getTotalCartItems'
import calculateTotalAmount from '../../services/calculateTotalAmount'

const CartItem = ({ data, setTotalOrderPrice }) => {
  const { id, name, price, img } = data

  const { cart, setCart, setTotalCartItems } = useContext(CartContext)
  const [itemQuantity, setItemQuantity] = useState(data.quantity)

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)

    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setTotalCartItems(getTotalCartItems(updatedCart))
    setTotalOrderPrice(calculateTotalAmount(updatedCart))
  }

  const handleItemChange = (e) => {
    let newValue = parseInt(e.target.value)
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1
    }
    setItemQuantity(newValue)

    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newValue }
      }
      return item
    })

    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setTotalCartItems(getTotalCartItems(updatedCart))
    setTotalOrderPrice(calculateTotalAmount(updatedCart))
  }

  return (
    <div className='cart-item-box' id={id}>
      <img src={require(`../../assets/img/${img}`)} alt={name} />
      <div className='cart-item-box-info'>
        <i onClick={() => removeItem(id)} className='bi bi-x-lg'></i>
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
          onChange={handleItemChange}
          form='userInfo'
        />
      </div>
    </div>
  )
}

export default CartItem
