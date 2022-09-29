import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const CrearTicketRapido = () => {
  return (
    <div className="bg-secondary container">
         <h1 className="bg-primary row justify-content-center mt-2 text-white">Ticket Rapido</h1>
        <form>
            <div className="container text-primary">
                <div className="row">
                        <label for="tituloTicket"> Titulo del Ticket (*)</label>
                        <form action="label"></form>
                        <input type="text" className="form-control border-success" name="tituloTicket" id="tituloTicket" />
                </div>
                <div className="row">
                        <label for="cliente"> Cliente (*)</label>
                        <form action="label"></form>
                        <select name="cliente" className="form-select border-success" id="cliente">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>    
                </div>
                <div className="row">
                    <label for="estadoDelTicket"> Estado del Ticket (*)</label>
                    <form action="label"></form>
                    <select name="estadoDelTicket" className="form-select border-success" id="estadoDelTicket">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>
                </div>
                <div className="row">
                    <label for="prioridad"> Prioridad (*)</label>
                    <form action="label"></form>
                    <select name="prioridad"className="form-select border-success" id="prioridad">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>    
                </div>
                <div className="row">
                    <label for="categoria"> Categoria (*)</label>
                    <form action="label"></form>
                    <select name="categoria" className="form-select border-success" id="categoria">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>        
                </div>
                <div className="row">
                    <label for="subcategoria"> Subcategoria (*)</label>
                    <form action="label"></form>
                    <select name="subcategoria" className="form-select border-success" id="subcategoria">
                        <option value="benito">Badbunny</option>
                        <option value="luis">Luis</option>
                        <option value="goku">Kakaroto</option>
                    </select>    
                </div>
                <div className="row justify-content-center p-4">
                    <button className="col-2 btn btn-primary me-5 mt-2"><FontAwesomeIcon icon={faBan} className="pe-1"/>Cancelar</button>
                    <button className="col-2 btn btn-primary mt-2"><FontAwesomeIcon icon={faFloppyDisk} className="pe-1"/>Guardar</button>  
                </div>    
            </div>      

        </form>
    </div>
  )
}

export default CrearTicketRapido