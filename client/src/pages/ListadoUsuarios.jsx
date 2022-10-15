import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare, faTrashCan, faWrench } from "@fortawesome/free-solid-svg-icons";

const ListadoUsuarios = () => {
  return (
    <div className="container m-4 mx-auto">
      <div className="bg-primary text-white rounded-top">
        <h3 className="m-0 ps-4 py-3">Usuarios</h3>
      </div>
      <div className="bg-secondary p-3 rounded-bottom text-primary gap-3 container">
        <div className="row mb-3">
          <div className="col fs-4">
          <FontAwesomeIcon icon={faCircleUser} />
              <span className="ms-2">Daniel</span>
          </div>
          <div className="col fs-4">
          <FontAwesomeIcon icon={faWrench} />
              <span className="ms-2">Operario</span>
          </div>
          <div className="col-3 justify-content-end d-flex">
          <button className="btn btn-primary text-white me-3">
              <FontAwesomeIcon icon={faTrashCan} />
              <span className="ms-2">Eliminar</span>
            </button>
            <button className="btn btn-primary text-white me-3">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="ms-2">Editar</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col fs-4">
          <FontAwesomeIcon icon={faCircleUser} />
              <span className="ms-2">Alvaro</span>
          </div>
          <div className="col fs-4">
          <FontAwesomeIcon icon={faWrench} />
              <span className="ms-2">Operario</span>
          </div>
          <div className="col-3 justify-content-end d-flex">
          <button className="btn btn-primary text-white me-3">
              <FontAwesomeIcon icon={faTrashCan} />
              <span className="ms-2">Eliminar</span>
            </button>
            <button className="btn btn-primary text-white me-3">
              <FontAwesomeIcon icon={faPenToSquare} />
              <span className="ms-2">Editar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
 )
      
    
  
}

export default ListadoUsuarios