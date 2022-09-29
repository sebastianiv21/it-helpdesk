import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ListadoInformes = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="bg-primary d-flex p-2 position-relative rounded-top mt-3 align-items-center">
          {/* <!--Primera fila--> */}
          <button className="btn btn-secondary text-primary me-2 ms-2">
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button className="btn btn-secondary text-primary">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <h5 className="text-white m-0 mx-auto">34 informes</h5>
        </div>
        <div className="p-0">
          <table className="table table-bordered table-hover text-center">
            <thead className="bg-primary text-white">
              <tr>
                <th>

                </th>
                <th>
                  <label htmlFor="compania" className="form-label text-center">
                    Compañía
                  </label>
                  <div className="mx-auto">
                    <select
                      name="compania"
                      id="compania"
                      className="form-select"
                    >
                      <option selected value="" disabled>
                        Seleccionar...
                      </option>
                      <option value="FAM">Fundacion alto magdalena</option>
                      <option value="varisur">Varisur</option>
                      <option value="LCC">Liga contra el cancer</option>
                    </select>
                  </div>
                </th>
                <th>
                  <label
                    htmlFor="fechaCreacion"
                    className="form-label text-center"
                  >
                    Fecha de creación
                  </label>
                  <div className="mx-auto">
                    <input
                      type="date"
                      name="fechaCreacion"
                      id="fechaCreacion"
                      className="form-control"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-secondary">
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <p className="m-0">IT TECHNOLOGY</p>
                </td>
                <td>
                  <p className="m-0">21-Abril-2022</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <p className="m-0">IT TECHNOLOGY</p>
                </td>
                <td>
                  <p className="m-0">30-Agosto-2022</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex">
        {/* <!--Botones--> */}
        <div className="mx-auto">
          <button className="btn btn-primary text-white mx-1">1</button>
          <button className="btn btn-primary text-white mx-1">2</button>
          <button className="btn btn-primary text-white mx-1">3</button>
          <button className="btn btn-primary text-white mx-1">4</button>
          <button className="btn btn-primary text-white mx-1">5</button>
          <button className="btn btn-primary text-white mx-1">...</button>
        </div>
      </div>
    </div>
  );
};

export default ListadoInformes;
