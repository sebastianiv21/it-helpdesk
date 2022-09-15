import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const CrearTicketRapido = () => {
  return (
    <div class="bg-secondary container"> <h1 class="bg-primary bg-success mt-4 text-center">Ticket Rapido</h1>
        <form>
            <div class="container">
                <div class="row">
                        <label for="tituloTicket"> Titulo del Ticket (*)</label>
                </div>
                <div class="row">
                    <input type="text" name="tituloTicket" id="tituloTicket" />
                </div>
                <div class="row">
                        <label for="cliente"> Cliente (*)</label>
                </div>
                <div class="row">
                    <select name="cliente" id="cliente">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>    
                </div>
                <div class="row">
                    <label for="estadoDelTicket"> Estado del Ticket (*)</label>
                </div>
                <div class="row">
                    <select name="estadoDelTicket" id="estadoDelTicket">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>
                </div>
                <div class="row">
                    <label for="prioridad"> Prioridad (*)</label>
                </div>
                <div class="row">
                    <select name="prioridad" id="prioridad">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>    
                </div>
                <div class="row">
                    <label for="categoria"> Categoria (*)</label>
                </div>
                <div class="row">
                    <select name="categoria" id="categoria">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>        
                </div>
                <div class="row">
                    <label for="subcategoria"> Subcategoria (*)</label>
                </div>
                <div class="row">
                    <select name="subcategoria" id="subcategoria">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>    
                </div>
                <div className="row text-center">
                    <button className="col-3 btn btn-primary me-3"><FontAwesomeIcon icon={faBan} className="pe-1"/>Cancelar</button>
                    <button className="col-3 btn btn-primary"><FontAwesomeIcon icon={faFloppyDisk} className="pe-1"/>Guardar</button>  
                </div>    
            </div>      

        </form>
    </div>
  )
}

export default CrearTicketRapido