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
import { useForm, useData } from '@hooks'
import { useState, useEffect } from 'react'

const EditarCliente = ({ cliente, onUpdate, toggleEdit }) => {
  const { formData, onChange } = useForm(cliente)
  const { departamentos, getMunicipios } = useData()
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {
    if (formData.departamento) {
      getMunicipios(formData.departamento).then((municipios) => {
        setMunicipios(municipios)
      })
    }
  }, [formData.departamento])

  const onSubmit = (e) => {
    e.preventDefault()
    onUpdate(formData)
  }

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

  return (
    <Form onSubmit={onSubmit}>
      <ModalBody>
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
              <Label for='direccion'> Dirección</Label>
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

export default EditarCliente
