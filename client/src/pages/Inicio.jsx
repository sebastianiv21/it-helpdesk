import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

const Inicio = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column" id="inicio">
      <div className="align-self-center mt-5 pt-5">
      <img src="./images/logo.svg" alt="logo" className="img-fluid mx-auto d-block" width="400" />
      <h1 className="text-center text-primary fst-italic" id="inicioNombre" >IT TECHNOLOGY R&M S.A.S</h1>
      </div>
    </div>
  );
};

export default Inicio;
