const mongoose = require('mongoose')
const Autoincrement = require('mongoose-sequence')(mongoose)

const ticketSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Cliente'
    },
    estado: {
      type: String,
      default: 'Abierto'
    },
    prioridad: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
      required: true
    },
    subcategoria: {
      type: String,
      required: true
    },
    acciones: [
      {
        descripcion: {
          type: String
        },
        fecha: {
          type: Date
        },
        usuarioEncargado: {
          type: String
        }
        // TODO: revisar estructura de la subcolección
      }
    ],
    fechadecierre: Date,
    agenteEncargado: {
      // type: String,
      // required: true
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Agente'
    },
    descripcionTicket: String,
    isp: Boolean
  },
  {
    timestamps: true
  }
)

ticketSchema.plugin(Autoincrement, {
  inc_field: 'ticketRef', // Campo de referencia
  id: 'ticketNums',
  start_seq: 1000
})

module.exports = mongoose.model('Ticket', ticketSchema)
