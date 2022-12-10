require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middlewares/errorHandler')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500
const connectDB = require('./config/dbConn')

connectDB()

// configura CORS
app.use(cors(corsOptions))

// permite procesar json
app.use(express.json())

// permite analizar (parse) cookies
app.use(cookieParser())

app.use('/clientes', require('./routes/clienteRoutes'))
app.use('/tickets', require('./routes/ticketRoutes'))
app.use('/acciones', require('./routes/accionRoutes'))

// 404 route
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', (err) => {
  console.log(err)
})
