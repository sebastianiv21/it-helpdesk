import { useState, useEffect } from 'react'
import { useData, useToggle } from '@hooks'
import SearchBar from '@components/SearchBar'
import EditarCliente from '@components/EditarCliente'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { TablaClientes } from '@components/TablaClientes'
import { CustomSpinner } from '@components/CustomSpinner'
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

const ListadoClientes = () => {
  const { getClientes } = useData()
  const [clientes, setClientes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isEditOpen, toggleEdit] = useToggle()
  const [isDeleteOpen, toggleDelete] = useToggle()
  const [currentCliente, setCurrentCliente] = useState(null)

  const CLIENTES_URL = '/clientes'

  const handleGetClientes = () => {
    setIsLoading(true)
    getClientes().then((json) => {
      setClientes(json)
      setSearchResults(json)
      setIsLoading(false)
      return json
    })
  }

  useEffect(() => {
    handleGetClientes()
  }, [])

  const onDelete = async (cliente) => {
    try {
      await axios.delete(CLIENTES_URL, {
        data: { id: cliente._id }
      })
      toast.info(`Cliente eliminado exitosamente`, {
        theme: 'colored'
      })
      setSearchResults((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item._id !== cliente._id
        )
        return updatedItems
      })
      // handleGetClientes()
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('No se pudo eliminar el cliente')
      }
    } finally {
      toggleDelete()
    }
  }

  const onUpdate = async (formData) => {
    try {
      await axios.patch(CLIENTES_URL, formData)
      toast.info('Cliente actualizado exitosamente', {
        theme: 'colored'
      })

      const clientIndex = searchResults.findIndex(
        (client) => client._id === formData._id
      )

      setSearchResults((prevItems) => {
        const updatedItems = [...prevItems]
        updatedItems[clientIndex] = formData
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
    } finally {
      toggleEdit()
    }
  }

  const handleDeleteToggle = (cliente) => {
    setCurrentCliente(cliente)
    toggleDelete()
  }

  const handleEditToggle = (cliente) => {
    setCurrentCliente(cliente)
    toggleEdit()
  }

  const acciones = {
    handleDeleteToggle,
    handleEditToggle
  }

  useEffect(() => {
    console.log(currentCliente)
  }, [currentCliente])

  const editarClienteProps = {
    cliente: currentCliente,
    onUpdate,
    toggleEdit
  }

  return (
    <Container className='d-flex flex-column gap-3 mt-3'>
      <SearchBar items={clientes} handleData={setSearchResults} />
      <section>
        {isLoading && <CustomSpinner className='mt-3' />}
        {!isLoading && !clientes?.length && (
          <h4 className='text-center text-primary'>
            No hay clientes registrados...
          </h4>
        )}
        {!isLoading && Boolean(clientes?.length) && (
          <TablaClientes items={searchResults} acciones={acciones} />
        )}
      </section>
      {/* modal de eliminacion */}
      <Modal centered isOpen={isDeleteOpen} toggle={toggleDelete}>
        <ModalHeader toggle={toggleDelete}>Eliminar cliente</ModalHeader>
        <ModalBody>
          <p>
            {`¿Está seguro que desea eliminar al cliente ${currentCliente?.nombre}
            ${currentCliente?.apellidos}?`}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggleDelete}>
            Cancelar
          </Button>
          <Button color='primary' onClick={() => onDelete(currentCliente)}>
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>
      {/* modal de edicion */}
      <Modal centered size='lg' isOpen={isEditOpen} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Editar cliente</ModalHeader>
        <EditarCliente {...editarClienteProps} />
      </Modal>
    </Container>
  )
}

export default ListadoClientes
