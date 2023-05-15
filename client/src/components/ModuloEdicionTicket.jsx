import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, FormGroup, Label, Input } from 'reactstrap';
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
          <div className='col-2'>
            <label htmlFor='prioridad'> Prioridad (*)</label>
            <select
              name='prioridad'
              className='form-select text-center mt-2'
              id='prioridad'
              onChange={onChange}
              value={data.prioridad}
            >
              <option value='Alta'>Alta</option>
              <option value='Media'>Media</option>
              <option value='Baja'>Baja</option>
            </select>
          </div>
          <div className='col-2'>
            <label htmlFor='estado'> Estado (*)</label>
            <select
              name='estado'
              className='form-select text-center mt-2'
              id='estado'
              value={data.estado}
              onChange={onChange}
            >
              <option value='Abierto'>Abierto</option>
              <option value='Cerrado'>Cerrado</option>
            </select>
          </div>
          {data.estado === 'Cerrado' && (
            <div className='col-2'>
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
            </div>
          )}
        </div>
      </div>
      <div className='bg-secondary rounded'>
        <div className='bg-primary text-white rounded-top'>
          <h4 className='m-0 ps-4 py-2'>Historial de acciones</h4>
        </div>
        <div className='row d-flex p-1 rounded-bottom text-primary'>
          <div className='col-6'>
            <div>
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
            </div>
            <div>
              <FormGroup>
                <Label
                  for='usuarioEncargado'
                  className='bg-primary form-control text-white text-center mt-3'
                >
                  Agente de Servicio
                </Label>
                <div>
                <input
                  type='text'
                  className='form-control'
                  name='usuarioEncargado'
                  required='' pattern='[A-Z]+'
                  id='usuarioEncargado'
                  placeholder='Digite en mayuscula sostenida'
                  value={formAccionData.usuarioEncargado}
                  onChange={onChangeAccion}
                    minlength="1"
                    maxlength="50"
                />
                </div>
              </FormGroup>
            </div>
            <div>
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
                  title="El nombre del agente solo debe contener letras mayusculas."
                  required='' pattern='[A-Z]+'
                  minlength="1"
                  maxlength="250"
                  value={formAccionData.descripcion}
                  onChange={onChangeAccion}
                  placeholder='Ingrese la accion y/o procedimiento realizado'
                />
              </FormGroup>
            </div>
            <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2 ms-auto'
              onClick={addAccionHandler}
            >
              <FontAwesomeIcon icon={faPlus} />
              Agregar
            </Button>
          </div>
          <div className='col-6'>
            <div className='bg-secondary rounded-bottom d-flex justify-content-around mt-3'>
              <table
                border={1}
                className='table table-hover table-bordered rounded rounded-2 overflow-hidden'
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuloEdicionTicket;
