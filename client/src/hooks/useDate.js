import {
  format,
  parseISO,
  formatISO,
  isWithinInterval,
  startOfDay,
  endOfDay,
  subDays,
  eachDayOfInterval
} from 'date-fns'
import { es } from 'date-fns/locale'

const TIMEZONE = 'America/Bogota'
// parseISO convierte una fecha en formato ISO a un objeto Date de JavaScript en la zona horaria local.
export const useDate = () => {
  const parseDate = (date, dateFormat = 'yyyy-MM-dd') => {
    return format(parseISO(date), dateFormat)
  }

  const parseDateString = (date, type) => {
    if (type === 'date-only') {
      const formatedDate = format(new Date(date), 'dd MMMM yyyy', {
        locale: es
      })
      return formatedDate
    } else if (type === 'date-hours') {
      const formatedDate = format(new Date(date), 'dd MMMM yyyy HH:mm:ss', {
        locale: es
      })
      return formatedDate
    }
  }

  const actualDateForInputs = () => {
    // Limits days of input until today
    const fecha = new Date()
    return formatISO(fecha, { representation: 'date' })
  }

  const isFutureDate = (date) => {
    // Validates if date selected is > actual day
    const today = new Date()
    const parsedDate = parseISO(date)
    return parsedDate > today
  }

  const arrayUltimos7Dias = () => {
    const today = new Date()
    const lastSevenDays = Array.from({ length: 7 }, (_, index) =>
      format(subDays(today, index), 'EEEE', { locale: es })
    )
      .reverse()
      .map((day) => day.charAt(0).toUpperCase() + day.slice(1, 3))
    return lastSevenDays
  }

  const obtenerCantidadTicketsPorDia = (array) => {
    const fechaActual = endOfDay(new Date())
    const fechaHace7Dias = subDays(fechaActual, 7)

    const fechasIntervalo = eachDayOfInterval({
      start: startOfDay(fechaHace7Dias),
      end: fechaActual
    })

    const cantidadTicketsPorDia = fechasIntervalo
      .map((fecha) => {
        const fechaString = fecha.toISOString().slice(0, 10)
        const cantidad = array.filter((objeto) => {
          const objetoFecha = parseISO(objeto.createdAt)
          return isWithinInterval(objetoFecha, {
            start: startOfDay(fecha),
            end: endOfDay(fecha)
          })
        }).length
        return { fecha: fechaString, cantidad }
      })
      .slice(-7)

    return cantidadTicketsPorDia
  }

  return {
    parseDate,
    isFutureDate,
    parseDateString,
    actualDateForInputs,
    arrayUltimos7Dias,
    obtenerCantidadTicketsPorDia
  }
}
