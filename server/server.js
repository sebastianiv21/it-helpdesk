require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500
const connectDB = require('./config/dbConn')

connectDB()

// configura CORS
app.use(cors(corsOptions))

// permite procesar json
app.use(express.json())

// 404 route
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', (err) => {
  console.log(err)
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
  )
})
