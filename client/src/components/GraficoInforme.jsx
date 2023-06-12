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
  const { graficoLabels, graficoData } = datos
  
  const data = {
    labels: graficoLabels,
    datasets: [
      {
        label: 'Cantidad',
        data: graficoData,
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
