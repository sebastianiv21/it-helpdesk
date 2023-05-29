import CampoFormulario from './CampoFormulario';
import {Input, Label, FormGroup} from 'reactstrap'
const ModuloEdicionCliente = ({ onChange, data }) => {
  return (
    <div className='container m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Edicion de Cliente</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom text-primary'>
        <form>
          <div className='d-flex justify-content-around mb-3'>
          <FormGroup>
            <Label for='empresa'> Empresa (*) </Label>
            <Input type='text'
            name='empresa'
            id='empresa'
            value={data.empresa}
            onChange={onChange}
            minlength="1" maxlength="50" 
            title="El titulo solo debe contener letras."
            > </Input>
            </FormGroup>
            <FormGroup>
            <Label for='nombre'> Nombres (*) </Label>
            <Input type='text'
            name='nombre'
            id='nombre'
            value={data.nombre}
            onChange={onChange}
            minlength="1" maxlength="50" 
            title="El titulo solo debe contener letras."
            > </Input>
            </FormGroup>
            <FormGroup>
            <Label for='apellidos'> Apellidos (*) </Label>
            <Input type='text'
            name='apellidos'
            id='apellidos'
            value={data.apellidos}
            onChange={onChange}
            minlength="1" maxlength="50" 
            title="El titulo solo debe contener letras."
            > </Input>
            </FormGroup>           
          </div>
          <div className='d-flex justify-content-around mb-3'>
            <FormGroup>
            <Label for='departamento'> Departamento (*) </Label>
            <Input type='select'
            name='departamento'
            id='departamento'
            > <option value="">Seleccione</option> </Input>
            </FormGroup>
            <FormGroup>
            <Label for='municipio'> Municipio (*) </Label>
            <Input type='select'
            name='municipio'
            id='municipio'
            > <option value="">Seleccione</option> </Input>
            </FormGroup >
            <FormGroup>
            <Label for='vereda'> Vereda (*) </Label>
            <Input type='text'
             minlength="1" maxlength="50" 
            name='vereda'
            id='vereda' 
            title="El titulo solo debe contener letras."> 
            </Input>
            </FormGroup>
          </div>
          <div className='d-flex justify-content-around mb-3'>

          <FormGroup>
            <Label for='telefono'> Teléfono (*) </Label>
            <Input type='text'
            name='telefono'
            id='telefono'
            value={data.telefono}
            onChange={onChange}
            minlength="1" maxlength="15"
            required='' pattern='[0-9]+'
            title="El titulo solo debe contener numeros."
            > </Input>
          </FormGroup>
          <FormGroup>
            <Label for='email'> Email (*) </Label>
            <Input type='text'
            name='email'
            id='email'
            value={data.email}
            onChange={onChange}
            minlength="1" maxlength="50" 
            > </Input>
          </FormGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModuloEdicionCliente;
