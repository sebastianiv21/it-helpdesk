import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEraser,
  faUserPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ListadoClientes = () => {
  return (
    <div className="container d-flex flex-column gap-3 mt-3">
      <div>
        {/* <!--modulo busqueda--> */}

        <h5 className="bg-primary text-white p-2 m-0 rounded-top">Búsqueda</h5>
        <form className="bg-secondary rounded-bottom p-2 px-4 d-flex gap-3 justify-content-around">
          <input
            type="text"
            name="busqueda"
            id="busqueda"
            className="form-control m-2"
            placeholder="Ingrese nombre, apellido, email o teléfono del contacto"
          />
          <button className="btn btn-primary text-white d-flex align-items-center m-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span className="ms-2">Buscar</span>
          </button>
          <button className="btn btn-primary text-white d-flex align-items-center m-2">
            <FontAwesomeIcon icon={faEraser} />
            <span className="ms-2">Limpiar</span>
          </button>
        </form>
      </div>
      <div>
        {/* <!--listado de contactos--> */}
        <div>
          {/* <!--Primera fila--> */}
          <div className="bg-primary rounded-top p-2 d-flex gap-2">
            <button className="btn btn-secondary text-primary">
              <FontAwesomeIcon icon={faUserPlus} />
            </button>
            <button className="btn btn-secondary text-primary">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <h5 className="text-white m-0 mx-auto">62 contactos</h5>
          </div>
          <table className="table table-hover table-bordered text-center">
            <thead className="bg-primary text-white">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Teléfono</th>
                <th>Compañía</th>
                <th>Ubicación</th>
              </tr>
            </thead>
            <tbody className="bg-secondary text-primary">
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>ittechnologiers@ittechnology.com</td>
                <td>Sebastian</td>
                <td>Ibarra Villamil</td>
                <td>3120254521</td>
                <td>It Technology</td>
                <td>Neiva</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>ittechnologiers@ittechnology.com</td>
                <td>Alvaro José</td>
                <td>Polania Alvarez</td>
                <td>3124584521</td>
                <td>It Technology</td>
                <td>Neiva</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 d-flex justify-content-center gap-1">
          {/* <!--Botones--> */}
          <button className="btn btn-primary text-white">1</button>
          <button className="btn btn-primary text-white">2</button>
          <button className="btn btn-primary text-white">3</button>
          <button className="btn btn-primary text-white">4</button>
          <button className="btn btn-primary text-white">5</button>
          <button className="btn btn-primary text-white">...</button>
        </div>
      </div>
    </div>
  );
};

export default ListadoClientes;
