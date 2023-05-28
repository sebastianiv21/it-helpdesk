import { useState, useEffect } from 'react'
import { useData } from '@hooks'
import { Table } from 'reactstrap'
import FilaPrioritarios from '../components/FilaPrioritarios'
import GraficoBarras from '../components/GraficoBarras'

const Inicio = () => {
  const { getTickets, countObjectsWithPropertyValue } = useData()
  const [pendientes, setPendientes] = useState(0)
  const [prioritarios, setPrioritarios] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    getTickets().then((json) => {
      const [pendientesArr, pendientes] = countObjectsWithPropertyValue(
        json,
        'estado',
        'Abierto'
      )
      const [prioritariosArr] = countObjectsWithPropertyValue(
        pendientesArr,
        'prioridad',
        'Alta'
      )
      setTickets(json)
      setPendientes(pendientes)
      setPrioritarios(prioritariosArr)
      return [pendientes, prioritariosArr, json]
    })
  }, [getTickets, countObjectsWithPropertyValue])

  const listaPrioritarios = prioritarios.map(({ _id, categoria, cliente }) => {
    return (
      <FilaPrioritarios
        key={_id}
        id={_id.slice(-6)}
        categoria={categoria}
        empresa={cliente?.empresa}
      />
    )
  })

  return (
    <div className='container-fluid vh-100 d-flex flex-column p-0 ' id='inicio'>
      <div className='container mt-5'>
        <div className='row justify-content-center mb-5'>
          <div className='col-sm-5 me-2'>
            <div
              className='card text-center'
              style={{ width: '25rem', height: '353px' }}
            >
              <div className='card-header bg-primary text-white'>
                Tickets pendientes
              </div>
              <div className='card-body mt-4 text-primary'>
                <strong id='numero' style={{ fontSize: '7rem' }}>
                  <span id='daily_revenue'>{`${pendientes}`}</span>
                </strong>
              </div>
            </div>
          </div>
          <div className='col-sm-5 me-2'>
            <div className='card text-center'>
              <div className='card-header bg-primary text-white'>
                Tickets Semanales
              </div>
              <div className='card-body my-auto' id='Barras'>
                <GraficoBarras />
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mb-5'>
          <div className='col-sm-10 mt-4'>
            <div className='card text-center ' style={{ height: '400px' }}>
              <div className='card-header bg-primary text-white'>
                Tickets Prioritarios
              </div>
              {prioritarios.length ? (
                <div className='card-body' id='tabla'>
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
      </div>
    </div>
  )
}

export default Inicio
