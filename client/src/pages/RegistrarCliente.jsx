import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faFloppyDisk} from "@fortawesome/free-solid-svg-icons";

const RegistrarCliente = () => {
  return (
    <div>
        <h5 className="bg-primary text-white p-2 m-0">Contacto</h5>
        <div className="bg-secondary text-primary">
          <form>
            <label htmlFor="email">Email(*)</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="nombres">Nombres(*)</label>
            <input type="text" name="nombres" id="nombres" />
            <label htmlFor="apellidos">Apellidos(*)</label>
            <input type="text" name="apellidos" id="apellidos" />
            <label htmlFor="tel">Teléfono(*)</label>
            <input type="text" name="tel" id="tel" />
            <label htmlFor="compania">Compañía(*)</label>
            <input type="text" name="compania" id="compania" />
            <label htmlFor="ubicacion">Ubicación</label>
            <input type="text" name="ubicacion" id="ubicacion" />
            <button className="btn btn-primary text-white">
            <FontAwesomeIcon icon={faBan}/><span className="ms-2">Cancelar</span>
            </button>
            <button className="btn btn-primary text-white">
            <FontAwesomeIcon icon={faFloppyDisk}/><span className="ms-2">Guardar</span>
            </button>
          </form>
        </div>
      </div>
  )
}

export default RegistrarCliente