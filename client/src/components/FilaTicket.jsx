import {faPencil,faTrash} from "@fortawesome/free-solid-svg-icons";
import Boton from "../components/Boton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <td>{fechadecierre}</td>
            <td>{accion} 
            <div className="d-flex justify-content-end">
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
    )
  }
  
  export default FilaTicket
  