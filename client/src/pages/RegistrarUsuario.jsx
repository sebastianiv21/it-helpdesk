import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const RegistrarUsuario = () => {
  return (
   <div>
    <div className="container-lg">
        <form  id ="formulario" className="bg-secondary" method ="post" enctype="multipart/form-data">    
            <table className="p-0">
                <tr className="bg-primary w-100 text-white">
                    <th>Nuevo usuario</th> 
                    <th></th>
                </tr> 
                <tbody>
                    <tr> 
                        <td>
                            <br />
                            Nombre<input type="text" placeholder="Nombre" size="49"/>
                        </td>
                        <td width="710 px">
                            <br/>
                             Apellidos <input type="text" placeholder="Apellidos" size="50"/>
                        </td>
                    </tr>
                    <tr class="rw-selector" >
                        <td>
                            <br/>
                            <form> Tipo de documento
                                <select class="selector">
                                    <option>Seleccione una opcion</option>
                                    <option>Cedula de Ciudadania</option>
                                    <option>Cedula Extranjera</option>
                                    <option>Tarjeta de Identidad</option>
                                </select>  
                            </form>
                            <td>
                                <br/>
                                Numero de documento <input type="text" placeholder="Numero de Documento" size="40" />
                            </td>
                        </td>    
                    </tr>
                    <tr>
                        <td>
                            <br/>
                            Correo electronico <input type="text" placeholder="Correo" size="40" />
                        </td>
                        <td>
                            <br/>
                            Celular<input type="text" placeholder="Numero de celular" size="52"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <br/>
                            Cargo <input type="text" placeholder="Cargo" size="50" />
                        </td>
                        <td>
                            <br/>
                            Direccion <input type="text" placeholder="Direccion" size="50"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <br/>
                            Foto
                            <label for="Foto"></label>
                            <input type="file"  name="Imagen" id="Imagen" size="488"/>
                        </td>  
                        <td>
                            <br/>
                                <button class="btn btn-light" type="submit" ><FontAwesomeIcon icon={faFloppyDisk}/>Guardar</button>
                                <button class="btn btn-light" type="reset"><FontAwesomeIcon icon={faEraser}/>Limpiar</button>
                        </td> 
                    </tr>    
                </tbody>
            </table>
        </form>   
    </div>
    </div>
  )
}

export default RegistrarUsuario