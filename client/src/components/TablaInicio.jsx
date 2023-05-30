import { Table } from 'reactstrap'

const ENCABEZADOS = ['ID', 'Empresa', 'Cliente', 'Título', 'Categoría']

const renderEncabezados = ENCABEZADOS.map((encabezado) => (
  <th key={encabezado} className='align-middle'>
    {encabezado}
  </th>
))

export const TablaInicio = ({ items }) => {
  const renderItems = items.map((item) => (
    <tr key={item._id} className='align-middle'>
      <td>{item?.ticketRef}</td>
      <td>{item?.cliente?.empresa}</td>
      <td>
        {item?.cliente?.nombre} {item?.cliente?.apellidos}
      </td>
      <td>{item?.titulo}</td>
      <td>{item?.categoria}</td>
    </tr>
  ))

  return (
    <Table hover striped className='text-center text-uppercase'>
      <thead className='text-primary bg-white text-center'>
        <tr>{renderEncabezados}</tr>
      </thead>
      <tbody>{renderItems}</tbody>
    </Table>
  )
}
