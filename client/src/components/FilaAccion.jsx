const FilaAccion = ({
    fecha,
    encargado,
    accion,
  }) => {
    return (
      <tr>
            <td>{fecha}</td>
            <td>{encargado}</td>
            <td>{accion}</td>
      </tr>
    )
  }
  export default FilaAccion