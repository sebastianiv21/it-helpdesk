import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import CampoResgistrarUsuario from "../components/CampoResgistrarUsuario";
const RegistrarUsuario = () => {
  return (
    <div className="container m-4 mx-auto">
      <div className="bg-primary text-white rounded-top">
        <h5 className="m-0 ps-4 py-3">Nuevo Usuario</h5>
      </div>
      <div className="bg-secondary p-3 rounded-bottom text-primary">
        <form>
        <div className="row justify-content-left mb-3">
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='nombres' 
              etiqueta='Nombres' />
            </div>
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='apellidos' 
              etiqueta='Apellidos' />
            </div>
        </div>
          <div className="row justify-content-left mb-3">
            <div className="col-auto d-flex align-items-center w-50">
              <label htmlFor="tipo de Documento" className="form-label m-0 me-2">Tipo de Documento(*)</label>
              <select name="tipo de Documento" className="form-select">
                <option>Seleccione una opcion</option>
                <option>Cedula de Ciudadania</option>
                <option>Cedula Extranjera</option>
                <option>Tarjeta de identidad</option>
              </select>
            </div>
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='numero de documento' 
              etiqueta='Numero de Documento' />
            </div>
         </div>
         <div className="row justify-content-left mb-3">
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='email' 
              etiqueta='Correo Electronico' />
            </div>
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='numero de celular' 
              etiqueta='Numero de Celular' />
            </div>
         </div>
         <div className="row justify-content-left mb-3">
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='cargo' 
              etiqueta='Cargo' />
            </div>
            <div className="col-auto d-flex align-items-center w-50">
            <CampoResgistrarUsuario 
              usuario='direccion residencial' 
              etiqueta='Direccion Residencial' />
            </div>
         </div>
         <div className="row justify-content-left mb-3">
            <div className="col-auto d-flex align-items-center w-50">
              <label htmlFor="foto" className="form-label m-0 me-2">Foto(*)</label>
              <input type="file" name="foto" id="foto" className="form-control"/>
            </div>
         </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary text-white me-3">
              <FontAwesomeIcon icon={faEraser} />
              <span className="ms-2">Limpiar</span>
            </button>
            <button className="btn btn-primary text-white me-5">
              <FontAwesomeIcon icon={faFloppyDisk} />
              <span className="ms-2">Guardar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrarUsuario