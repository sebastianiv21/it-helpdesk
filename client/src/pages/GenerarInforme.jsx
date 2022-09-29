import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const GenerarInforme = () => {
  return (
    <div className="container m-4 mx-auto">
      <div className="bg-primary text-white rounded-top">
        <h5 className="m-0 ps-4 py-3">Generacion de informes</h5>
        </div>
        <div className="bg-secondary p-3 rounded-bottom">
          <form className="d-flex justify-content-around">
            {/* <!--Este es el formulario de la generacion de informes--> */}
            <div className="d-flex flex-column">
            <label htmlFor="compania" className="form-label">Compañía</label>
            <select name="compania" id="compania" className="form-select">
              <option selected value="" disabled>Seleccionar...</option>
              <option value="FAM">Fundacion alto magdalena</option>
              <option value="varisur">Varisur</option>
              <option value="LCC">Liga contra el cancer</option>
            </select>
            </div>
            <div className="d-flex flex-column">
            <label htmlFor="fechaInicio" className="form-label">Fecha Inicio</label>
            <input type="date" name="fechaInicio" id="fechaInicio" className="form-control" />
            </div>
            <div className="d-flex flex-column">
            <label htmlFor="fechaFinal" className="form-label">Fecha Final</label>
            <input type="date" name="fechaFinal" id="fechaFinal" className="form-control" />
            </div>
            <button className="btn btn-primary text-white m-2 my-3">
              <FontAwesomeIcon icon={faDownload}/>
              <span className="ms-2">Generar</span>
            </button>
          </form>
        </div>
        <div>
          {/* En este div se encuentra el informe generado */}
        </div>
      </div>
  )
}

export default GenerarInforme