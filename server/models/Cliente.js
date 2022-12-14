const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
 
})

module.exports = mongoose.model('Cliente', clienteSchema)
