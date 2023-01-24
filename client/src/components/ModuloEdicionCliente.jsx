import Boton from './Boton';
import CampoFormulario from './CampoFormulario';
import { faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const ModuloEdicionCliente = ({ onChange, data }) => {
  return (
    <div className='container m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Edicion de Cliente</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom text-primary'>
        <form>
          <div className='d-flex justify-content-around mb-3'>
            <CampoFormulario
              nombre='email'
              etiqueta='Email'
              onChange={onChange}
              value={data.email}
            />
            <CampoFormulario
              nombre='nombre'
              etiqueta='Nombre'
              onChange={onChange}
              value={data.nombre}
            />
            <CampoFormulario
              nombre='apellidos'
              etiqueta='Apellidos'
              onChange={onChange}
              value={data.apellidos}
            />
          </div>
          <div className='d-flex justify-content-around mb-3'>
            <CampoFormulario
              nombre='tel'
              etiqueta='Teléfono'
              onChange={onChange}
              value={data.telefono}
            />
            <CampoFormulario
              nombre='empresa'
              etiqueta='Empresa'
              onChange={onChange}
              value={data.empresa}
            />
            <CampoFormulario
              nombre='ubicacion'
              etiqueta='Ubicación'
              onChange={onChange}
              value={data.ubicacion}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModuloEdicionCliente;
