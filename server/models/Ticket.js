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
  // revisar tipo de dato
  empresa: {
    type: String,
    required: true,
  },
  estado: {
    type: Number,
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
    type: Array,
  },],
  anexo: {
    type: File,
  },
  fechadecreacion: {
    type: Date,
    required: true,
  },
  fechadecierre: {
    type: Date,
    required: true,
  },

},{
    timestamps: true,
})
module.exports = mongoose.model('Ticket', ticketSchema)
