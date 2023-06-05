const Cliente = require('../models/Cliente')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

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
  const {
    email,
    nombre,
    apellidos,
    telefono,
    empresa,
    departamento,
    municipio
  } = req.body

  // Confirm data
  const camposRequeridos = [
    email,
    nombre,
    apellidos,
    telefono,
    empresa,
    departamento,
    municipio
  ]

  if (camposRequeridos.some((field) => !field)) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Create and store the new cliente
  const cliente = await Cliente.create(req.body)

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
  const {
    _id: id,
    email,
    nombre,
    apellidos,
    telefono,
    empresa,
    departamento,
    municipio,
    direccion
  } = req.body

  // Verificar si el ID proporcionado es válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID inválido' })
  }

  // Confirm data
  const camposRequeridos = [
    email,
    nombre,
    apellidos,
    telefono,
    empresa,
    departamento,
    municipio
  ]

  if (camposRequeridos.some((field) => !field)) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Actualizar el documento en la base de datos
  const updatedCliente = await Cliente.findOneAndUpdate(
    { _id: id },
    {
      email,
      nombre,
      apellidos,
      telefono,
      empresa,
      departamento,
      municipio,
      direccion
    },
    { new: true }
  )

  // Verificar si el documento existe y fue actualizado
  if (!updatedCliente) {
    return res.status(404).json({ message: 'El cliente no existe' })
  }

  res.json(
    `Cliente ${updatedCliente.nombre} ${updatedCliente.apellidos} actualizado`
  )
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
  deleteCliente
}
