import React, { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../App'
import calculateTotalCartItemsQuantity from '../../utils/calculateTotalCartItemsQuantity'

const Item = ({ data }) => {
  const { id, name, price, img } = data

  const { cart, setCart, setTotalCartItems } = useContext(CartContext)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  useEffect(() => {
    setTotalCartItems(calculateTotalCartItemsQuantity(cart))
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart, setTotalCartItems])

  const addToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id)

      if (existingItem) {
        if (existingItem.quantity < 20) {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1
          }
          const updatedCart = prevCart.map((item) =>
            item.id === id ? updatedItem : item
          )
          return updatedCart
        }
        return prevCart
      }

      const newItem = { id, name, price, quantity: 1 }
      return [...prevCart, newItem]
    })
    setIsAddedToCart(true)
  }

  const handleClick = (id) => {
    addToCart(id)
  }

  return (
    <div className='item-box' id={id}>
      <img alt={name} src={require(`../../assets/img/${img}`)} />
      <div className='item-box-info'>
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <button
        className={`btn-item ${isAddedToCart ? 'added-to-cart' : ''}`}
        id={`add-btn-${id}`}
        onClick={() => handleClick(id)}
      >
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default Item
