import { useState, useEffect } from 'react'
import SearchBar from '@components/SearchBar'
import { useData, useToggle } from '@hooks'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { TablaTickets } from '@components/TablaTickets'
import { CustomSpinner } from '@components/CustomSpinner'
import EditarTicket from '@components/EditarTicket'
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

const ListadoTickets = () => {
  const { getTickets } = useData()
  const [tickets, setTickets] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isEditOpen, toggleEdit] = useToggle()
  const [isDeleteOpen, toggleDelete] = useToggle()
  const [currentTicket, setCurrentTicket] = useState(null)

  const TICKETS_URL = '/tickets'

  useEffect(() => {
    setIsLoading(true)
    getTickets().then((json) => {
      setTickets(json)
      setSearchResults(json)
      setIsLoading(false)
      return json
    })
  }, [getTickets])

  // useEffect(() => {
  //   console.log('searchResults', searchResults)
  // }, [searchResults])

  const onDelete = async (ticket) => {
    try {
      await axios.delete(TICKETS_URL, {
        data: { id: ticket._id }
      })
      toast.info(`Ticket eliminado exitosamente`, {
        theme: 'colored'
      })
      setSearchResults((prevItems) => {
        const updatedItems = prevItems.filter((item) => item._id !== ticket._id)
        return updatedItems
      })
    } catch (err) {
      if (!err?.response) {
        setErrMsg('El servidor no responde')
      } else if (err.response?.status === 400) {
        setErrMsg('Ingrese todos los campos del formulario')
      } else {
        setErrMsg('No se pudo eliminar el ticket')
      }
    } finally {
      toggleDelete()
    }
  }

  const onUpdate = async (formData) => {
    const { id, ...rest } = formData

    try {
      await axios.patch(TICKETS_URL, formData)
      toast.info(`Ticket actualizado exitosamente`, {
        theme: 'colored'
      })
      const ticketIndex = searchResults.findIndex(
        (ticket) => ticket._id === formData.id
      )
      const existingTicket = searchResults[ticketIndex]
      setSearchResults((prevItems) => {
        prevItems[ticketIndex] = {
          ...existingTicket,
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
        setErrMsg('La actualización del ticket falló')
      }
    }
  }

  const handleEditToggle = (ticket) => {
    setCurrentTicket(ticket)
    toggleEdit()
  }

  const handleDeleteToggle = (ticket) => {
    setCurrentTicket(ticket)
    toggleDelete()
  }

  const acciones = {
    handleDeleteToggle,
    handleEditToggle
  }

  const editarTicketProps = {
    ticket: currentTicket,
    onUpdate,
    toggleEdit
  }

  return (
    <Container className='d-flex flex-column gap-3 mt-3'>
      <SearchBar items={tickets} handleData={setSearchResults} />
      <section>
        {isLoading && <CustomSpinner className='mt-3' />}
        {!isLoading && !tickets?.length && (
          <h4 className='text-center text-primary'>
            No hay tickets registrados...
          </h4>
        )}
        {!isLoading && Boolean(tickets?.length) && (
          <TablaTickets items={searchResults} acciones={acciones} />
        )}
      </section>
      {/* modal de eliminacion */}
      <Modal centered isOpen={isDeleteOpen} toggle={toggleDelete}>
        <ModalHeader toggle={toggleDelete}>Eliminar ticket</ModalHeader>
        <ModalBody>
          <p>
            {`¿Está seguro que desea eliminar el ticket ${currentTicket?.ticketRef}?`}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggleDelete}>
            Cancelar
          </Button>
          <Button color='primary' onClick={() => onDelete(currentTicket)}>
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>
      {/* modal de edicion */}
      <Modal centered fullscreen isOpen={isEditOpen} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>
          Editar ticket {currentTicket?.ticketRef}
        </ModalHeader>
        <EditarTicket {...editarTicketProps} />
      </Modal>
    </Container>
  )
}
export default ListadoTickets
