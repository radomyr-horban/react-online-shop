import React, { useContext, useState } from 'react'

import { CartContext } from '../../App'

const Item = ({ data }) => {
  const { id, name, price, img } = data

  const { cart, setCart, setTotalCartItems } = useContext(CartContext)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const addToCart = (id) => {
    setCart((prevCart) => {
      const duplicate = prevCart.find((el) => el.id === id)
      if (duplicate) {
        const updatedCart = prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        return updatedCart
      } else {
        return [...prevCart, { id, name, price, quantity: 1 }]
      }
    })

    setTotalCartItems((prevTotal) => prevTotal + 1)
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const handleClick = (id) => {
    addToCart(id)
    setIsAddedToCart(true)
  }

  return (
    <div className='item-box' id={id}>
      <img src={require(`../../assets/img/${img}`)} alt={name} />
      <div className='item-box-info'>
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <button
        id={`add-btn-${id}`}
        className={`btn-item ${isAddedToCart ? 'added-to-cart' : ''}`}
        onClick={() => handleClick(id)}
      >
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default Item
