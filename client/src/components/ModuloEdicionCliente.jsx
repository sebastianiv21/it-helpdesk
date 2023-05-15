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
            > </Input>
            </FormGroup>
            <FormGroup>
            <Label for='nombre'> Nombres (*) </Label>
            <Input type='text'
            name='nombre'
            id='nombre'
            value={data.nombre}
            onChange={onChange}
            > </Input>
            </FormGroup>
            <FormGroup>
            <Label for='apellidos'> Apellidos (*) </Label>
            <Input type='text'
            name='apellidos'
            id='apellidos'
            value={data.apellidos}
            onChange={onChange}
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
            name='vereda'
            id='vereda'> </Input>
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
            > </Input>
          </FormGroup>
          <FormGroup>
            <Label for='emailo'> Email (*) </Label>
            <Input type='text'
            name='email'
            id='email'
            value={data.email}
            onChange={onChange}
            > </Input>
          </FormGroup>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModuloEdicionCliente;
