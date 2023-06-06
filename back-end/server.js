const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/routes')

require('dotenv').config()

const PORT = process.env.PORT || 4000
const app = express()

// middleware
app.use(express.json())
app.use(
  cors({
    origin:
      process.env.REACT_APP_CORS_ORIGIN_DEPLOY_CLIENT ||
      'http://localhost:3000',
  })
)

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
