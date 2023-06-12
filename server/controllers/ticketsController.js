const Ticket = require('../models/Ticket')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

// @desc Get all tickets
// @route GET /tickets
// @access Private
const getAllTickets = asyncHandler(async (req, res) => {
  const tickets = await Ticket.find()
    .lean()
    .populate('cliente', { ticket: 0 })
    .populate('agenteEncargado', { ticket: 0 })
    .exec()

  // si no hay tickets
  if (!tickets?.length) {
    return res.status(400).json({ message: 'No se encontraron tickets' })
  }

  res.json(tickets)
})

// @desc Create new ticket
// @route POST /tickets
// @access Private
const createNewTicket = asyncHandler(async (req, res) => {
  const {
    cliente,
    titulo,
    prioridad,
    categoria,
    subcategoria,
    agenteEncargado
  } = req.body

  // Confirm data
  const camposRequeridos = [
    cliente,
    titulo,
    prioridad,
    categoria,
    subcategoria,
    agenteEncargado
  ]

  if (camposRequeridos.some((field) => !field)) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Create and store the new ticket
  const ticket = await Ticket.create(req.body)

  if (ticket) {
    // Created
    return res.status(201).json({ message: 'Ticket creado exitosamente' })
  } else {
    return res.status(400).json({ message: 'Datos recibidos inválidos' })
  }
})

// @desc Update a ticket
// @route PATCH /tickets
// @access Private
const updateTicket = asyncHandler(async (req, res) => {
  const { _id: id, ...ticketInfo } = req.body

  // Verificar si el ID proporcionado es válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID inválido' })
  }

  if (!ticketInfo.estado || !ticketInfo.prioridad) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Actualizar el documento en la base de datos
  const updatedTicket = await Ticket.findOneAndUpdate(
    { _id: id },
    { ...ticketInfo },
    { new: true }
  )

  // Verificar si el documento existe y fue actualizado
  if (!updatedTicket) {
    return res.status(404).json({ message: 'El ticket no existe' })
  }

  res.json(`Ticket '${updatedTicket.ticketRef}' actualizado`)
})

// @desc Delete a ticket
// @route DELETE /ticket
// @access Private
const deleteTicket = asyncHandler(async (req, res) => {
  const { id } = req.body

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'Se require ID del ticket' })
  }

  // Confirm test exists to delete
  const ticket = await Ticket.findById(id).exec()

  if (!ticket) {
    return res.status(400).json({ message: 'Ticket no encontrado' })
  }

  const result = await ticket.deleteOne()

  const reply = `Ticket '${result._id}' eliminado`

  res.json(reply)
})

module.exports = {
  getAllTickets,
  createNewTicket,
  updateTicket,
  deleteTicket
}
