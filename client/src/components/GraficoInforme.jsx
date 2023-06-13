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
  const mayorquecinco = graficoData.some((cantidad)=>cantidad > 5)
 const maximo = graficoData.length === 0 ? null :  Math.max(...graficoData)
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
        min: 0,
        max: !mayorquecinco ? 5 : maximo,
        ticks: {
          font: {
            size: 40 // Tamaño de las letras en el eje y
          },
          stepSize: 1,
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
