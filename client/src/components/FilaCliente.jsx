import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Button} from 'reactstrap';

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
      <td>{email}</td>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{telefono}</td>
      <td>{compania}</td>
      <td>{ubicacion}</td>
      <td> <div className='d-flex justify-content-evenly'>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2'
            >
              <FontAwesomeIcon icon={faPencil} />
            </Button>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2'
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          </td>
    </tr>
  )
}

export default FilaCliente
