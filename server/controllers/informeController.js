const Ticket = require('../models/Ticket')
const asyncHandler = require('express-async-handler')
const {
  startOfDay,
  endOfDay,
  parseISO,
  formatISO,
  format
} = require('date-fns')

const parseDate = (date, dateFormat = 'yyyy-MM-dd') => {
  return format(parseISO(date), dateFormat)
}
// @desc Get tickets in a date range
// @route GET /informe
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

  // TODO: filtrar por empresa y categoria

  // Get tickets
  const tickets = await Ticket.find({
    createdAt: { $gte: fechaDesde, $lte: fechaHasta }
  })
    .lean()
    .populate('cliente', { ticket: 0 })
    .populate('agenteEncargado', { ticket: 0 })
    .exec()

  const ticketsAbiertos = tickets.filter(
    (ticket) => ticket.estado === 'Abierto'
  ).length
  const ticketsCerrados = tickets.filter(
    (ticket) => ticket.estado === 'Cerrado'
  ).length

  // filtra por categoria
  // if (categoria && categoria !== 'Todas') {
  //   const ticketsFiltrados = tickets.filter(
  //     (ticket) => ticket.categoria === categoria
  //   )
  //   // return res.json(ticketsFiltrados)
  // }

  // cantidad de tickets por categoria y subcategoria en formato { categoria: 'Hardware', cantidad: 2, subcategorias: [{ subcategoria: 'Mouse', cantidad: 1 }, { subcategoria: 'Teclado', cantidad: 1 }] }
  // si ya existe la categoria, aumenta la cantidad de tickets y si ya existe la subcategoria, aumenta la cantidad de tickets
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

  res.json({
    ticketsAbiertos,
    ticketsCerrados,
    tickets,
    categorias
  })
  // si no hay tickets
  if (!tickets?.length) {
    return res.status(400).json({ message: 'No se encontraron tickets' })
  }

  res.json(tickets)
  // res.json({ fechaInicio, fechaFinal, empresa, ticketsAbiertos, ticketsCerrados, tickets, categorias })
})

module.exports = {
  getTicketsByDateRange
}

/* 
const datosInforme = {
    fechaInicio: '2023-02-03',
    fechaFinal: '2023-02-03',
    empresa: 'Empresa 1',
    ticketsAbiertos: 3,
    ticketsCerrados: 6,
    tickets: [
      {
        titulo: 'El raton se comio los cables del pc',
        prioridad: 'Alta',
        estado: 'Abierto',
        categoria: 'Hardware',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      },
      {
        titulo:
          'lola camino por la vereda cuidando que no se cayera al rio para llegar del otro lado con sus amigos',
        prioridad: 'Media',
        estado: 'Cerrado',
        categoria: 'Software',
        fechaCreacion: '2023-02-03',
        fechaCierre: '2023-02-03'
      }
    ],
    categorias: [
      {
        nombre: 'Hardware',
        cantidad: 3,
        subcategorias: [
          {
            nombre: 'Escaner',
            cantidad: 3
          },
          {
            nombre: 'Impresora',
            cantidad: 3
          },
          {
            nombre: 'Monitor',
            cantidad: 3
          },
          {
            nombre: 'PC',
            cantidad: 3
          },
          {
            nombre: 'Portatil',
            cantidad: 3
          },
          {
            nombre: 'Servidor',
            cantidad: 3
          },
          {
            nombre: 'Smartphone',
            cantidad: 3
          },
          {
            nombre: 'UPS',
            cantidad: 3
          },
        ]
      },
      {
        nombre: 'Software',
        cantidad: 6,
        subcategorias: [
          {
            nombre: 'Configuración periferico',
            cantidad: 3
          },
          {
            nombre: 'Sistema Operativo',
            cantidad: 3
          },
          {
            nombre: 'Copia de información',
            cantidad: 3
          },
          {
            nombre: 'Correo electronico',
            cantidad: 3
          },
          {
            nombre: 'Office',
            cantidad: 3
          },
        ]
      },
      {
        nombre: 'Infraestructura',
        cantidad: 9,
        subcategorias: [
          {
            nombre: 'Cableado estructurado',
            cantidad: 3
          },
          {
            nombre: 'Caseta nodo',
            cantidad: 3
          },
          {
            nombre: 'Sistema electronico',
            cantidad: 3
          },
          {
            nombre: 'Sistema electrico',
            cantidad: 3
          },
          {
            nombre: 'Solución solar',
            cantidad: 3
          },
          {
            nombre: 'Torre de comunicaciones',
            cantidad: 3
          },
        ]
      },
      {
        nombre: 'Servidores',
        cantidad: 12,
        subcategorias: [
          {
            nombre: 'Backup',
            cantidad: 3
          },
          {
            nombre: 'Configuración',
            cantidad: 3
          },
          {
            nombre: 'Cuentas de usuario',
            cantidad: 3
          },
          {
            nombre: 'Politicas-Reglas',
            cantidad: 3
          },
        ]
      },
      {
        nombre: 'Ciberseguridad',
        cantidad: 14,
        subcategorias: [
          {
            nombre: 'Antivirus',
            cantidad: 3
          },
          {
            nombre: 'Firewall',
            cantidad: 3
          },
          {
            nombre: 'VPN',
            cantidad: 3
          },
        ]
      },
      {
        nombre: 'Seguridad Electrónica',
        cantidad: 4,
        subcategorias: [
          {
            nombre: 'Biometrico',
            cantidad: 3
          },
          {
            nombre: 'Camara',
            cantidad: 3
          },
          {
            nombre: 'Sensor',
            cantidad: 3
          },
        ]
      },
      {
        nombre: 'Telecomunicaciones',
        cantidad: 3,
        subcategorias: [
          {
            nombre: 'Enlace satelital ',
            cantidad: 3
          },
          {
            nombre: 'Radio enlace terrestre',
            cantidad: 3
          }
        ]
      }
    ]
  }
  */
