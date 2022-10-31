import { faCircleUser, faPenToSquare, faTrashCan, faWrench } from "@fortawesome/free-solid-svg-icons";
import Boton from "../components/Boton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FilaUsuario = ({foto,nombres,apellidos,cargo}) => {
  return (
    <div className="row mb-3">
          <div className="col fs-4">
            {/* aqui debe importarce la foto */}
          <FontAwesomeIcon icon={faCircleUser} />
              <span className="ms-2">{`${nombres} ${apellidos}`}</span>
          </div>
          <div className="col fs-4">
          <FontAwesomeIcon icon={faWrench} />
              <span className="ms-2">{cargo}</span>
          </div>
          <div className="col-3 justify-content-end d-flex">
          <Boton
              icono={faTrashCan}
              colorBtn='primary'
              colorTxt='white'
              estilos='me-3'
              texto='Eliminar'
            />
            <Boton
              icono={faPenToSquare}
              colorBtn='primary'
              colorTxt='white'
              estilos='me-3'
              texto='Editar'
            />
          </div>
        </div>
  )
}

export default FilaUsuario
