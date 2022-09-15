import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowsRotate, faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ListadoTickets = () => {
  return (
    <div className="bg-secondary container">
        <div className="bg-primary bg-success mt-2">
            <div className="row">
                <div class="col-sm">
                    <label for=""></label> 
                    {/* <!-- Ver como agregar boton de envio--> */}
                    <select select name ="informe" id="informe">
                        <option value="informe">Informe</option>
                        <option value="cerrar">Cerrar</option>
                        <option value="eliminar">Eliminar</option>
                        <option value="cambiarEstado">Cambiar Estado</option>
                        <option value="cambiarPrioridad">Cambiar Prioridad</option>
                        <option value="cambiarCategoria">Cambiar Categoria</option>
                    </select>        
                </div>
                <div class="col-sm">
                    <span> 10 items</span>
                </div>
                <div class="col-sm">
                    <div class="buscar">
                        <input type="text" placeholder="buscar" required />
                        <button type="button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        <button type="refresh"><FontAwesomeIcon icon={faArrowsRotate}/></button>
                    </div>            
                </div>
            </div>
        </div>
        <table class="table-striped table-bordered">
            <thead>
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
            <tbody>
                <tr>
                    <td><input type="checkbox" name="" id="" /></td>
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
        <div class="row">
          {/* <!--Botones--> */}
            <div class="col-sm">
                <button type="submit"><FontAwesomeIcon icon={faFileExcel}/></button>
                <button type="submit"><FontAwesomeIcon icon={faFilePdf}/></button>
            </div>
            <div class="col-sm text-center">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>...</button>
            </div>
        </div>
    </div>
  )
}

export default ListadoTickets