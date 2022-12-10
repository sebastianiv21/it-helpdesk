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
  // revisar tipo de dato
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Ticket',
  },
  usuarioEncargado: {
    type: String,
    required: true,
  },
  anexo: String
 
})

module.exports = mongoose.model('Accion', accionSchema)
