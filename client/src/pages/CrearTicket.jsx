import { useState, useEffect} from 'react';
import { faBan, faFloppyDisk, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useData from '../hooks/useData.js';
import axios from '../api/axios.js';
import { toast } from 'react-toastify';
import { InputGroup} from 'reactstrap';

const listadoCategorias = [
  {
    nombreCategoria: 'HARDWARE',
    subcategorias: [ { nombre: 'Escáner' }, { nombre: 'Impresora' }, { nombre: 'Monitor' }, { nombre: 'PC' }, { nombre: 'Portátil' }, { nombre: 'Servidor' }, { nombre: 'Smartphone' }, { nombre: 'UPS'}]
  },
{
    nombreCategoria: 'SOFTWARE',
    subcategorias: [ { nombre: 'Configuración periférico' }, { nombre: 'Copia de información' }, { nombre: 'Correo electrónico' }, { nombre: 'Office' }, { nombre: 'Sistema Operativo'}]
  },
  {
    nombreCategoria: 'INFRAESTRUCTURA',
    subcategorias: [ { nombre: 'Cableado estructurado' }, { nombre: 'Caseta nodo' }, { nombre: 'Sistema eléctrico' }, { nombre: 'Solución solar' }, { nombre: 'Torre de comunicaciones'}]
  },
{
    nombreCategoria: 'SERVIDORES',
    subcategorias: [ { nombre: 'Backup' }, { nombre: 'Configuración' }, { nombre: 'Cuentas de usuario' }, { nombre: 'Políticas- Reglas'}]
  },
  {
    nombreCategoria: 'CIBERSEGURIDAD',
    subcategorias: [ { nombre: 'Antivirus' }, { nombre: 'Firewall' }, { nombre: 'VPN'}]
  },
  {
    nombreCategoria: 'SEGURIDAD ELECTRÓNICA',
    subcategorias: [ { nombre: 'Biométrico' }, { nombre: 'Cámara' }, { nombre: 'Sensor'}]
  },
  {
    nombreCategoria: 'TELECOMUNICACIONES',
    subcategorias: [ { nombre: 'Enlace satelital' }, { nombre: 'Radio enlace terrestre'}]
  }
  
]

const CrearTicket = () => {
  const { getClientes } = useData();
  const [clientes, setClientes] = useState([]);

  //? inicio formulario
  const TICKETS_URL = '/tickets';
  const [errMsg, setErrMsg] = useState('');

  const [formData, setFormData] = useState({
    titulo: '',
    cliente: '',
    prioridad: '',
    categoria: '',
    subcategoria: '',
    descripcion: '',
  });

  useEffect(() => {
    setErrMsg('');

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' });
    }
  }, [errMsg, formData]);

  const { titulo, cliente, prioridad, categoria, subcategoria, descripcion } =
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
      prioridad,
      categoria,
      subcategoria,
      descripcion,
    };

    try {
      await axios.post(
        TICKETS_URL,
        JSON.stringify(ticketData),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setFormData({
        titulo: '',
        cliente: '',
        prioridad: '',
        categoria: '',
        subcategoria: '',
        descripcion: '',
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
  };

  const onReset = () => {
    setFormData({
      titulo: '',
      cliente: '',
      prioridad: '',
      categoria: '',
      subcategoria: '',
      descripcion: '',
    });
  }

  //? fin formulario

  useEffect(() => {
    getClientes().then((json) => {
      setClientes(json);
      return json;
    });
  }, [getClientes]);

  const optClientes = clientes.map((cliente) => {
    return (
      <option
        key={cliente._id}
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
                <label htmlFor='cliente'> Cliente (*) </label>
                <InputGroup>
                <button
                className='btn btn-primary text-secodnary'
                onClick={() => navigate('/registrar-cliente')}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
                <select
                  name='cliente'
                  className='form-select '
                  id='cliente'
                  value={cliente}
                  onChange={onChange}
                >
                  <option value=''>Seleccione cliente</option>
                  {optClientes}
                </select> 
                </InputGroup>
              </div>
              <div className='col-sm'>
              <label hmlfor='titulo'> Titulo del Servicio (*)</label>
                <input
                  type='text'
                  className='form-control'
                  name='titulo'
                  id='titulo'
                  placeholder='Ingrese el nombre del ticket'
                  value={titulo}
                  onChange={onChange}
                />
              </div>
              <div className='col-sm'>
                <label htmlFor='prioridad'> Prioridad (*)</label>
                <select
                  name='prioridad'
                  className='form-select'
                  id='prioridad'
                  value={prioridad}
                  onChange={onChange}
                >
                  <option value=''>Seleccione prioridad</option>
                  <option value='Alta'>Alta</option>
                  <option value='Media'>Media</option>
                  <option value='Baja'>Baja</option>
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
                  value={categoria}
                  onChange={onChange}
                >
                  <option value=''>Seleccione categoría</option>
                  <option value='Actualización'>Actualización</option>
                  <option value='Cambio'>Cambio</option>
                  <option value='Configuración'>Configuración</option>
                  <option value='Hadware'>Hadware</option>
                  <option value='Software'>Software</option>
                  <option value='Instalación'>Instalación</option>
                  <option value='Otro'>Otro</option>
                  <option value='Redes'>Redes</option>
                </select>
              </div>
              <div className='col-sm'>
                <label htmlFor='subcategoria'> SubCategoria (*)</label>
                <select
                  name='subcategoria'
                  className='form-select'
                  id='subcategoria'
                  value={subcategoria}
                  onChange={onChange}
                >
                  <option value=''>Seleccione subcategoría</option>
                  <option value='Antivirus'>Antivirus</option>
                  <option value='Cambio de radio enlace'>
                    Cambio de radio enlace
                  </option>
                  <option value='Certificación de cableado'>
                    Certificación de cableado
                  </option>
                  <option value='Contraseña'>Contraseña</option>
                  <option value='Creacion de Backup'>Creacion de Backup</option>
                  <option value='CRM'>CRM</option>
                  <option value='Desinstalación de radio enlace'>
                    Desinstalación de radio enlace
                  </option>
                  <option value='Email'>Email</option>
                  <option value='ERP'>ERP</option>
                  <option value='Firewall'>Firewall</option>
                  <option value='Impresora'>Impresora</option>
                  <option value='Instalación de Ap'>Instalación de Ap</option>
                  <option value='Instalacion de enlace satelital'>
                    Instalacion de enlace satelital
                  </option>
                  <option value=' Instalación de radio enlace'>
                    Instalación de radio enlace
                  </option>
                  <option value=' Instalación de solución solar'>
                    Instalación de solución solar
                  </option>
                  <option value='Instalacion de ups'>Instalacion de ups</option>
                  <option value='Instalación de cableado estructural'>
                    Instalación de cableado estructural
                  </option>
                  <option value='Internet'>Internet</option>
                  <option value='Intranet'>Intranet</option>
                  <option value='LAN'>LAN</option>
                  <option value='Mantenimiento de radio enlace'>
                    Mantenimiento de radio enlace
                  </option>
                  <option value='Mantenimiento de ups'>
                    Mantenimiento de ups
                  </option>
                  <option value='Monitor'>Monitor</option>
                  <option value='Office'>Office</option>
                  <option value='Otro'>Otro</option>
                  <option value='PC'>PC</option>
                  <option value='Periféricos'>Periféricos</option>
                  <option value='Portatil'>Portatil</option>
                  <option value='Recuperación de información'>
                    Recuperación de información
                  </option>
                  <option value='Restauración de backup'>
                    Restauración de backup
                  </option>
                  <option value='Revisión de enlace satelital'>
                    Revisión de enlace satelital
                  </option>
                  <option value='Revisión de enlace de red'>
                    Revisión de enlace de red
                  </option>
                  <option value='Servidor'>Servidor</option>
                  <option value='Sistema Operativo'>Sistema Operativo</option>
                  <option value='Smartphone'>Smartphone</option>
                  <option value='Teléfono'>Teléfono</option>
                  <option value='Videoconferencia'>Videoconferencia</option>
                  <option value='VPN'>VPN</option>
                  <option value='Web'>Web</option>
                  <option value='WiFi'>WiFi</option>
                </select>
              </div>
              <div className='col-4'>
              <label hmlfor='descripcion'> Descripción del Servicio (*)</label>
                <input
                  type='text'
                  className='form-control'
                  name='descripcion'
                  id='descripcion'
                  placeholder='Digite una breve descripción'
                  value={descripcion}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className='row text-center mt-4'>
              <div className='col-4'>
              <label htmlFor='agente'> Agente de Servicio (*) </label>
              <select
                  name='agente'
                  className='form-select '
                  id='agente'>
                  <option value=''>Seleccione Agente de Servicio</option>
                </select> 
              </div>
              <div className='col-2 my-4'>
                <label hmlfor='isp'>ISP</label>
                <input 
              className='form-check-input mx-3'
                  type='checkbox'
                  name='checkbox1'
                  id='checkbox1'  
                  value=''
                  />
              </div>  
              </div>
            <div className='d-flex justify-content-end p-2'>
              <button
                type='reset'
                className='btn btn-primary text-white me-3'
                onClick={onReset}
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
