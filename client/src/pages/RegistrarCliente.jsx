import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import CampoFormulario from '../components/CampoFormulario'
import axios from '../api/axios'
import { toast } from 'react-toastify'

const RegistrarCliente = () => {
  const CLIENTES_URL = '/clientes'
  const [errMsg, setErrMsg] = useState('')

  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    apellidos: '',
    ubicacion: '',
    telefono: '',
    email: '',
  })

  useEffect(() => {
    setErrMsg('')

    if (errMsg) {
      toast.error(errMsg, { theme: 'colored' })
    }
  }, [errMsg, formData])

  const { empresa, nombre, apellidos, ubicacion, telefono, email } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onReset = () => {
    setFormData({
    empresa: '',
    nombre: '',
    apellidos: '',
    ubicacion: '',
    telefono: '',
    email: '',
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const clientData = {
      empresa: empresa.toLowerCase(),
      nombre,
      apellidos,
      ubicacion: ubicacion.toLowerCase(),
      telefono,
      email,
    }

    try {
      await axios.post(CLIENTES_URL, JSON.stringify(clientData), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      })
      setFormData({
        empresa: '',
        nombre: '',
        apellidos: '',
        ubicacion: '',
        telefono: '',
        email: '',
      })
      toast.info('Cliente creado exitosamente', { theme: 'colored' })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('La creación de cliente falló')
      }
    }
  }

  return (
    <div className='container m-4 mx-auto'>
      <div className='bg-primary text-white rounded-top'>
        <h5 className='m-0 ps-4 py-3'>Registrar Cliente</h5>
      </div>
      <div className='bg-secondary p-3 rounded-bottom text-primary'>
        <form onSubmit={onSubmit}>
          <div className='d-flex justify-content-around mb-3'>
          <CampoFormulario
              nombre='empresa'
              etiqueta='Empresa'
              value={empresa}
              onChange={onChange}
            />
            <CampoFormulario
              nombre='nombre'
              etiqueta='Nombres'
              value={nombre}
              onChange={onChange}
            />
            <CampoFormulario
              nombre='apellidos'
              etiqueta='Apellidos'
              value={apellidos}
              onChange={onChange}
            />
          </div>
          <div className='d-flex justify-content-around mb-3'>
          <CampoFormulario
              nombre='ubicacion'
              etiqueta='Ubicación'
              value={ubicacion}
              onChange={onChange}
            />
            <CampoFormulario
              nombre='telefono'
              etiqueta='Teléfono'
              value={telefono}
              onChange={onChange}
            />
             <CampoFormulario
              nombre='email'
              etiqueta='Email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='d-flex justify-content-end'>
            <button
              type='reset'
              className='btn btn-primary text-white me-3'
              onClick={onReset}
            >
              <FontAwesomeIcon icon={faBan} />
              <span className='ms-2'>Cancelar</span>
            </button>
            <button className='btn btn-primary text-white me-5'>
              <FontAwesomeIcon icon={faFloppyDisk} />
              <span className='ms-2'>Guardar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrarCliente
