import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavInfo = ({ user }) => {
  return (
    <header className="navbar bg-secondary">
      <Link
        to="/"
        className="d-flex align-items-center text-primary text-decoration-none ms-4 me-auto"
      >
        <img src="./images/logo.svg" alt="IT Technology logo" width="40" />
        <div className="ms-2 fs-5 lh-1">
          <p className="fw-bold m-0">IT TECHNOLOGY</p>
          <p className="m-0">Help Desk</p>
        </div>
      </Link>
      {user ? (
        <div className="d-flex align-items-center text-primary me-4">
          <FontAwesomeIcon icon={faUser} className="fs-5" />
          <p className="m-0 ms-2">
            {user.name} {user.lastname}
          </p>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default NavInfo;
