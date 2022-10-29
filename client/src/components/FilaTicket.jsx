const FilaTicket = ({
    id,
    titulo,
    prioridad,
    estado,
    categoria,
    anssla,
    resolucionsla,
    fechadecreacion,
  }) => {
    return (
      <tr>
            <td>
            <input type="checkbox" name="" id="" />
            </td>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{prioridad}</td>
            <td>{estado}</td>
            <td>{categoria}</td>
            <td>{anssla}</td>
            <td>{resolucionsla}</td>
            <td>{fechadecreacion}</td>
      </tr>
    )
  }
  
  export default FilaTicket
  