const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPhone: {
      type: String,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
    },
    userOrder: {
      type: [
        {
          id: String,
          name: String,
          price: Number,
          quantity: Number,
        },
      ],
      required: true,
    },
    totalOrderPrice: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

module.exports = mongoose.model('Order', orderSchema)
