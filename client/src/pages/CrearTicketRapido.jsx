import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import Boton from '../components/Boton.jsx';
const CrearTicketRapido = () => {
  return (
    <div className="bg-secondary container m-4 mx-auto ">
         <h2 className="bg-primary row justify-content-center mt-2 text-white rounded-top py-2">Ticket Rapido</h2>
        <form>
            <div className="container text-primary d-flex flex-column gap-3">
                <div className="row px-3">
                        <label for="tituloTicket"> Titulo del Ticket (*)</label>
                        <input type="text" className="form-control border-success" name="tituloTicket" id="tituloTicket" placeholder='Ingrese la denominacion y/o motivo del ticket'/>
                </div>
                <div className="row px-3">
                        <label for="cliente"> Cliente (*)</label>
                        <select name="cliente" className="form-select border-success" id="cliente">
                        <option value=""></option>
                        <option value="itTechnology">IT Techonlogy</option>
                    </select>    
                </div>
                <div className="row px-3">
                    <label for="estadoDelTicket"> Estado del Ticket (*)</label>
                    <select name="estadoDelTicket" className="form-select border-success" id="estadoDelTicket">
                        <option value=""></option>
                        <option value="abierto">Abierto</option>
                        <option value="enEsperaUsuario">En espera Usuario</option>
                        <option value="respondidoUsuario">Respondido Usuario</option>
                    </select>
                </div>
                <div className="row px-3 form-label">
                    <label for="prioridad"> Prioridad (*)</label>
                    <select name="prioridad"className="form-select border-success" id="prioridad">
                        <option value=""></option>
                        <option value="critica">Critica</option>
                        <option value="alta">Alta</option>
                        <option value="normal">Normal</option>
                        <option value="baja">Baja</option>
                    </select>    
                </div>
                <div className="row px-3">
                    <label for="categoria"> Categoria (*)</label>
                    <select name="categoria" className="form-select border-success" id="categoria">
                        <option value=""></option>
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
                <div className="row px-3">
                    <label for="subcategoria"> Subcategoria (*)</label>
                    <select name="subcategoria" className="form-select border-success" id="subcategoria">
                        <option value=""></option>
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
                <div className="d-flex justify-content-center p-4">
                    <Boton icono={faBan} colorBtn='primary' colorTxt='white' texto='Cancelar' estilos= 'me-5' />
                    <Boton icono={faFloppyDisk} colorBtn='primary' colorTxt='white' texto='guardar' estilos= 'me-7' />
                    </div>
            </div>      
        </form>
    </div>
  )
}

export default CrearTicketRapido