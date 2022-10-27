const FilaInforme = ({ compania, fechaCreacion }) => {
  return (
    <tr>
      <td>
        <input
          type='checkbox'
          name=''
          id=''
        />
      </td>
      <td>
        <p className='m-0'>{compania}</p>
      </td>
      <td>
        <p className='m-0'>{fechaCreacion}</p>
      </td>
    </tr>
  )
}

export default FilaInforme
