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

const EditarTicket = ({ ticket, onUpdate, toggleEdit }) => {
  const { formData, onChange, setFormData } = useForm(ticket)

  const accionesTicketProps = {
    formData,
    setFormData
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onUpdate(formData)
  }

  return (
    <Form onSubmit={onSubmit}>
      <ModalBody>
        <section className='bg-secondary rounded'>
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
                    value={formData?.fechadecierre}
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
