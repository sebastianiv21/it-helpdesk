const FilaCliente = ({
  email,
  nombres,
  apellidos,
  telefono,
  compania,
  ubicacion,
}) => {
  return (
    <tr>
      <td>
        <input type='checkbox' />
      </td>
      <td>{email}</td>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{telefono}</td>
      <td>{compania}</td>
      <td>{ubicacion}</td>
    </tr>
  )
}

export default FilaCliente
