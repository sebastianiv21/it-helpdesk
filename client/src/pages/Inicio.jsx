import { useState, useEffect } from 'react';
import useData from '../hooks/useData';



const Inicio = () => {
  const { getTickets, countObjectsWithPropertyValue } = useData();
  const [pendientes, setPendientes] = useState(0);

  useEffect(() => {
    getTickets().then((json) => {
      const pendientes = countObjectsWithPropertyValue(json, 'estado', 'Abierto');
      setPendientes(pendientes);
      return pendientes;
    });
  }, [getTickets, countObjectsWithPropertyValue]);

  return (
    <div
      className='container-fluid vh-100 d-flex flex-column p-0 '
      id='inicio'
    >
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-sm-5 me-5'>
            <div className='card text-center'>
              <div className='card-header bg-primary text-white'>
                Tickets pendientes
              </div>
              <div className='card-body'>
                <strong className='fs-1'>
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
              <div className='card-body'>
              <table responsive
          className='table table-sm table-striped text-center align-middle '
        >
          <thead className='text-primary bg-white text-center'>
            <tr>
              <th>ID</th>
              <th>TITULO</th>
              <th>EMPRESA</th>
            </tr>
          </thead>
          <tbody >
          <tr>
            <th scope="row">507e6c</th>
            <td>Pantallazo azul de la muerte 2</td>
            <td>Claro</td>
          </tr>
          <tr>
            <th scope="row">0d61d7</th>
            <td>El Servidor no arranca</td>
            <td>ADN 21</td>
          </tr>
          <tr>
            <th scope="row">0d61cd</th>
            <td>Ampliación de licencias</td>
            <td>Coomotor</td>
          </tr>
          <tr>
            <th scope="row">0d61af</th>
            <td>Falla switch comunicaciones</td>
            <td>IT.Tecnhology</td>
          </tr>
          <tr>
            <th scope="row">0d61ad</th>
            <td>Falla internet Cegen</td>
            <td>Varisur</td>
          </tr>
          </tbody>
        </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='align-self-center mt-0 pt-3'>
        <img
          src='./images/logo.svg'
          alt='logo'
          className='img-fluid mx-auto d-block'
          width='400'
        />
        <h1
          className='text-center text-primary fst-italic'
          id='inicioNombre'
        >
          IT TECHNOLOGY R&M S.A.S
        </h1>
      </div>
    </div>
  );
};

export default Inicio;
