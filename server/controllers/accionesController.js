const Accion = require('../models/Accion')
const asyncHandler = require('express-async-handler')

// @desc Get all acciones
// @route GET /acciones
// @access Private
const getAllAcciones = asyncHandler(async (req, res) => {
    const acciones = await Cliente.find().lean()

    // si no hay clientes
  if (!clientes?.length) {
    return res.status(400).json({ message: 'No se encontraron clientes' })
  }

  res.json(clientes)
})

// @desc Create new cliente
// @route POST /clientes
// @access Private
const createNewCliente = asyncHandler(async (req, res) => {
    const { email, nombre, apellidos, telefono, empresa, ubicacion } = req.body

     // Confirm data
  if (!email || !nombre || !apellidos || !telefono || !empresa || !ubicacion) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Create and store the new cliente
  const cliente = await Cliente.create({ email, nombre, apellidos, telefono, empresa, ubicacion })

  if (cliente) {
    // Created
    return res.status(201).json({ message: 'Cliente creado exitosamente' })
  } else {
    return res.status(400).json({ message: 'Datos recibidos inválidos' })
  }
})