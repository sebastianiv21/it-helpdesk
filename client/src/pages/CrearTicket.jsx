import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
const CrearTicket = () => {
  return (
    <div class="bg-secondary container mt-4">
        <div class="row bg-primary">
            <div class="col-10">
                <h1 class="text-center text-white">Creacion del Ticket </h1>   
            </div>
            <div class="col-2 mt-2">
                <button className="btn btn-secondary text-primary me-md-3"><FontAwesomeIcon icon={faBan} className="pe-1"/></button>
                <button className="btn btn-secondary text-primary"><FontAwesomeIcon icon={faFloppyDisk} className="pe-1"/></button>     
            </div>
        </div>
        <div>
                <div class="row text-center mt-3 text-primary">
                    <div class="col-sm">
                            <label hmlfor ="titulo"> Titulo (*)</label> 
                            <form action="label"></form>
                            <input type="text" className="form-control border-success" name="titulo" id="titulo"/>
                    </div>
                    <div class="col-sm">
                        <label for="estado"> Estado (*)</label>
                        <form action="label"></form>
                        <select name="estado" className="form-select border-success" id="estado">
                            <option value="abierto">abierto</option>
                            <option value="cerrado">cerrado</option>
                        </select>        
                    </div>
                    <div class="col-sm">
                        <label for="prioridad"> Prioridad (*)</label>
                        <form action="label"></form>
                        <select name="prioridad" className="form-select border-success" id="prioridad">
                            <option value="alta">alta</option>
                            <option value="normal">normal</option>
                            <option value="baja">baja</option>
                        </select>        
                    </div>
                </div>    
                <div class="row text-center mt-3 text-primary">
                    <div class="col-sm">
                    <label for="categoria"> Categoria (*)</label>   
                    <form action="label"></form>
                    <select name="categoria" className="form-select border-success" id="categoria">
                        <option value="hadware">Hadware</option>
                        <option value="software">Software</option>
                    </select>            
                    </div>
                    <div class="col-sm">
                        <label for="subcategoria"> SubCategoria (*)</label>
                        <form action="label"></form>
                        <select name="subcategoria" className="form-select border-success" id="subcategoria">
                            <option value="pc">Pc</option>
                        </select>                        
                    </div>
                </div>
                <div class="row text-center mt-3 text-primary">
                    <div class="col-sm">
                        <label for="respuestaAns"> Respuesta ANS (SLA)</label>
                        <form action="label"></form>
                        <input type="datetime-local" name="respuestaAns" id="respuestaAns"/>        

                    </div>
                    <div class="col-sm">
                        <label for="resolucionAns"> Resolucion ANS (SLA)</label>
                        <form action="label"></form>
                        <input type="datetime-local" name="resolucionAns" id="resolucionAns"/>                    
                    </div>
                </div>
        </div>
        <div class="bg-secondary row"><h1 class="bg-primary align text-center text-white mt-3">Historial de Acciones</h1>
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-3">
                        <label for="tiposdehistorial"></label>
                        <select name ="tiposdehistorial" className="form-select border-success" id="tiposdehistorial">
                            <option value="nombre">Nombre</option>
                            <option value="apellido">Apellido</option>
                        </select>        
                    </div>
                    <div class="col-3">
                        <label for="usuarioencargado"></label>
                        <select name ="usuarioencargado" className="form-select border-success" id="usuarioencargado">
                            <option value="benitosanchez"> Benito Sanchez</option>
                            <option value="enriquieta">Enriqueta</option>
                        </select>            
                    </div>
                </div>
            </div>
                <div class="row">
                    <div class="col-6 mt-2 ">
                        <table border={1} class="table table-hover table-bordered">
                            <thead>
                                <tr className="text-white text-center bg-primary">
                                    <th>Anexos</th>
                                    <th>Fecha</th>
                                    <th>Autor</th> 
                                    <th>Accion</th> 
                                </tr>
                            </thead>
                            <tbody className="text-primary bg-white">
                                <tr>
                                    <td>anexo1</td>
                                    <td>28/08/22</td>
                                    <td>Benitojuarez</td>
                                    <td>jugarxbox</td>
                                </tr>
                                <tr>
                                    <td>anexo1</td>
                                    <td>28/08/22</td>
                                    <td>Benitojuarez</td>
                                    <td>jugarxbox</td>
                                </tr>
                                <tr>
                                    <td>anexo1</td>
                                    <td>28/08/22</td>
                                    <td>Benitojuarez</td>
                                    <td>jugarxbox</td>  
                                </tr>
                                <tr>
                                    <td>anexo1</td>
                                    <td>28/08/22</td>
                                    <td>Benitojuarez</td>
                                    <td>jugarxbox</td>
                                </tr>
                                <tr>
                                    <td>anexo1</td>
                                    <td>28/08/22</td>
                                    <td>Benitojuarez</td>
                                    <td>jugarxbox</td>
                                </tr>
                                <tr>
                                    <td>anexo1</td>
                                    <td>28/08/22</td>
                                    <td>Benitojuarez</td>
                                    <td>jugarxbox</td>
                                </tr>
                            </tbody>
                        </table>     
                    </div>
                    <div className="col-6 mt-2">
                        <h2 className="form-control border-success bg-primary text-white text-center">Nueva accion</h2>
                        <textarea name="comentario" className="form-control border-success" id="comentario" placeholder="ingrese accion" cols="60" rows="10"></textarea>    
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                    </div>
                    <div class="col-6">
                        <h1 className="bg-primary form-control border-success text-white text-center mt-3">Insertar Anexo</h1>
                            <button ><FontAwesomeIcon icon={faBan} className="pe-1"/></button>
                            <input type="file" name="anexo" id="anexo"/>
                    </div>
                </div>
         </div>
         <div className="bg-secondary row p-3">
            <h1 class="bg-primary mt-5 text-center text-white">Contacto</h1>
            <form className="text-primary">
                <div className="row">
                    <div className="col-sm">
                    <label for="mail">Mail(*)</label>
                <form action="label"></form>
                <input type="text" className="form-control border-sucess" name="mail" id="mail"/>
                    </div>
                    <div className="col-sm">
                    <label for="nombre">Nombre(*)</label>
                <form action="label"></form>
                <input type="text" className="form-control border-sucess" name="nombre" id="nombre"/> 
                    </div>
                    <div className="col-sm">
                    <label for="apellido">Apellido(*)</label>
                <form action="label"></form>
                <input type="text" className="form-control border-sucess" name="apellido" id="apellido"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <label for="tel">Teléfono(*)</label>
                <form action="label"></form>
                <input type="text" className="form-control border-sucess" name="tel" id="tel"/>
                    </div>
                    <div className="col-sm">
                    <label for="compania">Compañía(*)</label>
                <form action="label"></form>
                <select name="compania" className="form-select border-success" id="estado">
                            <option value="abierto">pitufinas</option>
                            <option value="cerrado">it</option>
                        </select>        
                    </div>
                    <div className="col-sm">
                    <label for="ubicacion">Ubicación</label>
                <form action="label"></form>
                <input type="text"className="form-control border-sucess" name="ubicacion" id="ubicacion"/>
                    </div>
                </div>
                </form>
        </div>
        </div>
  )
}
export default CrearTicket