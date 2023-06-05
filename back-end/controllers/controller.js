const Order = require('../models/orderModel')

const getHomePage = (req, res) => {
  res.json({ mssg: 'home page' })
}
const getCartPage = (req, res) => {
  res.json({ mssg: 'cart page' })
}

const createOrder = async (req, res) => {
  const {
    userName,
    userEmail,
    userPhone,
    userAddress,
    userOrder,
    totalOrderPrice,
  } = req.body

  // add doc to db
  try {
    const order = await Order.create({
      userName,
      userEmail,
      userPhone,
      userAddress,
      userOrder,
      totalOrderPrice,
    })
    res.status(200).json(order)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createOrder, getHomePage, getCartPage }
