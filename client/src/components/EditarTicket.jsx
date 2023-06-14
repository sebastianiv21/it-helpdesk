import { useEffect, useState } from 'react'
import {
  Input,
  Label,
  FormGroup,
  Form,
  Row,
  Col,
  Button,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { useForm } from '@hooks'
import { AccionesTicket } from './AccionesTicket'

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

const EditarTicket = ({ ticket, onUpdate, toggleEdit }) => {
  const { formData, onChange, setFormData } = useForm(ticket)

  useEffect(() => {
    console.log('ticket', ticket)
  }, [ticket])

  const accionesTicketProps = {
    formData,
    setFormData
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onUpdate(formData)
  }

  const nombreCliente = `${ticket?.cliente?.nombre} ${ticket?.cliente?.apellidos}`

  const nombreAgente = ticket?.agenteEncargado?.nombre

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

  return (
    <Form onSubmit={onSubmit}>
      <ModalBody>
        <section className='bg-secondary rounded p-4'>
          <Row>
            <Col sm>
              <FormGroup>
                <Label>Cliente</Label>
                <Input type='text' value={nombreCliente} disabled />
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
                <Label>Agente de Servicio (*)</Label>
                <Input type='text' value={nombreAgente} disabled />
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
          <Row className='d-flex justify-content-around align-items-center mb-2 text-center p-3'>
            <Col xs={3}>
              <FormGroup>
                <Label htmlFor='prioridad'>Prioridad (*)</Label>
                <Input
                  type='select'
                  name='prioridad'
                  className='text-center'
                  id='prioridad'
                  onChange={onChange}
                  value={formData.prioridad}
                >
                  <option value='Alta'>Alta</option>
                  <option value='Media'>Media</option>
                  <option value='Baja'>Baja</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <Label htmlFor='estado'>Estado (*)</Label>
                <Input
                  type='select'
                  name='estado'
                  className='text-center'
                  id='estado'
                  value={formData.estado}
                  onChange={onChange}
                >
                  <option value='Abierto'>Abierto</option>
                  <option value='Cerrado'>Cerrado</option>
                </Input>
              </FormGroup>
            </Col>
            {formData.estado === 'Cerrado' && (
              <Col xs={3}>
                <FormGroup>
                  <Label htmlFor='fechadecierre'>Fecha de cierre</Label>
                  <Input
                    className='text-center'
                    id='fechadecierre'
                    name='fechadecierre'
                    onChange={onChange}
                    value={formData?.fechadecierre?.split('T')[0]}
                    type='date'
                  />
                </FormGroup>
              </Col>
            )}
          </Row>
        </section>
        <AccionesTicket {...accionesTicketProps} />
      </ModalBody>
      <ModalFooter>
        <Button color='secondary' onClick={toggleEdit}>
          Cancelar
        </Button>
        <Button color='primary' type='submit'>
          Guardar cambios
        </Button>
      </ModalFooter>
    </Form>
  )
}

export default EditarTicket
