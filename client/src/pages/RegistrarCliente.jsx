import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import CampoFormulario from '../components/CampoFormulario'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap'

const RegistrarCliente = () => {
  const CLIENTES_URL = '/clientes'
  const [errMsg, setErrMsg] = useState('')

  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    apellidos: '',
    ubicacion: '',
    telefono: '',
    email: ''
  })

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, formData])

  const { empresa, nombre, apellidos, ubicacion, telefono, email } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onReset = () => {
    setFormData({
      empresa: '',
      nombre: '',
      apellidos: '',
      ubicacion: '',
      telefono: '',
      email: ''
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const clientData = {
      empresa: empresa.toLowerCase(),
      nombre,
      apellidos,
      ubicacion: ubicacion.toLowerCase(),
      telefono,
      email
    }

    try {
      await axios.post(CLIENTES_URL, JSON.stringify(clientData), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      setFormData({
        empresa: '',
        nombre: '',
        apellidos: '',
        ubicacion: '',
        telefono: '',
        email: ''
      })
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
    <div className='container m-4 mx-auto'>
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
                  value={empresa}
                  onChange={onChange}
                  minlength={1}
                  maxlength={50}
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
                  value={nombre}
                  onChange={onChange}
                  minlength={1}
                  maxlength={50}
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
                  value={apellidos}
                  onChange={onChange}
                  minlength={1}
                  maxlength={50}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <FormGroup>
                <Label for='departamento'> Departamento (*) </Label>
                <Input type='select' name='departamento' id='departamento'>
                  <option value=''>Seleccione una opción</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='municipio'> Municipio (*) </Label>
                <Input type='select' name='municipio' id='municipio'>
                  <option value=''>Seleccione una opción</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm>
              <FormGroup>
                <Label for='vereda'> Vereda (*) </Label>
                <Input
                  type='text'
                  name='vereda'
                  id='vereda'
                  minlength={1}
                  maxlength={50}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className='d-flex me-auto'>
            <Col sm>
              <FormGroup>
                <Label for='telefono'>Teléfono (*)</Label>
                <Input
                  type='text'
                  name='telefono'
                  id='telefono'
                  value={telefono}
                  onChange={onChange}
                  minlength={1}
                  maxlength={15}
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
                  value={email}
                  onChange={onChange}
                  minlength={1}
                  maxlength={50}
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
    </div>
  )
}

export default RegistrarCliente
