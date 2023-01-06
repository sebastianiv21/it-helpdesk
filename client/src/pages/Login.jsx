import useData from '../hooks/useData';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import axios from '../api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { setAuth } = useData();
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' });
    }

  }, [errMsg, user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ nombreUsuario: user, contrasenha: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({nombreUsuario: user, contrasenha: pwd, accessToken})
      setUser('');
      setPwd('');
      toast.info('Sesión iniciada', { theme: 'colored' });
      navigate(from, {replace: true})
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde');
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario');
      } else if (err.response?.status === 401) {
        setErrMsg('Usuario o contraseña incorrectos');
      } else {
        setErrMsg('El inicio de sesión falló');
      }
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className='col-auto d-flex align-items-center mb-3 fs-4'>
            <label
              htmlFor='nombreUsuario'
              className='form-label m-0 me-2 text-primary'
            >
              Usuario
            </label>
            <div className='w-100'>
              <input
                type='text'
                name='nombreUsuario'
                id='nombreUsuario'
                className='form-control'
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
          </div>
          <div className='col-auto d-flex align-items-center mb-3 fs-4'>
            <label
              htmlFor='contrasenha'
              className='form-label m-0 me-2 text-primary'
            >
              Contraseña
            </label>
            <div className='w-100'>
              <input
                type='password'
                name='contrasenha'
                id='contrasenha'
                className='form-control'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
          </div>
          {/* <p className={errMsg ? 'text-'}>No autorizado</p> */}
          <div className='d-flex justify-content-end'>
            <button className='btn btn-primary text-white me-3'>
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
