import { useState, useEffect } from 'react'
import { useData } from '@hooks'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import GraficoBarras from '../components/GraficoBarras'
import { TablaInicio } from '../components/TablaInicio'

const Inicio = () => {
  const { getTickets, countObjectsWithPropertyValue } = useData()
  const [pendientes, setPendientes] = useState(0)
  const [prioritarios, setPrioritarios] = useState([])
  const [tickets, setTickets] = useState([])

  const hayPrioritarios = Boolean(prioritarios.length)

  useEffect(() => {
    getTickets().then((json) => {
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
      return [pendientes, prioritariosArr, json]
    })
  }, [getTickets, countObjectsWithPropertyValue])

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
                <GraficoBarras />
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
                {hayPrioritarios && <TablaInicio items={prioritarios} />}
                {!hayPrioritarios && <strong>{prioritarios.length}</strong>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Inicio
