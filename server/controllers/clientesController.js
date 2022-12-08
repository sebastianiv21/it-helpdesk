const Cliente = require('../models/Cliente')
const asyncHandler = require('express-async-handler')

// @desc Get all clientes
// @route GET /clientes
// @access Private
const getAllClientes = asyncHandler(async (req, res) => {
    const clientes = await Cliente.find().lean()

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

// @desc Update a cliente
// @route PATCH /clientes
// @access Private
const updateCliente = asyncHandler(async (req, res) => {
  const { id, email, nombre, apellidos, telefono, empresa, ubicacion } = req.body

  // Confirm data
  if (!id || !email || !nombre || !apellidos || !telefono || !empresa || !ubicacion) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Confirm cliente exists to update
  const cliente = await Cliente.findById(id).exec()

  if (!cliente) {
    return res.status(400).json({ message: 'No se encuentra el cliente' })
  }

  cliente.email = email
  cliente.nombre = nombre
  cliente.apellidos = apellidos
  cliente.telefono = telefono
  cliente.empresa = empresa
  cliente.ubicacion = ubicacion

  const updatedCliente = await cliente.save()

  res.json(`Cliente ${updatedCliente.nombre} ${updatedCliente.apellidos} actualizado`)
})

// @desc Delete a cliente
// @route DELETE /cliente
// @access Private
const deleteCliente = asyncHandler(async (req, res) => {
  const { id } = req.body

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'Se require ID del cliente' })
  }

  // Confirm cliente exists to delete
  const cliente = await Cliente.findById(id).exec()

  if (!cliente) {
    return res.status(400).json({ message: 'Cliente no encontrado' })
  }

  const result = await cliente.deleteOne()

  const reply = `Cliente ${result.nombre} ${result.apellidos} eliminado`

  res.json(reply)
})

module.exports = {
  getAllClientes,
  createNewCliente,
  updateCliente,
  deleteCliente,
}
