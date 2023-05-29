import { Table, Button } from 'reactstrap'
import { usePagination } from '@hooks'
import { useNavigate } from 'react-router-dom'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ENCABEZADOS = [
  'Empresa',
  'Nombres',
  'Apellidos',
  'Departamento',
  'Municipio',
  'Dirección',
  'Teléfono',
  'Email',
  'Acciones'
]

const renderEncabezados = ENCABEZADOS.map((encabezado) => (
  <th key={encabezado}>{encabezado}</th>
))

export const TablaClientes = ({ items }) => {
  const navigate = useNavigate()
  const { start, end, renderPagination } = usePagination({
    pageSize: 10,
    arrayLength: items.length
  })

  return (
    <section>
      <Table hover bordered striped className='text-center'>
        <thead className='bg-primary text-white'>
          <tr className='position-relative'>
            <th colSpan={ENCABEZADOS.length} className='border-start-0 py-3'>
              <Button
                color='secondary'
                onClick={() => navigate('/registrar-cliente')}
                className='position-absolute top-50 start-0 translate-middle-y ms-3'
              >
                <FontAwesomeIcon className='text-primary' icon={faUserPlus} />
              </Button>
              <span>{items?.length} CLIENTES</span>
            </th>
          </tr>
          <tr>{renderEncabezados}</tr>
        </thead>
        <tbody className='bg-secondary text-primary'></tbody>
      </Table>
      <div className='d-flex justify-content-center'>{renderPagination}</div>
      {/* <div>
        <div className='p-2 mx-auto bg-primary rounded-top'>
          <div className='d-flex bg-primary justify-content-center align-items-center'>
            <h5 className='text-white m-0'> {searchResults.length} tickets</h5>
          </div>
        </div>
        <table className='table table-hover table-bordered text-center align-middle'>
          <thead className='text-white bg-primary text-center'>
            <tr>{encabezados}</tr>
          </thead>
          <tbody className='bg-secondary text-primary'>
            {listaTickets(currItems)}
          </tbody>
        </table>
      </div>
     */}
    </section>
  )
}
