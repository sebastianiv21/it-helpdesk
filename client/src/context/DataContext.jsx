import { createContext, useState, useMemo, useEffect } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate, useLocation } from 'react-router-dom'

const DataContext = createContext({})

const initialAuth = { nombreUsuario: '', contrasenha: '', accessToken: '' }

const ENDPOINTS = {
  TICKETS: '/tickets',
  CLIENTES: '/clientes',
  AGENTES: '/agentes'
}

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState(() =>
    JSON.parse(
      window.sessionStorage.getItem('auth') || JSON.stringify(initialAuth)
    )
  )
  const [agentes, setAgentes] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.sessionStorage.setItem('auth', JSON.stringify(auth))
  }, [auth])

  const getTickets = async () => {
    try {
      const response = await axiosPrivate.get(ENDPOINTS.TICKETS)
      return response.data.reverse()
    } catch (err) {
      console.error(err)
      navigate('/login', { state: { from: location }, replace: true })
    }
  }

  const getClientes = async () => {
    try {
      const response = await axiosPrivate.get(ENDPOINTS.CLIENTES)
      return response.data.reverse()
    } catch (err) {
      console.error(err)
      navigate('/login', { state: { from: location }, replace: true })
    }
  }

  const getAgentes = async () => {
    try {
      const response = await axiosPrivate.get(ENDPOINTS.AGENTES)
      return response.data
    } catch (err) {
      console.error(err)
      navigate('/login', { state: { from: location }, replace: true })
    }
  }

  useEffect(() => {
    getAgentes().then((data) => setAgentes(data))
  }, [])

  const uniqueProperty = (array, property) => {
    return [
      ...new Set(
        array
          .map((object) => object[property])
          .filter((property) => property !== null && property !== undefined)
      )
    ]
  }

  const countObjectsWithPropertyValue = (arr, prop, value) => {
    const filteredArr = arr.filter((obj) => obj[prop] === value)
    return [filteredArr, filteredArr.length]
  }

  const values = useMemo(
    () => ({
      auth,
      setAuth,
      getTickets,
      getClientes,
      uniqueProperty,
      countObjectsWithPropertyValue,
      agentes
    }),
    [auth, agentes]
  )

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContext
