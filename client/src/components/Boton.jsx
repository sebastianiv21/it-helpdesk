import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Boton = ({ texto, icono, estilos }) => {
  return (
    <button className={`btn btn-primary text-white ${estilos}`}>
      <FontAwesomeIcon icon={icono} />
      <span className='ms-2'>{texto}</span>
    </button>
  )
}

export default Boton
