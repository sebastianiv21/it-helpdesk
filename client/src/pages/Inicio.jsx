import { useState, useEffect } from 'react';
import useData from '../hooks/useData';
import { Table } from 'reactstrap';
import FilaPrioritarios from '../components/FilaPrioritarios';
import GraficoTorta from '../components/GraficoTorta';
import GraficoBarras from '../components/GraficoBarras';

const Inicio = () => {
  const { getTickets, countObjectsWithPropertyValue } = useData();
  const [pendientes, setPendientes] = useState(0);
  const [prioritarios, setPrioritarios] = useState([]);

  useEffect(() => {
    getTickets().then((json) => {
      const [pendientesArr, pendientes] = countObjectsWithPropertyValue(
        json,
        'estado',
        'Abierto'
      );
      const [prioritariosArr] = countObjectsWithPropertyValue(
        pendientesArr,
        'prioridad',
        'Alta'
      );
      setPendientes(pendientes);
      setPrioritarios(prioritariosArr);
      return [pendientes, prioritariosArr];
    });
  }, [getTickets, countObjectsWithPropertyValue]);

  const listaPrioritarios = prioritarios.map(({ _id, categoria, cliente }) => {
    return (
      <FilaPrioritarios
        key={_id}
        id={_id.slice(-6)}
        categoria={categoria}
        empresa={cliente?.empresa}
      />
    );
  });

  return (
    <div
      className='container-fluid vh-100 d-flex flex-column p-0 '
      id='inicio'
    >
      <div className='container mt-5'>
        <div className='row justify-content-center mb-5'>
          <div className='col-sm-5 me-5'>
            <div className='card text-center'>
              <div className='card-header bg-primary text-white'>
                Tickets pendientes
              </div>
              <div className='card-body'>
                <strong id='numero'>
                  <span id='daily_revenue'>{`${pendientes}`}</span>
                </strong>
              </div>
            </div>
          </div>
          <div className='col-sm-5 ms-5'>
            <div className='card text-center'>
              <div className='card-header bg-primary text-white'>
                Tickets Prioritarios
              </div>
              {prioritarios.length ? (
                <div
                  className='card-body'
                  id='tabla'
                >
                  <Table
                    responsive
                    className='table table-sm table-striped text-center align-middle'
                  >
                    <thead className='text-primary bg-white text-center'>
                      <tr>
                        <th>ID</th>
                        <th>CATEGORIA</th>
                        <th>EMPRESA</th>
                      </tr>
                    </thead>
                    <tbody>{listaPrioritarios}</tbody>
                  </Table>
                </div>
              ) : (
                <div className='card-body'>
                  <strong id='numeroP'>
                    <span>{`${prioritarios.length}`}</span>
                  </strong>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='row justify-content-center mb-5'>
          <div className='col-sm-5 me-5'>
            <br></br>
            <br></br>
            <br></br>
            <div className='card text-center'>
              <div className='card-header bg-primary text-white'>
                Tickets Semanales
              </div>
              <div className='card-body mx-auto'>
                <GraficoBarras />
              </div>
            </div>
          </div>
          <div className='col-sm-5 ms-5'>
            <br></br>
            <br></br>
            <br></br>
            <div className='card text-center'>
              <div className='card-header bg-primary text-white'>
                Tickets Mensuales por Empresa
              </div>
                <div className='card-body mx-auto' id='Torta'>
                  <GraficoTorta />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
