const FilaAccion = ({
    anexos,
    fecha,
    encargado,
    accion,
  }) => {
    return (
      <tr>
            <td>{anexos}</td>
            <td>{fecha}</td>
            <td>{encargado}</td>
            <td>{accion}</td>
      </tr>
    )
  }
  export default FilaAccion