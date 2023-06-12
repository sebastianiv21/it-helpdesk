import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Input, Label, FormGroup, Row, Col, Button, Table } from 'reactstrap'
import { useForm, useData, useDate } from '@hooks'
import { toast } from 'react-toastify'

const initialState = {
  fecha: '',
  descripcion: '',
  usuarioEncargado: ''
}

export const AccionesTicket = ({ formData, setFormData }) => {
  const {
    formData: formAccionData,
    onChange: onChangeAccion,
    onReset
  } = useForm(initialState)
  const { agentes } = useData()
  const { parseDate } = useDate()

  const listaAgentes = agentes.map((agente) => (
    <option key={agente._id} value={agente.nombre}>
      {agente.nombre}
    </option>
  ))

  const addAccionHandler = () => {
    const isFormEmpty = Object.values(formAccionData).some(
      (value) => !value || (Array.isArray(value) && !value.length)
    )
    if (isFormEmpty) {
      return toast.error('Todos los campos son requeridos', {
        theme: 'colored'
      })
    }

    setFormData((prevState) => ({
      ...prevState,
      acciones: [...prevState.acciones, formAccionData]
    }))

    onReset()
  }

  const renderAcciones = formData?.acciones?.map((accion, index) => (
    <tr key={index}>
      <td>{parseDate(accion.fecha, 'yyyy-MM-dd HH:mm')}</td>
      <td>{accion.descripcion}</td>
      <td>{accion.usuarioEncargado}</td>
    </tr>
  ))

  return (
    <section className='bg-secondary rounded'>
      <div className='bg-primary text-white rounded-top'>
        <h4 className='m-0 ps-4 py-2'>Historial de acciones</h4>
      </div>
      <Row className='d-flex p-1 rounded-bottom text-primary'>
        <Col xs={4}>
          <FormGroup>
            <Label
              for='fecha'
              className='bg-primary form-control text-white text-center mt-3'
            >
              Fecha de la acción
            </Label>
            <Input
              className='text-center'
              id='fecha'
              name='fecha'
              placeholder='date placeholder'
              type='datetime-local'
              value={formAccionData.fecha}
              onChange={onChangeAccion}
            />
          </FormGroup>
          <FormGroup>
            <Label
              for='usuarioEncargado'
              className='bg-primary form-control text-white text-center mt-3'
            >
              Agente de Servicio
            </Label>
            <Input
              type='select'
              className='text-center'
              name='usuarioEncargado'
              id='usuarioEncargado'
              value={formAccionData.usuarioEncargado}
              onChange={onChangeAccion}
            >
              <option value=''>Seleccione un agente</option>
              {listaAgentes}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label
              for='descripcion'
              className='form-control bg-primary text-white text-center'
            >
              Descripción de la acción del agente
            </Label>
            <Input
              id='descripcion'
              name='descripcion'
              type='textarea'
              minLength='1'
              maxLength='250'
              value={formAccionData.descripcion}
              onChange={onChangeAccion}
              placeholder='Digite la acción y/o procedimiento realizado'
            />
          </FormGroup>
          <Button
            color='primary'
            className='d-flex align-items-center mb-2 gap-2 ms-auto'
            onClick={addAccionHandler}
          >
            <FontAwesomeIcon icon={faPlus} />
            Agregar acción
          </Button>
        </Col>
        <Col xs={8}>
          <Table bordered hover className='overflow-hidden mt-3 text-center'>
            <thead>
              <tr className='text-white bg-primary'>
                <th>Fecha</th>
                <th>Descripción</th>
                <th>Agente de Servicio</th>
              </tr>
            </thead>
            <tbody className='text-primary bg-white'>{renderAcciones}</tbody>
          </Table>
        </Col>
      </Row>
    </section>
  )
}
