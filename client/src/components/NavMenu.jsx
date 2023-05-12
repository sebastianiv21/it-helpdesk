import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRightFromBracket,
  faRightToBracket
} from '@fortawesome/free-solid-svg-icons'
import NavMenuData from '../shared/NavMenuData'
import { useData } from '@hooks'
import useLogout from '../hooks/useLogout'

// Components
import DropdownCustom from './DropdownCustom'
import { toast } from 'react-toastify'

const NavMenu = () => {
  const { auth } = useData()
  const navigate = useNavigate()
  const logout = useLogout()

  const signOut = async () => {
    await logout()
    toast.info('Sesión finalizada', { theme: 'colored' })
    navigate('/login')
  }

  return (
    <>
      <nav className='navbar bg-primary p-1'>
        <div className='container-fluid'>
          <ul className='navbar-nav d-flex flex-row align-items-center gap-1 me-auto'>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-item text-white text-decoration-none px-2'
              >
                <span>Inicio</span>
              </Link>
            </li>
            {NavMenuData.map((item) => (
              <li key={item.title} className='text-white'>
                <DropdownCustom title={item.title} submenu={item.submenu} />
              </li>
            ))}
          </ul>
          {auth.nombreUsuario ? (
            <button
              onClick={signOut}
              className='bg-primary border-0 text-white text-decoration-none'
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className='ms-2'>Cerrar sesión</span>
            </button>
          ) : (
            <Link
              to='/login'
              className='nav-item text-white text-decoration-none'
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              <span className='ms-2'>Iniciar sesión</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}

export default NavMenu
