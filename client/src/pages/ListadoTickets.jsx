import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowsRotate, faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const ListadoTickets = () => {
  return (
    <div className="bg-secondary container mt-4">
            <div className="row bg-primary p-2 flex align-items-center">
                <div class="col-6 col-md-4">
                    {/* <!-- Ver como agregar boton de envio--> */}
                    <select select name ="informe" className="form-select border-success text-primary bg-secondary " id="informe">
                        <option value="informe">Informe</option>
                        <option value="cerrar">Cerrar</option>
                        <option value="eliminar">Eliminar</option>
                        <option value="cambiarEstado">Cambiar Estado</option>
                        <option value="cambiarPrioridad">Cambiar Prioridad</option>
                        <option value="cambiarCategoria">Cambiar Categoria</option>
                    </select>        
                </div>
                <div class="col-6 col-md-3 text-center">
                    <span className="text-primary form-control border-success bg-secondary"> 10 ITEMS </span>
                </div>
                <div class="col-6 col-md-3 flex align-items">
                        <input type="text" className="bg-secondary text-primary form-control border-success " placeholder="buscar" required /> 
                        <button type="button" className="btn btn-secondary text-primary me-md-2"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                        <button type="refresh" className="btn btn-secondary text-primary"><FontAwesomeIcon icon={faArrowsRotate}/></button>
                </div>
        </div>
        <div className="row">
        <table border={1} class="table table-hover table-bordered">
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
        </div>
        <div class="row">
          {/* <!--Botones--> */}
            <div class="col-sm">
                <button type="submit" className="btn btn-primary me-md-2"><FontAwesomeIcon icon={faFileExcel}/></button>
                <button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faFilePdf}/></button>
            </div>
            <div class="col-sm text-center ">
            <button className="btn btn-primary text-white me-md-2">1</button>
            <button className="btn btn-primary text-white me-md-2">2</button>
            <button className="btn btn-primary text-white me-md-2">3</button>
            <button className="btn btn-primary text-white me-md-2">4</button>
            <button className="btn btn-primary text-white me-md-2">5</button>
            <button className="btn btn-primary text-white me-md-2">...</button>
            </div>
        </div>
    </div>
  )
}

export default ListadoTickets