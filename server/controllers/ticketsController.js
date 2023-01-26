const Ticket = require('../models/Ticket')
const Cliente = require('../models/Cliente')
const asyncHandler = require('express-async-handler')

// @desc Get all tickets
// @route GET /tickets
// @access Private
const getAllTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find().lean().populate('cliente', {ticket: 0})

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
    const { titulo, estado, prioridad, categoria, subcategoria, cliente } = req.body

     // Confirm data
  if (!titulo || !estado || !prioridad || !categoria || !subcategoria || !cliente) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Create and store the new ticket
  const ticket = await Ticket.create({ titulo, estado, prioridad, categoria, subcategoria, cliente })

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
  const { id, prioridad, estado, fechadecierre, acciones } = req.body

  // Confirm data
  if (!id || !estado || !prioridad) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  // Confirm ticket exists to update
  const ticket = await Ticket.findById(id).exec()

  if (!ticket) {
    return res.status(400).json({ message: 'No se encuentra el ticket' })
  }

  ticket.estado = estado
  ticket.prioridad = prioridad
  ticket.fechadecierre = fechadecierre
  ticket.acciones = acciones

  const updatedTicket = await ticket.save()

  res.json(`Ticket '${updatedTicket._id}' actualizado`)
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
  deleteTicket,
}
