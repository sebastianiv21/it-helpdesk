const FilaAccion = ({
    fecha,
    usuarioEncargado,
    descripcion,
  }) => {
    return (
      <tr>
            <td>{fecha}</td>
            <td>{descripcion}</td>
            <td>{usuarioEncargado}</td>
      </tr>
    )
  }
  export default FilaAccion