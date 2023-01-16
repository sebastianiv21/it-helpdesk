import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Boton = ({ texto, icono, estilos, colorBtn, colorTxt, onClick }) => {
  return (
    <button className={`btn btn-${colorBtn} text-${colorTxt} ${estilos}`} onClick={onClick}>
      {icono && <FontAwesomeIcon icon={icono} />}
      <span className={texto && icono && `ms-2`}>{texto}</span>
    </button>
  )
}

export default Boton
