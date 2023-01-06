import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import Boton from '../components/Boton';

const FilaTicket = ({
  id,
  titulo,
  prioridad,
  estado,
  categoria,
  fechadecreacion,
  fechadecierre,
  accion,
}) => {
  return (
    <tr className=''>
      <td >{id.slice(-6)}</td>
      <td>{titulo}</td>
      <td>{prioridad}</td>
      <td>{estado}</td>
      <td>{categoria}</td>
      <td>{fechadecreacion}</td>
      <td>{fechadecierre}</td>
      <td>
        {accion}
        <div className='d-flex justify-content-evenly'>
          <Boton
            icono={faPencil}
            colorBtn='primary'
            colorTxt='white'
            texto='Editar'
            estilos='d-flex align-items-center m-2'
          />
          <Boton
            icono={faTrash}
            colorBtn='primary'
            colorTxt='white'
            texto='Eliminar   '
            estilos='d-flex align-items-center m-2'
          />
        </div>
      </td>
    </tr>
  );
};

export default FilaTicket;
