const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Cliente',
  },
  estado: {
    type: String,
    required: true,
  },
  prioridad: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  subcategoria: {
    type: String,
    required: true,
  },
  // revisar tipo de dato
  acciones: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accion'
  },],
  fechadecierre: Date
},{
    timestamps: true,
})
module.exports = mongoose.model('Ticket', ticketSchema)
