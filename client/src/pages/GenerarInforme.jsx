import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";

const GenerarInforme = () => {
  return (
    <div className="m-2">
      <div className="bg-primary text-white">
        <h5 className="m-0 ps-4 py-2">Generacion de informes</h5>
        </div>
        <div className="bg-secondary">
          <form>
            {/* <!--Este es el formulario de la generacion de informes--> */}
            <label htmlFor="compania">Compañía</label>
            <select name="compania" id="compania">
              <option selected value="" disabled>Seleccionar...</option>
              <option value="FAM">Fundacion alto magdalena</option>
              <option value="varisur">Varisur</option>
              <option value="LCC">Liga contra el cancer</option>
            </select>
            <label htmlFor="fechaInicio">Fecha Inicio</label>
            <input type="date" name="fechaInicio" id="fechaInicio" />
            <label htmlFor="fechaFinal">Fecha Final</label>
            <input type="date" name="fechaFinal" id="fechaFinal" />
            <button className="btn btn-primary text-white">
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