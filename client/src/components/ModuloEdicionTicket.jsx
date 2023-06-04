import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, FormGroup, Label, Input, Col, Row, Table } from 'reactstrap';
import FilaAccion from './FilaAccion';

const ModuloEdicionTicket = ({ onChange, onChangeAccion, data, formAccionData, addAccionHandler }) => {
  const listaAcciones = data.acciones.map((item) => (
    <FilaAccion
      fecha={item.fecha}
      key={item?._id}
      usuarioEncargado={item.usuarioEncargado}
      descripcion={item.descripcion}
    />
  ));

  return (
    <>
      <div className='bg-secondary rounded'>
        <div className='d-flex justify-content-around mb-2 text-center p-3'>
          <Col xs={2} >
            <Label htmlFor='prioridad'> Prioridad (*)</Label>
            <select
              name='prioridad'
              className='form-select text-center mt-2'
              id='prioridad'
              onChange={onChange}
              value={data.prioridad}>
              <option value='Alta'>Alta</option>
              <option value='Media'>Media</option>
              <option value='Baja'>Baja</option>
            </select>
          </Col>
          <Col xs={2} >
            <Label htmlFor='estado'> Estado (*)</Label>
            <select
              name='estado'
              className='form-select text-center mt-2'
              id='estado'
              value={data.estado}
              onChange={onChange}>
              <option value='Abierto'>Abierto</option>
              <option value='Cerrado'>Cerrado</option>
            </select>
          </Col>
          {data.estado === 'Cerrado' && (
             <Col xs={2} >
              <Label htmlFor='fechadecierre'>Fecha de cierre</Label>
              <Input
                className='text-center'
                id='fechadecierre'
                name='fechadecierre'
                placeholder='Fecha de Cierre'
                onChange={onChange}
                value={data?.fechadecierre}
                type='date'
              />
            </Col>
          )}
        </div>
      </div>
      <div className='bg-secondary rounded'>
        <div className='bg-primary text-white rounded-top'>
          <h4 className='m-0 ps-4 py-2'>Historial de acciones</h4>
        </div>
        <Row className='d-flex p-1 rounded-bottom text-primary'>
        <Col xs={6} >
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
                  type='text'
                  name='usuarioEncargado'
                  title="El titulo solo debe contener letras mayusculas."
                  id='usuarioEncargado'
                  placeholder='Digite en mayuscula sostenida'
                  value={formAccionData.usuarioEncargado}
                  onChange={onChangeAccion}
                  minLength="1"
                  maxLength="50"
                />
              </FormGroup>
              <FormGroup>
                <Label
                  for='descripcion'
                  className='form-control bg-primary text-white text-center'
                >
                  Descripción de la acción del Agente
                </Label>
                <Input
                  id='descripcion'
                  name='descripcion'
                  type='text'
                  minLength="1"
                  maxLength="250"
                  value={formAccionData.descripcion}
                  onChange={onChangeAccion}
                  placeholder='Ingrese la accion y/o procedimiento realizado'
                />
              </FormGroup>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2 ms-auto'
              onClick={addAccionHandler}
            >
              <FontAwesomeIcon icon={faPlus} />
              Agregar
            </Button>
          </Col>
          <Col xs={6} >
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
                <tbody className='text-primary bg-white'>{listaAcciones}</tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ModuloEdicionTicket;
