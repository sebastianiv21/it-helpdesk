import { useState, useEffect } from 'react';
import { faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useData from '../hooks/useData.js';
import axios from '../api/axios.js';
import { toast } from 'react-toastify';

const CrearTicket = () => {
  const { getClientes } = useData();
  const [clientes, setClientes] = useState([]);

  //? inicio formulario
  const TICKETS_URL = '/tickets';
  const [errMsg, setErrMsg] = useState('');

  const [formData, setFormData] = useState({
    titulo: '',
    cliente: '',
    estado: '',
    prioridad: '',
    categoria: '',
    subcategoria: '',
  });

  useEffect(() => {
    setErrMsg('');

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' });
    }
  }, [errMsg, formData]);

  const { titulo, cliente, estado, prioridad, categoria, subcategoria } =
    formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const ticketData = {
      titulo,
      cliente,
      estado,
      prioridad,
      categoria,
      subcategoria,
    };

    try {
      const response = await axios.post(
        TICKETS_URL,
        JSON.stringify(ticketData),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setFormData({
        titulo: '',
        cliente: '',
        estado: '',
        prioridad: '',
        categoria: '',
        subcategoria: '',
      });
      toast.info('Ticket creado exitosamente', { theme: 'colored' });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else {
        setErrMsg('La creación del ticket falló');
      }
    }
    console.log(ticketData);
  };

  //? fin formulario

  useEffect(() => {
    getClientes().then((json) => {
      setClientes(json);
      return json;
    });
  }, [getClientes]);

  const optClientes = clientes.map((cliente, index) => {
    return (
      <option
        key={index}
        value={`${cliente._id}`}
      >{`${cliente.nombre} ${cliente.apellidos}`}</option>
    );
  });

  return (
    <div className='container d-flex flex-column gap-3 mt-3'>
      <div>
        <div className='bg-primary text-white rounded-top'>
          <div className='bg-primary rounded-bottom p-2 px-3 d-flex gap-3 rounded-top'>
            <h4 className='ps-1 py-0 me-auto mb-auto'>Creacion del Ticket</h4>
          </div>
        </div>
        <div className='bg-secondary p-2 rounded-bottom text-primary'>
          <form onSubmit={onSubmit}>
            <div className='row d-flex justify-content-around mb-3 text-center'>
              <div className='col-sm'>
                <label hmlfor='titulo'> Titulo (*)</label>
                <input
                  type='text'
                  className='form-control'
                  name='titulo'
                  id='titulo'
                  placeholder='Ingrese el nombre del ticket'
                  onChange={onChange}
                />
              </div>
              <div className='col-sm'>
                <label htmlFor='estado'> Estado (*)</label>
                <select
                  name='estado'
                  className='form-select '
                  id='estado'
                  onChange={onChange}
                >
                  <option value=''>Seleccione estado</option>
                  <option value='abierto'>Abierto</option>
                  <option value='cerrado'>Cerrado</option>
                </select>
              </div>
              <div className='col-sm'>
                <label htmlFor='prioridad'> Prioridad (*)</label>
                <select
                  name='prioridad'
                  className='form-select'
                  id='prioridad'
                  onChange={onChange}
                >
                  <option value=''>Seleccione prioridad</option>
                  <option value='alta'>Alta</option>
                  <option value='media'>Media</option>
                  <option value='baja'>Baja</option>
                </select>
              </div>
            </div>
            <div className='row d-flex justify-content-around mb-2 text-center'>
              <div className='col-sm'>
                <label htmlFor='categoria'> Categoria (*)</label>
                <select
                  name='categoria'
                  className='form-select'
                  id='categoria'
                  onChange={onChange}
                >
                  <option value=''>Seleccione categoría</option>
                  <option value='actualizacion'>Actualización</option>
                  <option value='cambio'>Cambio</option>
                  <option value='configuracion'>Configuración</option>
                  <option value='hadware'>Hadware</option>
                  <option value='software'>Software</option>
                  <option value='instalacion'>Instalación</option>
                  <option value='otro'>Otro</option>
                  <option value='redes'>Redes</option>
                </select>
              </div>
              <div className='col-sm'>
                <label htmlFor='subcategoria'> SubCategoria (*)</label>
                <select
                  name='subcategoria'
                  className='form-select'
                  id='subcategoria'
                  onChange={onChange}
                >
                  <option value=''>Seleccione subcategoría</option>
                  <option value='antivirus'>Antivirus</option>
                  <option value='cambioDeRadioEnlace'>
                    Cambio de radio enlace
                  </option>
                  <option value='certificacionDeCableado'>
                    Certificación de cableado
                  </option>
                  <option value='contraseña'>Contraseña</option>
                  <option value='creacionDeBackup'>Creacion de Backup</option>
                  <option value='crm'>CRM</option>
                  <option value='desinstalacionDeRadioEnlace'>
                    Desinstalación de radio enlace
                  </option>
                  <option value='email'>Email</option>
                  <option value='erp'>ERP</option>
                  <option value='firewall'>Firewall</option>
                  <option value='impresora'>Impresora</option>
                  <option value='instalacionDeAp'>Instalación de Ap</option>
                  <option value='instalacionDeEnlaceSatelital'>
                    Instalacion de enlace satelital
                  </option>
                  <option value='instalacionDeRadioEnlace'>
                    Instalación de radio enlace
                  </option>
                  <option value='instalacionDeSolucionSolar'>
                    Instalación de solución solar
                  </option>
                  <option value='instalacionDeUps'>Instalacion de ups</option>
                  <option value='instalacionDeCableadoEstructural'>
                    Instalación de cableado estructural
                  </option>
                  <option value='internet'>Internet</option>
                  <option value='intranet'>Intranet</option>
                  <option value='lan'>LAN</option>
                  <option value='mantenimientoDeRadioEnlace'>
                    Mantenimiento de radio enlace
                  </option>
                  <option value='mantenimientoDeUps'>
                    Mantenimiento de ups
                  </option>
                  <option value='monitor'>Monitor</option>
                  <option value='office'>Office</option>
                  <option value='otro'>Otro</option>
                  <option value='pc'>PC</option>
                  <option value='perifericos'>Periféricos</option>
                  <option value='portatil'>Portatil</option>
                  <option value='recuperacionDeInformacion'>
                    Recuperación de información
                  </option>
                  <option value='restauracionDeBackup'>
                    Restauración de backup
                  </option>
                  <option value='revisionDeEnlaceSatelital'>
                    Revisión de enlace satelital
                  </option>
                  <option value='revisionDePuentosDeRed'>
                    Revisión de enlace de red
                  </option>
                  <option value='servidor'>Servidor</option>
                  <option value='sistemaOperativo'>Sistema Operativo</option>
                  <option value='smartphone'>Smartphone</option>
                  <option value='telefono'>Teléfono</option>
                  <option value='videoconferencia'>Videoconferencia</option>
                  <option value='vpn'>VPN</option>
                  <option value='web'>Web</option>
                  <option value='wifi'>WiFi</option>
                </select>
              </div>
              <div className='col-sm'>
                <label htmlFor='cliente'> Cliente (*)</label>
                <select
                  name='cliente'
                  className='form-select '
                  id='cliente'
                  onChange={onChange}
                >
                  <option value=''>Seleccione cliente</option>
                  {optClientes}
                </select>
              </div>
            </div>
            <div className='d-flex justify-content-end p-2'>
              <button
                type='reset'
                className='btn btn-primary text-white me-3'
              >
                <FontAwesomeIcon icon={faBan} />
                <span className='ms-2'>Cancelar</span>
              </button>
              <button className='btn btn-primary text-white me-5'>
                <FontAwesomeIcon icon={faFloppyDisk} />
                <span className='ms-2'>Guardar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearTicket;
