import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Button} from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';

const ModuloEdicionTicket = ({ listaAccion }) => {
  return (
    <>
      <div className='bg-secondary'>
        <div className='bg-primary rounded-top p-2 d-flex gap-2'>
          <h4 className='bg-primary text-white p-2 m-0 rounded-top ps-3'>
            Modulo de edición
          </h4>
        </div>
        <div className='row d-flex justify-content-around mb-2 text-center mt-2'>
          <div className='col-5'>
            <label htmlFor='prioridad'> Prioridad (*)</label>
            <select
              name='prioridad'
              className='form-select text-center mt-2'
              id='prioridad'
            >
              <option value='alta'>Alta</option>
              <option value='media'>Media</option>
              <option value='baja'>Baja</option>
            </select>
          </div>
          <div className='col-5 pb-3'>
            <label htmlFor='estado'> Estado (*)</label>
            <select
              name='estado'
              className='form-select text-center mt-2'
              id='estado'
            >
              <option value='abierto'>Abierto</option>
              <option value='cerrado'>Cerrado</option>
            </select>
          </div>
        </div>
      </div>
      <div className='bg-secondary'>
        <div className='bg-primary text-white rounded-top'>
          <h4 className='m-0 ps-4 py-3'>Historial de acciones</h4>
        </div>
        <div className='row d-flex p-3 rounded-bottom text-primary'>
            <div className='col-6'>
            <div >
              <Label for='exampleFile'
                    className='bg-primary form-control text-white text-center mt-3'>Fecha de la acción
              </Label>
              <Input
              className='text-center'
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="datetime-local"/>
              </div>
              <div>
                <FormGroup className='custom-file'>
                  <Label
                    for='exampleFile'
                    className='bg-primary form-control text-white text-center mt-3'
                  >
                    Encargado de la acción
                  </Label>
                  <div className='input-group'>
                    <input
                      type='text'
                      name='valor'
                      id='valor'
                      className='form-control m-0'
                      placeholder='Digite el nombre del responsable de la ejecución'
                    />
                  </div>
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <Label
                    for='exampleText'
                    className='form-control bg-primary text-white text-center'
                  >
                    Descripción de la acción
                  </Label>
                  <Input
                    id='exampleText'
                    name='text'
                    type='textarea'
                    cols='60'
                    rows='10'
                    placeholder='Ingrese la accion y/o procedimiento realizado'
                  />
                </FormGroup>
              </div>
              <Button
              color='primary'
              className='d-flex align-items-center m-2 gap-2 ms-auto'
            >
              <FontAwesomeIcon icon={faPlus} />
              Agregar
            </Button>
            </div>
          <div className='col-6'>
                <div className='bg-secondary rounded-bottom  d-flex justify-content-around'>
                  <FormGroup className='col-sm custom-file'>
                    <Label
                      for='exampleFile'
                      className='bg-primary form-control text-white text-center mt-3'
                    >
                      Busqueda
                    </Label>
                    <input
                      type='text'
                      name='busqueda'
                      id='busqueda'
                      className='form-control m-0'
                      placeholder='Ingrese fecha o encargado de la acción'
                    />
                  </FormGroup>
                </div>
              <div>
                <table
                  border={1}
                  className='table table-hover table-bordered'
                  id='datatable'
                >
                  <thead>
                    <tr className='text-white text-center bg-primary'>
                      <th>Fecha</th>
                      <th>Encargado</th>
                      <th>Accion</th>
                    </tr>
                  </thead>
                  <tbody className='text-primary bg-white'>{listaAccion}</tbody>
                </table>
              </div>
            </div>   
        </div>
      </div>
    </>
  );
};

export default ModuloEdicionTicket;
