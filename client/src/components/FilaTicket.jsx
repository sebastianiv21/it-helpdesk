const FilaTicket = ({
    id,
    titulo,
    prioridad,
    estado,
    categoria,
    fechadecreacion,
    horadecreacion,
    fechadecierre,
    horadecierre,
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
            <td>{fechadecreacion}</td>
            <td>{horadecreacion}</td>
            <td>{fechadecierre}</td>
            <td>{horadecierre}</td>
      </tr>
    )
  }
  
  export default FilaTicket
  