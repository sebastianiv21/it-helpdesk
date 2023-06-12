const Ticket = require('../models/Ticket')
const asyncHandler = require('express-async-handler')
const { startOfDay, endOfDay, parseISO } = require('date-fns')

// @desc Get tickets in a date range
// @route POST /informe
// @access Private
const getTicketsByDateRange = asyncHandler(async (req, res) => {
  const { fechaInicio, fechaFinal, empresa, categoria } = req.body

  // Confirm data
  const camposRequeridos = [fechaInicio, fechaFinal]

  if (camposRequeridos.some((field) => !field)) {
    return res.status(400).json({ message: 'Ingrese los campos requeridos' })
  }

  const fechaDesde = startOfDay(parseISO(fechaInicio))
  const fechaHasta = endOfDay(parseISO(fechaFinal))

  const tickets = await Ticket.find({
    createdAt: {
      $gte: fechaDesde,
      $lte: fechaHasta
    }
  })
    .populate('cliente')
    .lean()
    .exec()
    // filtra por empresa y categoria si se selecciono alguna de ellas en el formulario
    .then((tickets) => {
      if (empresa && empresa !== 'Todas') {
        return tickets.filter((ticket) => ticket.cliente.empresa === empresa)
      }
      return tickets
    })
    .then((tickets) => {
      if (categoria && categoria !== 'Todas') {
        return tickets.filter((ticket) => ticket.categoria === categoria)
      }
      return tickets
    })

  const ticketsAbiertos = tickets.filter(
    (ticket) => ticket.estado === 'Abierto'
  ).length
  const ticketsCerrados = tickets.filter(
    (ticket) => ticket.estado === 'Cerrado'
  ).length

  const categorias = tickets.reduce((acc, ticket) => {
    const { categoria, subcategoria } = ticket
    const categoriaIndex = acc.findIndex(
      (arrCategoria) => arrCategoria.nombre === categoria
    )
    if (categoriaIndex === -1) {
      acc.push({
        nombre: categoria,
        cantidad: 1,
        subcategorias: [
          {
            nombre: subcategoria,
            cantidad: 1
          }
        ]
      })
    } else {
      acc[categoriaIndex].cantidad++
      const subcategoriaIndex = acc[categoriaIndex].subcategorias.findIndex(
        (arrSubcategoria) => arrSubcategoria.nombre === subcategoria
      )
      if (subcategoriaIndex === -1) {
        acc[categoriaIndex].subcategorias.push({
          nombre: subcategoria,
          cantidad: 1
        })
      } else {
        acc[categoriaIndex].subcategorias[subcategoriaIndex].cantidad++
      }
    }
    return acc
  }, [])

  const graficoLabels = categorias.map((categoria) => categoria.nombre)
  const graficoData = categorias.map((categoria) => categoria.cantidad)

  // si no hay tickets
  // if (!tickets?.length) {
  //   return res.status(400).json({ message: 'No se encontraron tickets' })
  // }

  res.json({
    fechaInicio,
    fechaFinal,
    empresa: empresa.toUpperCase(),
    ticketsAbiertos,
    ticketsCerrados,
    tickets,
    categorias, 
    graficoLabels,
    graficoData
  })

  // res.json({ fechaInicio, fechaFinal, empresa, ticketsAbiertos, ticketsCerrados, tickets, categorias })
})

module.exports = {
  getTicketsByDateRange
}
