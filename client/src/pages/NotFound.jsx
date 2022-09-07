import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center p-4'>
        <h1 className='text-dark fw-bold'>
        <FontAwesomeIcon icon={faFaceSadTear} className="me-2" />
            Error 404
        </h1>
        <h4 className="text-dark">La página que está buscando no existe</h4>
    </div>
  )
}

export default NotFound