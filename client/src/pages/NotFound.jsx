import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'reactstrap'

const NotFound = () => {
  return (
    <Container fluid className='d-flex flex-column align-items-center p-4'>
        <h1 className='text-dark fw-bold'>
        <FontAwesomeIcon icon={faFaceSadTear} className="me-2" />
            Error 404
        </h1>
        <h4 className="text-dark">La página que está buscando no existe</h4>
    </Container>
  )
}

export default NotFound