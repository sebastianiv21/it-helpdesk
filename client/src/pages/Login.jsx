import CampoLogin from '../components/CampoLogin'
import Boton from '../components/Boton'
const Login = () => {
  return (
    <div className='container mt-5 mx-auto d-flex'>
      <div
        className='rounded shadow-lg p-3 align-self-center mx-auto mt-5'
        style={{
          backgroundImage: "url('images/Engranajes.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <form>
          <div className='col-auto d-flex align-items-center mb-3 fs-4'>
            <CampoLogin
              identificacion='usuario'
              etiqueta='Usuario'
            />
          </div>
          <div className='col-auto d-flex align-items-center mb-3 fs-4'>
            <CampoLogin
              identificacion='contraseña'
              etiqueta='Contraseña'
            />
          </div>
          <div className='d-flex justify-content-end'>
            <Boton
              colorBtn='primary'
              colorTxt='white'
              estilos='me-3'
              texto='Iniciar sesión'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
