import CampoFormulario from './CampoFormulario';
import {Input, Label, FormGroup, Container, Form} from 'reactstrap'
const ModuloEdicionCliente = ({ onChange, data }) => {
  return (
    <Container className='m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Edicion de Cliente</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom text-primary'>
        {/* PENDIENTE REVISAR SI CAUSA DAÑO EN CODIGO */}
        <Form>
          <div className='d-flex justify-content-around mb-3'>
          <FormGroup>
            <Label for='empresa'> Empresa (*) </Label>
            <Input type='text'
            name='empresa'
            id='empresa'
            value={data.empresa}
            onChange={onChange}
            minLength="1" maxLength="50" 
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
            minLength="1" maxLength="50" 
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
            minLength="1" maxLength="50" 
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
             minLength="1" maxLength="50" 
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
            minLength="1" maxLength="15"
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
            minLength="1" maxLength="50" 
            > </Input>
          </FormGroup>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ModuloEdicionCliente;
