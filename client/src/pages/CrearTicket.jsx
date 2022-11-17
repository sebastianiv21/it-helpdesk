import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, FormGroup, Label } from "reactstrap";
import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import Boton from '../components/Boton.jsx';
import CampoFormulario from '../components/CampoFormulario'
const CrearTicket = () => {
  return (
    <div class="container d-flex flex-column gap-3 mt-3">
        <div>
                <div class="bg-primary text-white rounded-top">
                        <div className="bg-primary rounded-bottom p-2 px-4 d-flex gap-3 rounded-top">
                        <h4 className="ps-4 py-1 me-auto">Creacion del Ticket</h4>
                         </div>
                </div> 
            <div className="bg-secondary p-3 rounded-bottom text-primary">
                <form>
                    <div className="row d-flex justify-content-around mb-3 text-center">
                                <div class="col-sm">
                                        <label hmlfor ="titulo"> Titulo (*)</label> 
                                        <input type="text" className="form-control" name="titulo" id="titulo" placeholder='Ingrese el nombre del ticket'/>
                                </div>
                                <div className="col-sm">
                                    <label for="estado"> Estado (*)</label>
                                    <select name="estado" className="form-select " id="estado">
                                    <option value="abierto">Abierto</option>
                                    <option value="enEsperaUsuario">En espera Usuario</option>
                                    <option value="respondidoUsuario">Respondido Usuario</option>
                                    <option value="cerrado">Cerrado</option>
                                    </select>        
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="prioridad"> Prioridad (*)</label>
                                    <select name="prioridad" className="form-select" id="prioridad">
                                    <option value="critica">Critica</option>
                                    <option value="alta">Alta</option>
                                    <option value="normal">Normal</option>
                                    <option value="baja">Baja</option>
                                    </select>        
                                </div>
                            </div>    
                            <div class="row text-center mt-3 text-primary">
                                <div class="col-sm">
                                <label htmlFor="categoria"> Categoria (*)</label>   
                                <select name="categoria" className="form-select" id="categoria">
                                <option value="actualizacion">Actualización</option>
                                <option value="cambio">Cambio</option>
                                <option value="configuracion">Configuración</option>
                                <option value="hadware">Hadware</option>
                                <option value="software">Software</option>
                                <option value="instalacion">Instalación</option>
                                <option value="otro">Otro</option>
                                <option value="redes">Redes</option>
                                </select>            
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="subcategoria"> SubCategoria (*)</label>
                                    <select name="subcategoria" className="form-select" id="subcategoria">
                                    <option value="antivirus">Antivirus</option>
                                    <option value="cambioDeRadioEnlace">Cambio de radio enlace</option>
                                    <option value="certificacionDeCableado">Certificación de cableado</option>
                                    <option value="contraseña">Contraseña</option>
                                    <option value="creacionDeBackup">Creacion de Backup</option>
                                    <option value="crm">CRM</option>
                                    <option value="desinstalacionDeRadioEnlace">Desinstalación de radio enlace</option>
                                    <option value="email">Email</option>
                                    <option value="erp">ERP</option>
                                    <option value="firewall">Firewall</option>
                                    <option value="impresora">Impresora</option>
                                    <option value="instalacionDeAp">Instalación de Ap</option>
                                    <option value="instalacionDeEnlaceSatelital">Instalacion de enlace satelital</option>
                                    <option value="instalacionDeRadioEnlace">Instalación de radio enlace</option>
                                    <option value="instalacionDeSolucionSolar">Instalación de solución solar</option>
                                    <option value="instalacionDeUps">Instalacion de ups</option>
                                    <option value="instalacionDeCableadoEstructural">Instalación de cableado estructural</option>
                                    <option value="internet">Internet</option>
                                    <option value="intranet">Intranet</option>
                                    <option value="lan">LAN</option>
                                    <option value="mantenimientoDeRadioEnlace">Mantenimiento de radio enlace</option>
                                    <option value="mantenimientoDeUps">Mantenimiento de ups</option>
                                    <option value="monitor">Monitor</option>
                                    <option value="office">Office</option>
                                    <option value="otro">Otro</option>
                                    <option value="pc">PC</option>
                                    <option value="perifericos">Periféricos</option>
                                    <option value="portatil">Portatil</option>
                                    <option value="recuperacionDeInformacion">Recuperación de información</option>
                                    <option value="restauracionDeBackup">Restauración de backup</option>
                                    <option value="revisionDeEnlaceSatelital">Revisión de enlace satelital</option>
                                    <option value="revisionDePuentosDeRed">Revisión de enlace de red</option>
                                    <option value="servidor">Servidor</option>
                                    <option value="sistemaOperativo">Sistema Operativo</option>
                                    <option value="smartphone">Smartphone</option>
                                    <option value="telefono">Teléfono</option>
                                    <option value="videoconferencia">Videoconferencia</option>
                                    <option value="vpn">VPN</option>
                                    <option value="web">Web</option>
                                    <option value="wifi">WiFi</option>
                                    </select>                        
                                </div>
                            </div>
                            <div class="row text-center mt-3 text-primary">
                                <div class="col-sm">
                                <label htmlFor="cliente"> Cliente (*)</label>   
                                <select name="cliente" className="form-select" id="cliente">
                                <option value="salazar">Daniel Felipe Salazar</option>
                                </select>            
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="empresa"> Empresa (*)</label>
                                    <select name="empresa" className="form-select" id="empresa">
                                    <option value="ittecnhology">It tecnology</option>
                                    </select>                        
                                </div>
                            </div>
                            <div className='mt-3 d-flex justify-content-end'>
                                <Boton
                                texto='Cancelar'
                                icono={faBan}
                                estilos='me-3'
                                colorBtn='primary'
                                colorTxt='white'
                                />
                                <Boton
                                texto='Guardar'
                                icono={faFloppyDisk}
                                estilos='me-5'
                                colorBtn='primary'
                                colorTxt='white'
                                />
                            </div>
                </form>
            </div>
        </div> 
    </div>
  )
}

export default CrearTicket