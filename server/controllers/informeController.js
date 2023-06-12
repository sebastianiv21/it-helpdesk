const Ticket = require('../models/Ticket')
const asyncHandler = require('express-async-handler')
const { startOfDay, endOfDay, parseISO, formatISO, format } = require('date-fns')

const parseDate = (date, dateFormat = 'yyyy-MM-dd') => {
  return format(parseISO(date), dateFormat)
}
// @desc Get tickets in a date range
// @route GET /informe
// @access Private
const getTicketsByDateRange = asyncHandler(async (req, res) => {
  const { fechaInicio, fechaFinal } = req.body

  // Confirm data
  const camposRequeridos = [fechaInicio, fechaFinal]

  if (camposRequeridos.some((field) => !field)) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

    const fechaDesde = startOfDay(parseISO(fechaInicio))
    const fechaHasta = endOfDay(parseISO(fechaFinal))
    
    const allTickets = await Ticket.find({}, 'createdAt').lean().exec()
    
    // Get tickets
    const tickets = await Ticket.find({
      createdAt: { $gte: fechaDesde, $lte: fechaHasta }
    })
    .lean()
    .populate('cliente', { ticket: 0 })
    .populate('agenteEncargado', { ticket: 0 })
    .exec()
    
    res.json({ fechaDesde, fechaHasta, tickets })
  // si no hay tickets
  if (!tickets?.length) {
    return res.status(400).json({ message: 'No se encontraron tickets' })
  }

  res.json(tickets)
})

module.exports = {
  getTicketsByDateRange
}
