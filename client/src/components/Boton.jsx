import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Boton = ({ texto, icono, estilos, colorBtn, colorTxt }) => {
  return (
    <button className={`btn btn-${colorBtn} text-${colorTxt} ${estilos}`}>
      {icono && <FontAwesomeIcon icon={icono} />}
      <span className={texto && icono && `ms-2`}>{texto}</span>
    </button>
  )
}

export default Boton
