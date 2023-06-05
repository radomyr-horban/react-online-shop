require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const Order = require('./models/orderModel')
const routes = require('./routes/routes')

const PORT = process.env.PORT || 4000
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use(routes)

// connect to db
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to db and listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
