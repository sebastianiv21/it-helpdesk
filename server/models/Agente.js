const mongoose = require('mongoose')

const agenteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    telefono: {
      type: Number
    },
    numeroDocumento: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Agente', agenteSchema)
