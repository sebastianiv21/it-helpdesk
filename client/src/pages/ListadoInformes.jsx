import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ListadoInformes = () => {
  return (
    <div>
        <div>
          <div className="bg-primary">
            {/* <!--Primera fila--> */}
            <button className="btn btn-secondary text-primary">
              <FontAwesomeIcon icon={faDownload}/>
            </button>
            <button className="btn btn-secondary text-primary">
            <FontAwesomeIcon icon={faTrashCan}/>
            </button>
            <h5 className="text-white m-0">34 informes</h5>
          </div>
          <table className="w-100">
            <thead className="bg-primary text-white">
              <tr>
                <th></th>
                <th>
                  <label htmlFor="compania" className="d-block">Compañía</label>
                  <select name="compania" id="compania">
                    <option selected value="" disabled>Seleccionar...</option>
                    <option value="FAM">Fundacion alto magdalena</option>
                    <option value="varisur">Varisur</option>
                    <option value="LCC">Liga contra el cancer</option>
                  </select>
                </th>
                <th>
                  <label htmlFor="fechaCreacion" className="d-block">Fecha de creación</label>
                  <input type="date" name="fechaCreacion" id="fechaCreacion" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-secondary text-primary">
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td><p>IT TECHNOLOGY</p></td>
                <td><p>21-Abril-2022</p></td>
              </tr>
              <tr>
                <td><input type="checkbox" name="" id="" /></td>
                <td><p>IT TECHNOLOGY</p></td>
                <td><p>30-Agosto-2022</p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          {/* <!--Botones--> */}
          <button className="btn btn-primary text-white">1</button>
          <button className="btn btn-primary text-white">2</button>
          <button className="btn btn-primary text-white">3</button>
          <button className="btn btn-primary text-white">4</button>
          <button className="btn btn-primary text-white">5</button>
          <button className="btn btn-primary text-white">...</button>
        </div>
      </div>
  )
}

export default ListadoInformes