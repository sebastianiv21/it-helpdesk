const Agente = require('../models/Agente')
const asyncHandler = require('express-async-handler')

// @desc Get all Agentes
// @route GET /Agentes
// @access Private
const getAllAgentes = asyncHandler(async (req, res) => {
  const Agentes = await Agente.find().lean()

  // si no hay Agentes
  if (!Agentes?.length) {
    return res.status(400).json({ message: 'No se encontraron Agentes' })
  }

  res.json(Agentes)
})

// @desc Create new Agente
// @route POST /Agentes
// @access Private
const createNewAgente = asyncHandler(async (req, res) => {
  const { nombre, telefono, numeroDocumento } = req.body

  // Confirm data
  if (!nombre || !numeroDocumento) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Create and store the new Agente
  const Agente = await Agente.create({
    nombre,
    telefono,
    numeroDocumento
  })

  if (Agente) {
    // Created
    return res.status(201).json({ message: 'Agente creado exitosamente' })
  } else {
    return res.status(400).json({ message: 'Datos recibidos inválidos' })
  }
})

// @desc Update a Agente
// @route PATCH /Agentes
// @access Private
const updateAgente = asyncHandler(async (req, res) => {
  const { id, nombre, telefono, numeroDocumento } = req.body

  // Confirm data
  if (!id || !nombre || !numeroDocumento) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Confirm Agente exists to update
  const Agente = await Agente.findById(id).exec()

  if (!Agente) {
    return res.status(400).json({ message: 'No se encuentra el Agente' })
  }

  Agente.nombre = nombre
  Agente.telefono = telefono
  Agente.numeroDocumento = numeroDocumento

  const updatedAgente = await Agente.save()

  res.json(`Agente ${updatedAgente.nombre} actualizado`)
})

// @desc Delete a Agente
// @route DELETE /Agente
// @access Private
const deleteAgente = asyncHandler(async (req, res) => {
  const { id } = req.body

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'Se require ID del Agente' })
  }

  // Confirm Agente exists to delete
  const Agente = await Agente.findById(id).exec()

  if (!Agente) {
    return res.status(400).json({ message: 'Agente no encontrado' })
  }

  const result = await Agente.deleteOne()

  const reply = `Agente ${result.nombre} eliminado`

  res.json(reply)
})

module.exports = {
  getAllAgentes,
  createNewAgente,
  updateAgente,
  deleteAgente
}
