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

CartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

const GraficoInforme = ({ datos }) => {
  const { categorias } = datos
  console.log('grafico', categorias)
  const data = {
    labels: categorias?.map((categoria) => categoria.nombre),
    datasets: [
      {
        label: 'Cantidad',
        data: categorias?.map((categoria) => categoria.cantidad),
        backgroundColor: '#004643'
      }
    ]
  }

  const options = {
    responsive: true,

    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 40 // Tamaño de las letras en el eje y
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 40 // Tamaño de las letras en el eje x
          }
        }
      }
    }
  }

  return <Bar data={data} options={options} />
}

export default GraficoInforme
