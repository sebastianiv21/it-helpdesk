const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: {
    type: String,
    required: true,
  },
  contrasenha: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Usuario', usuarioSchema)
