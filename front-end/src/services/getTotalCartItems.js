const getTotalCartItems = (cart) => {
  return cart ? cart.map((item) => item.quantity).reduce((x, y) => x + y, 0) : 0
}

export default getTotalCartItems
