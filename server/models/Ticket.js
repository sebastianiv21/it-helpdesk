const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  cliente: {
    type: String,
    required: true,
  },
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
  accion: {
    type: Array,
    required: true,
  },
  anexo: {
    type: File,
    required: true,
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
