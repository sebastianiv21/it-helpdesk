const Ticket = require('../models/Ticket')
const Cliente = require('../models/Cliente')
const asyncHandler = require('express-async-handler')

// @desc Get all tickets
// @route GET /tickets
// @access Private
const getAllTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find().lean()

    // si no hay tickets
  if (!tickets?.length) {
    return res.status(400).json({ message: 'No se encontraron tickets' })
  }

  const ticketsWithClient = await Promise.all(
    tickets.map(async (ticket) => {
      // se usa exec porque se esta pasando un parametro de busqueda
      const client = await Cliente.findById(ticket.cliente)
        .select('-_id')
        .lean()
        .exec()
      return { ...ticket, ...client }
    })
  )
  res.json(ticketsWithClient)
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