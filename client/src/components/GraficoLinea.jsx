import { Chart as CartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import useData from '../hooks/useData';

CartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const GraficoLinea = ({ data }) => {
  const { uniqueProperty, countObjectsWithPropertyValue } = useData();
  const actualYearAndMonth = new Date().toISOString().slice(0, 7);

  const getTicketsDelMes = (data) => {
    const tickets = data.filter((ticket) =>
      ticket.createdAt.includes(`${actualYearAndMonth}`)
    );
    return tickets;
  };

  const getClientesPorTicket = (tickets) => {
    const clientes = tickets.map((ticket) => ticket.cliente);
    return clientes;
  };

  const getCantidadPorEmpresa = (empresas, clientes) => {
    const cantidad = empresas.map((empresa) =>
      countObjectsWithPropertyValue(clientes, 'empresa', empresa)
    );
    const cantidadLength = cantidad.map(cantidad => cantidad[1]);
    return cantidadLength;
  };

  const ticketsDelMes = getTicketsDelMes(data);
  const clientesPorTicket = getClientesPorTicket(ticketsDelMes);
  const empresas = uniqueProperty(clientesPorTicket, 'empresa');
  const cantidad = getCantidadPorEmpresa(empresas, clientesPorTicket);

  const lineData = {
    labels: empresas,
    datasets: [
      {
        labels: 'Cantidad',
        data: cantidad,
        backgroundColor: ['#A155B9', '#165BAA', '#F765A3', '#16BFD6'],
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  return (
    <Line
      data={lineData}
      options={lineOptions}
    />
  );
};

export default GraficoLinea;
