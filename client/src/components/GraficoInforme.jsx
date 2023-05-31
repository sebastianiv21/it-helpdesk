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

CartJS.register  (BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GraficoBarras = (props) => {
  const data = {
    labels: ['Hardware', 'Software','Infraestructura', 'Servidores', 'Ciberseguridad', 'Seguridad Electronica','Telecomunicaciones'],
    datasets: [
      {
        label: 'Escaner',
        data: [3, 6, 9, 7, 8, 4, 9], 
        backgroundColor: '#c2e7c9',
      },
      // datos de ensayo 
      // {
      //   label: 'Impresora',
      //   data: [2, 5, 0, 4, 7, 3, 3], 
      //   backgroundColor: '#c2e7c9',
      // },
      // {
      //   label: 'Monitor',
      //   data: [2, 2, 1, 4, 6, 3, 1], 
      //   backgroundColor: '#c2e7c9',
      // },
      // {
      //   label: 'PC',
      //   data: [2, 1, 4, 4, 0, 3, 1], 
      //   backgroundColor: '#c2e7c9',
      // },
      // {
      //   label: 'Portatil',
      //   data: [2, 5, 6, 4, 9, 3, 1], 
      //   backgroundColor: '#c2e7c9',
      // },
      // {
      //   label: 'Servidor',
      //   data: [2, 5, 1, 2, 7, 5, 1], 
      //   backgroundColor: '#c2e7c9',
      // },
      // {
      //   label: 'Smartphone',
      //   data: [2, 5, 2, 2, 9, 3, 1], 
      //   backgroundColor: '#c2e7c9',
      // },
      // {
      //   label: 'UPS',
      //   data: [2, 5, 6, 4, 9, 3, 1], 
      //   backgroundColor: '#c2e7c9',
      // }, 
    ],
    
    
  };


  const options = {};

  return <Bar data={data} options={options} />;
};

export default GraficoBarras;
