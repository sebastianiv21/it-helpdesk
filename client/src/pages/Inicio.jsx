import { useState, useEffect } from 'react'
import { useData, useToggle } from '@hooks'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalHeader
} from 'reactstrap'
import { toast } from 'react-toastify'
import GraficoBarras from '../components/GraficoBarras'
import EditarTicket from '@components/EditarTicket'
import { TablaInicio } from '../components/TablaInicio'
import axios from '../api/axios'

const Inicio = () => {
  const { getTickets, countObjectsWithPropertyValue } = useData()
  const [pendientes, setPendientes] = useState(0)
  const [prioritarios, setPrioritarios] = useState([])
  const [tickets, setTickets] = useState([])
  const [isEditOpen, toggleEdit] = useToggle()
  const [currentTicket, setCurrentTicket] = useState(null)

  const TICKETS_URL = '/tickets'
  const hayPrioritarios = Boolean(prioritarios.length)

  const getTicketsInfo = async () => {
    try {
    const json = await getTickets()
    const [pendientesArr, pendientes] = countObjectsWithPropertyValue(
      json,
      'estado',
      'Abierto'
    )
    const [prioritariosArr] = countObjectsWithPropertyValue(
      pendientesArr,
      'prioridad',
      'Alta'
    )
    setTickets(json)
    setPendientes(pendientes)
    setPrioritarios(prioritariosArr)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTicketsInfo()
  }, [])

  const onUpdate = async (formData) => {
    if (formData?.estado === 'Cerrado' && !formData?.fechadecierre) {
      toast.error('Ingrese la fecha de cierre', {
        theme: 'colored'
      })
      return
    }

    try {
      await axios.patch(TICKETS_URL, formData)
      toast.info('Ticket actualizado exitosamente', {
        theme: 'colored'
      })
      const ticketIndex = searchResults.findIndex(
        (ticket) => ticket._id === formData._id
      )

      setSearchResults((prevItems) => {
        const updatedItems = [...prevItems]
        updatedItems[ticketIndex] = formData
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
    } finally {
      toggleEdit()
      getTicketsInfo()
    }
  }

  const handleEditToggle = (ticket) => {
    setCurrentTicket(ticket)
    toggleEdit()
  }

  const editarTicketProps = {
    ticket: currentTicket,
    onUpdate,
    toggleEdit
  }

  return (
    <Container fluid className='vh-100 d-flex flex-column' id='inicio'>
      <Container className='mt-5'>
        <Row className='justify-content-center mb-4'>
          <Col sm={5}>
            <Card className='text-center h-100'>
              <CardHeader className='bg-primary text-white'>
                TICKETS PENDIENTES
              </CardHeader>
              <CardBody className='text-primary text-center d-flex align-items-center justify-content-center'>
                <strong className='indicadorNumero'>{pendientes}</strong>
              </CardBody>
            </Card>
          </Col>
          <Col sm={5}>
            <Card className='text-center h-100'>
              <CardHeader className='bg-primary text-white'>
                TICKETS SEMANALES
              </CardHeader>
              <CardBody>
                <GraficoBarras tickets={tickets} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='justify-content-center mb-5'>
          <Col sm={10}>
            <Card className='text-center'>
              <CardHeader className='bg-primary text-white'>
                TICKETS PRIORITARIOS
              </CardHeader>
              <CardBody
                className={
                  hayPrioritarios
                    ? 'tablaInicio'
                    : 'indicadorNumero text-primary'
                }
              >
                {hayPrioritarios && (
                  <TablaInicio
                    items={prioritarios}
                    handleEditToggle={handleEditToggle}
                  />
                )}
                {!hayPrioritarios && <strong>{prioritarios.length}</strong>}
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* modal de edicion */}
        <Modal centered size='xl' isOpen={isEditOpen} toggle={toggleEdit}>
          <ModalHeader toggle={toggleEdit}>
            Editar ticket {currentTicket?.ticketRef}
          </ModalHeader>
          <EditarTicket {...editarTicketProps} />
        </Modal>
      </Container>
    </Container>
  )
}
export default Inicio
