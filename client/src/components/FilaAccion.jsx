const FilaAccion = ({
    fecha,
    usuarioEncargado,
    descripcion,
  }) => {
    const event = new Date(fecha);

    const fechaCO = event.toLocaleString('es-CO', { timeZone: 'UTC' });

    return (
      <tr>
            <td>{fechaCO}</td>
            <td>{descripcion}</td>
            <td>{usuarioEncargado}</td>
      </tr>
    )
  }
  export default FilaAccion