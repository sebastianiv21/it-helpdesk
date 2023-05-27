import React from 'react';
import {
  Chart as CartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

CartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GraficoBarras = () => {
  const data = {
    labels: ['Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'],
    datasets: [
      {
        label: 'Cantidad',
        data: [3, 6, 9, 7, 8, 4],
        backgroundColor: '#c2e7c9',
      },
    ],
  };

  const options = {};

  return <Bar data={data} options={options} />;
};

export default GraficoBarras;
