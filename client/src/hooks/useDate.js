import { format, parseISO, formatISO } from 'date-fns'
import { es } from 'date-fns/locale'

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

  return { parseDate, isFutureDate, parseDateString, actualDateForInputs }
}
