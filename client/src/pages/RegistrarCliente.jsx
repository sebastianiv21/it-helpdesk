import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const RegistrarCliente = () => {
  return (
    <div className="container m-4 mx-auto">
      <div className="bg-primary text-white rounded-top">
        <h5 className="m-0 ps-4 py-3">Contacto</h5>
      </div>
      <div className="bg-secondary p-3 rounded-bottom text-primary">
        <form>
          <div className="d-flex justify-content-around mb-3">
            <div>
              <label htmlFor="email" className="form-label m-0">
                Email(*)
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="nombres" className="form-label m-0">
                Nombres(*)
              </label>
              <input
                type="text"
                name="nombres"
                id="nombres"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="apellidos" className="form-label m-0">
                Apellidos(*)
              </label>
              <input
                type="text"
                name="apellidos"
                id="apellidos"
                className="form-control"
              />
            </div>
          </div>
          <div className="d-flex justify-content-around mb-3">
            <div>
          <label htmlFor="tel" className="form-label m-0">Teléfono(*)</label>
          <input type="text" name="tel" id="tel" className="form-control" />
          </div>
          <div>
          <label htmlFor="compania" className="form-label m-0">Compañía(*)</label>
          <input type="text" name="compania" id="compania" className="form-control" />
          </div>
          <div>
          <label htmlFor="ubicacion" className="form-label m-0">Ubicación</label>
          <input type="text" name="ubicacion" id="ubicacion" className="form-control" />
          </div>
          </div>
          <div className="d-flex justify-content-end">
          <button className="btn btn-primary text-white me-3">
            <FontAwesomeIcon icon={faBan} />
            <span className="ms-2">Cancelar</span>
          </button>
          <button className="btn btn-primary text-white me-5">
            <FontAwesomeIcon icon={faFloppyDisk} />
            <span className="ms-2">Guardar</span>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrarCliente;
