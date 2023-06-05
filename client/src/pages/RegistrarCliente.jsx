import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { useForm, useData } from '@hooks'
import {
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  Container
} from 'reactstrap'

const initialState = {
  empresa: '',
  nombre: '',
  apellidos: '',
  departamento: '',
  municipio: '',
  direccion: '',
  telefono: '',
  email: ''
}

const RegistrarCliente = () => {
  const CLIENTES_URL = '/clientes'
  const [errMsg, setErrMsg] = useState('')
  const { departamentos, getMunicipios } = useData()
  const [municipios, setMunicipios] = useState([])

  const { formData, onChange, onReset } = useForm(initialState)

  useEffect(() => {
    console.log(formData)
  }, [formData])

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, formData])

  useEffect(() => {
    if (formData.departamento) {
      getMunicipios(formData.departamento).then((municipios) => {
        setMunicipios(municipios)
      })
    }
  }, [formData.departamento])

  const opcionesDepartamentos = departamentos?.map(({ _id, departamento }) => (
    <option key={_id} value={departamento}>
      {departamento}
    </option>
  ))

  const opcionesMunicipios = municipios?.map(({ idMunicipio, municipio }) => (
    <option key={idMunicipio} value={municipio}>
      {municipio}
    </option>
  ))

  const onSubmit = async (e) => {
    e.preventDefault()

    const clientData = {
      ...formData,
      empresa: formData.empresa.toLowerCase()
    }

    try {
      await axios.post(CLIENTES_URL, JSON.stringify(clientData), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      onReset()
      toast.info('Cliente creado exitosamente', { theme: 'colored' })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('La creación de cliente falló')
      }
    }
  }

  return (
    <Container className='m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Registrar Cliente</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom text-primary'>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col sm>
              <FormGroup>
                <Label for='empresa'>Empresa (*)</Label>
                <Input
                  type='text'
                  name='empresa'
                  id='empresa'
                  value={formData.empresa}
                  onChange={onChange}
                  minLength={1}
                  maxLength={50}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='nombre'>Nombres (*)</Label>
                <Input
                  type='text'
                  name='nombre'
                  id='nombre'
                  value={formData.nombre}
                  onChange={onChange}
                  minLength={1}
                  maxLength={50}
                  required
                />
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='apellidos'>Apellidos (*)</Label>
                <Input
                  type='text'
                  name='apellidos'
                  id='apellidos'
                  value={formData.apellidos}
                  onChange={onChange}
                  minLength={1}
                  maxLength={50}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <FormGroup>
                <Label for='departamento'> Departamento (*) </Label>
                <Input
                  type='select'
                  name='departamento'
                  id='departamento'
                  onChange={onChange}
                  value={formData.departamento}
                >
                  <option value=''>Seleccione una opción</option>
                  {opcionesDepartamentos}
                </Input>
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='municipio'> Municipio (*) </Label>
                <Input
                  type='select'
                  name='municipio'
                  id='municipio'
                  onChange={onChange}
                  value={formData.municipio}
                >
                  <option value=''>Seleccione una opción</option>
                  {opcionesMunicipios}
                </Input>
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='direccion'> Dirección (*) </Label>
                <Input
                  type='text'
                  name='direccion'
                  id='direccion'
                  onChange={onChange}
                  value={formData.direccion}
                  minLength={1}
                  maxLength={50}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <FormGroup>
                <Label for='telefono'>Teléfono (*)</Label>
                <Input
                  type='text'
                  name='telefono'
                  id='telefono'
                  onChange={onChange}
                  value={formData.telefono}
                  minLength={1}
                  maxLength={15}
                  required
                  pattern='[0-9]+'
                  title='El teléfono solo debe contener números.'
                />
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='email'>Email (*)</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  onChange={onChange}
                  value={formData.email}
                  minLength={1}
                  maxLength={50}
                  required
                />
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
    </Container>
  )
}

export default RegistrarCliente
