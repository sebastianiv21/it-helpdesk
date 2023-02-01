import React from 'react';
import { Chart as CartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

CartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GraficoBarras = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: '369',
        data: [3,6,9],
        backgroundColor: '#A155B9',
      }
    ]
  }

  const options = {}

  return <Bar data={data} options={options} />;
};

export default GraficoBarras;
