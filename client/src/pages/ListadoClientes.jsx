import { useState, useEffect } from 'react'
import { useData } from '@hooks'
import SearchBarClientes from '@components/SearchBarClientes'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { TablaClientes } from '@components/TablaClientes'
import { Container } from 'reactstrap'

const ListadoClientes = () => {
  const { getClientes } = useData()
  const [clientes, setClientes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState('')
  const CLIENTES_URL = '/clientes'

  useEffect(() => {
    getClientes().then((json) => {
      setClientes(json)
      setSearchResults(json)
      return json
    })
  }, [getClientes])

  const onDelete = async (clienteId) => {
    try {
      await axios.delete(CLIENTES_URL, {
        data: { id: clienteId }
      })
      toast.info(`Cliente eliminado exitosamente`, {
        theme: 'colored'
      })
      setSearchResults((prevItems) => {
        const updatedItems = prevItems.filter((item) => item._id !== clienteId)
        return updatedItems
      })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('No se pudo eliminar el cliente')
      }
    }
  }

  const onUpdate = async (formData) => {
    const { id, ...rest } = formData

    try {
      await axios.patch(CLIENTES_URL, formData)
      toast.info(`Cliente actualizado exitosamente`, {
        theme: 'colored'
      })
      const clientIndex = searchResults.findIndex(
        (client) => client._id === formData.id
      )
      const existingClient = searchResults[clientIndex]
      setSearchResults((prevItems) => {
        prevItems[clientIndex] = {
          ...existingClient,
          ...rest
        }
        const updatedItems = [...prevItems]
        return updatedItems
      })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('La actualización del cliente falló')
      }
    }
  }

  return (
    <Container className='d-flex flex-column gap-3 mt-3'>
      <SearchBarClientes items={clientes} setSearchResults={setSearchResults} />
      <TablaClientes items={searchResults} />
    </Container>
  )
}

export default ListadoClientes
