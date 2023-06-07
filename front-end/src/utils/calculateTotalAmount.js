import shopItemsData from '../constants/shopItemsData'
import mapShopItemsData from './mapShopItemsData'

const calculateTotalAmount = (cart) => {
  const shopItemsMap = mapShopItemsData(shopItemsData)
  const cartItems = cart.map((cartItem) => {
    const shopItem = shopItemsMap[cartItem.id]

    return shopItem ? { ...shopItem, quantity: cartItem.quantity } : null
  })

  return cartItems.length === 0
    ? 0
    : cartItems
        .map((item) => item.price * item.quantity)
        .reduce((x, y) => x + y, 0)
}

export default calculateTotalAmount
