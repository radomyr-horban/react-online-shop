import React, { useContext } from 'react'

import shopItemsData from '../../constants/shopItemsData'
import CartItem from '../../components/cart/CartItem'
import mapShopItemsData from '../../utils/mapShopItemsData'
import { CartContext } from '../../App'

const ShoppingCart = ({ totalOrderPrice, setTotalOrderPrice }) => {
  const { cart } = useContext(CartContext)

  const shopItemsMap = mapShopItemsData(shopItemsData)
  const cartItems = cart.map((cartItem) => {
    const shopItem = shopItemsMap[cartItem.id]

    return shopItem ? { ...shopItem, quantity: cartItem.quantity } : null
  })

  return (
    <div className='shopping-cart-box'>
      {cartItems.length === 0 ? (
        <h2>Cart is empty!</h2>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            data={item}
            totalOrderPrice={totalOrderPrice}
            setTotalOrderPrice={setTotalOrderPrice}
          />
        ))
      )}
    </div>
  )
}

export default ShoppingCart
