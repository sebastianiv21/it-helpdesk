import { Table } from 'reactstrap'
import { usePagination } from '@hooks'

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
  <th key={encabezado}>{encabezado}</th>
))

export const TablaTickets = ({ items }) => {
  const { start, end, renderPagination } = usePagination({
    pageSize: 10,
    arrayLength: items.length
  })

  return (
    <section>
      <Table hover bordered striped className='text-center'>
        <thead className='bg-primary text-white'>
          <tr>
            <th colSpan={ENCABEZADOS.length}>{items?.length} TICKETS</th>
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
