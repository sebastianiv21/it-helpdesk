import { useState, useEffect } from 'react'
import FilaTicket from '../components/FilaTicket'
import SearchBar from '../components/SearchBar.jsx'
import { useData } from '@hooks'
import axios from '../api/axios'
import { toast } from 'react-toastify'
import Paginacion from '../components/Paginacion'
import { TablaTickets } from '@components/TablaTickets'

const ListadoTickets = () => {
  const { getTickets } = useData()
  const [tickets, setTickets] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [errMsg, setErrMsg] = useState('')
  const TICKETS_URL = '/tickets'
  // Pagination
  const [currPage, setCurrPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const handleClick = (pageNumber) => {
    setCurrPage(pageNumber)
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(searchResults.length / itemsPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currItems = searchResults.slice(indexOfFirstItem, indexOfLastItem)

  useEffect(() => {
    getTickets().then((json) => {
      setTickets(json)
      setSearchResults(json)
      return json
    })
  }, [getTickets])

  useEffect(() => {
    console.log('currItems', currItems)
  }, [currItems])

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

  const listaTickets = (data) => {
    return data.map((item) => (
      <FilaTicket
        key={item._id}
        id={item._id}
        empresa={item?.cliente?.empresa}
        cliente={`${item?.cliente?.nombre} ${item?.cliente?.apellidos}`}
        titulo={item.titulo}
        prioridad={item.prioridad}
        estado={item.estado}
        categoria={item.categoria}
        fechadecreacion={item.createdAt?.slice(0, 10)}
        fechadecierre={item.fechadecierre?.slice(0, 10) ?? 'En trámite'}
        acciones={item.acciones}
        onDelete={onDelete}
        onUpdate={onUpdate}
        errMsg={errMsg}
        setErrMsg={setErrMsg}
      />
    ))
  }
  return (
    <div className='container d-flex flex-column gap-3 mt-3 p-0'>
      <SearchBar items={tickets} setSearchResults={setSearchResults} />
      <TablaTickets items={searchResults} />
      <div>
        <div className='p-2 mx-auto bg-primary rounded-top'>
          <div className='d-flex bg-primary justify-content-center align-items-center'>
            <h5 className='text-white m-0'> {searchResults.length} tickets</h5>
          </div>
        </div>
        <table className='table table-hover table-bordered text-center align-middle'>
          <thead className='text-white bg-primary text-center'>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Cliente</th>
              <th>Titulo</th>
              <th>Prioridad</th>
              <th>Estado</th>
              <th>Categoría</th>
              <th>Fecha de Creación</th>
              <th>Fecha de Cierre</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody className='bg-secondary text-primary'>
            {listaTickets(currItems)}
          </tbody>
        </table>
      </div>
      <div className='row mb-4'>
        <Paginacion
          pages={pages}
          handleClick={handleClick}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  )
}
export default ListadoTickets
