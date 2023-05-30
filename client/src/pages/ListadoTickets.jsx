import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import { useData } from '@hooks'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import { TablaTickets } from '@components/TablaTickets'
import { Container } from 'reactstrap'

const ListadoTickets = () => {
  const { getTickets } = useData()
  const [tickets, setTickets] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState('')
  const TICKETS_URL = '/tickets'

  useEffect(() => {
    getTickets().then((json) => {
      setTickets(json)
      setSearchResults(json)
      return json
    })
  }, [getTickets])

  // useEffect(() => {
  //   console.log('searchResults', searchResults)
  // }, [searchResults])

  const onDelete = async (ticketId) => {
    try {
      await axios.delete(TICKETS_URL, {
        data: { id: ticketId }
      })
      toast.info(`Ticket eliminado exitosamente`, {
        theme: 'colored'
      })
      setSearchResults((prevItems) => {
        const updatedItems = prevItems.filter((item) => item._id !== ticketId)
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

  return (
    <Container className='d-flex flex-column gap-3 mt-3'>
      <SearchBar items={tickets} setSearchResults={setSearchResults} />
      <TablaTickets items={searchResults} />
    </Container>
  )
}
export default ListadoTickets
