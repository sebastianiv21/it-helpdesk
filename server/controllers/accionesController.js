const Accion = require('../models/Accion')
const asyncHandler = require('express-async-handler')

// @desc Get all acciones
// @route GET /acciones
// @access Private
const getAllAcciones = asyncHandler(async (req, res) => {
    const acciones = await Accion.find().lean()

    // si no hay clientes
  if (!acciones?.length) {
    return res.status(400).json({ message: 'No se encontraron acciones' })
  }

  res.json(acciones)
})

// @desc Create new accion
// @route POST /acciones
// @access Private
const createNewAccion = asyncHandler(async (req, res) => {
    const { descripcion, fecha, ticket, usuarioEncargado } = req.body

     // Confirm data
  if (!descripcion || !fecha || !ticket || !usuarioEncargado) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Create and store the new accion
  const accion = await Accion.create({ descripcion, fecha, ticket, usuarioEncargado})

  if (accion) {
    // Created
    return res.status(201).json({ message: 'Accion creada exitosamente' })
  } else {
    return res.status(400).json({ message: 'Datos recibidos inválidos' })
  }
})

module.exports = {
  getAllAcciones,
  createNewAccion
}