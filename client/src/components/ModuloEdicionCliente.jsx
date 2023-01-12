import Boton from './Boton';
import CampoFormulario from './CampoFormulario';
import { faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const ModuloEdicionCliente = () => {
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
            />
            <CampoFormulario
              nombre='nombres'
              etiqueta='Nombres'
            />
            <CampoFormulario
              nombre='apellidos'
              etiqueta='Apellidos'
            />
          </div>
          <div className='d-flex justify-content-around mb-3'>
            <CampoFormulario
              nombre='tel'
              etiqueta='Teléfono'
            />
            <CampoFormulario
              nombre='empresa'
              etiqueta='Empresa'
            />
            <CampoFormulario
              nombre='ubicacion'
              etiqueta='Ubicación'
            />
          </div>
          <div className='d-flex justify-content-end'>
            <Boton
              texto='Cancelar'
              icono={faBan}
              estilos='me-3'
              colorBtn='primary'
              colorTxt='white'
            />
            <Boton
              texto='Guardar'
              icono={faFloppyDisk}
              estilos='me-5'
              colorBtn='primary'
              colorTxt='white'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModuloEdicionCliente;
