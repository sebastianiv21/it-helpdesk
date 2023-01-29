import { useState, useEffect } from 'react';
import {Chart as CartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

CartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const GraficoTorta = () => {
    const [pieData, setPieData] = useState({
        datasets: [],
    });

    const [pieOptions, setPieOptions] = useState({});

    useEffect(() => {
      setPieData({
        labels: ['One', 'Two', 'Three'],
        datasets: [
            {
                data: [3, 6, 9],
                backgroundColor: ['aqua', 'orange', 'purple'],
            }
        ]
      });
    
    }, [pieData, pieOptions])
    

  return (
    <Pie data={pieData} options={pieOptions} />
  )
}

export default GraficoTorta