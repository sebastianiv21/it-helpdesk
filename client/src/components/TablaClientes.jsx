import { Table, Button } from 'reactstrap'
import { usePagination } from '@hooks'
import { useNavigate } from 'react-router-dom'
import {
  faUserPlus,
  faPencil,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
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
  <th key={encabezado} className='align-middle'>
    {encabezado}
  </th>
))

export const TablaClientes = ({ items }) => {
  const navigate = useNavigate()
  const { start, end, renderPagination } = usePagination({
    pageSize: 10,
    arrayLength: items.length
  })

  const renderItems = items.slice(start, end).map((item) => (
    <tr key={item._id} className='align-middle'>
      <td>{item?.empresa}</td>
      <td>{item?.nombre}</td>
      <td>{item?.apellidos}</td>
      <td>{item?.departamento}</td>
      <td>{item?.municipio}</td>
      <td>{item?.direccion}</td>
      <td>{item?.telefono}</td>
      <td>{item?.email}</td>
      <td>
        <div className='d-flex gap-2'>
          <Button color='primary' onClick={() => console.log('edit')}>
            <FontAwesomeIcon icon={faPencil} />
          </Button>
          <Button color='primary' onClick={() => console.log('delete')}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </td>
    </tr>
  ))

  return (
    <>
      <Table hover bordered striped className='text-center text-uppercase'>
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
        <tbody className='bg-secondary text-primary'>{renderItems}</tbody>
      </Table>
      <div className='d-flex justify-content-center'>{renderPagination}</div>
    </>
  )
}
