import {
  Chart as CartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useDate } from '@hooks'

CartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

const GraficoBarras = ({ tickets }) => {
  const { arrayUltimos7Dias, obtenerCantidadTicketsPorDia } =
    useDate()

  const listaDias = arrayUltimos7Dias()

  const ticketsDeLaSemana = obtenerCantidadTicketsPorDia(tickets)?.map(ticket => ticket.cantidad)

  const data = {
    // labels: ['Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', 'Dom'],
    labels: listaDias,
    datasets: [
      {
        label: 'Cantidad',
        data: ticketsDeLaSemana,
        backgroundColor: '#004643'
      }
    ]
  }

  return <Bar data={data} />
}

export default GraficoBarras
