import { useData } from '@hooks'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {Container, Form, Col, Label, Input, Button} from 'reactstrap'
import axios from '../api/axios'
const LOGIN_URL = '/auth'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { setAuth } = useData()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ nombreUsuario: user, contrasenha: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      const accessToken = response?.data?.accessToken
      setAuth({ nombreUsuario: user, contrasenha: pwd, accessToken })
      setUser('')
      setPwd('')
      toast.info('Sesión iniciada', { theme: 'colored' })
      navigate(from, { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else if (err.response?.status === 401) {
        setErrMsg('Usuario o contraseña incorrectos')
      } else {
        setErrMsg('El inicio de sesión falló')
      }
    }
  }

  return (
    <Container className='mt-5 mx-auto d-flex'>
      <div
        className='rounded shadow-lg p-3 align-self-center mx-auto mt-5'
        style={{
          backgroundImage: "url('images/Engranajes.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Col xs='auto' className='d-flex align-items-center mb-3 fs-4'>
            <Label
              htmlFor='nombreUsuario'
              className=' m-0 me-2 text-primary'
            >
              Usuario
            </Label>
            <div className='w-100'>
              <Input
                type='text'
                name='nombreUsuario'
                id='nombreUsuario'
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
          </Col>
          <Col xs='auto' className='d-flex align-items-center mb-3 fs-4'>
            <Label
              htmlFor='contrasenha'
              className='form-label m-0 me-2 text-primary'
            >
              Contraseña
            </Label>
            <div className='w-100'>
              <Input
                type='password'
                name='contrasenha'
                id='contrasenha'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
          </Col>
          {/* <p className={errMsg ? 'text-'}>No autorizado</p> */}
          <div className='d-flex justify-content-end'>
            <Button color='primary' className='text-white me-3'>
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  )
}

export default Login
