import { Button, Table } from 'reactstrap'
import { usePagination, useDate } from '@hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

const ENCABEZADOS = [
  'ID',
  'Empresa',
  'Cliente',
  'Título',
  'Prioridad',
  'Estado',
  'Categoría',
  'Fecha de Creación',
  'Fecha de Cierre',
  'Acciones'
]

const renderEncabezados = ENCABEZADOS.map((encabezado) => (
  <th key={encabezado} style={{ verticalAlign: 'middle' }}>
    {encabezado}
  </th>
))

export const TablaTickets = ({ items }) => {
  const { start, end, renderPagination } = usePagination({
    pageSize: 10,
    arrayLength: items.length
  })
  const { parseDate } = useDate()
  console.log('items', items)
  console.log(start, end)
  console.log(items.slice(start, end))

  const renderItems = items.slice(start, end).map((item) => (
    <tr key={item._id} style={{ verticalAlign: 'middle' }}>
      <td>{item?.ticketRef}</td>
      <td>{item?.cliente?.empresa}</td>
      <td>
        {item?.cliente?.nombre} {item?.cliente?.apellidos}
      </td>
      <td>{item?.titulo}</td>
      <td>{item?.prioridad}</td>
      <td>{item?.estado}</td>
      <td>{item?.categoria}</td>
      <td>{parseDate(item?.createdAt)}</td>
      <td>
        {item?.fechadecierre ? parseDate(item?.fechadecierre) : 'En trámite'}
      </td>
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
    <section>
      <Table hover bordered striped className='text-center text-uppercase'>
        <thead className='bg-primary text-white'>
          <tr>
            <th colSpan={ENCABEZADOS.length}>{items?.length} TICKETS</th>
          </tr>
          <tr>{renderEncabezados}</tr>
        </thead>
        <tbody className='bg-secondary text-primary'>{renderItems}</tbody>
      </Table>
      <div className='d-flex justify-content-center'>{renderPagination}</div>
    </section>
  )
}
