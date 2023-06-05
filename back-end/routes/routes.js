const express = require('express')
const router = express.Router()
const {
  createOrder,
  getHomePage,
  getCartPage,
} = require('../controllers/controller')

router.get('/', getHomePage)

router.get('/cart', getCartPage)

router.post('/cart', createOrder)

module.exports = router
