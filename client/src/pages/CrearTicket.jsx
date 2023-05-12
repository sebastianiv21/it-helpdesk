import { useState, useEffect } from 'react'
import {
  faBan,
  faFloppyDisk,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useData, useForm } from '@hooks'
import axios from '../api/axios.js'
import { toast } from 'react-toastify'
import { InputGroup } from 'reactstrap'

const listadoCategorias = [
  {
    nombreCategoria: 'Hardware',
    subcategorias: [
      { nombre: 'Escáner' },
      { nombre: 'Impresora' },
      { nombre: 'Monitor' },
      { nombre: 'PC' },
      { nombre: 'Portátil' },
      { nombre: 'Servidor' },
      { nombre: 'Smartphone' },
      { nombre: 'UPS' }
    ]
  },
  {
    nombreCategoria: 'Software',
    subcategorias: [
      { nombre: 'Configuración periférico' },
      { nombre: 'Copia de información' },
      { nombre: 'Correo electrónico' },
      { nombre: 'Office' },
      { nombre: 'Sistema Operativo' }
    ]
  },
  {
    nombreCategoria: 'Infraestructura',
    subcategorias: [
      { nombre: 'Cableado estructurado' },
      { nombre: 'Caseta nodo' },
      { nombre: 'Sistema eléctrico' },
      { nombre: 'Solución solar' },
      { nombre: 'Torre de comunicaciones' }
    ]
  },
  {
    nombreCategoria: 'Servidores',
    subcategorias: [
      { nombre: 'Backup' },
      { nombre: 'Configuración' },
      { nombre: 'Cuentas de usuario' },
      { nombre: 'Políticas- Reglas' }
    ]
  },
  {
    nombreCategoria: 'Ciberseguridad',
    subcategorias: [
      { nombre: 'Antivirus' },
      { nombre: 'Firewall' },
      { nombre: 'VPN' }
    ]
  },
  {
    nombreCategoria: 'Seguridad electrónica',
    subcategorias: [
      { nombre: 'Biométrico' },
      { nombre: 'Cámara' },
      { nombre: 'Sensor' }
    ]
  },
  {
    nombreCategoria: 'Telecomunicaciones',
    subcategorias: [
      { nombre: 'Enlace satelital' },
      { nombre: 'Radio enlace terrestre' }
    ]
  }
]

const initialState = {
  titulo: '',
  cliente: '',
  prioridad: '',
  categoria: '',
  subcategoria: '',
  descripcion: ''
}

const CrearTicket = () => {
  const { getClientes } = useData()
  const [clientes, setClientes] = useState([])
  const {
    formData,
    titulo,
    cliente,
    prioridad,
    categoria,
    subcategoria,
    descripcion,
    onChange,
    onReset
  } = useForm(initialState)

  const TICKETS_URL = '/tickets'
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, formData])

  const onSubmit = async (e) => {
    e.preventDefault()

    const ticketData = {
      titulo,
      cliente,
      prioridad,
      categoria,
      subcategoria,
      descripcion
    }

    try {
      await axios.post(TICKETS_URL, JSON.stringify(ticketData), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      onReset()
      toast.info('Ticket creado exitosamente', { theme: 'colored' })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('La creación del ticket falló')
      }
    }
  }

  useEffect(() => {
    getClientes().then((json) => {
      setClientes(json)
      return json
    })
  }, [getClientes])

  const optClientes = clientes.map((cliente) => {
    return (
      <option
        key={cliente._id}
        value={`${cliente._id}`}
      >{`${cliente.nombre} ${cliente.apellidos}`}</option>
    )
  })

  const categorias = listadoCategorias.map((categoria) => {
    return (
      <option key={categoria.nombreCategoria} value={categoria.nombreCategoria}>
        {categoria.nombreCategoria}
      </option>
    )
  })

  const subcategorias = listadoCategorias.map((categoria) => {
    if (categoria.nombreCategoria === formData.categoria) {
      return categoria.subcategorias.map((subcategoria) => {
        return (
          <option key={subcategoria.nombre} value={subcategoria.nombre}>
            {subcategoria.nombre}
          </option>
        )
      })
    } else {
      return null
    }
  })

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
                <label hmlfor='titulo'>Titulo del Servicio (*)</label>
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
                <label htmlFor='prioridad'>Prioridad (*)</label>
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
                <label htmlFor='categoria'>Categoria (*)</label>
                <select
                  name='categoria'
                  className='form-select'
                  id='categoria'
                  value={categoria}
                  onChange={onChange}
                >
                  <option value=''>Seleccione categoría</option>
                  {categorias}
                </select>
              </div>
              <div className='col-sm'>
                <label htmlFor='subcategoria'>SubCategoria (*)</label>
                <select
                  name='subcategoria'
                  className='form-select'
                  id='subcategoria'
                  value={subcategoria}
                  onChange={onChange}
                >
                  <option value=''>Seleccione subcategoría</option>
                  {subcategorias}
                </select>
              </div>
              <div className='col-4'>
                <label hmlfor='descripcion'>Descripción del Servicio (*)</label>
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
                <label htmlFor='agente'>Agente de Servicio (*) </label>
                <select name='agente' className='form-select ' id='agente'>
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
  )
}

export default CrearTicket
