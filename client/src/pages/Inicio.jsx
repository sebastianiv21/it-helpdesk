import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

const Inicio = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column p-0 " id="inicio">
      <div className="align-self-center mt-5 pt-5">
      <div className="container-fluid ">
          <div className="row ">
            <div className="col-sm me-5 ">
              <div className="container d-flex bg-primary text-white">
              <h5>Tickets Generados</h5>
              </div>
              <div className="card">
                <div className="card-body">
                     <strong><span id="daily_revenue">0</span></strong>
                </div>
              </div>
            </div>
            <div className="col-sm ms-5 me-5 ">
            <div className="container d-flex bg-primary text-white ">
              <h5>Tickets Resueltos</h5>
              </div>
            <div className="card">
                <div className="card-body "> 
                    <strong><span id="daily_revenue">0</span></strong>
                </div>
            </div>
            </div>
             <div className="col-sm ms-5">
             <div className="container d-flex bg-primary text-white ">
              <h5>Clientes</h5>
              </div>
              <div className="card">
                <div className="card-body ">
                     <strong><span id="connected_users">0</span></strong>
                </div>
            </div>
            </div>
          </div>
          <img src="./images/logo.svg" alt="logo" className="img-fluid mx-auto d-block" width="400" />
        <h1 className="text-center text-primary fst-italic" id="inicioNombre">IT TECHNOLOGY R&M S.A.S</h1>
        </div>
      </div>
    </div>
    
  );
};

export default Inicio;
