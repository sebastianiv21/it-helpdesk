const mongoose = require('mongoose')

const accionSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  ticket: {
    type: Object,
    required: true,
  },
  usuarioEncargado: {
    type: String,
    required: true,
  },
  
 
})

module.exports = mongoose.model('Accion', accionSchema)
