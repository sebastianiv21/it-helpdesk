import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import NavMenuData from "../shared/NavMenuData";
import useData from "../hooks/useData";

// Components
import DropdownCustom from "./DropdownCustom";

const NavMenu = () => {
  const { auth } = useData();

  return (
    <><nav className="navbar bg-primary p-1">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row align-items-center gap-1 me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-item text-white text-decoration-none px-2">
              <span>Inicio</span>
            </Link>
          </li>
          {NavMenuData.map((item, index) => (
            <li key={index} className="text-white">
              <DropdownCustom title={item.title} submenu={item.submenu} />
            </li>
          ))}
        </ul>
        {auth.nombreUsuario ? (
          <Link to="/" className="nav-item text-white text-decoration-none">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="ms-2">Cerrar sesión</span>
          </Link>
        ) : (
          <Link to="/login" className="nav-item text-white text-decoration-none">
            <FontAwesomeIcon icon={faRightToBracket} />
            <span className="ms-2">Iniciar sesión</span>
          </Link>
        )}
      </div>
    </nav>
    <div className=" container-fluid dropdown p-0">
        <button className="btn btn-secondary btn-md dropdown-toggle text-primary p-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pestaña Informativa
        </button>
        
    </div>
   </>
  );
};

export default NavMenu;
