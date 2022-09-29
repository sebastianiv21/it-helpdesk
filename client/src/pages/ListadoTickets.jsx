import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowsRotate,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const ListadoTickets = () => {
  return (
    <div className="container mt-4 p-0">
      <div className="bg-primary p-2 d-flex align-items-center justify-content-around">
        <div>
          {/* <!-- Ver como agregar boton de envio--> */}
          <select
            name="informe"
            className="form-select border-success text-primary bg-secondary "
            id="informe"
          >
            <option value="informe">Informe</option>
            <option value="cerrar">Cerrar</option>
            <option value="eliminar">Eliminar</option>
            <option value="cambiarEstado">Cambiar Estado</option>
            <option value="cambiarPrioridad">Cambiar Prioridad</option>
            <option value="cambiarCategoria">Cambiar Categoria</option>
          </select>
        </div>
        <div className="text-center">
          <span className="text-primary form-control border-success bg-secondary">
            {" "}
            10 ITEMS{" "}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <input
            type="text"
            className="bg-secondary text-primary form-control border-success "
            placeholder="Buscar"
            required
          />
          <button
            type="button"
            className="btn btn-secondary text-primary"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button type="refresh" className="btn btn-secondary text-primary">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
        </div>
      </div>
      <div>
        <table border={1} className="table table-hover table-bordered text-center">
          <thead className="text-primary bg-light text-center">
            <tr>
              <th></th>
              <th>ID</th>
              <th>Titulo</th>
              <th>Prioridad</th>
              <th>Estado</th>
              <th>Categoria</th>
              <th>ANS (SLA) </th>
              <th>Resolucion ANS (SLA)</th>
              <th>Fecha de creacion</th>
            </tr>
          </thead>
          <tbody className="bg-secondary">
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>344</td>
              <td>Se daño el wifi</td>
              <td>alta</td>
              <td>Abierto</td>
              <td>Software</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row mb-4">
        {/* <!--Botones--> */}
        <div className="col-sm">
          <button type="submit" className="btn btn-primary me-md-2">
            <FontAwesomeIcon icon={faFileExcel} />
          </button>
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faFilePdf} />
          </button>
        </div>
        <div className="col-sm text-center ">
          <button className="btn btn-primary text-white me-md-2">1</button>
          <button className="btn btn-primary text-white me-md-2">2</button>
          <button className="btn btn-primary text-white me-md-2">3</button>
          <button className="btn btn-primary text-white me-md-2">4</button>
          <button className="btn btn-primary text-white me-md-2">5</button>
          <button className="btn btn-primary text-white me-md-2">...</button>
        </div>
      </div>
    </div>
  );
};

export default ListadoTickets;
