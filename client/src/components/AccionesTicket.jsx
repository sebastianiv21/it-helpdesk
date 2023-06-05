import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Input, Label, FormGroup, Row, Col, Button, Table } from 'reactstrap'
import FilaAccion from './FilaAccion'
import { useForm, useData } from '@hooks'

export const AccionesTicket = () => {
  const { formData: formAccionData, onChange: onChangeAccion } = useForm()
  const { agentes } = useData()

  const listaAgentes = agentes.map((agente) => (
    <option key={agente._id} value={agente._id}>
      {agente.nombre}
    </option>
  ))

  const addAccionHandler = () => {}

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
            className='d-flex align-items-center m-2 gap-2 ms-auto'
            onClick={addAccionHandler}
          >
            <FontAwesomeIcon icon={faPlus} />
            Agregar acción
          </Button>
        </Col>
        <Col xs={8}>
          <div className='bg-secondary rounded-bottom d-flex justify-content-around mt-3'>
            {/* REVISAR SI DAÑA EL CODIGO TABLE */}
            <Table
              border={1}
              className='overflow-hidden'
              bordered
              hover
              id='datatable'
            >
              <thead>
                <tr className='text-white text-center bg-primary'>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Encargado</th>
                </tr>
              </thead>
              {/* <tbody className='text-primary bg-white'>{listaAcciones}</tbody> */}
            </Table>
          </div>
        </Col>
      </Row>
    </section>
  )
}
