import { useState, useEffect } from 'react'
import {
  faBan,
  faFloppyDisk,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useData, useForm } from '@hooks'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios.js'
import { toast } from 'react-toastify'
import {
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Button
} from 'reactstrap'

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

const listadoPrioridades = [
  { id: 1, nombre: 'Alta' },
  { id: 2, nombre: 'Media' },
  { id: 3, nombre: 'Baja' }
]

const initialState = {
  titulo: '',
  cliente: '',
  prioridad: '',
  categoria: '',
  subcategoria: '',
  descripcionTicket: '',
  agenteEncargado: '',
  isp: false
}

const CrearTicket = () => {
  const { getClientes, agentes } = useData()
  const [clientes, setClientes] = useState([])
  const { formData, onChange, onReset } = useForm(initialState)
  const navigate = useNavigate()

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

    try {
      await axios.post(TICKETS_URL, JSON.stringify(formData), {
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

  const prioridades = listadoPrioridades.map((prioridad) => (
    <option key={prioridad.id} value={prioridad.nombre}>
      {prioridad.nombre}
    </option>
  ))

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

  const listaAgentes = agentes.map((agente) => (
    <option key={agente._id} value={agente._id}>
      {agente.nombre}
    </option>
  ))

  return (
    <div className='container d-flex flex-column gap-3 mt-3'>
      <div>
        <div className='bg-primary text-white rounded-top'>
          <div className='bg-primary rounded-bottom p-2 px-3 d-flex gap-3 rounded-top'>
            <h4 className='ps-1 py-0 me-auto mb-auto'>Creación del Ticket</h4>
          </div>
        </div>
        <div className='bg-secondary p-3 rounded-bottom text-primary'>
          <Form onSubmit={onSubmit}>
            <Row>
              <Col sm>
                <FormGroup>
                  <Label for='cliente'>Cliente (*)</Label>
                  <InputGroup>
                    <Button
                      type='button'
                      color='primary'
                      onClick={() => navigate('/registrar-cliente')}
                    >
                      <FontAwesomeIcon icon={faUserPlus} />
                    </Button>
                    <Input
                      name='cliente'
                      id='cliente'
                      type='select'
                      value={formData.cliente}
                      onChange={onChange}
                      required
                    >
                      <option value=''>Seleccione el cliente</option>
                      {optClientes}
                    </Input>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm>
                <FormGroup>
                  <Label for='titulo'>Título del Servicio (*)</Label>
                  <Input
                    type='text'
                    name='titulo'
                    id='titulo'
                    placeholder='Ingrese el nombre del ticket'
                    minLength={1}
                    maxLength={50}
                    value={formData.titulo}
                    onChange={onChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm>
                <FormGroup>
                  <Label for='prioridad'>Prioridad (*)</Label>
                  <Input
                    type='select'
                    name='prioridad'
                    id='prioridad'
                    value={formData.prioridad}
                    onChange={onChange}
                    required
                  >
                    <option value=''>Seleccione la prioridad</option>
                    {prioridades}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm>
                <FormGroup>
                  <Label for='categoria'>Categoría (*)</Label>
                  <Input
                    type='select'
                    name='categoria'
                    id='categoria'
                    value={formData.categoria}
                    onChange={onChange}
                    required
                  >
                    <option value=''>Seleccione categoría</option>
                    {categorias}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm>
                <FormGroup>
                  <Label for='subcategoria'>SubCategoría (*)</Label>
                  <Input
                    type='select'
                    name='subcategoria'
                    id='subcategoria'
                    value={formData.subcategoria}
                    onChange={onChange}
                    required
                  >
                    <option value=''>Seleccione subcategoría</option>
                    {subcategorias}
                  </Input>
                </FormGroup>
              </Col>
              <Col sm>
                <FormGroup>
                  <Label for='agenteEncargado'>Agente de Servicio (*) </Label>
                  <Input
                    type='select'
                    name='agenteEncargado'
                    id='agenteEncargado'
                    value={formData.agenteEncargado}
                    onChange={onChange}
                    required
                  >
                    <option value=''>Seleccione el agente</option>
                    {listaAgentes}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <FormGroup>
                  <Label for='descripcionTicket'>
                    Descripción del Servicio (*)
                  </Label>
                  <Input
                    type='textarea'
                    name='descripcionTicket'
                    id='descripcionTicket'
                    placeholder='Digite una breve descripción'
                    minLength={1}
                    maxLength={250}
                    value={formData.descripcionTicket}
                    onChange={onChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup check>
                  <Input
                    type='checkbox'
                    name='isp'
                    onChange={onChange}
                    value={formData.isp}
                    checked={formData.isp}
                  />
                  <Label check>ISP</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-end gap-2'>
                <Button type='reset' color='primary' onClick={onReset}>
                  <FontAwesomeIcon icon={faBan} />
                  <span className='ms-2'>Cancelar</span>
                </Button>
                <Button type='submit' color='primary'>
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  <span className='ms-2'>Guardar</span>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CrearTicket
